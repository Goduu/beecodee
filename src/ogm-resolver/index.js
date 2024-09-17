import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import { Neo4jGraphQL } from "@neo4j/graphql"
import pkg from "@neo4j/graphql-ogm"
const { OGM, generate } = pkg
import neo4j from "neo4j-driver"
import { comparePassword, createJWT } from "./utils.js"
import { typeDefs } from "./schema.js"

const driver = neo4j.driver("neo4j://localhost:7687", neo4j.auth.basic("neo4j", "TxkDIMw0VulE7O"))

const typeDefsEx = `#graphql
    type User {
        id: ID @id
        username: String!
        password: String! @private
    }

    type Mutation {
        signUp(username: String!, password: String!): String! ### JWT
        signIn(username: String!, password: String!): String! ### JWT
    }
`

export const ogm = new OGM({ typeDefs, driver })
const User = ogm.model("User")

const resolvers = {
  Mutation: {
    signUp: async (_source, { username, password }) => {
      const [existing] = await User.find({
        where: {
          username,
        },
      })

      if (existing) {
        throw new Error(`User with username ${username} already exists!`)
      }

      const { users } = await User.create({
        input: [
          {
            username,
            password,
          },
        ],
      })

      return createJWT({ sub: users[0].id })
    },

    signIn: async (_source, { username, password }) => {
      const [user] = await User.find({
        where: {
          username,
        },
      })

      if (!user) {
        throw new Error(`User with username ${username} not found!`)
      }

      const correctPassword = await comparePassword(password, user.password)

      if (!correctPassword) {
        throw new Error(`Incorrect password for user with username ${username}!`)
      }

      return createJWT({ sub: user.id })
    },
  },
}

const neoSchema = new Neo4jGraphQL({
  typeDefs,
  driver,
  resolvers,
  features: {
    authorization: {
      key: "secret",
    },
  },
})

async function main() {
  if (!process.env.GENERATE) {
    try {
      const outFile = "ogm-types.ts"

      await generate({
        ogm,
        outFile,
      })

      console.log("Types Generated")

      process.exit(1)
    } catch (error) {
      console.log("error", error)
    }
  }

  await ogm.init()

  const server = new ApolloServer({
    schema: await neoSchema.getSchema(),
  })

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async ({ req }) => ({
      token: req.headers.authorization,
    }),
  })

  console.log(`🚀 Server ready at ${url}`)
}

main()
