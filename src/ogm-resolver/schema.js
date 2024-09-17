export const typeDefs = `#graphql
type User {
  id: ID @id
  username: String!
  password: String! @private
  learningStyle: LearningStyle
  completedTasks: [Task!]!
    @relationship(type: "COMPLETED", properties: "Completed", direction: OUT)
  badges: [Badge!]! @relationship(type: "HAS", direction: OUT)
  unlockedTopics: [Topic!]! @relationship(type: "UNLOCKED", direction: OUT)
}

union Task = Lesson | Content

type Completed @relationshipProperties {
  completedAt: DateTime!
  score: Float
  timeSpent: Int # in seconds
}


type Topic {
  id: ID! @id
  name: TranslatedString!
  description: TranslatedString
  difficulty: Difficulty!
  languages: [ProgrammingLanguage!]!
    @relationship(type: "HAS", direction: OUT)
  badges: [Badge!]!
    @relationship(type: "REQUIRES", direction: IN)
  prerequisiteTo: [Topic!]! @relationship(type: "PREREQUISITE_TO", direction: IN)
  prerequisites: [Topic!]! @relationship(type: "PREREQUISITE_FROM", direction: OUT)
  tags: [Tag!]! @relationship(type: "HAS", direction: OUT)
  lessons: [Lesson!]!
    @relationship(type: "HAS", direction: OUT)
  content: [Content!]!
    @relationship(type: "HAS", direction: OUT)
}

type Content {
  id: ID! @id
  name: TranslatedString!
  description: TranslatedString!
}

type Lesson {
  id: ID! @id
  name: TranslatedString!
  description: TranslatedString
  activities: [Activity!]! @relationship(type: "HAS", direction: OUT)
}

union Activity = SingleChoiceActivity | CodeOutputActivity | MultipleChoiceActivity | PairMatchingActivity | FillInTheBlankActivity

type SingleChoiceActivity {
  id: ID! @id
  description: TranslatedString!
  options: [Option!]!
  answer: String!
}

type CodeOutputActivity {
  id: ID! @id
  description: TranslatedString!
  codeSnippet: String!
  options: [Option!]!
  answer: String!
}

type MultipleChoiceActivity {
  id: ID! @id
  description: TranslatedString!
  options: [Option!]!
  answer: [String!]!
}

type PairMatchingActivity {
  id: ID! @id
  description: TranslatedString!
  options: [Option!]!
  answer: [StringPair!]!
}

type StringPair {
  first: String!
  second: String!
}

type FillInTheBlankActivity {
  id: ID! @id
  description: TranslatedString!
  segments: [Segment!]!
  options: [Option!]!
  answer: [String!]!
}

union Segment = Option | GapSegment

type GapSegment {
  id: ID! @id
  size: Int!
  content: OptionContent
}

type Option {
  id: ID! @id
  content: OptionContent
}

union OptionContent = TextOption | CodeOption

type TextOption {
  text: TranslatedString!
}

type CodeOption {
  code: String!
}

enum ActivityType {
  SINGLE_CHOICE
  MULTIPLE_CHOICE
  FILL_IN_THE_BLANK
  CODE_OUTPUT
}


type Tag {
  id: ID! @id
  name: TranslatedString! @relationship(type: "HAS_NAME", direction: IN)
  category: TagCategory!
  activities: [Activity!]! @relationship(type: "HAS", direction: IN)
  topics: [Topic!]! @relationship(type: "HAS", direction: IN)
}

enum TagCategory {
  CONCEPT
  SKILL_LEVEL
  PARADIGM
  DOMAIN
  LANGUAGE_FEATURE
  BEST_PRACTICE
}

type ProgrammingLanguage {
  id: ID! @id
  name: String!
  topics: [Topic!]! @relationship(type: "HAS", direction: IN)
}

type TranslatedString {
  en: String!
  pt: String
  fr: String
  de: String
  es: String
  tags: [Tag!]! @relationship(type: "HAS_NAME", direction: OUT)
}



enum Difficulty {
  BEGINNER
  INTERMEDIATE
  ADVANCED
}

type Badge {
  id: ID! @id
  name: TranslatedString!
  users: [User!]! @relationship(type: "HAS", direction: IN)
  requiresTopics: [Topic!]!
    @relationship(type: "REQUIRES", direction: OUT)
}

enum LearningStyle {
  THEORY_FIRST
  PRACTICE_FIRST
}

type Mutation {
    signUp(username: String!, password: String!): String! ### JWT
    signIn(username: String!, password: String!): String! ### JWT
}
`
