import { gql } from "@apollo/client"

export const GET_TAGS = gql`
  query GetTags {
    tags {
      id
      name {
        en
        pt
        fr
        de
        es
      }
      category
    }
  }
`

export const CREATE_TAG = gql`
  mutation CreateTag($input: [TagCreateInput!]!) {
    createTags(input: $input) {
      tags {
        id
        name {
          en
          pt
          fr
          de
          es
        }
        category
      }
    }
  }
`

export const UPDATE_TAG = gql`
  mutation UpdateTag($where: TagWhere, $update: TagUpdateInput) {
    updateTags(where: $where, update: $update) {
      tags {
        id
        name {
          en
        }
        category
      }
    }
  }
`

export const DELETE_TAG = gql`
  mutation DeleteTag($where: TagWhere) {
    deleteTags(where: $where) {
      nodesDeleted
    }
  }
`
