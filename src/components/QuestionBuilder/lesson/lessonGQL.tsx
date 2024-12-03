import { gql } from "@apollo/client"

export const CREATE_LESSON = gql`
  mutation CreateContent($input: [ContentCreateInput!]!) {
    createContents(input: $input) {
      contents {
        id
      }
    }
  }
`

export const GET_LESSONS = gql`
  query GetContent {
    lessons {
      id
      name {
        en
        pt
        fr
        de
        es
      }
      description {
        en
        pt
        fr
        de
        es
      }
    }
  }
`
