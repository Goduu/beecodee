import { gql } from "@apollo/client";

export const CREATE_CONTENT = gql`
  mutation CreateContent($input: [ContentCreateInput!]!) {
    createContents(input: $input) {
        contents {
            id
        }
    }
  }
`

export const GET_CONTENT = gql`
  query GetContent {
    contents {
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
      content {
        en
        pt
        fr
        de
        es
      }
    }
  }
`