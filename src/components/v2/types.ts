export enum Difficulty {
  BEGINNER = "BEGINNER",
  INTERMEDIATE = "INTERMEDIATE",
  ADVANCED = "ADVANCED",
}

export enum ActivityType {
  CODING_CHALLENGE = "CODING_CHALLENGE",
  MULTIPLE_CHOICE = "MULTIPLE_CHOICE",
  FILL_IN_THE_BLANK = "FILL_IN_THE_BLANK",
  DRAG_AND_DROP = "DRAG_AND_DROP",
}

export enum TagCategory {
  CONCEPT = "CONCEPT",
  SKILL_LEVEL = "SKILL_LEVEL",
  PARADIGM = "PARADIGM",
  DOMAIN = "DOMAIN",
  LANGUAGE_FEATURE = "LANGUAGE_FEATURE",
  BEST_PRACTICE = "BEST_PRACTICE",
}

export enum ProgressState {
  UNEXPLORED = "UNEXPLORED",
  IN_PROGRESS = "IN_PROGRESS",
  MASTERED = "MASTERED",
}

export enum LearningStyle {
  THEORY_FIRST = "THEORY_FIRST",
  PRACTICE_FIRST = "PRACTICE_FIRST",
}

export enum SkillLevel {
  NOVICE = "NOVICE",
  BEGINNER = "BEGINNER",
  INTERMEDIATE = "INTERMEDIATE",
  ADVANCED = "ADVANCED",
  EXPERT = "EXPERT",
}

export interface Tag {
  id: string
  name: string
  category: TagCategory
  activitiesHasTag: Activity[]
  topicHasTag: Topic[]
}

export interface Activity {
  id: string
  title: string
  type: ActivityType
  description?: string
  difficulty: Difficulty
  content: string
  tags: Tag[]
  name: string
  topicsHaveActivity: Topic[]
  completions: ActivityCompletion[]
}

export interface Badge {
  id: string
  name: string
  requiresTopics: Topic[]
  type: string
  badgeHasProgress: BadgeProgress[]
  usersHasBadge: User[]
}

export interface ProgrammingLanguage {
  id: string
  name: string
  relatedToTopics: Topic[]
}

export interface Topic {
  id: string
  name: string
  description?: string
  difficulty: Difficulty
  languages: ProgrammingLanguage[]
  badgesRequiresTopic?: Badge[]
  prerequisites: Topic[]
  relatedTopics: Topic[]
  activities: Activity[]
  userHasTopicProgress?: UserProgress[]
  tags: Tag[]
}

export interface User {
  id: string
  username: string
  email: string
  passwordHash: string
  learningStyle?: LearningStyle
  skillLevel?: SkillLevel
  progress: UserProgress[]
  badges: Badge[]
  completedActivities: ActivityCompletion[]
  badgeProgress: BadgeProgress[]
}

export interface UserProgress {
  id: string
  userHasProgress: User
  topic?: Topic
  state: ProgressState
  lastUpdated: Date
}

export interface ActivityCompletion {
  id: string
  userHasCompletedActivity: User
  activity: Activity
  completedAt: Date
  score?: number
  timeSpent?: number // in seconds
}

export interface BadgeProgress {
  // Assuming BadgeProgress has properties
  id: string
  userHasBadgeProgress: User
  badge: Badge
  progressPercentage: number
}
