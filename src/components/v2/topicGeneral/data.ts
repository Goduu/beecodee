import { Difficulty, Topic } from "../types"

export const topicGeneralData: Topic = {
  id: "1",
  name: "Recursivity",
  description: "Recursivity is a topic",
  difficulty: Difficulty.BEGINNER,
  languages: [],
  badgesRequiresTopic: [],
  prerequisites: [],
  relatedTopics: [],
  activities: [],
  userHasTopicProgress: [],
  tags: [],
}

const topic1: Topic = {
  id: "2",
  name: "Functions",
  description: "Functions is a topic",
  difficulty: Difficulty.BEGINNER,
  languages: [],
  badgesRequiresTopic: [],
  prerequisites: [],
  relatedTopics: [1],
  activities: [],
  userHasTopicProgress: [],
  tags: [],
}
