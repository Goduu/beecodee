import type { SelectionSetNode, DocumentNode } from "graphql"
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: { input: string; output: string }
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: { input: string; output: string }
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: { input: boolean; output: boolean }
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: { input: number; output: number }
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: { input: number; output: number }
  /** A date and time, represented as an ISO-8601 string */
  DateTime: { input: any; output: any }
}

export type Query = {
  __typename?: "Query"
  tasks: Array<Task>
  activities: Array<Activity>
  segments: Array<Segment>
  optionContents: Array<OptionContent>
  users: Array<User>
  usersConnection: UsersConnection
  usersAggregate: UserAggregateSelection
  topics: Array<Topic>
  topicsConnection: TopicsConnection
  topicsAggregate: TopicAggregateSelection
  contents: Array<Content>
  contentsConnection: ContentsConnection
  contentsAggregate: ContentAggregateSelection
  lessons: Array<Lesson>
  lessonsConnection: LessonsConnection
  lessonsAggregate: LessonAggregateSelection
  singleChoiceActivities: Array<SingleChoiceActivity>
  singleChoiceActivitiesConnection: SingleChoiceActivitiesConnection
  singleChoiceActivitiesAggregate: SingleChoiceActivityAggregateSelection
  codeOutputActivities: Array<CodeOutputActivity>
  codeOutputActivitiesConnection: CodeOutputActivitiesConnection
  codeOutputActivitiesAggregate: CodeOutputActivityAggregateSelection
  multipleChoiceActivities: Array<MultipleChoiceActivity>
  multipleChoiceActivitiesConnection: MultipleChoiceActivitiesConnection
  multipleChoiceActivitiesAggregate: MultipleChoiceActivityAggregateSelection
  pairMatchingActivities: Array<PairMatchingActivity>
  pairMatchingActivitiesConnection: PairMatchingActivitiesConnection
  pairMatchingActivitiesAggregate: PairMatchingActivityAggregateSelection
  stringPairs: Array<StringPair>
  stringPairsConnection: StringPairsConnection
  stringPairsAggregate: StringPairAggregateSelection
  fillInTheBlankActivities: Array<FillInTheBlankActivity>
  fillInTheBlankActivitiesConnection: FillInTheBlankActivitiesConnection
  fillInTheBlankActivitiesAggregate: FillInTheBlankActivityAggregateSelection
  gapSegments: Array<GapSegment>
  gapSegmentsConnection: GapSegmentsConnection
  gapSegmentsAggregate: GapSegmentAggregateSelection
  options: Array<Option>
  optionsConnection: OptionsConnection
  optionsAggregate: OptionAggregateSelection
  textOptions: Array<TextOption>
  textOptionsConnection: TextOptionsConnection
  textOptionsAggregate: TextOptionAggregateSelection
  codeOptions: Array<CodeOption>
  codeOptionsConnection: CodeOptionsConnection
  codeOptionsAggregate: CodeOptionAggregateSelection
  tags: Array<Tag>
  tagsConnection: TagsConnection
  tagsAggregate: TagAggregateSelection
  programmingLanguages: Array<ProgrammingLanguage>
  programmingLanguagesConnection: ProgrammingLanguagesConnection
  programmingLanguagesAggregate: ProgrammingLanguageAggregateSelection
  translatedStrings: Array<TranslatedString>
  translatedStringsConnection: TranslatedStringsConnection
  translatedStringsAggregate: TranslatedStringAggregateSelection
  badges: Array<Badge>
  badgesConnection: BadgesConnection
  badgesAggregate: BadgeAggregateSelection
}

export type QueryTasksArgs = {
  where?: InputMaybe<TaskWhere>
  options?: InputMaybe<QueryOptions>
}

export type QueryActivitiesArgs = {
  where?: InputMaybe<ActivityWhere>
  options?: InputMaybe<QueryOptions>
}

export type QuerySegmentsArgs = {
  where?: InputMaybe<SegmentWhere>
  options?: InputMaybe<QueryOptions>
}

export type QueryOptionContentsArgs = {
  where?: InputMaybe<OptionContentWhere>
  options?: InputMaybe<QueryOptions>
}

export type QueryUsersArgs = {
  where?: InputMaybe<UserWhere>
  options?: InputMaybe<UserOptions>
}

export type QueryUsersConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>
  after?: InputMaybe<Scalars["String"]["input"]>
  where?: InputMaybe<UserWhere>
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>
}

export type QueryUsersAggregateArgs = {
  where?: InputMaybe<UserWhere>
}

export type QueryTopicsArgs = {
  where?: InputMaybe<TopicWhere>
  options?: InputMaybe<TopicOptions>
}

export type QueryTopicsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>
  after?: InputMaybe<Scalars["String"]["input"]>
  where?: InputMaybe<TopicWhere>
  sort?: InputMaybe<Array<InputMaybe<TopicSort>>>
}

export type QueryTopicsAggregateArgs = {
  where?: InputMaybe<TopicWhere>
}

export type QueryContentsArgs = {
  where?: InputMaybe<ContentWhere>
  options?: InputMaybe<ContentOptions>
}

export type QueryContentsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>
  after?: InputMaybe<Scalars["String"]["input"]>
  where?: InputMaybe<ContentWhere>
  sort?: InputMaybe<Array<InputMaybe<ContentSort>>>
}

export type QueryContentsAggregateArgs = {
  where?: InputMaybe<ContentWhere>
}

export type QueryLessonsArgs = {
  where?: InputMaybe<LessonWhere>
  options?: InputMaybe<LessonOptions>
}

export type QueryLessonsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>
  after?: InputMaybe<Scalars["String"]["input"]>
  where?: InputMaybe<LessonWhere>
  sort?: InputMaybe<Array<InputMaybe<LessonSort>>>
}

export type QueryLessonsAggregateArgs = {
  where?: InputMaybe<LessonWhere>
}

export type QuerySingleChoiceActivitiesArgs = {
  where?: InputMaybe<SingleChoiceActivityWhere>
  options?: InputMaybe<SingleChoiceActivityOptions>
}

export type QuerySingleChoiceActivitiesConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>
  after?: InputMaybe<Scalars["String"]["input"]>
  where?: InputMaybe<SingleChoiceActivityWhere>
  sort?: InputMaybe<Array<InputMaybe<SingleChoiceActivitySort>>>
}

export type QuerySingleChoiceActivitiesAggregateArgs = {
  where?: InputMaybe<SingleChoiceActivityWhere>
}

export type QueryCodeOutputActivitiesArgs = {
  where?: InputMaybe<CodeOutputActivityWhere>
  options?: InputMaybe<CodeOutputActivityOptions>
}

export type QueryCodeOutputActivitiesConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>
  after?: InputMaybe<Scalars["String"]["input"]>
  where?: InputMaybe<CodeOutputActivityWhere>
  sort?: InputMaybe<Array<InputMaybe<CodeOutputActivitySort>>>
}

export type QueryCodeOutputActivitiesAggregateArgs = {
  where?: InputMaybe<CodeOutputActivityWhere>
}

export type QueryMultipleChoiceActivitiesArgs = {
  where?: InputMaybe<MultipleChoiceActivityWhere>
  options?: InputMaybe<MultipleChoiceActivityOptions>
}

export type QueryMultipleChoiceActivitiesConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>
  after?: InputMaybe<Scalars["String"]["input"]>
  where?: InputMaybe<MultipleChoiceActivityWhere>
  sort?: InputMaybe<Array<InputMaybe<MultipleChoiceActivitySort>>>
}

export type QueryMultipleChoiceActivitiesAggregateArgs = {
  where?: InputMaybe<MultipleChoiceActivityWhere>
}

export type QueryPairMatchingActivitiesArgs = {
  where?: InputMaybe<PairMatchingActivityWhere>
  options?: InputMaybe<PairMatchingActivityOptions>
}

export type QueryPairMatchingActivitiesConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>
  after?: InputMaybe<Scalars["String"]["input"]>
  where?: InputMaybe<PairMatchingActivityWhere>
  sort?: InputMaybe<Array<InputMaybe<PairMatchingActivitySort>>>
}

export type QueryPairMatchingActivitiesAggregateArgs = {
  where?: InputMaybe<PairMatchingActivityWhere>
}

export type QueryStringPairsArgs = {
  where?: InputMaybe<StringPairWhere>
  options?: InputMaybe<StringPairOptions>
}

export type QueryStringPairsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>
  after?: InputMaybe<Scalars["String"]["input"]>
  where?: InputMaybe<StringPairWhere>
  sort?: InputMaybe<Array<InputMaybe<StringPairSort>>>
}

export type QueryStringPairsAggregateArgs = {
  where?: InputMaybe<StringPairWhere>
}

export type QueryFillInTheBlankActivitiesArgs = {
  where?: InputMaybe<FillInTheBlankActivityWhere>
  options?: InputMaybe<FillInTheBlankActivityOptions>
}

export type QueryFillInTheBlankActivitiesConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>
  after?: InputMaybe<Scalars["String"]["input"]>
  where?: InputMaybe<FillInTheBlankActivityWhere>
  sort?: InputMaybe<Array<InputMaybe<FillInTheBlankActivitySort>>>
}

export type QueryFillInTheBlankActivitiesAggregateArgs = {
  where?: InputMaybe<FillInTheBlankActivityWhere>
}

export type QueryGapSegmentsArgs = {
  where?: InputMaybe<GapSegmentWhere>
  options?: InputMaybe<GapSegmentOptions>
}

export type QueryGapSegmentsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>
  after?: InputMaybe<Scalars["String"]["input"]>
  where?: InputMaybe<GapSegmentWhere>
  sort?: InputMaybe<Array<InputMaybe<GapSegmentSort>>>
}

export type QueryGapSegmentsAggregateArgs = {
  where?: InputMaybe<GapSegmentWhere>
}

export type QueryOptionsArgs = {
  where?: InputMaybe<OptionWhere>
  options?: InputMaybe<OptionOptions>
}

export type QueryOptionsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>
  after?: InputMaybe<Scalars["String"]["input"]>
  where?: InputMaybe<OptionWhere>
  sort?: InputMaybe<Array<InputMaybe<OptionSort>>>
}

export type QueryOptionsAggregateArgs = {
  where?: InputMaybe<OptionWhere>
}

export type QueryTextOptionsArgs = {
  where?: InputMaybe<TextOptionWhere>
  options?: InputMaybe<TextOptionOptions>
}

export type QueryTextOptionsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>
  after?: InputMaybe<Scalars["String"]["input"]>
  where?: InputMaybe<TextOptionWhere>
}

export type QueryTextOptionsAggregateArgs = {
  where?: InputMaybe<TextOptionWhere>
}

export type QueryCodeOptionsArgs = {
  where?: InputMaybe<CodeOptionWhere>
  options?: InputMaybe<CodeOptionOptions>
}

export type QueryCodeOptionsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>
  after?: InputMaybe<Scalars["String"]["input"]>
  where?: InputMaybe<CodeOptionWhere>
  sort?: InputMaybe<Array<InputMaybe<CodeOptionSort>>>
}

export type QueryCodeOptionsAggregateArgs = {
  where?: InputMaybe<CodeOptionWhere>
}

export type QueryTagsArgs = {
  where?: InputMaybe<TagWhere>
  options?: InputMaybe<TagOptions>
}

export type QueryTagsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>
  after?: InputMaybe<Scalars["String"]["input"]>
  where?: InputMaybe<TagWhere>
  sort?: InputMaybe<Array<InputMaybe<TagSort>>>
}

export type QueryTagsAggregateArgs = {
  where?: InputMaybe<TagWhere>
}

export type QueryProgrammingLanguagesArgs = {
  where?: InputMaybe<ProgrammingLanguageWhere>
  options?: InputMaybe<ProgrammingLanguageOptions>
}

export type QueryProgrammingLanguagesConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>
  after?: InputMaybe<Scalars["String"]["input"]>
  where?: InputMaybe<ProgrammingLanguageWhere>
  sort?: InputMaybe<Array<InputMaybe<ProgrammingLanguageSort>>>
}

export type QueryProgrammingLanguagesAggregateArgs = {
  where?: InputMaybe<ProgrammingLanguageWhere>
}

export type QueryTranslatedStringsArgs = {
  where?: InputMaybe<TranslatedStringWhere>
  options?: InputMaybe<TranslatedStringOptions>
}

export type QueryTranslatedStringsConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>
  after?: InputMaybe<Scalars["String"]["input"]>
  where?: InputMaybe<TranslatedStringWhere>
  sort?: InputMaybe<Array<InputMaybe<TranslatedStringSort>>>
}

export type QueryTranslatedStringsAggregateArgs = {
  where?: InputMaybe<TranslatedStringWhere>
}

export type QueryBadgesArgs = {
  where?: InputMaybe<BadgeWhere>
  options?: InputMaybe<BadgeOptions>
}

export type QueryBadgesConnectionArgs = {
  first?: InputMaybe<Scalars["Int"]["input"]>
  after?: InputMaybe<Scalars["String"]["input"]>
  where?: InputMaybe<BadgeWhere>
  sort?: InputMaybe<Array<InputMaybe<BadgeSort>>>
}

export type QueryBadgesAggregateArgs = {
  where?: InputMaybe<BadgeWhere>
}

export type Mutation = {
  __typename?: "Mutation"
  signUp: Scalars["String"]["output"]
  signIn: Scalars["String"]["output"]
  createUsers: CreateUsersMutationResponse
  deleteUsers: DeleteInfo
  updateUsers: UpdateUsersMutationResponse
  createTopics: CreateTopicsMutationResponse
  deleteTopics: DeleteInfo
  updateTopics: UpdateTopicsMutationResponse
  createContents: CreateContentsMutationResponse
  deleteContents: DeleteInfo
  updateContents: UpdateContentsMutationResponse
  createLessons: CreateLessonsMutationResponse
  deleteLessons: DeleteInfo
  updateLessons: UpdateLessonsMutationResponse
  createSingleChoiceActivities: CreateSingleChoiceActivitiesMutationResponse
  deleteSingleChoiceActivities: DeleteInfo
  updateSingleChoiceActivities: UpdateSingleChoiceActivitiesMutationResponse
  createCodeOutputActivities: CreateCodeOutputActivitiesMutationResponse
  deleteCodeOutputActivities: DeleteInfo
  updateCodeOutputActivities: UpdateCodeOutputActivitiesMutationResponse
  createMultipleChoiceActivities: CreateMultipleChoiceActivitiesMutationResponse
  deleteMultipleChoiceActivities: DeleteInfo
  updateMultipleChoiceActivities: UpdateMultipleChoiceActivitiesMutationResponse
  createPairMatchingActivities: CreatePairMatchingActivitiesMutationResponse
  deletePairMatchingActivities: DeleteInfo
  updatePairMatchingActivities: UpdatePairMatchingActivitiesMutationResponse
  createStringPairs: CreateStringPairsMutationResponse
  deleteStringPairs: DeleteInfo
  updateStringPairs: UpdateStringPairsMutationResponse
  createFillInTheBlankActivities: CreateFillInTheBlankActivitiesMutationResponse
  deleteFillInTheBlankActivities: DeleteInfo
  updateFillInTheBlankActivities: UpdateFillInTheBlankActivitiesMutationResponse
  createGapSegments: CreateGapSegmentsMutationResponse
  deleteGapSegments: DeleteInfo
  updateGapSegments: UpdateGapSegmentsMutationResponse
  createOptions: CreateOptionsMutationResponse
  deleteOptions: DeleteInfo
  updateOptions: UpdateOptionsMutationResponse
  createTextOptions: CreateTextOptionsMutationResponse
  deleteTextOptions: DeleteInfo
  updateTextOptions: UpdateTextOptionsMutationResponse
  createCodeOptions: CreateCodeOptionsMutationResponse
  deleteCodeOptions: DeleteInfo
  updateCodeOptions: UpdateCodeOptionsMutationResponse
  createTags: CreateTagsMutationResponse
  deleteTags: DeleteInfo
  updateTags: UpdateTagsMutationResponse
  createProgrammingLanguages: CreateProgrammingLanguagesMutationResponse
  deleteProgrammingLanguages: DeleteInfo
  updateProgrammingLanguages: UpdateProgrammingLanguagesMutationResponse
  createTranslatedStrings: CreateTranslatedStringsMutationResponse
  deleteTranslatedStrings: DeleteInfo
  updateTranslatedStrings: UpdateTranslatedStringsMutationResponse
  createBadges: CreateBadgesMutationResponse
  deleteBadges: DeleteInfo
  updateBadges: UpdateBadgesMutationResponse
}

export type MutationSignUpArgs = {
  username: Scalars["String"]["input"]
  password: Scalars["String"]["input"]
}

export type MutationSignInArgs = {
  username: Scalars["String"]["input"]
  password: Scalars["String"]["input"]
}

export type MutationCreateUsersArgs = {
  input: Array<UserCreateInput>
}

export type MutationDeleteUsersArgs = {
  where?: InputMaybe<UserWhere>
  delete?: InputMaybe<UserDeleteInput>
}

export type MutationUpdateUsersArgs = {
  where?: InputMaybe<UserWhere>
  update?: InputMaybe<UserUpdateInput>
  connect?: InputMaybe<UserConnectInput>
  disconnect?: InputMaybe<UserDisconnectInput>
  create?: InputMaybe<UserRelationInput>
  delete?: InputMaybe<UserDeleteInput>
}

export type MutationCreateTopicsArgs = {
  input: Array<TopicCreateInput>
}

export type MutationDeleteTopicsArgs = {
  where?: InputMaybe<TopicWhere>
  delete?: InputMaybe<TopicDeleteInput>
}

export type MutationUpdateTopicsArgs = {
  where?: InputMaybe<TopicWhere>
  update?: InputMaybe<TopicUpdateInput>
  connect?: InputMaybe<TopicConnectInput>
  disconnect?: InputMaybe<TopicDisconnectInput>
  create?: InputMaybe<TopicRelationInput>
  delete?: InputMaybe<TopicDeleteInput>
}

export type MutationCreateContentsArgs = {
  input: Array<ContentCreateInput>
}

export type MutationDeleteContentsArgs = {
  where?: InputMaybe<ContentWhere>
}

export type MutationUpdateContentsArgs = {
  where?: InputMaybe<ContentWhere>
  update?: InputMaybe<ContentUpdateInput>
}

export type MutationCreateLessonsArgs = {
  input: Array<LessonCreateInput>
}

export type MutationDeleteLessonsArgs = {
  where?: InputMaybe<LessonWhere>
  delete?: InputMaybe<LessonDeleteInput>
}

export type MutationUpdateLessonsArgs = {
  where?: InputMaybe<LessonWhere>
  update?: InputMaybe<LessonUpdateInput>
  connect?: InputMaybe<LessonConnectInput>
  disconnect?: InputMaybe<LessonDisconnectInput>
  create?: InputMaybe<LessonRelationInput>
  delete?: InputMaybe<LessonDeleteInput>
}

export type MutationCreateSingleChoiceActivitiesArgs = {
  input: Array<SingleChoiceActivityCreateInput>
}

export type MutationDeleteSingleChoiceActivitiesArgs = {
  where?: InputMaybe<SingleChoiceActivityWhere>
}

export type MutationUpdateSingleChoiceActivitiesArgs = {
  where?: InputMaybe<SingleChoiceActivityWhere>
  update?: InputMaybe<SingleChoiceActivityUpdateInput>
}

export type MutationCreateCodeOutputActivitiesArgs = {
  input: Array<CodeOutputActivityCreateInput>
}

export type MutationDeleteCodeOutputActivitiesArgs = {
  where?: InputMaybe<CodeOutputActivityWhere>
}

export type MutationUpdateCodeOutputActivitiesArgs = {
  where?: InputMaybe<CodeOutputActivityWhere>
  update?: InputMaybe<CodeOutputActivityUpdateInput>
}

export type MutationCreateMultipleChoiceActivitiesArgs = {
  input: Array<MultipleChoiceActivityCreateInput>
}

export type MutationDeleteMultipleChoiceActivitiesArgs = {
  where?: InputMaybe<MultipleChoiceActivityWhere>
}

export type MutationUpdateMultipleChoiceActivitiesArgs = {
  where?: InputMaybe<MultipleChoiceActivityWhere>
  update?: InputMaybe<MultipleChoiceActivityUpdateInput>
}

export type MutationCreatePairMatchingActivitiesArgs = {
  input: Array<PairMatchingActivityCreateInput>
}

export type MutationDeletePairMatchingActivitiesArgs = {
  where?: InputMaybe<PairMatchingActivityWhere>
}

export type MutationUpdatePairMatchingActivitiesArgs = {
  where?: InputMaybe<PairMatchingActivityWhere>
  update?: InputMaybe<PairMatchingActivityUpdateInput>
}

export type MutationCreateStringPairsArgs = {
  input: Array<StringPairCreateInput>
}

export type MutationDeleteStringPairsArgs = {
  where?: InputMaybe<StringPairWhere>
}

export type MutationUpdateStringPairsArgs = {
  where?: InputMaybe<StringPairWhere>
  update?: InputMaybe<StringPairUpdateInput>
}

export type MutationCreateFillInTheBlankActivitiesArgs = {
  input: Array<FillInTheBlankActivityCreateInput>
}

export type MutationDeleteFillInTheBlankActivitiesArgs = {
  where?: InputMaybe<FillInTheBlankActivityWhere>
}

export type MutationUpdateFillInTheBlankActivitiesArgs = {
  where?: InputMaybe<FillInTheBlankActivityWhere>
  update?: InputMaybe<FillInTheBlankActivityUpdateInput>
}

export type MutationCreateGapSegmentsArgs = {
  input: Array<GapSegmentCreateInput>
}

export type MutationDeleteGapSegmentsArgs = {
  where?: InputMaybe<GapSegmentWhere>
}

export type MutationUpdateGapSegmentsArgs = {
  where?: InputMaybe<GapSegmentWhere>
  update?: InputMaybe<GapSegmentUpdateInput>
}

export type MutationCreateOptionsArgs = {
  input: Array<OptionCreateInput>
}

export type MutationDeleteOptionsArgs = {
  where?: InputMaybe<OptionWhere>
}

export type MutationUpdateOptionsArgs = {
  where?: InputMaybe<OptionWhere>
  update?: InputMaybe<OptionUpdateInput>
}

export type MutationCreateTextOptionsArgs = {
  input: Array<TextOptionCreateInput>
}

export type MutationDeleteTextOptionsArgs = {
  where?: InputMaybe<TextOptionWhere>
}

export type MutationUpdateTextOptionsArgs = {
  where?: InputMaybe<TextOptionWhere>
  update?: InputMaybe<TextOptionUpdateInput>
}

export type MutationCreateCodeOptionsArgs = {
  input: Array<CodeOptionCreateInput>
}

export type MutationDeleteCodeOptionsArgs = {
  where?: InputMaybe<CodeOptionWhere>
}

export type MutationUpdateCodeOptionsArgs = {
  where?: InputMaybe<CodeOptionWhere>
  update?: InputMaybe<CodeOptionUpdateInput>
}

export type MutationCreateTagsArgs = {
  input: Array<TagCreateInput>
}

export type MutationDeleteTagsArgs = {
  where?: InputMaybe<TagWhere>
  delete?: InputMaybe<TagDeleteInput>
}

export type MutationUpdateTagsArgs = {
  where?: InputMaybe<TagWhere>
  update?: InputMaybe<TagUpdateInput>
  connect?: InputMaybe<TagConnectInput>
  disconnect?: InputMaybe<TagDisconnectInput>
  create?: InputMaybe<TagRelationInput>
  delete?: InputMaybe<TagDeleteInput>
}

export type MutationCreateProgrammingLanguagesArgs = {
  input: Array<ProgrammingLanguageCreateInput>
}

export type MutationDeleteProgrammingLanguagesArgs = {
  where?: InputMaybe<ProgrammingLanguageWhere>
  delete?: InputMaybe<ProgrammingLanguageDeleteInput>
}

export type MutationUpdateProgrammingLanguagesArgs = {
  where?: InputMaybe<ProgrammingLanguageWhere>
  update?: InputMaybe<ProgrammingLanguageUpdateInput>
  connect?: InputMaybe<ProgrammingLanguageConnectInput>
  disconnect?: InputMaybe<ProgrammingLanguageDisconnectInput>
  create?: InputMaybe<ProgrammingLanguageRelationInput>
  delete?: InputMaybe<ProgrammingLanguageDeleteInput>
}

export type MutationCreateTranslatedStringsArgs = {
  input: Array<TranslatedStringCreateInput>
}

export type MutationDeleteTranslatedStringsArgs = {
  where?: InputMaybe<TranslatedStringWhere>
  delete?: InputMaybe<TranslatedStringDeleteInput>
}

export type MutationUpdateTranslatedStringsArgs = {
  where?: InputMaybe<TranslatedStringWhere>
  update?: InputMaybe<TranslatedStringUpdateInput>
  connect?: InputMaybe<TranslatedStringConnectInput>
  disconnect?: InputMaybe<TranslatedStringDisconnectInput>
  create?: InputMaybe<TranslatedStringRelationInput>
  delete?: InputMaybe<TranslatedStringDeleteInput>
}

export type MutationCreateBadgesArgs = {
  input: Array<BadgeCreateInput>
}

export type MutationDeleteBadgesArgs = {
  where?: InputMaybe<BadgeWhere>
  delete?: InputMaybe<BadgeDeleteInput>
}

export type MutationUpdateBadgesArgs = {
  where?: InputMaybe<BadgeWhere>
  update?: InputMaybe<BadgeUpdateInput>
  connect?: InputMaybe<BadgeConnectInput>
  disconnect?: InputMaybe<BadgeDisconnectInput>
  create?: InputMaybe<BadgeRelationInput>
  delete?: InputMaybe<BadgeDeleteInput>
}

export enum Difficulty {
  Beginner = "BEGINNER",
  Intermediate = "INTERMEDIATE",
  Advanced = "ADVANCED",
}

export enum LearningStyle {
  TheoryFirst = "THEORY_FIRST",
  PracticeFirst = "PRACTICE_FIRST",
}

/** An enum for sorting in either ascending or descending order. */
export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = "ASC",
  /** Sort by field values in descending order. */
  Desc = "DESC",
}

export enum TagCategory {
  Concept = "CONCEPT",
  SkillLevel = "SKILL_LEVEL",
  Paradigm = "PARADIGM",
  Domain = "DOMAIN",
  LanguageFeature = "LANGUAGE_FEATURE",
  BestPractice = "BEST_PRACTICE",
}

export type Activity =
  | SingleChoiceActivity
  | CodeOutputActivity
  | MultipleChoiceActivity
  | PairMatchingActivity
  | FillInTheBlankActivity

export type OptionContent = TextOption | CodeOption

export type Segment = Option | GapSegment

export type Task = Lesson | Content

export type Badge = {
  __typename?: "Badge"
  id: Scalars["ID"]["output"]
  name: TranslatedString
  usersAggregate?: Maybe<BadgeUserUsersAggregationSelection>
  users: Array<User>
  usersConnection: BadgeUsersConnection
  requiresTopicsAggregate?: Maybe<BadgeTopicRequiresTopicsAggregationSelection>
  requiresTopics: Array<Topic>
  requiresTopicsConnection: BadgeRequiresTopicsConnection
}

export type BadgeUsersAggregateArgs = {
  where?: InputMaybe<UserWhere>
  directed?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type BadgeUsersArgs = {
  where?: InputMaybe<UserWhere>
  options?: InputMaybe<UserOptions>
  directed?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type BadgeUsersConnectionArgs = {
  where?: InputMaybe<BadgeUsersConnectionWhere>
  first?: InputMaybe<Scalars["Int"]["input"]>
  after?: InputMaybe<Scalars["String"]["input"]>
  directed?: InputMaybe<Scalars["Boolean"]["input"]>
  sort?: InputMaybe<Array<BadgeUsersConnectionSort>>
}

export type BadgeRequiresTopicsAggregateArgs = {
  where?: InputMaybe<TopicWhere>
  directed?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type BadgeRequiresTopicsArgs = {
  where?: InputMaybe<TopicWhere>
  options?: InputMaybe<TopicOptions>
  directed?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type BadgeRequiresTopicsConnectionArgs = {
  where?: InputMaybe<BadgeRequiresTopicsConnectionWhere>
  first?: InputMaybe<Scalars["Int"]["input"]>
  after?: InputMaybe<Scalars["String"]["input"]>
  directed?: InputMaybe<Scalars["Boolean"]["input"]>
  sort?: InputMaybe<Array<BadgeRequiresTopicsConnectionSort>>
}

export type BadgeAggregateSelection = {
  __typename?: "BadgeAggregateSelection"
  count: Scalars["Int"]["output"]
  id: IdAggregateSelection
}

export type BadgeEdge = {
  __typename?: "BadgeEdge"
  cursor: Scalars["String"]["output"]
  node: Badge
}

export type BadgeRequiresTopicsConnection = {
  __typename?: "BadgeRequiresTopicsConnection"
  edges: Array<BadgeRequiresTopicsRelationship>
  totalCount: Scalars["Int"]["output"]
  pageInfo: PageInfo
}

export type BadgeRequiresTopicsRelationship = {
  __typename?: "BadgeRequiresTopicsRelationship"
  cursor: Scalars["String"]["output"]
  node: Topic
}

export type BadgesConnection = {
  __typename?: "BadgesConnection"
  totalCount: Scalars["Int"]["output"]
  pageInfo: PageInfo
  edges: Array<BadgeEdge>
}

export type BadgeTopicRequiresTopicsAggregationSelection = {
  __typename?: "BadgeTopicRequiresTopicsAggregationSelection"
  count: Scalars["Int"]["output"]
  node?: Maybe<BadgeTopicRequiresTopicsNodeAggregateSelection>
}

export type BadgeTopicRequiresTopicsNodeAggregateSelection = {
  __typename?: "BadgeTopicRequiresTopicsNodeAggregateSelection"
  id: IdAggregateSelection
}

export type BadgeUsersConnection = {
  __typename?: "BadgeUsersConnection"
  edges: Array<BadgeUsersRelationship>
  totalCount: Scalars["Int"]["output"]
  pageInfo: PageInfo
}

export type BadgeUsersRelationship = {
  __typename?: "BadgeUsersRelationship"
  cursor: Scalars["String"]["output"]
  node: User
}

export type BadgeUserUsersAggregationSelection = {
  __typename?: "BadgeUserUsersAggregationSelection"
  count: Scalars["Int"]["output"]
  node?: Maybe<BadgeUserUsersNodeAggregateSelection>
}

export type BadgeUserUsersNodeAggregateSelection = {
  __typename?: "BadgeUserUsersNodeAggregateSelection"
  id: IdAggregateSelection
  username: StringAggregateSelection
  password: StringAggregateSelection
}

export type CodeOption = {
  __typename?: "CodeOption"
  code: Scalars["String"]["output"]
}

export type CodeOptionAggregateSelection = {
  __typename?: "CodeOptionAggregateSelection"
  count: Scalars["Int"]["output"]
  code: StringAggregateSelection
}

export type CodeOptionEdge = {
  __typename?: "CodeOptionEdge"
  cursor: Scalars["String"]["output"]
  node: CodeOption
}

export type CodeOptionsConnection = {
  __typename?: "CodeOptionsConnection"
  totalCount: Scalars["Int"]["output"]
  pageInfo: PageInfo
  edges: Array<CodeOptionEdge>
}

export type CodeOutputActivitiesConnection = {
  __typename?: "CodeOutputActivitiesConnection"
  totalCount: Scalars["Int"]["output"]
  pageInfo: PageInfo
  edges: Array<CodeOutputActivityEdge>
}

export type CodeOutputActivity = {
  __typename?: "CodeOutputActivity"
  id: Scalars["ID"]["output"]
  description: TranslatedString
  codeSnippet: Scalars["String"]["output"]
  options: Array<Option>
  answer: Scalars["String"]["output"]
}

export type CodeOutputActivityAggregateSelection = {
  __typename?: "CodeOutputActivityAggregateSelection"
  count: Scalars["Int"]["output"]
  id: IdAggregateSelection
  codeSnippet: StringAggregateSelection
  answer: StringAggregateSelection
}

export type CodeOutputActivityEdge = {
  __typename?: "CodeOutputActivityEdge"
  cursor: Scalars["String"]["output"]
  node: CodeOutputActivity
}

/**
 * The edge properties for the following fields:
 * * User.completedTasks
 */
export type Completed = {
  __typename?: "Completed"
  completedAt: Scalars["DateTime"]["output"]
  score?: Maybe<Scalars["Float"]["output"]>
  timeSpent?: Maybe<Scalars["Int"]["output"]>
}

export type Content = {
  __typename?: "Content"
  id: Scalars["ID"]["output"]
  name?: Maybe<TranslatedString>
  description?: Maybe<TranslatedString>
}

export type ContentAggregateSelection = {
  __typename?: "ContentAggregateSelection"
  count: Scalars["Int"]["output"]
  id: IdAggregateSelection
}

export type ContentEdge = {
  __typename?: "ContentEdge"
  cursor: Scalars["String"]["output"]
  node: Content
}

export type ContentsConnection = {
  __typename?: "ContentsConnection"
  totalCount: Scalars["Int"]["output"]
  pageInfo: PageInfo
  edges: Array<ContentEdge>
}

export type CreateBadgesMutationResponse = {
  __typename?: "CreateBadgesMutationResponse"
  info: CreateInfo
  badges: Array<Badge>
}

export type CreateCodeOptionsMutationResponse = {
  __typename?: "CreateCodeOptionsMutationResponse"
  info: CreateInfo
  codeOptions: Array<CodeOption>
}

export type CreateCodeOutputActivitiesMutationResponse = {
  __typename?: "CreateCodeOutputActivitiesMutationResponse"
  info: CreateInfo
  codeOutputActivities: Array<CodeOutputActivity>
}

export type CreateContentsMutationResponse = {
  __typename?: "CreateContentsMutationResponse"
  info: CreateInfo
  contents: Array<Content>
}

export type CreateFillInTheBlankActivitiesMutationResponse = {
  __typename?: "CreateFillInTheBlankActivitiesMutationResponse"
  info: CreateInfo
  fillInTheBlankActivities: Array<FillInTheBlankActivity>
}

export type CreateGapSegmentsMutationResponse = {
  __typename?: "CreateGapSegmentsMutationResponse"
  info: CreateInfo
  gapSegments: Array<GapSegment>
}

/** Information about the number of nodes and relationships created during a create mutation */
export type CreateInfo = {
  __typename?: "CreateInfo"
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>
  nodesCreated: Scalars["Int"]["output"]
  relationshipsCreated: Scalars["Int"]["output"]
}

export type CreateLessonsMutationResponse = {
  __typename?: "CreateLessonsMutationResponse"
  info: CreateInfo
  lessons: Array<Lesson>
}

export type CreateMultipleChoiceActivitiesMutationResponse = {
  __typename?: "CreateMultipleChoiceActivitiesMutationResponse"
  info: CreateInfo
  multipleChoiceActivities: Array<MultipleChoiceActivity>
}

export type CreateOptionsMutationResponse = {
  __typename?: "CreateOptionsMutationResponse"
  info: CreateInfo
  options: Array<Option>
}

export type CreatePairMatchingActivitiesMutationResponse = {
  __typename?: "CreatePairMatchingActivitiesMutationResponse"
  info: CreateInfo
  pairMatchingActivities: Array<PairMatchingActivity>
}

export type CreateProgrammingLanguagesMutationResponse = {
  __typename?: "CreateProgrammingLanguagesMutationResponse"
  info: CreateInfo
  programmingLanguages: Array<ProgrammingLanguage>
}

export type CreateSingleChoiceActivitiesMutationResponse = {
  __typename?: "CreateSingleChoiceActivitiesMutationResponse"
  info: CreateInfo
  singleChoiceActivities: Array<SingleChoiceActivity>
}

export type CreateStringPairsMutationResponse = {
  __typename?: "CreateStringPairsMutationResponse"
  info: CreateInfo
  stringPairs: Array<StringPair>
}

export type CreateTagsMutationResponse = {
  __typename?: "CreateTagsMutationResponse"
  info: CreateInfo
  tags: Array<Tag>
}

export type CreateTextOptionsMutationResponse = {
  __typename?: "CreateTextOptionsMutationResponse"
  info: CreateInfo
  textOptions: Array<TextOption>
}

export type CreateTopicsMutationResponse = {
  __typename?: "CreateTopicsMutationResponse"
  info: CreateInfo
  topics: Array<Topic>
}

export type CreateTranslatedStringsMutationResponse = {
  __typename?: "CreateTranslatedStringsMutationResponse"
  info: CreateInfo
  translatedStrings: Array<TranslatedString>
}

export type CreateUsersMutationResponse = {
  __typename?: "CreateUsersMutationResponse"
  info: CreateInfo
  users: Array<User>
}

/** Information about the number of nodes and relationships deleted during a delete mutation */
export type DeleteInfo = {
  __typename?: "DeleteInfo"
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>
  nodesDeleted: Scalars["Int"]["output"]
  relationshipsDeleted: Scalars["Int"]["output"]
}

export type FillInTheBlankActivitiesConnection = {
  __typename?: "FillInTheBlankActivitiesConnection"
  totalCount: Scalars["Int"]["output"]
  pageInfo: PageInfo
  edges: Array<FillInTheBlankActivityEdge>
}

export type FillInTheBlankActivity = {
  __typename?: "FillInTheBlankActivity"
  id: Scalars["ID"]["output"]
  description: TranslatedString
  segments: Array<Segment>
  options: Array<Option>
  answer: Array<Scalars["String"]["output"]>
}

export type FillInTheBlankActivityAggregateSelection = {
  __typename?: "FillInTheBlankActivityAggregateSelection"
  count: Scalars["Int"]["output"]
  id: IdAggregateSelection
}

export type FillInTheBlankActivityEdge = {
  __typename?: "FillInTheBlankActivityEdge"
  cursor: Scalars["String"]["output"]
  node: FillInTheBlankActivity
}

export type GapSegment = {
  __typename?: "GapSegment"
  id: Scalars["ID"]["output"]
  size: Scalars["Int"]["output"]
  content?: Maybe<OptionContent>
}

export type GapSegmentAggregateSelection = {
  __typename?: "GapSegmentAggregateSelection"
  count: Scalars["Int"]["output"]
  id: IdAggregateSelection
  size: IntAggregateSelection
}

export type GapSegmentEdge = {
  __typename?: "GapSegmentEdge"
  cursor: Scalars["String"]["output"]
  node: GapSegment
}

export type GapSegmentsConnection = {
  __typename?: "GapSegmentsConnection"
  totalCount: Scalars["Int"]["output"]
  pageInfo: PageInfo
  edges: Array<GapSegmentEdge>
}

export type IdAggregateSelection = {
  __typename?: "IDAggregateSelection"
  shortest?: Maybe<Scalars["ID"]["output"]>
  longest?: Maybe<Scalars["ID"]["output"]>
}

export type IntAggregateSelection = {
  __typename?: "IntAggregateSelection"
  max?: Maybe<Scalars["Int"]["output"]>
  min?: Maybe<Scalars["Int"]["output"]>
  average?: Maybe<Scalars["Float"]["output"]>
  sum?: Maybe<Scalars["Int"]["output"]>
}

export type Lesson = {
  __typename?: "Lesson"
  id: Scalars["ID"]["output"]
  name: TranslatedString
  description?: Maybe<TranslatedString>
  activities: Array<Activity>
  activitiesConnection: LessonActivitiesConnection
}

export type LessonActivitiesArgs = {
  where?: InputMaybe<ActivityWhere>
  options?: InputMaybe<QueryOptions>
  directed?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type LessonActivitiesConnectionArgs = {
  where?: InputMaybe<LessonActivitiesConnectionWhere>
  first?: InputMaybe<Scalars["Int"]["input"]>
  after?: InputMaybe<Scalars["String"]["input"]>
  directed?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type LessonActivitiesConnection = {
  __typename?: "LessonActivitiesConnection"
  edges: Array<LessonActivitiesRelationship>
  totalCount: Scalars["Int"]["output"]
  pageInfo: PageInfo
}

export type LessonActivitiesRelationship = {
  __typename?: "LessonActivitiesRelationship"
  cursor: Scalars["String"]["output"]
  node: Activity
}

export type LessonAggregateSelection = {
  __typename?: "LessonAggregateSelection"
  count: Scalars["Int"]["output"]
  id: IdAggregateSelection
}

export type LessonEdge = {
  __typename?: "LessonEdge"
  cursor: Scalars["String"]["output"]
  node: Lesson
}

export type LessonsConnection = {
  __typename?: "LessonsConnection"
  totalCount: Scalars["Int"]["output"]
  pageInfo: PageInfo
  edges: Array<LessonEdge>
}

export type MultipleChoiceActivitiesConnection = {
  __typename?: "MultipleChoiceActivitiesConnection"
  totalCount: Scalars["Int"]["output"]
  pageInfo: PageInfo
  edges: Array<MultipleChoiceActivityEdge>
}

export type MultipleChoiceActivity = {
  __typename?: "MultipleChoiceActivity"
  id: Scalars["ID"]["output"]
  description: TranslatedString
  options: Array<Option>
  answer: Array<Scalars["String"]["output"]>
}

export type MultipleChoiceActivityAggregateSelection = {
  __typename?: "MultipleChoiceActivityAggregateSelection"
  count: Scalars["Int"]["output"]
  id: IdAggregateSelection
}

export type MultipleChoiceActivityEdge = {
  __typename?: "MultipleChoiceActivityEdge"
  cursor: Scalars["String"]["output"]
  node: MultipleChoiceActivity
}

export type Option = {
  __typename?: "Option"
  id: Scalars["ID"]["output"]
  content?: Maybe<OptionContent>
}

export type OptionAggregateSelection = {
  __typename?: "OptionAggregateSelection"
  count: Scalars["Int"]["output"]
  id: IdAggregateSelection
}

export type OptionEdge = {
  __typename?: "OptionEdge"
  cursor: Scalars["String"]["output"]
  node: Option
}

export type OptionsConnection = {
  __typename?: "OptionsConnection"
  totalCount: Scalars["Int"]["output"]
  pageInfo: PageInfo
  edges: Array<OptionEdge>
}

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: "PageInfo"
  hasNextPage: Scalars["Boolean"]["output"]
  hasPreviousPage: Scalars["Boolean"]["output"]
  startCursor?: Maybe<Scalars["String"]["output"]>
  endCursor?: Maybe<Scalars["String"]["output"]>
}

export type PairMatchingActivitiesConnection = {
  __typename?: "PairMatchingActivitiesConnection"
  totalCount: Scalars["Int"]["output"]
  pageInfo: PageInfo
  edges: Array<PairMatchingActivityEdge>
}

export type PairMatchingActivity = {
  __typename?: "PairMatchingActivity"
  id: Scalars["ID"]["output"]
  description: TranslatedString
  options: Array<Option>
  answer: Array<StringPair>
}

export type PairMatchingActivityAggregateSelection = {
  __typename?: "PairMatchingActivityAggregateSelection"
  count: Scalars["Int"]["output"]
  id: IdAggregateSelection
}

export type PairMatchingActivityEdge = {
  __typename?: "PairMatchingActivityEdge"
  cursor: Scalars["String"]["output"]
  node: PairMatchingActivity
}

export type ProgrammingLanguage = {
  __typename?: "ProgrammingLanguage"
  id: Scalars["ID"]["output"]
  name: Scalars["String"]["output"]
  topicsAggregate?: Maybe<ProgrammingLanguageTopicTopicsAggregationSelection>
  topics: Array<Topic>
  topicsConnection: ProgrammingLanguageTopicsConnection
}

export type ProgrammingLanguageTopicsAggregateArgs = {
  where?: InputMaybe<TopicWhere>
  directed?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type ProgrammingLanguageTopicsArgs = {
  where?: InputMaybe<TopicWhere>
  options?: InputMaybe<TopicOptions>
  directed?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type ProgrammingLanguageTopicsConnectionArgs = {
  where?: InputMaybe<ProgrammingLanguageTopicsConnectionWhere>
  first?: InputMaybe<Scalars["Int"]["input"]>
  after?: InputMaybe<Scalars["String"]["input"]>
  directed?: InputMaybe<Scalars["Boolean"]["input"]>
  sort?: InputMaybe<Array<ProgrammingLanguageTopicsConnectionSort>>
}

export type ProgrammingLanguageAggregateSelection = {
  __typename?: "ProgrammingLanguageAggregateSelection"
  count: Scalars["Int"]["output"]
  id: IdAggregateSelection
  name: StringAggregateSelection
}

export type ProgrammingLanguageEdge = {
  __typename?: "ProgrammingLanguageEdge"
  cursor: Scalars["String"]["output"]
  node: ProgrammingLanguage
}

export type ProgrammingLanguagesConnection = {
  __typename?: "ProgrammingLanguagesConnection"
  totalCount: Scalars["Int"]["output"]
  pageInfo: PageInfo
  edges: Array<ProgrammingLanguageEdge>
}

export type ProgrammingLanguageTopicsConnection = {
  __typename?: "ProgrammingLanguageTopicsConnection"
  edges: Array<ProgrammingLanguageTopicsRelationship>
  totalCount: Scalars["Int"]["output"]
  pageInfo: PageInfo
}

export type ProgrammingLanguageTopicsRelationship = {
  __typename?: "ProgrammingLanguageTopicsRelationship"
  cursor: Scalars["String"]["output"]
  node: Topic
}

export type ProgrammingLanguageTopicTopicsAggregationSelection = {
  __typename?: "ProgrammingLanguageTopicTopicsAggregationSelection"
  count: Scalars["Int"]["output"]
  node?: Maybe<ProgrammingLanguageTopicTopicsNodeAggregateSelection>
}

export type ProgrammingLanguageTopicTopicsNodeAggregateSelection = {
  __typename?: "ProgrammingLanguageTopicTopicsNodeAggregateSelection"
  id: IdAggregateSelection
}

export type SingleChoiceActivitiesConnection = {
  __typename?: "SingleChoiceActivitiesConnection"
  totalCount: Scalars["Int"]["output"]
  pageInfo: PageInfo
  edges: Array<SingleChoiceActivityEdge>
}

export type SingleChoiceActivity = {
  __typename?: "SingleChoiceActivity"
  id: Scalars["ID"]["output"]
  description: TranslatedString
  options: Array<Option>
  answer: Scalars["String"]["output"]
}

export type SingleChoiceActivityAggregateSelection = {
  __typename?: "SingleChoiceActivityAggregateSelection"
  count: Scalars["Int"]["output"]
  id: IdAggregateSelection
  answer: StringAggregateSelection
}

export type SingleChoiceActivityEdge = {
  __typename?: "SingleChoiceActivityEdge"
  cursor: Scalars["String"]["output"]
  node: SingleChoiceActivity
}

export type StringAggregateSelection = {
  __typename?: "StringAggregateSelection"
  shortest?: Maybe<Scalars["String"]["output"]>
  longest?: Maybe<Scalars["String"]["output"]>
}

export type StringPair = {
  __typename?: "StringPair"
  first: Scalars["String"]["output"]
  second: Scalars["String"]["output"]
}

export type StringPairAggregateSelection = {
  __typename?: "StringPairAggregateSelection"
  count: Scalars["Int"]["output"]
  first: StringAggregateSelection
  second: StringAggregateSelection
}

export type StringPairEdge = {
  __typename?: "StringPairEdge"
  cursor: Scalars["String"]["output"]
  node: StringPair
}

export type StringPairsConnection = {
  __typename?: "StringPairsConnection"
  totalCount: Scalars["Int"]["output"]
  pageInfo: PageInfo
  edges: Array<StringPairEdge>
}

export type Tag = {
  __typename?: "Tag"
  id: Scalars["ID"]["output"]
  category: TagCategory
  nameAggregate?: Maybe<TagTranslatedStringNameAggregationSelection>
  name: TranslatedString
  nameConnection: TagNameConnection
  activities: Array<Activity>
  activitiesConnection: TagActivitiesConnection
  topicsAggregate?: Maybe<TagTopicTopicsAggregationSelection>
  topics: Array<Topic>
  topicsConnection: TagTopicsConnection
}

export type TagNameAggregateArgs = {
  where?: InputMaybe<TranslatedStringWhere>
  directed?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type TagNameArgs = {
  where?: InputMaybe<TranslatedStringWhere>
  options?: InputMaybe<TranslatedStringOptions>
  directed?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type TagNameConnectionArgs = {
  where?: InputMaybe<TagNameConnectionWhere>
  first?: InputMaybe<Scalars["Int"]["input"]>
  after?: InputMaybe<Scalars["String"]["input"]>
  directed?: InputMaybe<Scalars["Boolean"]["input"]>
  sort?: InputMaybe<Array<TagNameConnectionSort>>
}

export type TagActivitiesArgs = {
  where?: InputMaybe<ActivityWhere>
  options?: InputMaybe<QueryOptions>
  directed?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type TagActivitiesConnectionArgs = {
  where?: InputMaybe<TagActivitiesConnectionWhere>
  first?: InputMaybe<Scalars["Int"]["input"]>
  after?: InputMaybe<Scalars["String"]["input"]>
  directed?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type TagTopicsAggregateArgs = {
  where?: InputMaybe<TopicWhere>
  directed?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type TagTopicsArgs = {
  where?: InputMaybe<TopicWhere>
  options?: InputMaybe<TopicOptions>
  directed?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type TagTopicsConnectionArgs = {
  where?: InputMaybe<TagTopicsConnectionWhere>
  first?: InputMaybe<Scalars["Int"]["input"]>
  after?: InputMaybe<Scalars["String"]["input"]>
  directed?: InputMaybe<Scalars["Boolean"]["input"]>
  sort?: InputMaybe<Array<TagTopicsConnectionSort>>
}

export type TagActivitiesConnection = {
  __typename?: "TagActivitiesConnection"
  edges: Array<TagActivitiesRelationship>
  totalCount: Scalars["Int"]["output"]
  pageInfo: PageInfo
}

export type TagActivitiesRelationship = {
  __typename?: "TagActivitiesRelationship"
  cursor: Scalars["String"]["output"]
  node: Activity
}

export type TagAggregateSelection = {
  __typename?: "TagAggregateSelection"
  count: Scalars["Int"]["output"]
  id: IdAggregateSelection
}

export type TagEdge = {
  __typename?: "TagEdge"
  cursor: Scalars["String"]["output"]
  node: Tag
}

export type TagNameConnection = {
  __typename?: "TagNameConnection"
  edges: Array<TagNameRelationship>
  totalCount: Scalars["Int"]["output"]
  pageInfo: PageInfo
}

export type TagNameRelationship = {
  __typename?: "TagNameRelationship"
  cursor: Scalars["String"]["output"]
  node: TranslatedString
}

export type TagsConnection = {
  __typename?: "TagsConnection"
  totalCount: Scalars["Int"]["output"]
  pageInfo: PageInfo
  edges: Array<TagEdge>
}

export type TagTopicsConnection = {
  __typename?: "TagTopicsConnection"
  edges: Array<TagTopicsRelationship>
  totalCount: Scalars["Int"]["output"]
  pageInfo: PageInfo
}

export type TagTopicsRelationship = {
  __typename?: "TagTopicsRelationship"
  cursor: Scalars["String"]["output"]
  node: Topic
}

export type TagTopicTopicsAggregationSelection = {
  __typename?: "TagTopicTopicsAggregationSelection"
  count: Scalars["Int"]["output"]
  node?: Maybe<TagTopicTopicsNodeAggregateSelection>
}

export type TagTopicTopicsNodeAggregateSelection = {
  __typename?: "TagTopicTopicsNodeAggregateSelection"
  id: IdAggregateSelection
}

export type TagTranslatedStringNameAggregationSelection = {
  __typename?: "TagTranslatedStringNameAggregationSelection"
  count: Scalars["Int"]["output"]
  node?: Maybe<TagTranslatedStringNameNodeAggregateSelection>
}

export type TagTranslatedStringNameNodeAggregateSelection = {
  __typename?: "TagTranslatedStringNameNodeAggregateSelection"
  en: StringAggregateSelection
  pt: StringAggregateSelection
  fr: StringAggregateSelection
  de: StringAggregateSelection
  es: StringAggregateSelection
}

export type TextOption = {
  __typename?: "TextOption"
  text: TranslatedString
}

export type TextOptionAggregateSelection = {
  __typename?: "TextOptionAggregateSelection"
  count: Scalars["Int"]["output"]
}

export type TextOptionEdge = {
  __typename?: "TextOptionEdge"
  cursor: Scalars["String"]["output"]
  node: TextOption
}

export type TextOptionsConnection = {
  __typename?: "TextOptionsConnection"
  totalCount: Scalars["Int"]["output"]
  pageInfo: PageInfo
  edges: Array<TextOptionEdge>
}

export type Topic = {
  __typename?: "Topic"
  id: Scalars["ID"]["output"]
  name: TranslatedString
  description?: Maybe<TranslatedString>
  difficulty: Difficulty
  languagesAggregate?: Maybe<TopicProgrammingLanguageLanguagesAggregationSelection>
  languages: Array<ProgrammingLanguage>
  languagesConnection: TopicLanguagesConnection
  badgesAggregate?: Maybe<TopicBadgeBadgesAggregationSelection>
  badges: Array<Badge>
  badgesConnection: TopicBadgesConnection
  prerequisiteToAggregate?: Maybe<TopicTopicPrerequisiteToAggregationSelection>
  prerequisiteTo: Array<Topic>
  prerequisiteToConnection: TopicPrerequisiteToConnection
  prerequisitesAggregate?: Maybe<TopicTopicPrerequisitesAggregationSelection>
  prerequisites: Array<Topic>
  prerequisitesConnection: TopicPrerequisitesConnection
  tagsAggregate?: Maybe<TopicTagTagsAggregationSelection>
  tags: Array<Tag>
  tagsConnection: TopicTagsConnection
  lessonsAggregate?: Maybe<TopicLessonLessonsAggregationSelection>
  lessons: Array<Lesson>
  lessonsConnection: TopicLessonsConnection
  contentAggregate?: Maybe<TopicContentContentAggregationSelection>
  content: Array<Content>
  contentConnection: TopicContentConnection
}

export type TopicLanguagesAggregateArgs = {
  where?: InputMaybe<ProgrammingLanguageWhere>
  directed?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type TopicLanguagesArgs = {
  where?: InputMaybe<ProgrammingLanguageWhere>
  options?: InputMaybe<ProgrammingLanguageOptions>
  directed?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type TopicLanguagesConnectionArgs = {
  where?: InputMaybe<TopicLanguagesConnectionWhere>
  first?: InputMaybe<Scalars["Int"]["input"]>
  after?: InputMaybe<Scalars["String"]["input"]>
  directed?: InputMaybe<Scalars["Boolean"]["input"]>
  sort?: InputMaybe<Array<TopicLanguagesConnectionSort>>
}

export type TopicBadgesAggregateArgs = {
  where?: InputMaybe<BadgeWhere>
  directed?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type TopicBadgesArgs = {
  where?: InputMaybe<BadgeWhere>
  options?: InputMaybe<BadgeOptions>
  directed?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type TopicBadgesConnectionArgs = {
  where?: InputMaybe<TopicBadgesConnectionWhere>
  first?: InputMaybe<Scalars["Int"]["input"]>
  after?: InputMaybe<Scalars["String"]["input"]>
  directed?: InputMaybe<Scalars["Boolean"]["input"]>
  sort?: InputMaybe<Array<TopicBadgesConnectionSort>>
}

export type TopicPrerequisiteToAggregateArgs = {
  where?: InputMaybe<TopicWhere>
  directed?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type TopicPrerequisiteToArgs = {
  where?: InputMaybe<TopicWhere>
  options?: InputMaybe<TopicOptions>
  directed?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type TopicPrerequisiteToConnectionArgs = {
  where?: InputMaybe<TopicPrerequisiteToConnectionWhere>
  first?: InputMaybe<Scalars["Int"]["input"]>
  after?: InputMaybe<Scalars["String"]["input"]>
  directed?: InputMaybe<Scalars["Boolean"]["input"]>
  sort?: InputMaybe<Array<TopicPrerequisiteToConnectionSort>>
}

export type TopicPrerequisitesAggregateArgs = {
  where?: InputMaybe<TopicWhere>
  directed?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type TopicPrerequisitesArgs = {
  where?: InputMaybe<TopicWhere>
  options?: InputMaybe<TopicOptions>
  directed?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type TopicPrerequisitesConnectionArgs = {
  where?: InputMaybe<TopicPrerequisitesConnectionWhere>
  first?: InputMaybe<Scalars["Int"]["input"]>
  after?: InputMaybe<Scalars["String"]["input"]>
  directed?: InputMaybe<Scalars["Boolean"]["input"]>
  sort?: InputMaybe<Array<TopicPrerequisitesConnectionSort>>
}

export type TopicTagsAggregateArgs = {
  where?: InputMaybe<TagWhere>
  directed?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type TopicTagsArgs = {
  where?: InputMaybe<TagWhere>
  options?: InputMaybe<TagOptions>
  directed?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type TopicTagsConnectionArgs = {
  where?: InputMaybe<TopicTagsConnectionWhere>
  first?: InputMaybe<Scalars["Int"]["input"]>
  after?: InputMaybe<Scalars["String"]["input"]>
  directed?: InputMaybe<Scalars["Boolean"]["input"]>
  sort?: InputMaybe<Array<TopicTagsConnectionSort>>
}

export type TopicLessonsAggregateArgs = {
  where?: InputMaybe<LessonWhere>
  directed?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type TopicLessonsArgs = {
  where?: InputMaybe<LessonWhere>
  options?: InputMaybe<LessonOptions>
  directed?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type TopicLessonsConnectionArgs = {
  where?: InputMaybe<TopicLessonsConnectionWhere>
  first?: InputMaybe<Scalars["Int"]["input"]>
  after?: InputMaybe<Scalars["String"]["input"]>
  directed?: InputMaybe<Scalars["Boolean"]["input"]>
  sort?: InputMaybe<Array<TopicLessonsConnectionSort>>
}

export type TopicContentAggregateArgs = {
  where?: InputMaybe<ContentWhere>
  directed?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type TopicContentArgs = {
  where?: InputMaybe<ContentWhere>
  options?: InputMaybe<ContentOptions>
  directed?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type TopicContentConnectionArgs = {
  where?: InputMaybe<TopicContentConnectionWhere>
  first?: InputMaybe<Scalars["Int"]["input"]>
  after?: InputMaybe<Scalars["String"]["input"]>
  directed?: InputMaybe<Scalars["Boolean"]["input"]>
  sort?: InputMaybe<Array<TopicContentConnectionSort>>
}

export type TopicAggregateSelection = {
  __typename?: "TopicAggregateSelection"
  count: Scalars["Int"]["output"]
  id: IdAggregateSelection
}

export type TopicBadgeBadgesAggregationSelection = {
  __typename?: "TopicBadgeBadgesAggregationSelection"
  count: Scalars["Int"]["output"]
  node?: Maybe<TopicBadgeBadgesNodeAggregateSelection>
}

export type TopicBadgeBadgesNodeAggregateSelection = {
  __typename?: "TopicBadgeBadgesNodeAggregateSelection"
  id: IdAggregateSelection
}

export type TopicBadgesConnection = {
  __typename?: "TopicBadgesConnection"
  edges: Array<TopicBadgesRelationship>
  totalCount: Scalars["Int"]["output"]
  pageInfo: PageInfo
}

export type TopicBadgesRelationship = {
  __typename?: "TopicBadgesRelationship"
  cursor: Scalars["String"]["output"]
  node: Badge
}

export type TopicContentConnection = {
  __typename?: "TopicContentConnection"
  edges: Array<TopicContentRelationship>
  totalCount: Scalars["Int"]["output"]
  pageInfo: PageInfo
}

export type TopicContentContentAggregationSelection = {
  __typename?: "TopicContentContentAggregationSelection"
  count: Scalars["Int"]["output"]
  node?: Maybe<TopicContentContentNodeAggregateSelection>
}

export type TopicContentContentNodeAggregateSelection = {
  __typename?: "TopicContentContentNodeAggregateSelection"
  id: IdAggregateSelection
}

export type TopicContentRelationship = {
  __typename?: "TopicContentRelationship"
  cursor: Scalars["String"]["output"]
  node: Content
}

export type TopicEdge = {
  __typename?: "TopicEdge"
  cursor: Scalars["String"]["output"]
  node: Topic
}

export type TopicLanguagesConnection = {
  __typename?: "TopicLanguagesConnection"
  edges: Array<TopicLanguagesRelationship>
  totalCount: Scalars["Int"]["output"]
  pageInfo: PageInfo
}

export type TopicLanguagesRelationship = {
  __typename?: "TopicLanguagesRelationship"
  cursor: Scalars["String"]["output"]
  node: ProgrammingLanguage
}

export type TopicLessonLessonsAggregationSelection = {
  __typename?: "TopicLessonLessonsAggregationSelection"
  count: Scalars["Int"]["output"]
  node?: Maybe<TopicLessonLessonsNodeAggregateSelection>
}

export type TopicLessonLessonsNodeAggregateSelection = {
  __typename?: "TopicLessonLessonsNodeAggregateSelection"
  id: IdAggregateSelection
}

export type TopicLessonsConnection = {
  __typename?: "TopicLessonsConnection"
  edges: Array<TopicLessonsRelationship>
  totalCount: Scalars["Int"]["output"]
  pageInfo: PageInfo
}

export type TopicLessonsRelationship = {
  __typename?: "TopicLessonsRelationship"
  cursor: Scalars["String"]["output"]
  node: Lesson
}

export type TopicPrerequisitesConnection = {
  __typename?: "TopicPrerequisitesConnection"
  edges: Array<TopicPrerequisitesRelationship>
  totalCount: Scalars["Int"]["output"]
  pageInfo: PageInfo
}

export type TopicPrerequisitesRelationship = {
  __typename?: "TopicPrerequisitesRelationship"
  cursor: Scalars["String"]["output"]
  node: Topic
}

export type TopicPrerequisiteToConnection = {
  __typename?: "TopicPrerequisiteToConnection"
  edges: Array<TopicPrerequisiteToRelationship>
  totalCount: Scalars["Int"]["output"]
  pageInfo: PageInfo
}

export type TopicPrerequisiteToRelationship = {
  __typename?: "TopicPrerequisiteToRelationship"
  cursor: Scalars["String"]["output"]
  node: Topic
}

export type TopicProgrammingLanguageLanguagesAggregationSelection = {
  __typename?: "TopicProgrammingLanguageLanguagesAggregationSelection"
  count: Scalars["Int"]["output"]
  node?: Maybe<TopicProgrammingLanguageLanguagesNodeAggregateSelection>
}

export type TopicProgrammingLanguageLanguagesNodeAggregateSelection = {
  __typename?: "TopicProgrammingLanguageLanguagesNodeAggregateSelection"
  id: IdAggregateSelection
  name: StringAggregateSelection
}

export type TopicsConnection = {
  __typename?: "TopicsConnection"
  totalCount: Scalars["Int"]["output"]
  pageInfo: PageInfo
  edges: Array<TopicEdge>
}

export type TopicTagsConnection = {
  __typename?: "TopicTagsConnection"
  edges: Array<TopicTagsRelationship>
  totalCount: Scalars["Int"]["output"]
  pageInfo: PageInfo
}

export type TopicTagsRelationship = {
  __typename?: "TopicTagsRelationship"
  cursor: Scalars["String"]["output"]
  node: Tag
}

export type TopicTagTagsAggregationSelection = {
  __typename?: "TopicTagTagsAggregationSelection"
  count: Scalars["Int"]["output"]
  node?: Maybe<TopicTagTagsNodeAggregateSelection>
}

export type TopicTagTagsNodeAggregateSelection = {
  __typename?: "TopicTagTagsNodeAggregateSelection"
  id: IdAggregateSelection
}

export type TopicTopicPrerequisitesAggregationSelection = {
  __typename?: "TopicTopicPrerequisitesAggregationSelection"
  count: Scalars["Int"]["output"]
  node?: Maybe<TopicTopicPrerequisitesNodeAggregateSelection>
}

export type TopicTopicPrerequisitesNodeAggregateSelection = {
  __typename?: "TopicTopicPrerequisitesNodeAggregateSelection"
  id: IdAggregateSelection
}

export type TopicTopicPrerequisiteToAggregationSelection = {
  __typename?: "TopicTopicPrerequisiteToAggregationSelection"
  count: Scalars["Int"]["output"]
  node?: Maybe<TopicTopicPrerequisiteToNodeAggregateSelection>
}

export type TopicTopicPrerequisiteToNodeAggregateSelection = {
  __typename?: "TopicTopicPrerequisiteToNodeAggregateSelection"
  id: IdAggregateSelection
}

export type TranslatedString = {
  __typename?: "TranslatedString"
  en: Scalars["String"]["output"]
  pt?: Maybe<Scalars["String"]["output"]>
  fr?: Maybe<Scalars["String"]["output"]>
  de?: Maybe<Scalars["String"]["output"]>
  es?: Maybe<Scalars["String"]["output"]>
  tagsAggregate?: Maybe<TranslatedStringTagTagsAggregationSelection>
  tags: Array<Tag>
  tagsConnection: TranslatedStringTagsConnection
}

export type TranslatedStringTagsAggregateArgs = {
  where?: InputMaybe<TagWhere>
  directed?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type TranslatedStringTagsArgs = {
  where?: InputMaybe<TagWhere>
  options?: InputMaybe<TagOptions>
  directed?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type TranslatedStringTagsConnectionArgs = {
  where?: InputMaybe<TranslatedStringTagsConnectionWhere>
  first?: InputMaybe<Scalars["Int"]["input"]>
  after?: InputMaybe<Scalars["String"]["input"]>
  directed?: InputMaybe<Scalars["Boolean"]["input"]>
  sort?: InputMaybe<Array<TranslatedStringTagsConnectionSort>>
}

export type TranslatedStringAggregateSelection = {
  __typename?: "TranslatedStringAggregateSelection"
  count: Scalars["Int"]["output"]
  en: StringAggregateSelection
  pt: StringAggregateSelection
  fr: StringAggregateSelection
  de: StringAggregateSelection
  es: StringAggregateSelection
}

export type TranslatedStringEdge = {
  __typename?: "TranslatedStringEdge"
  cursor: Scalars["String"]["output"]
  node: TranslatedString
}

export type TranslatedStringsConnection = {
  __typename?: "TranslatedStringsConnection"
  totalCount: Scalars["Int"]["output"]
  pageInfo: PageInfo
  edges: Array<TranslatedStringEdge>
}

export type TranslatedStringTagsConnection = {
  __typename?: "TranslatedStringTagsConnection"
  edges: Array<TranslatedStringTagsRelationship>
  totalCount: Scalars["Int"]["output"]
  pageInfo: PageInfo
}

export type TranslatedStringTagsRelationship = {
  __typename?: "TranslatedStringTagsRelationship"
  cursor: Scalars["String"]["output"]
  node: Tag
}

export type TranslatedStringTagTagsAggregationSelection = {
  __typename?: "TranslatedStringTagTagsAggregationSelection"
  count: Scalars["Int"]["output"]
  node?: Maybe<TranslatedStringTagTagsNodeAggregateSelection>
}

export type TranslatedStringTagTagsNodeAggregateSelection = {
  __typename?: "TranslatedStringTagTagsNodeAggregateSelection"
  id: IdAggregateSelection
}

export type UpdateBadgesMutationResponse = {
  __typename?: "UpdateBadgesMutationResponse"
  info: UpdateInfo
  badges: Array<Badge>
}

export type UpdateCodeOptionsMutationResponse = {
  __typename?: "UpdateCodeOptionsMutationResponse"
  info: UpdateInfo
  codeOptions: Array<CodeOption>
}

export type UpdateCodeOutputActivitiesMutationResponse = {
  __typename?: "UpdateCodeOutputActivitiesMutationResponse"
  info: UpdateInfo
  codeOutputActivities: Array<CodeOutputActivity>
}

export type UpdateContentsMutationResponse = {
  __typename?: "UpdateContentsMutationResponse"
  info: UpdateInfo
  contents: Array<Content>
}

export type UpdateFillInTheBlankActivitiesMutationResponse = {
  __typename?: "UpdateFillInTheBlankActivitiesMutationResponse"
  info: UpdateInfo
  fillInTheBlankActivities: Array<FillInTheBlankActivity>
}

export type UpdateGapSegmentsMutationResponse = {
  __typename?: "UpdateGapSegmentsMutationResponse"
  info: UpdateInfo
  gapSegments: Array<GapSegment>
}

/** Information about the number of nodes and relationships created and deleted during an update mutation */
export type UpdateInfo = {
  __typename?: "UpdateInfo"
  /** @deprecated This field has been deprecated because bookmarks are now handled by the driver. */
  bookmark?: Maybe<Scalars["String"]["output"]>
  nodesCreated: Scalars["Int"]["output"]
  nodesDeleted: Scalars["Int"]["output"]
  relationshipsCreated: Scalars["Int"]["output"]
  relationshipsDeleted: Scalars["Int"]["output"]
}

export type UpdateLessonsMutationResponse = {
  __typename?: "UpdateLessonsMutationResponse"
  info: UpdateInfo
  lessons: Array<Lesson>
}

export type UpdateMultipleChoiceActivitiesMutationResponse = {
  __typename?: "UpdateMultipleChoiceActivitiesMutationResponse"
  info: UpdateInfo
  multipleChoiceActivities: Array<MultipleChoiceActivity>
}

export type UpdateOptionsMutationResponse = {
  __typename?: "UpdateOptionsMutationResponse"
  info: UpdateInfo
  options: Array<Option>
}

export type UpdatePairMatchingActivitiesMutationResponse = {
  __typename?: "UpdatePairMatchingActivitiesMutationResponse"
  info: UpdateInfo
  pairMatchingActivities: Array<PairMatchingActivity>
}

export type UpdateProgrammingLanguagesMutationResponse = {
  __typename?: "UpdateProgrammingLanguagesMutationResponse"
  info: UpdateInfo
  programmingLanguages: Array<ProgrammingLanguage>
}

export type UpdateSingleChoiceActivitiesMutationResponse = {
  __typename?: "UpdateSingleChoiceActivitiesMutationResponse"
  info: UpdateInfo
  singleChoiceActivities: Array<SingleChoiceActivity>
}

export type UpdateStringPairsMutationResponse = {
  __typename?: "UpdateStringPairsMutationResponse"
  info: UpdateInfo
  stringPairs: Array<StringPair>
}

export type UpdateTagsMutationResponse = {
  __typename?: "UpdateTagsMutationResponse"
  info: UpdateInfo
  tags: Array<Tag>
}

export type UpdateTextOptionsMutationResponse = {
  __typename?: "UpdateTextOptionsMutationResponse"
  info: UpdateInfo
  textOptions: Array<TextOption>
}

export type UpdateTopicsMutationResponse = {
  __typename?: "UpdateTopicsMutationResponse"
  info: UpdateInfo
  topics: Array<Topic>
}

export type UpdateTranslatedStringsMutationResponse = {
  __typename?: "UpdateTranslatedStringsMutationResponse"
  info: UpdateInfo
  translatedStrings: Array<TranslatedString>
}

export type UpdateUsersMutationResponse = {
  __typename?: "UpdateUsersMutationResponse"
  info: UpdateInfo
  users: Array<User>
}

export type User = {
  __typename?: "User"
  id?: Maybe<Scalars["ID"]["output"]>
  username: Scalars["String"]["output"]
  password: Scalars["String"]["output"]
  learningStyle?: Maybe<LearningStyle>
  completedTasks: Array<Task>
  completedTasksConnection: UserCompletedTasksConnection
  badgesAggregate?: Maybe<UserBadgeBadgesAggregationSelection>
  badges: Array<Badge>
  badgesConnection: UserBadgesConnection
  unlockedTopicsAggregate?: Maybe<UserTopicUnlockedTopicsAggregationSelection>
  unlockedTopics: Array<Topic>
  unlockedTopicsConnection: UserUnlockedTopicsConnection
}

export type UserCompletedTasksArgs = {
  where?: InputMaybe<TaskWhere>
  options?: InputMaybe<QueryOptions>
  directed?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type UserCompletedTasksConnectionArgs = {
  where?: InputMaybe<UserCompletedTasksConnectionWhere>
  first?: InputMaybe<Scalars["Int"]["input"]>
  after?: InputMaybe<Scalars["String"]["input"]>
  directed?: InputMaybe<Scalars["Boolean"]["input"]>
  sort?: InputMaybe<Array<UserCompletedTasksConnectionSort>>
}

export type UserBadgesAggregateArgs = {
  where?: InputMaybe<BadgeWhere>
  directed?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type UserBadgesArgs = {
  where?: InputMaybe<BadgeWhere>
  options?: InputMaybe<BadgeOptions>
  directed?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type UserBadgesConnectionArgs = {
  where?: InputMaybe<UserBadgesConnectionWhere>
  first?: InputMaybe<Scalars["Int"]["input"]>
  after?: InputMaybe<Scalars["String"]["input"]>
  directed?: InputMaybe<Scalars["Boolean"]["input"]>
  sort?: InputMaybe<Array<UserBadgesConnectionSort>>
}

export type UserUnlockedTopicsAggregateArgs = {
  where?: InputMaybe<TopicWhere>
  directed?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type UserUnlockedTopicsArgs = {
  where?: InputMaybe<TopicWhere>
  options?: InputMaybe<TopicOptions>
  directed?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type UserUnlockedTopicsConnectionArgs = {
  where?: InputMaybe<UserUnlockedTopicsConnectionWhere>
  first?: InputMaybe<Scalars["Int"]["input"]>
  after?: InputMaybe<Scalars["String"]["input"]>
  directed?: InputMaybe<Scalars["Boolean"]["input"]>
  sort?: InputMaybe<Array<UserUnlockedTopicsConnectionSort>>
}

export type UserAggregateSelection = {
  __typename?: "UserAggregateSelection"
  count: Scalars["Int"]["output"]
  id: IdAggregateSelection
  username: StringAggregateSelection
  password: StringAggregateSelection
}

export type UserBadgeBadgesAggregationSelection = {
  __typename?: "UserBadgeBadgesAggregationSelection"
  count: Scalars["Int"]["output"]
  node?: Maybe<UserBadgeBadgesNodeAggregateSelection>
}

export type UserBadgeBadgesNodeAggregateSelection = {
  __typename?: "UserBadgeBadgesNodeAggregateSelection"
  id: IdAggregateSelection
}

export type UserBadgesConnection = {
  __typename?: "UserBadgesConnection"
  edges: Array<UserBadgesRelationship>
  totalCount: Scalars["Int"]["output"]
  pageInfo: PageInfo
}

export type UserBadgesRelationship = {
  __typename?: "UserBadgesRelationship"
  cursor: Scalars["String"]["output"]
  node: Badge
}

export type UserCompletedTasksConnection = {
  __typename?: "UserCompletedTasksConnection"
  edges: Array<UserCompletedTasksRelationship>
  totalCount: Scalars["Int"]["output"]
  pageInfo: PageInfo
}

export type UserCompletedTasksRelationship = {
  __typename?: "UserCompletedTasksRelationship"
  cursor: Scalars["String"]["output"]
  node: Task
  properties: Completed
}

export type UserEdge = {
  __typename?: "UserEdge"
  cursor: Scalars["String"]["output"]
  node: User
}

export type UsersConnection = {
  __typename?: "UsersConnection"
  totalCount: Scalars["Int"]["output"]
  pageInfo: PageInfo
  edges: Array<UserEdge>
}

export type UserTopicUnlockedTopicsAggregationSelection = {
  __typename?: "UserTopicUnlockedTopicsAggregationSelection"
  count: Scalars["Int"]["output"]
  node?: Maybe<UserTopicUnlockedTopicsNodeAggregateSelection>
}

export type UserTopicUnlockedTopicsNodeAggregateSelection = {
  __typename?: "UserTopicUnlockedTopicsNodeAggregateSelection"
  id: IdAggregateSelection
}

export type UserUnlockedTopicsConnection = {
  __typename?: "UserUnlockedTopicsConnection"
  edges: Array<UserUnlockedTopicsRelationship>
  totalCount: Scalars["Int"]["output"]
  pageInfo: PageInfo
}

export type UserUnlockedTopicsRelationship = {
  __typename?: "UserUnlockedTopicsRelationship"
  cursor: Scalars["String"]["output"]
  node: Topic
}

export type ActivityWhere = {
  SingleChoiceActivity?: InputMaybe<SingleChoiceActivityWhere>
  CodeOutputActivity?: InputMaybe<CodeOutputActivityWhere>
  MultipleChoiceActivity?: InputMaybe<MultipleChoiceActivityWhere>
  PairMatchingActivity?: InputMaybe<PairMatchingActivityWhere>
  FillInTheBlankActivity?: InputMaybe<FillInTheBlankActivityWhere>
}

export type BadgeConnectInput = {
  users?: InputMaybe<Array<BadgeUsersConnectFieldInput>>
  requiresTopics?: InputMaybe<Array<BadgeRequiresTopicsConnectFieldInput>>
}

export type BadgeConnectWhere = {
  node: BadgeWhere
}

export type BadgeCreateInput = {
  users?: InputMaybe<BadgeUsersFieldInput>
  requiresTopics?: InputMaybe<BadgeRequiresTopicsFieldInput>
}

export type BadgeDeleteInput = {
  users?: InputMaybe<Array<BadgeUsersDeleteFieldInput>>
  requiresTopics?: InputMaybe<Array<BadgeRequiresTopicsDeleteFieldInput>>
}

export type BadgeDisconnectInput = {
  users?: InputMaybe<Array<BadgeUsersDisconnectFieldInput>>
  requiresTopics?: InputMaybe<Array<BadgeRequiresTopicsDisconnectFieldInput>>
}

export type BadgeOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  /** Specify one or more BadgeSort objects to sort Badges by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<BadgeSort>>
}

export type BadgeRelationInput = {
  users?: InputMaybe<Array<BadgeUsersCreateFieldInput>>
  requiresTopics?: InputMaybe<Array<BadgeRequiresTopicsCreateFieldInput>>
}

export type BadgeRequiresTopicsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>
  count_LT?: InputMaybe<Scalars["Int"]["input"]>
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>
  count_GT?: InputMaybe<Scalars["Int"]["input"]>
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>
  AND?: InputMaybe<Array<BadgeRequiresTopicsAggregateInput>>
  OR?: InputMaybe<Array<BadgeRequiresTopicsAggregateInput>>
  NOT?: InputMaybe<BadgeRequiresTopicsAggregateInput>
  node?: InputMaybe<BadgeRequiresTopicsNodeAggregationWhereInput>
}

export type BadgeRequiresTopicsConnectFieldInput = {
  where?: InputMaybe<TopicConnectWhere>
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"]
  connect?: InputMaybe<Array<TopicConnectInput>>
}

export type BadgeRequiresTopicsConnectionSort = {
  node?: InputMaybe<TopicSort>
}

export type BadgeRequiresTopicsConnectionWhere = {
  AND?: InputMaybe<Array<BadgeRequiresTopicsConnectionWhere>>
  OR?: InputMaybe<Array<BadgeRequiresTopicsConnectionWhere>>
  NOT?: InputMaybe<BadgeRequiresTopicsConnectionWhere>
  node?: InputMaybe<TopicWhere>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<TopicWhere>
}

export type BadgeRequiresTopicsCreateFieldInput = {
  node: TopicCreateInput
}

export type BadgeRequiresTopicsDeleteFieldInput = {
  where?: InputMaybe<BadgeRequiresTopicsConnectionWhere>
  delete?: InputMaybe<TopicDeleteInput>
}

export type BadgeRequiresTopicsDisconnectFieldInput = {
  where?: InputMaybe<BadgeRequiresTopicsConnectionWhere>
  disconnect?: InputMaybe<TopicDisconnectInput>
}

export type BadgeRequiresTopicsFieldInput = {
  connect?: InputMaybe<Array<BadgeRequiresTopicsConnectFieldInput>>
  create?: InputMaybe<Array<BadgeRequiresTopicsCreateFieldInput>>
}

export type BadgeRequiresTopicsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<BadgeRequiresTopicsNodeAggregationWhereInput>>
  OR?: InputMaybe<Array<BadgeRequiresTopicsNodeAggregationWhereInput>>
  NOT?: InputMaybe<BadgeRequiresTopicsNodeAggregationWhereInput>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>
}

export type BadgeRequiresTopicsUpdateConnectionInput = {
  node?: InputMaybe<TopicUpdateInput>
}

export type BadgeRequiresTopicsUpdateFieldInput = {
  where?: InputMaybe<BadgeRequiresTopicsConnectionWhere>
  connect?: InputMaybe<Array<BadgeRequiresTopicsConnectFieldInput>>
  disconnect?: InputMaybe<Array<BadgeRequiresTopicsDisconnectFieldInput>>
  create?: InputMaybe<Array<BadgeRequiresTopicsCreateFieldInput>>
  update?: InputMaybe<BadgeRequiresTopicsUpdateConnectionInput>
  delete?: InputMaybe<Array<BadgeRequiresTopicsDeleteFieldInput>>
}

/** Fields to sort Badges by. The order in which sorts are applied is not guaranteed when specifying many fields in one BadgeSort object. */
export type BadgeSort = {
  id?: InputMaybe<SortDirection>
}

export type BadgeUpdateInput = {
  users?: InputMaybe<Array<BadgeUsersUpdateFieldInput>>
  requiresTopics?: InputMaybe<Array<BadgeRequiresTopicsUpdateFieldInput>>
}

export type BadgeUsersAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>
  count_LT?: InputMaybe<Scalars["Int"]["input"]>
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>
  count_GT?: InputMaybe<Scalars["Int"]["input"]>
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>
  AND?: InputMaybe<Array<BadgeUsersAggregateInput>>
  OR?: InputMaybe<Array<BadgeUsersAggregateInput>>
  NOT?: InputMaybe<BadgeUsersAggregateInput>
  node?: InputMaybe<BadgeUsersNodeAggregationWhereInput>
}

export type BadgeUsersConnectFieldInput = {
  where?: InputMaybe<UserConnectWhere>
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"]
  connect?: InputMaybe<Array<UserConnectInput>>
}

export type BadgeUsersConnectionSort = {
  node?: InputMaybe<UserSort>
}

export type BadgeUsersConnectionWhere = {
  AND?: InputMaybe<Array<BadgeUsersConnectionWhere>>
  OR?: InputMaybe<Array<BadgeUsersConnectionWhere>>
  NOT?: InputMaybe<BadgeUsersConnectionWhere>
  node?: InputMaybe<UserWhere>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<UserWhere>
}

export type BadgeUsersCreateFieldInput = {
  node: UserCreateInput
}

export type BadgeUsersDeleteFieldInput = {
  where?: InputMaybe<BadgeUsersConnectionWhere>
  delete?: InputMaybe<UserDeleteInput>
}

export type BadgeUsersDisconnectFieldInput = {
  where?: InputMaybe<BadgeUsersConnectionWhere>
  disconnect?: InputMaybe<UserDisconnectInput>
}

export type BadgeUsersFieldInput = {
  connect?: InputMaybe<Array<BadgeUsersConnectFieldInput>>
  create?: InputMaybe<Array<BadgeUsersCreateFieldInput>>
}

export type BadgeUsersNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<BadgeUsersNodeAggregationWhereInput>>
  OR?: InputMaybe<Array<BadgeUsersNodeAggregationWhereInput>>
  NOT?: InputMaybe<BadgeUsersNodeAggregationWhereInput>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  username_EQUAL?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>
  username_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>
  username_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>
  username_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  username_GT?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>
  username_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>
  username_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>
  username_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  username_GTE?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>
  username_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>
  username_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>
  username_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  username_LT?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>
  username_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>
  username_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>
  username_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  username_LTE?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  username_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>
  username_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>
  username_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>
  username_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  password_EQUAL?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  password_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  password_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  password_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>
  password_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>
  password_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>
  password_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  password_GT?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  password_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  password_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  password_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>
  password_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>
  password_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>
  password_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  password_GTE?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  password_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  password_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  password_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>
  password_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>
  password_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>
  password_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  password_LT?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  password_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  password_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  password_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>
  password_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>
  password_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>
  password_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  password_LTE?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  password_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  password_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  password_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>
  password_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>
  password_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>
  password_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>
}

export type BadgeUsersUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>
}

export type BadgeUsersUpdateFieldInput = {
  where?: InputMaybe<BadgeUsersConnectionWhere>
  connect?: InputMaybe<Array<BadgeUsersConnectFieldInput>>
  disconnect?: InputMaybe<Array<BadgeUsersDisconnectFieldInput>>
  create?: InputMaybe<Array<BadgeUsersCreateFieldInput>>
  update?: InputMaybe<BadgeUsersUpdateConnectionInput>
  delete?: InputMaybe<Array<BadgeUsersDeleteFieldInput>>
}

export type BadgeWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  OR?: InputMaybe<Array<BadgeWhere>>
  AND?: InputMaybe<Array<BadgeWhere>>
  NOT?: InputMaybe<BadgeWhere>
  /** @deprecated Use `users_SOME` instead. */
  users?: InputMaybe<UserWhere>
  /** @deprecated Use `users_NONE` instead. */
  users_NOT?: InputMaybe<UserWhere>
  /** Return Badges where all of the related Users match this filter */
  users_ALL?: InputMaybe<UserWhere>
  /** Return Badges where none of the related Users match this filter */
  users_NONE?: InputMaybe<UserWhere>
  /** Return Badges where one of the related Users match this filter */
  users_SINGLE?: InputMaybe<UserWhere>
  /** Return Badges where some of the related Users match this filter */
  users_SOME?: InputMaybe<UserWhere>
  /** @deprecated Use `usersConnection_SOME` instead. */
  usersConnection?: InputMaybe<BadgeUsersConnectionWhere>
  /** @deprecated Use `usersConnection_NONE` instead. */
  usersConnection_NOT?: InputMaybe<BadgeUsersConnectionWhere>
  /** Return Badges where all of the related BadgeUsersConnections match this filter */
  usersConnection_ALL?: InputMaybe<BadgeUsersConnectionWhere>
  /** Return Badges where none of the related BadgeUsersConnections match this filter */
  usersConnection_NONE?: InputMaybe<BadgeUsersConnectionWhere>
  /** Return Badges where one of the related BadgeUsersConnections match this filter */
  usersConnection_SINGLE?: InputMaybe<BadgeUsersConnectionWhere>
  /** Return Badges where some of the related BadgeUsersConnections match this filter */
  usersConnection_SOME?: InputMaybe<BadgeUsersConnectionWhere>
  usersAggregate?: InputMaybe<BadgeUsersAggregateInput>
  /** @deprecated Use `requiresTopics_SOME` instead. */
  requiresTopics?: InputMaybe<TopicWhere>
  /** @deprecated Use `requiresTopics_NONE` instead. */
  requiresTopics_NOT?: InputMaybe<TopicWhere>
  /** Return Badges where all of the related Topics match this filter */
  requiresTopics_ALL?: InputMaybe<TopicWhere>
  /** Return Badges where none of the related Topics match this filter */
  requiresTopics_NONE?: InputMaybe<TopicWhere>
  /** Return Badges where one of the related Topics match this filter */
  requiresTopics_SINGLE?: InputMaybe<TopicWhere>
  /** Return Badges where some of the related Topics match this filter */
  requiresTopics_SOME?: InputMaybe<TopicWhere>
  /** @deprecated Use `requiresTopicsConnection_SOME` instead. */
  requiresTopicsConnection?: InputMaybe<BadgeRequiresTopicsConnectionWhere>
  /** @deprecated Use `requiresTopicsConnection_NONE` instead. */
  requiresTopicsConnection_NOT?: InputMaybe<BadgeRequiresTopicsConnectionWhere>
  /** Return Badges where all of the related BadgeRequiresTopicsConnections match this filter */
  requiresTopicsConnection_ALL?: InputMaybe<BadgeRequiresTopicsConnectionWhere>
  /** Return Badges where none of the related BadgeRequiresTopicsConnections match this filter */
  requiresTopicsConnection_NONE?: InputMaybe<BadgeRequiresTopicsConnectionWhere>
  /** Return Badges where one of the related BadgeRequiresTopicsConnections match this filter */
  requiresTopicsConnection_SINGLE?: InputMaybe<BadgeRequiresTopicsConnectionWhere>
  /** Return Badges where some of the related BadgeRequiresTopicsConnections match this filter */
  requiresTopicsConnection_SOME?: InputMaybe<BadgeRequiresTopicsConnectionWhere>
  requiresTopicsAggregate?: InputMaybe<BadgeRequiresTopicsAggregateInput>
}

export type CodeOptionCreateInput = {
  code: Scalars["String"]["input"]
}

export type CodeOptionOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  /** Specify one or more CodeOptionSort objects to sort CodeOptions by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<CodeOptionSort>>
}

/** Fields to sort CodeOptions by. The order in which sorts are applied is not guaranteed when specifying many fields in one CodeOptionSort object. */
export type CodeOptionSort = {
  code?: InputMaybe<SortDirection>
}

export type CodeOptionUpdateInput = {
  code?: InputMaybe<Scalars["String"]["input"]>
}

export type CodeOptionWhere = {
  code?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  code_NOT?: InputMaybe<Scalars["String"]["input"]>
  code_IN?: InputMaybe<Array<Scalars["String"]["input"]>>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  code_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>
  code_CONTAINS?: InputMaybe<Scalars["String"]["input"]>
  code_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>
  code_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  code_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  code_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  code_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>
  OR?: InputMaybe<Array<CodeOptionWhere>>
  AND?: InputMaybe<Array<CodeOptionWhere>>
  NOT?: InputMaybe<CodeOptionWhere>
}

export type CodeOutputActivityConnectWhere = {
  node: CodeOutputActivityWhere
}

export type CodeOutputActivityCreateInput = {
  codeSnippet: Scalars["String"]["input"]
  answer: Scalars["String"]["input"]
}

export type CodeOutputActivityOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  /** Specify one or more CodeOutputActivitySort objects to sort CodeOutputActivities by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<CodeOutputActivitySort>>
}

/** Fields to sort CodeOutputActivities by. The order in which sorts are applied is not guaranteed when specifying many fields in one CodeOutputActivitySort object. */
export type CodeOutputActivitySort = {
  id?: InputMaybe<SortDirection>
  codeSnippet?: InputMaybe<SortDirection>
  answer?: InputMaybe<SortDirection>
}

export type CodeOutputActivityUpdateInput = {
  codeSnippet?: InputMaybe<Scalars["String"]["input"]>
  answer?: InputMaybe<Scalars["String"]["input"]>
}

export type CodeOutputActivityWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  codeSnippet?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  codeSnippet_NOT?: InputMaybe<Scalars["String"]["input"]>
  codeSnippet_IN?: InputMaybe<Array<Scalars["String"]["input"]>>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  codeSnippet_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>
  codeSnippet_CONTAINS?: InputMaybe<Scalars["String"]["input"]>
  codeSnippet_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>
  codeSnippet_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  codeSnippet_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  codeSnippet_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  codeSnippet_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>
  answer?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  answer_NOT?: InputMaybe<Scalars["String"]["input"]>
  answer_IN?: InputMaybe<Array<Scalars["String"]["input"]>>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  answer_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>
  answer_CONTAINS?: InputMaybe<Scalars["String"]["input"]>
  answer_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>
  answer_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  answer_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  answer_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  answer_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>
  OR?: InputMaybe<Array<CodeOutputActivityWhere>>
  AND?: InputMaybe<Array<CodeOutputActivityWhere>>
  NOT?: InputMaybe<CodeOutputActivityWhere>
}

export type CompletedCreateInput = {
  completedAt: Scalars["DateTime"]["input"]
  score?: InputMaybe<Scalars["Float"]["input"]>
  timeSpent?: InputMaybe<Scalars["Int"]["input"]>
}

export type CompletedSort = {
  completedAt?: InputMaybe<SortDirection>
  score?: InputMaybe<SortDirection>
  timeSpent?: InputMaybe<SortDirection>
}

export type CompletedUpdateInput = {
  completedAt?: InputMaybe<Scalars["DateTime"]["input"]>
  score?: InputMaybe<Scalars["Float"]["input"]>
  score_ADD?: InputMaybe<Scalars["Float"]["input"]>
  score_SUBTRACT?: InputMaybe<Scalars["Float"]["input"]>
  score_MULTIPLY?: InputMaybe<Scalars["Float"]["input"]>
  score_DIVIDE?: InputMaybe<Scalars["Float"]["input"]>
  timeSpent?: InputMaybe<Scalars["Int"]["input"]>
  timeSpent_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>
  timeSpent_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>
}

export type CompletedWhere = {
  completedAt?: InputMaybe<Scalars["DateTime"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  completedAt_NOT?: InputMaybe<Scalars["DateTime"]["input"]>
  completedAt_IN?: InputMaybe<Array<Scalars["DateTime"]["input"]>>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  completedAt_NOT_IN?: InputMaybe<Array<Scalars["DateTime"]["input"]>>
  completedAt_LT?: InputMaybe<Scalars["DateTime"]["input"]>
  completedAt_LTE?: InputMaybe<Scalars["DateTime"]["input"]>
  completedAt_GT?: InputMaybe<Scalars["DateTime"]["input"]>
  completedAt_GTE?: InputMaybe<Scalars["DateTime"]["input"]>
  score?: InputMaybe<Scalars["Float"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  score_NOT?: InputMaybe<Scalars["Float"]["input"]>
  score_IN?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  score_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>
  score_LT?: InputMaybe<Scalars["Float"]["input"]>
  score_LTE?: InputMaybe<Scalars["Float"]["input"]>
  score_GT?: InputMaybe<Scalars["Float"]["input"]>
  score_GTE?: InputMaybe<Scalars["Float"]["input"]>
  timeSpent?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  timeSpent_NOT?: InputMaybe<Scalars["Int"]["input"]>
  timeSpent_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  timeSpent_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>
  timeSpent_LT?: InputMaybe<Scalars["Int"]["input"]>
  timeSpent_LTE?: InputMaybe<Scalars["Int"]["input"]>
  timeSpent_GT?: InputMaybe<Scalars["Int"]["input"]>
  timeSpent_GTE?: InputMaybe<Scalars["Int"]["input"]>
  OR?: InputMaybe<Array<CompletedWhere>>
  AND?: InputMaybe<Array<CompletedWhere>>
  NOT?: InputMaybe<CompletedWhere>
}

export type ContentConnectWhere = {
  node: ContentWhere
}

export type ContentCreateInput = {
  /** Appears because this input type would be empty otherwise because this type is composed of just generated and/or relationship properties. See https://neo4j.com/docs/graphql-manual/current/troubleshooting/faqs/ */
  _emptyInput?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type ContentOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  /** Specify one or more ContentSort objects to sort Contents by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ContentSort>>
}

/** Fields to sort Contents by. The order in which sorts are applied is not guaranteed when specifying many fields in one ContentSort object. */
export type ContentSort = {
  id?: InputMaybe<SortDirection>
}

export type ContentUpdateInput = {
  /** Appears because this input type would be empty otherwise because this type is composed of just generated and/or relationship properties. See https://neo4j.com/docs/graphql-manual/current/troubleshooting/faqs/ */
  _emptyInput?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type ContentWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  OR?: InputMaybe<Array<ContentWhere>>
  AND?: InputMaybe<Array<ContentWhere>>
  NOT?: InputMaybe<ContentWhere>
}

export type FillInTheBlankActivityConnectWhere = {
  node: FillInTheBlankActivityWhere
}

export type FillInTheBlankActivityCreateInput = {
  answer: Array<Scalars["String"]["input"]>
}

export type FillInTheBlankActivityOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  /** Specify one or more FillInTheBlankActivitySort objects to sort FillInTheBlankActivities by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<FillInTheBlankActivitySort>>
}

/** Fields to sort FillInTheBlankActivities by. The order in which sorts are applied is not guaranteed when specifying many fields in one FillInTheBlankActivitySort object. */
export type FillInTheBlankActivitySort = {
  id?: InputMaybe<SortDirection>
}

export type FillInTheBlankActivityUpdateInput = {
  answer?: InputMaybe<Array<Scalars["String"]["input"]>>
  answer_POP?: InputMaybe<Scalars["Int"]["input"]>
  answer_PUSH?: InputMaybe<Array<Scalars["String"]["input"]>>
}

export type FillInTheBlankActivityWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  answer?: InputMaybe<Array<Scalars["String"]["input"]>>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  answer_NOT?: InputMaybe<Array<Scalars["String"]["input"]>>
  answer_INCLUDES?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  answer_NOT_INCLUDES?: InputMaybe<Scalars["String"]["input"]>
  OR?: InputMaybe<Array<FillInTheBlankActivityWhere>>
  AND?: InputMaybe<Array<FillInTheBlankActivityWhere>>
  NOT?: InputMaybe<FillInTheBlankActivityWhere>
}

export type GapSegmentCreateInput = {
  size: Scalars["Int"]["input"]
}

export type GapSegmentOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  /** Specify one or more GapSegmentSort objects to sort GapSegments by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<GapSegmentSort>>
}

/** Fields to sort GapSegments by. The order in which sorts are applied is not guaranteed when specifying many fields in one GapSegmentSort object. */
export type GapSegmentSort = {
  id?: InputMaybe<SortDirection>
  size?: InputMaybe<SortDirection>
}

export type GapSegmentUpdateInput = {
  size?: InputMaybe<Scalars["Int"]["input"]>
  size_INCREMENT?: InputMaybe<Scalars["Int"]["input"]>
  size_DECREMENT?: InputMaybe<Scalars["Int"]["input"]>
}

export type GapSegmentWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  size?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  size_NOT?: InputMaybe<Scalars["Int"]["input"]>
  size_IN?: InputMaybe<Array<Scalars["Int"]["input"]>>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  size_NOT_IN?: InputMaybe<Array<Scalars["Int"]["input"]>>
  size_LT?: InputMaybe<Scalars["Int"]["input"]>
  size_LTE?: InputMaybe<Scalars["Int"]["input"]>
  size_GT?: InputMaybe<Scalars["Int"]["input"]>
  size_GTE?: InputMaybe<Scalars["Int"]["input"]>
  OR?: InputMaybe<Array<GapSegmentWhere>>
  AND?: InputMaybe<Array<GapSegmentWhere>>
  NOT?: InputMaybe<GapSegmentWhere>
}

export type LessonActivitiesCodeOutputActivityConnectFieldInput = {
  where?: InputMaybe<CodeOutputActivityConnectWhere>
}

export type LessonActivitiesCodeOutputActivityConnectionWhere = {
  AND?: InputMaybe<Array<LessonActivitiesCodeOutputActivityConnectionWhere>>
  OR?: InputMaybe<Array<LessonActivitiesCodeOutputActivityConnectionWhere>>
  NOT?: InputMaybe<LessonActivitiesCodeOutputActivityConnectionWhere>
  node?: InputMaybe<CodeOutputActivityWhere>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<CodeOutputActivityWhere>
}

export type LessonActivitiesCodeOutputActivityCreateFieldInput = {
  node: CodeOutputActivityCreateInput
}

export type LessonActivitiesCodeOutputActivityDeleteFieldInput = {
  where?: InputMaybe<LessonActivitiesCodeOutputActivityConnectionWhere>
}

export type LessonActivitiesCodeOutputActivityDisconnectFieldInput = {
  where?: InputMaybe<LessonActivitiesCodeOutputActivityConnectionWhere>
}

export type LessonActivitiesCodeOutputActivityFieldInput = {
  connect?: InputMaybe<Array<LessonActivitiesCodeOutputActivityConnectFieldInput>>
  create?: InputMaybe<Array<LessonActivitiesCodeOutputActivityCreateFieldInput>>
}

export type LessonActivitiesCodeOutputActivityUpdateConnectionInput = {
  node?: InputMaybe<CodeOutputActivityUpdateInput>
}

export type LessonActivitiesCodeOutputActivityUpdateFieldInput = {
  where?: InputMaybe<LessonActivitiesCodeOutputActivityConnectionWhere>
  connect?: InputMaybe<Array<LessonActivitiesCodeOutputActivityConnectFieldInput>>
  disconnect?: InputMaybe<Array<LessonActivitiesCodeOutputActivityDisconnectFieldInput>>
  create?: InputMaybe<Array<LessonActivitiesCodeOutputActivityCreateFieldInput>>
  update?: InputMaybe<LessonActivitiesCodeOutputActivityUpdateConnectionInput>
  delete?: InputMaybe<Array<LessonActivitiesCodeOutputActivityDeleteFieldInput>>
}

export type LessonActivitiesConnectInput = {
  SingleChoiceActivity?: InputMaybe<Array<LessonActivitiesSingleChoiceActivityConnectFieldInput>>
  CodeOutputActivity?: InputMaybe<Array<LessonActivitiesCodeOutputActivityConnectFieldInput>>
  MultipleChoiceActivity?: InputMaybe<Array<LessonActivitiesMultipleChoiceActivityConnectFieldInput>>
  PairMatchingActivity?: InputMaybe<Array<LessonActivitiesPairMatchingActivityConnectFieldInput>>
  FillInTheBlankActivity?: InputMaybe<Array<LessonActivitiesFillInTheBlankActivityConnectFieldInput>>
}

export type LessonActivitiesConnectionWhere = {
  SingleChoiceActivity?: InputMaybe<LessonActivitiesSingleChoiceActivityConnectionWhere>
  CodeOutputActivity?: InputMaybe<LessonActivitiesCodeOutputActivityConnectionWhere>
  MultipleChoiceActivity?: InputMaybe<LessonActivitiesMultipleChoiceActivityConnectionWhere>
  PairMatchingActivity?: InputMaybe<LessonActivitiesPairMatchingActivityConnectionWhere>
  FillInTheBlankActivity?: InputMaybe<LessonActivitiesFillInTheBlankActivityConnectionWhere>
}

export type LessonActivitiesCreateFieldInput = {
  SingleChoiceActivity?: InputMaybe<Array<LessonActivitiesSingleChoiceActivityCreateFieldInput>>
  CodeOutputActivity?: InputMaybe<Array<LessonActivitiesCodeOutputActivityCreateFieldInput>>
  MultipleChoiceActivity?: InputMaybe<Array<LessonActivitiesMultipleChoiceActivityCreateFieldInput>>
  PairMatchingActivity?: InputMaybe<Array<LessonActivitiesPairMatchingActivityCreateFieldInput>>
  FillInTheBlankActivity?: InputMaybe<Array<LessonActivitiesFillInTheBlankActivityCreateFieldInput>>
}

export type LessonActivitiesCreateInput = {
  SingleChoiceActivity?: InputMaybe<LessonActivitiesSingleChoiceActivityFieldInput>
  CodeOutputActivity?: InputMaybe<LessonActivitiesCodeOutputActivityFieldInput>
  MultipleChoiceActivity?: InputMaybe<LessonActivitiesMultipleChoiceActivityFieldInput>
  PairMatchingActivity?: InputMaybe<LessonActivitiesPairMatchingActivityFieldInput>
  FillInTheBlankActivity?: InputMaybe<LessonActivitiesFillInTheBlankActivityFieldInput>
}

export type LessonActivitiesDeleteInput = {
  SingleChoiceActivity?: InputMaybe<Array<LessonActivitiesSingleChoiceActivityDeleteFieldInput>>
  CodeOutputActivity?: InputMaybe<Array<LessonActivitiesCodeOutputActivityDeleteFieldInput>>
  MultipleChoiceActivity?: InputMaybe<Array<LessonActivitiesMultipleChoiceActivityDeleteFieldInput>>
  PairMatchingActivity?: InputMaybe<Array<LessonActivitiesPairMatchingActivityDeleteFieldInput>>
  FillInTheBlankActivity?: InputMaybe<Array<LessonActivitiesFillInTheBlankActivityDeleteFieldInput>>
}

export type LessonActivitiesDisconnectInput = {
  SingleChoiceActivity?: InputMaybe<Array<LessonActivitiesSingleChoiceActivityDisconnectFieldInput>>
  CodeOutputActivity?: InputMaybe<Array<LessonActivitiesCodeOutputActivityDisconnectFieldInput>>
  MultipleChoiceActivity?: InputMaybe<Array<LessonActivitiesMultipleChoiceActivityDisconnectFieldInput>>
  PairMatchingActivity?: InputMaybe<Array<LessonActivitiesPairMatchingActivityDisconnectFieldInput>>
  FillInTheBlankActivity?: InputMaybe<Array<LessonActivitiesFillInTheBlankActivityDisconnectFieldInput>>
}

export type LessonActivitiesFillInTheBlankActivityConnectFieldInput = {
  where?: InputMaybe<FillInTheBlankActivityConnectWhere>
}

export type LessonActivitiesFillInTheBlankActivityConnectionWhere = {
  AND?: InputMaybe<Array<LessonActivitiesFillInTheBlankActivityConnectionWhere>>
  OR?: InputMaybe<Array<LessonActivitiesFillInTheBlankActivityConnectionWhere>>
  NOT?: InputMaybe<LessonActivitiesFillInTheBlankActivityConnectionWhere>
  node?: InputMaybe<FillInTheBlankActivityWhere>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<FillInTheBlankActivityWhere>
}

export type LessonActivitiesFillInTheBlankActivityCreateFieldInput = {
  node: FillInTheBlankActivityCreateInput
}

export type LessonActivitiesFillInTheBlankActivityDeleteFieldInput = {
  where?: InputMaybe<LessonActivitiesFillInTheBlankActivityConnectionWhere>
}

export type LessonActivitiesFillInTheBlankActivityDisconnectFieldInput = {
  where?: InputMaybe<LessonActivitiesFillInTheBlankActivityConnectionWhere>
}

export type LessonActivitiesFillInTheBlankActivityFieldInput = {
  connect?: InputMaybe<Array<LessonActivitiesFillInTheBlankActivityConnectFieldInput>>
  create?: InputMaybe<Array<LessonActivitiesFillInTheBlankActivityCreateFieldInput>>
}

export type LessonActivitiesFillInTheBlankActivityUpdateConnectionInput = {
  node?: InputMaybe<FillInTheBlankActivityUpdateInput>
}

export type LessonActivitiesFillInTheBlankActivityUpdateFieldInput = {
  where?: InputMaybe<LessonActivitiesFillInTheBlankActivityConnectionWhere>
  connect?: InputMaybe<Array<LessonActivitiesFillInTheBlankActivityConnectFieldInput>>
  disconnect?: InputMaybe<Array<LessonActivitiesFillInTheBlankActivityDisconnectFieldInput>>
  create?: InputMaybe<Array<LessonActivitiesFillInTheBlankActivityCreateFieldInput>>
  update?: InputMaybe<LessonActivitiesFillInTheBlankActivityUpdateConnectionInput>
  delete?: InputMaybe<Array<LessonActivitiesFillInTheBlankActivityDeleteFieldInput>>
}

export type LessonActivitiesMultipleChoiceActivityConnectFieldInput = {
  where?: InputMaybe<MultipleChoiceActivityConnectWhere>
}

export type LessonActivitiesMultipleChoiceActivityConnectionWhere = {
  AND?: InputMaybe<Array<LessonActivitiesMultipleChoiceActivityConnectionWhere>>
  OR?: InputMaybe<Array<LessonActivitiesMultipleChoiceActivityConnectionWhere>>
  NOT?: InputMaybe<LessonActivitiesMultipleChoiceActivityConnectionWhere>
  node?: InputMaybe<MultipleChoiceActivityWhere>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<MultipleChoiceActivityWhere>
}

export type LessonActivitiesMultipleChoiceActivityCreateFieldInput = {
  node: MultipleChoiceActivityCreateInput
}

export type LessonActivitiesMultipleChoiceActivityDeleteFieldInput = {
  where?: InputMaybe<LessonActivitiesMultipleChoiceActivityConnectionWhere>
}

export type LessonActivitiesMultipleChoiceActivityDisconnectFieldInput = {
  where?: InputMaybe<LessonActivitiesMultipleChoiceActivityConnectionWhere>
}

export type LessonActivitiesMultipleChoiceActivityFieldInput = {
  connect?: InputMaybe<Array<LessonActivitiesMultipleChoiceActivityConnectFieldInput>>
  create?: InputMaybe<Array<LessonActivitiesMultipleChoiceActivityCreateFieldInput>>
}

export type LessonActivitiesMultipleChoiceActivityUpdateConnectionInput = {
  node?: InputMaybe<MultipleChoiceActivityUpdateInput>
}

export type LessonActivitiesMultipleChoiceActivityUpdateFieldInput = {
  where?: InputMaybe<LessonActivitiesMultipleChoiceActivityConnectionWhere>
  connect?: InputMaybe<Array<LessonActivitiesMultipleChoiceActivityConnectFieldInput>>
  disconnect?: InputMaybe<Array<LessonActivitiesMultipleChoiceActivityDisconnectFieldInput>>
  create?: InputMaybe<Array<LessonActivitiesMultipleChoiceActivityCreateFieldInput>>
  update?: InputMaybe<LessonActivitiesMultipleChoiceActivityUpdateConnectionInput>
  delete?: InputMaybe<Array<LessonActivitiesMultipleChoiceActivityDeleteFieldInput>>
}

export type LessonActivitiesPairMatchingActivityConnectFieldInput = {
  where?: InputMaybe<PairMatchingActivityConnectWhere>
}

export type LessonActivitiesPairMatchingActivityConnectionWhere = {
  AND?: InputMaybe<Array<LessonActivitiesPairMatchingActivityConnectionWhere>>
  OR?: InputMaybe<Array<LessonActivitiesPairMatchingActivityConnectionWhere>>
  NOT?: InputMaybe<LessonActivitiesPairMatchingActivityConnectionWhere>
  node?: InputMaybe<PairMatchingActivityWhere>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<PairMatchingActivityWhere>
}

export type LessonActivitiesPairMatchingActivityCreateFieldInput = {
  node: PairMatchingActivityCreateInput
}

export type LessonActivitiesPairMatchingActivityDeleteFieldInput = {
  where?: InputMaybe<LessonActivitiesPairMatchingActivityConnectionWhere>
}

export type LessonActivitiesPairMatchingActivityDisconnectFieldInput = {
  where?: InputMaybe<LessonActivitiesPairMatchingActivityConnectionWhere>
}

export type LessonActivitiesPairMatchingActivityFieldInput = {
  connect?: InputMaybe<Array<LessonActivitiesPairMatchingActivityConnectFieldInput>>
  create?: InputMaybe<Array<LessonActivitiesPairMatchingActivityCreateFieldInput>>
}

export type LessonActivitiesPairMatchingActivityUpdateConnectionInput = {
  node?: InputMaybe<PairMatchingActivityUpdateInput>
}

export type LessonActivitiesPairMatchingActivityUpdateFieldInput = {
  where?: InputMaybe<LessonActivitiesPairMatchingActivityConnectionWhere>
  connect?: InputMaybe<Array<LessonActivitiesPairMatchingActivityConnectFieldInput>>
  disconnect?: InputMaybe<Array<LessonActivitiesPairMatchingActivityDisconnectFieldInput>>
  create?: InputMaybe<Array<LessonActivitiesPairMatchingActivityCreateFieldInput>>
  update?: InputMaybe<LessonActivitiesPairMatchingActivityUpdateConnectionInput>
  delete?: InputMaybe<Array<LessonActivitiesPairMatchingActivityDeleteFieldInput>>
}

export type LessonActivitiesSingleChoiceActivityConnectFieldInput = {
  where?: InputMaybe<SingleChoiceActivityConnectWhere>
}

export type LessonActivitiesSingleChoiceActivityConnectionWhere = {
  AND?: InputMaybe<Array<LessonActivitiesSingleChoiceActivityConnectionWhere>>
  OR?: InputMaybe<Array<LessonActivitiesSingleChoiceActivityConnectionWhere>>
  NOT?: InputMaybe<LessonActivitiesSingleChoiceActivityConnectionWhere>
  node?: InputMaybe<SingleChoiceActivityWhere>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<SingleChoiceActivityWhere>
}

export type LessonActivitiesSingleChoiceActivityCreateFieldInput = {
  node: SingleChoiceActivityCreateInput
}

export type LessonActivitiesSingleChoiceActivityDeleteFieldInput = {
  where?: InputMaybe<LessonActivitiesSingleChoiceActivityConnectionWhere>
}

export type LessonActivitiesSingleChoiceActivityDisconnectFieldInput = {
  where?: InputMaybe<LessonActivitiesSingleChoiceActivityConnectionWhere>
}

export type LessonActivitiesSingleChoiceActivityFieldInput = {
  connect?: InputMaybe<Array<LessonActivitiesSingleChoiceActivityConnectFieldInput>>
  create?: InputMaybe<Array<LessonActivitiesSingleChoiceActivityCreateFieldInput>>
}

export type LessonActivitiesSingleChoiceActivityUpdateConnectionInput = {
  node?: InputMaybe<SingleChoiceActivityUpdateInput>
}

export type LessonActivitiesSingleChoiceActivityUpdateFieldInput = {
  where?: InputMaybe<LessonActivitiesSingleChoiceActivityConnectionWhere>
  connect?: InputMaybe<Array<LessonActivitiesSingleChoiceActivityConnectFieldInput>>
  disconnect?: InputMaybe<Array<LessonActivitiesSingleChoiceActivityDisconnectFieldInput>>
  create?: InputMaybe<Array<LessonActivitiesSingleChoiceActivityCreateFieldInput>>
  update?: InputMaybe<LessonActivitiesSingleChoiceActivityUpdateConnectionInput>
  delete?: InputMaybe<Array<LessonActivitiesSingleChoiceActivityDeleteFieldInput>>
}

export type LessonActivitiesUpdateInput = {
  SingleChoiceActivity?: InputMaybe<Array<LessonActivitiesSingleChoiceActivityUpdateFieldInput>>
  CodeOutputActivity?: InputMaybe<Array<LessonActivitiesCodeOutputActivityUpdateFieldInput>>
  MultipleChoiceActivity?: InputMaybe<Array<LessonActivitiesMultipleChoiceActivityUpdateFieldInput>>
  PairMatchingActivity?: InputMaybe<Array<LessonActivitiesPairMatchingActivityUpdateFieldInput>>
  FillInTheBlankActivity?: InputMaybe<Array<LessonActivitiesFillInTheBlankActivityUpdateFieldInput>>
}

export type LessonConnectInput = {
  activities?: InputMaybe<LessonActivitiesConnectInput>
}

export type LessonConnectWhere = {
  node: LessonWhere
}

export type LessonCreateInput = {
  activities?: InputMaybe<LessonActivitiesCreateInput>
}

export type LessonDeleteInput = {
  activities?: InputMaybe<LessonActivitiesDeleteInput>
}

export type LessonDisconnectInput = {
  activities?: InputMaybe<LessonActivitiesDisconnectInput>
}

export type LessonOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  /** Specify one or more LessonSort objects to sort Lessons by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<LessonSort>>
}

export type LessonRelationInput = {
  activities?: InputMaybe<LessonActivitiesCreateFieldInput>
}

/** Fields to sort Lessons by. The order in which sorts are applied is not guaranteed when specifying many fields in one LessonSort object. */
export type LessonSort = {
  id?: InputMaybe<SortDirection>
}

export type LessonUpdateInput = {
  activities?: InputMaybe<LessonActivitiesUpdateInput>
}

export type LessonWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  OR?: InputMaybe<Array<LessonWhere>>
  AND?: InputMaybe<Array<LessonWhere>>
  NOT?: InputMaybe<LessonWhere>
  /** @deprecated Use `activities_SOME` instead. */
  activities?: InputMaybe<ActivityWhere>
  /** @deprecated Use `activities_NONE` instead. */
  activities_NOT?: InputMaybe<ActivityWhere>
  /** Return Lessons where all of the related Activities match this filter */
  activities_ALL?: InputMaybe<ActivityWhere>
  /** Return Lessons where none of the related Activities match this filter */
  activities_NONE?: InputMaybe<ActivityWhere>
  /** Return Lessons where one of the related Activities match this filter */
  activities_SINGLE?: InputMaybe<ActivityWhere>
  /** Return Lessons where some of the related Activities match this filter */
  activities_SOME?: InputMaybe<ActivityWhere>
  /** @deprecated Use `activitiesConnection_SOME` instead. */
  activitiesConnection?: InputMaybe<LessonActivitiesConnectionWhere>
  /** @deprecated Use `activitiesConnection_NONE` instead. */
  activitiesConnection_NOT?: InputMaybe<LessonActivitiesConnectionWhere>
  /** Return Lessons where all of the related LessonActivitiesConnections match this filter */
  activitiesConnection_ALL?: InputMaybe<LessonActivitiesConnectionWhere>
  /** Return Lessons where none of the related LessonActivitiesConnections match this filter */
  activitiesConnection_NONE?: InputMaybe<LessonActivitiesConnectionWhere>
  /** Return Lessons where one of the related LessonActivitiesConnections match this filter */
  activitiesConnection_SINGLE?: InputMaybe<LessonActivitiesConnectionWhere>
  /** Return Lessons where some of the related LessonActivitiesConnections match this filter */
  activitiesConnection_SOME?: InputMaybe<LessonActivitiesConnectionWhere>
}

export type MultipleChoiceActivityConnectWhere = {
  node: MultipleChoiceActivityWhere
}

export type MultipleChoiceActivityCreateInput = {
  answer: Array<Scalars["String"]["input"]>
}

export type MultipleChoiceActivityOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  /** Specify one or more MultipleChoiceActivitySort objects to sort MultipleChoiceActivities by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<MultipleChoiceActivitySort>>
}

/** Fields to sort MultipleChoiceActivities by. The order in which sorts are applied is not guaranteed when specifying many fields in one MultipleChoiceActivitySort object. */
export type MultipleChoiceActivitySort = {
  id?: InputMaybe<SortDirection>
}

export type MultipleChoiceActivityUpdateInput = {
  answer?: InputMaybe<Array<Scalars["String"]["input"]>>
  answer_POP?: InputMaybe<Scalars["Int"]["input"]>
  answer_PUSH?: InputMaybe<Array<Scalars["String"]["input"]>>
}

export type MultipleChoiceActivityWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  answer?: InputMaybe<Array<Scalars["String"]["input"]>>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  answer_NOT?: InputMaybe<Array<Scalars["String"]["input"]>>
  answer_INCLUDES?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  answer_NOT_INCLUDES?: InputMaybe<Scalars["String"]["input"]>
  OR?: InputMaybe<Array<MultipleChoiceActivityWhere>>
  AND?: InputMaybe<Array<MultipleChoiceActivityWhere>>
  NOT?: InputMaybe<MultipleChoiceActivityWhere>
}

export type OptionContentWhere = {
  TextOption?: InputMaybe<TextOptionWhere>
  CodeOption?: InputMaybe<CodeOptionWhere>
}

export type OptionCreateInput = {
  /** Appears because this input type would be empty otherwise because this type is composed of just generated and/or relationship properties. See https://neo4j.com/docs/graphql-manual/current/troubleshooting/faqs/ */
  _emptyInput?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type OptionOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  /** Specify one or more OptionSort objects to sort Options by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<OptionSort>>
}

/** Fields to sort Options by. The order in which sorts are applied is not guaranteed when specifying many fields in one OptionSort object. */
export type OptionSort = {
  id?: InputMaybe<SortDirection>
}

export type OptionUpdateInput = {
  /** Appears because this input type would be empty otherwise because this type is composed of just generated and/or relationship properties. See https://neo4j.com/docs/graphql-manual/current/troubleshooting/faqs/ */
  _emptyInput?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type OptionWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  OR?: InputMaybe<Array<OptionWhere>>
  AND?: InputMaybe<Array<OptionWhere>>
  NOT?: InputMaybe<OptionWhere>
}

export type PairMatchingActivityConnectWhere = {
  node: PairMatchingActivityWhere
}

export type PairMatchingActivityCreateInput = {
  /** Appears because this input type would be empty otherwise because this type is composed of just generated and/or relationship properties. See https://neo4j.com/docs/graphql-manual/current/troubleshooting/faqs/ */
  _emptyInput?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type PairMatchingActivityOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  /** Specify one or more PairMatchingActivitySort objects to sort PairMatchingActivities by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<PairMatchingActivitySort>>
}

/** Fields to sort PairMatchingActivities by. The order in which sorts are applied is not guaranteed when specifying many fields in one PairMatchingActivitySort object. */
export type PairMatchingActivitySort = {
  id?: InputMaybe<SortDirection>
}

export type PairMatchingActivityUpdateInput = {
  /** Appears because this input type would be empty otherwise because this type is composed of just generated and/or relationship properties. See https://neo4j.com/docs/graphql-manual/current/troubleshooting/faqs/ */
  _emptyInput?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type PairMatchingActivityWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  OR?: InputMaybe<Array<PairMatchingActivityWhere>>
  AND?: InputMaybe<Array<PairMatchingActivityWhere>>
  NOT?: InputMaybe<PairMatchingActivityWhere>
}

export type ProgrammingLanguageConnectInput = {
  topics?: InputMaybe<Array<ProgrammingLanguageTopicsConnectFieldInput>>
}

export type ProgrammingLanguageConnectWhere = {
  node: ProgrammingLanguageWhere
}

export type ProgrammingLanguageCreateInput = {
  name: Scalars["String"]["input"]
  topics?: InputMaybe<ProgrammingLanguageTopicsFieldInput>
}

export type ProgrammingLanguageDeleteInput = {
  topics?: InputMaybe<Array<ProgrammingLanguageTopicsDeleteFieldInput>>
}

export type ProgrammingLanguageDisconnectInput = {
  topics?: InputMaybe<Array<ProgrammingLanguageTopicsDisconnectFieldInput>>
}

export type ProgrammingLanguageOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  /** Specify one or more ProgrammingLanguageSort objects to sort ProgrammingLanguages by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<ProgrammingLanguageSort>>
}

export type ProgrammingLanguageRelationInput = {
  topics?: InputMaybe<Array<ProgrammingLanguageTopicsCreateFieldInput>>
}

/** Fields to sort ProgrammingLanguages by. The order in which sorts are applied is not guaranteed when specifying many fields in one ProgrammingLanguageSort object. */
export type ProgrammingLanguageSort = {
  id?: InputMaybe<SortDirection>
  name?: InputMaybe<SortDirection>
}

export type ProgrammingLanguageTopicsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>
  count_LT?: InputMaybe<Scalars["Int"]["input"]>
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>
  count_GT?: InputMaybe<Scalars["Int"]["input"]>
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>
  AND?: InputMaybe<Array<ProgrammingLanguageTopicsAggregateInput>>
  OR?: InputMaybe<Array<ProgrammingLanguageTopicsAggregateInput>>
  NOT?: InputMaybe<ProgrammingLanguageTopicsAggregateInput>
  node?: InputMaybe<ProgrammingLanguageTopicsNodeAggregationWhereInput>
}

export type ProgrammingLanguageTopicsConnectFieldInput = {
  where?: InputMaybe<TopicConnectWhere>
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"]
  connect?: InputMaybe<Array<TopicConnectInput>>
}

export type ProgrammingLanguageTopicsConnectionSort = {
  node?: InputMaybe<TopicSort>
}

export type ProgrammingLanguageTopicsConnectionWhere = {
  AND?: InputMaybe<Array<ProgrammingLanguageTopicsConnectionWhere>>
  OR?: InputMaybe<Array<ProgrammingLanguageTopicsConnectionWhere>>
  NOT?: InputMaybe<ProgrammingLanguageTopicsConnectionWhere>
  node?: InputMaybe<TopicWhere>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<TopicWhere>
}

export type ProgrammingLanguageTopicsCreateFieldInput = {
  node: TopicCreateInput
}

export type ProgrammingLanguageTopicsDeleteFieldInput = {
  where?: InputMaybe<ProgrammingLanguageTopicsConnectionWhere>
  delete?: InputMaybe<TopicDeleteInput>
}

export type ProgrammingLanguageTopicsDisconnectFieldInput = {
  where?: InputMaybe<ProgrammingLanguageTopicsConnectionWhere>
  disconnect?: InputMaybe<TopicDisconnectInput>
}

export type ProgrammingLanguageTopicsFieldInput = {
  connect?: InputMaybe<Array<ProgrammingLanguageTopicsConnectFieldInput>>
  create?: InputMaybe<Array<ProgrammingLanguageTopicsCreateFieldInput>>
}

export type ProgrammingLanguageTopicsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<ProgrammingLanguageTopicsNodeAggregationWhereInput>>
  OR?: InputMaybe<Array<ProgrammingLanguageTopicsNodeAggregationWhereInput>>
  NOT?: InputMaybe<ProgrammingLanguageTopicsNodeAggregationWhereInput>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>
}

export type ProgrammingLanguageTopicsUpdateConnectionInput = {
  node?: InputMaybe<TopicUpdateInput>
}

export type ProgrammingLanguageTopicsUpdateFieldInput = {
  where?: InputMaybe<ProgrammingLanguageTopicsConnectionWhere>
  connect?: InputMaybe<Array<ProgrammingLanguageTopicsConnectFieldInput>>
  disconnect?: InputMaybe<Array<ProgrammingLanguageTopicsDisconnectFieldInput>>
  create?: InputMaybe<Array<ProgrammingLanguageTopicsCreateFieldInput>>
  update?: InputMaybe<ProgrammingLanguageTopicsUpdateConnectionInput>
  delete?: InputMaybe<Array<ProgrammingLanguageTopicsDeleteFieldInput>>
}

export type ProgrammingLanguageUpdateInput = {
  name?: InputMaybe<Scalars["String"]["input"]>
  topics?: InputMaybe<Array<ProgrammingLanguageTopicsUpdateFieldInput>>
}

export type ProgrammingLanguageWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  name?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT?: InputMaybe<Scalars["String"]["input"]>
  name_IN?: InputMaybe<Array<Scalars["String"]["input"]>>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>
  name_CONTAINS?: InputMaybe<Scalars["String"]["input"]>
  name_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>
  name_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  name_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>
  OR?: InputMaybe<Array<ProgrammingLanguageWhere>>
  AND?: InputMaybe<Array<ProgrammingLanguageWhere>>
  NOT?: InputMaybe<ProgrammingLanguageWhere>
  /** @deprecated Use `topics_SOME` instead. */
  topics?: InputMaybe<TopicWhere>
  /** @deprecated Use `topics_NONE` instead. */
  topics_NOT?: InputMaybe<TopicWhere>
  /** Return ProgrammingLanguages where all of the related Topics match this filter */
  topics_ALL?: InputMaybe<TopicWhere>
  /** Return ProgrammingLanguages where none of the related Topics match this filter */
  topics_NONE?: InputMaybe<TopicWhere>
  /** Return ProgrammingLanguages where one of the related Topics match this filter */
  topics_SINGLE?: InputMaybe<TopicWhere>
  /** Return ProgrammingLanguages where some of the related Topics match this filter */
  topics_SOME?: InputMaybe<TopicWhere>
  /** @deprecated Use `topicsConnection_SOME` instead. */
  topicsConnection?: InputMaybe<ProgrammingLanguageTopicsConnectionWhere>
  /** @deprecated Use `topicsConnection_NONE` instead. */
  topicsConnection_NOT?: InputMaybe<ProgrammingLanguageTopicsConnectionWhere>
  /** Return ProgrammingLanguages where all of the related ProgrammingLanguageTopicsConnections match this filter */
  topicsConnection_ALL?: InputMaybe<ProgrammingLanguageTopicsConnectionWhere>
  /** Return ProgrammingLanguages where none of the related ProgrammingLanguageTopicsConnections match this filter */
  topicsConnection_NONE?: InputMaybe<ProgrammingLanguageTopicsConnectionWhere>
  /** Return ProgrammingLanguages where one of the related ProgrammingLanguageTopicsConnections match this filter */
  topicsConnection_SINGLE?: InputMaybe<ProgrammingLanguageTopicsConnectionWhere>
  /** Return ProgrammingLanguages where some of the related ProgrammingLanguageTopicsConnections match this filter */
  topicsConnection_SOME?: InputMaybe<ProgrammingLanguageTopicsConnectionWhere>
  topicsAggregate?: InputMaybe<ProgrammingLanguageTopicsAggregateInput>
}

/** Input type for options that can be specified on a query operation. */
export type QueryOptions = {
  offset?: InputMaybe<Scalars["Int"]["input"]>
  limit?: InputMaybe<Scalars["Int"]["input"]>
}

export type SegmentWhere = {
  Option?: InputMaybe<OptionWhere>
  GapSegment?: InputMaybe<GapSegmentWhere>
}

export type SingleChoiceActivityConnectWhere = {
  node: SingleChoiceActivityWhere
}

export type SingleChoiceActivityCreateInput = {
  answer: Scalars["String"]["input"]
}

export type SingleChoiceActivityOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  /** Specify one or more SingleChoiceActivitySort objects to sort SingleChoiceActivities by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<SingleChoiceActivitySort>>
}

/** Fields to sort SingleChoiceActivities by. The order in which sorts are applied is not guaranteed when specifying many fields in one SingleChoiceActivitySort object. */
export type SingleChoiceActivitySort = {
  id?: InputMaybe<SortDirection>
  answer?: InputMaybe<SortDirection>
}

export type SingleChoiceActivityUpdateInput = {
  answer?: InputMaybe<Scalars["String"]["input"]>
}

export type SingleChoiceActivityWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  answer?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  answer_NOT?: InputMaybe<Scalars["String"]["input"]>
  answer_IN?: InputMaybe<Array<Scalars["String"]["input"]>>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  answer_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>
  answer_CONTAINS?: InputMaybe<Scalars["String"]["input"]>
  answer_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>
  answer_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  answer_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  answer_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  answer_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>
  OR?: InputMaybe<Array<SingleChoiceActivityWhere>>
  AND?: InputMaybe<Array<SingleChoiceActivityWhere>>
  NOT?: InputMaybe<SingleChoiceActivityWhere>
}

export type StringPairCreateInput = {
  first: Scalars["String"]["input"]
  second: Scalars["String"]["input"]
}

export type StringPairOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  /** Specify one or more StringPairSort objects to sort StringPairs by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<StringPairSort>>
}

/** Fields to sort StringPairs by. The order in which sorts are applied is not guaranteed when specifying many fields in one StringPairSort object. */
export type StringPairSort = {
  first?: InputMaybe<SortDirection>
  second?: InputMaybe<SortDirection>
}

export type StringPairUpdateInput = {
  first?: InputMaybe<Scalars["String"]["input"]>
  second?: InputMaybe<Scalars["String"]["input"]>
}

export type StringPairWhere = {
  first?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  first_NOT?: InputMaybe<Scalars["String"]["input"]>
  first_IN?: InputMaybe<Array<Scalars["String"]["input"]>>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  first_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>
  first_CONTAINS?: InputMaybe<Scalars["String"]["input"]>
  first_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>
  first_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  first_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  first_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  first_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>
  second?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  second_NOT?: InputMaybe<Scalars["String"]["input"]>
  second_IN?: InputMaybe<Array<Scalars["String"]["input"]>>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  second_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>
  second_CONTAINS?: InputMaybe<Scalars["String"]["input"]>
  second_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>
  second_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  second_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  second_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  second_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>
  OR?: InputMaybe<Array<StringPairWhere>>
  AND?: InputMaybe<Array<StringPairWhere>>
  NOT?: InputMaybe<StringPairWhere>
}

export type TagActivitiesCodeOutputActivityConnectFieldInput = {
  where?: InputMaybe<CodeOutputActivityConnectWhere>
}

export type TagActivitiesCodeOutputActivityConnectionWhere = {
  AND?: InputMaybe<Array<TagActivitiesCodeOutputActivityConnectionWhere>>
  OR?: InputMaybe<Array<TagActivitiesCodeOutputActivityConnectionWhere>>
  NOT?: InputMaybe<TagActivitiesCodeOutputActivityConnectionWhere>
  node?: InputMaybe<CodeOutputActivityWhere>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<CodeOutputActivityWhere>
}

export type TagActivitiesCodeOutputActivityCreateFieldInput = {
  node: CodeOutputActivityCreateInput
}

export type TagActivitiesCodeOutputActivityDeleteFieldInput = {
  where?: InputMaybe<TagActivitiesCodeOutputActivityConnectionWhere>
}

export type TagActivitiesCodeOutputActivityDisconnectFieldInput = {
  where?: InputMaybe<TagActivitiesCodeOutputActivityConnectionWhere>
}

export type TagActivitiesCodeOutputActivityFieldInput = {
  connect?: InputMaybe<Array<TagActivitiesCodeOutputActivityConnectFieldInput>>
  create?: InputMaybe<Array<TagActivitiesCodeOutputActivityCreateFieldInput>>
}

export type TagActivitiesCodeOutputActivityUpdateConnectionInput = {
  node?: InputMaybe<CodeOutputActivityUpdateInput>
}

export type TagActivitiesCodeOutputActivityUpdateFieldInput = {
  where?: InputMaybe<TagActivitiesCodeOutputActivityConnectionWhere>
  connect?: InputMaybe<Array<TagActivitiesCodeOutputActivityConnectFieldInput>>
  disconnect?: InputMaybe<Array<TagActivitiesCodeOutputActivityDisconnectFieldInput>>
  create?: InputMaybe<Array<TagActivitiesCodeOutputActivityCreateFieldInput>>
  update?: InputMaybe<TagActivitiesCodeOutputActivityUpdateConnectionInput>
  delete?: InputMaybe<Array<TagActivitiesCodeOutputActivityDeleteFieldInput>>
}

export type TagActivitiesConnectInput = {
  SingleChoiceActivity?: InputMaybe<Array<TagActivitiesSingleChoiceActivityConnectFieldInput>>
  CodeOutputActivity?: InputMaybe<Array<TagActivitiesCodeOutputActivityConnectFieldInput>>
  MultipleChoiceActivity?: InputMaybe<Array<TagActivitiesMultipleChoiceActivityConnectFieldInput>>
  PairMatchingActivity?: InputMaybe<Array<TagActivitiesPairMatchingActivityConnectFieldInput>>
  FillInTheBlankActivity?: InputMaybe<Array<TagActivitiesFillInTheBlankActivityConnectFieldInput>>
}

export type TagActivitiesConnectionWhere = {
  SingleChoiceActivity?: InputMaybe<TagActivitiesSingleChoiceActivityConnectionWhere>
  CodeOutputActivity?: InputMaybe<TagActivitiesCodeOutputActivityConnectionWhere>
  MultipleChoiceActivity?: InputMaybe<TagActivitiesMultipleChoiceActivityConnectionWhere>
  PairMatchingActivity?: InputMaybe<TagActivitiesPairMatchingActivityConnectionWhere>
  FillInTheBlankActivity?: InputMaybe<TagActivitiesFillInTheBlankActivityConnectionWhere>
}

export type TagActivitiesCreateFieldInput = {
  SingleChoiceActivity?: InputMaybe<Array<TagActivitiesSingleChoiceActivityCreateFieldInput>>
  CodeOutputActivity?: InputMaybe<Array<TagActivitiesCodeOutputActivityCreateFieldInput>>
  MultipleChoiceActivity?: InputMaybe<Array<TagActivitiesMultipleChoiceActivityCreateFieldInput>>
  PairMatchingActivity?: InputMaybe<Array<TagActivitiesPairMatchingActivityCreateFieldInput>>
  FillInTheBlankActivity?: InputMaybe<Array<TagActivitiesFillInTheBlankActivityCreateFieldInput>>
}

export type TagActivitiesCreateInput = {
  SingleChoiceActivity?: InputMaybe<TagActivitiesSingleChoiceActivityFieldInput>
  CodeOutputActivity?: InputMaybe<TagActivitiesCodeOutputActivityFieldInput>
  MultipleChoiceActivity?: InputMaybe<TagActivitiesMultipleChoiceActivityFieldInput>
  PairMatchingActivity?: InputMaybe<TagActivitiesPairMatchingActivityFieldInput>
  FillInTheBlankActivity?: InputMaybe<TagActivitiesFillInTheBlankActivityFieldInput>
}

export type TagActivitiesDeleteInput = {
  SingleChoiceActivity?: InputMaybe<Array<TagActivitiesSingleChoiceActivityDeleteFieldInput>>
  CodeOutputActivity?: InputMaybe<Array<TagActivitiesCodeOutputActivityDeleteFieldInput>>
  MultipleChoiceActivity?: InputMaybe<Array<TagActivitiesMultipleChoiceActivityDeleteFieldInput>>
  PairMatchingActivity?: InputMaybe<Array<TagActivitiesPairMatchingActivityDeleteFieldInput>>
  FillInTheBlankActivity?: InputMaybe<Array<TagActivitiesFillInTheBlankActivityDeleteFieldInput>>
}

export type TagActivitiesDisconnectInput = {
  SingleChoiceActivity?: InputMaybe<Array<TagActivitiesSingleChoiceActivityDisconnectFieldInput>>
  CodeOutputActivity?: InputMaybe<Array<TagActivitiesCodeOutputActivityDisconnectFieldInput>>
  MultipleChoiceActivity?: InputMaybe<Array<TagActivitiesMultipleChoiceActivityDisconnectFieldInput>>
  PairMatchingActivity?: InputMaybe<Array<TagActivitiesPairMatchingActivityDisconnectFieldInput>>
  FillInTheBlankActivity?: InputMaybe<Array<TagActivitiesFillInTheBlankActivityDisconnectFieldInput>>
}

export type TagActivitiesFillInTheBlankActivityConnectFieldInput = {
  where?: InputMaybe<FillInTheBlankActivityConnectWhere>
}

export type TagActivitiesFillInTheBlankActivityConnectionWhere = {
  AND?: InputMaybe<Array<TagActivitiesFillInTheBlankActivityConnectionWhere>>
  OR?: InputMaybe<Array<TagActivitiesFillInTheBlankActivityConnectionWhere>>
  NOT?: InputMaybe<TagActivitiesFillInTheBlankActivityConnectionWhere>
  node?: InputMaybe<FillInTheBlankActivityWhere>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<FillInTheBlankActivityWhere>
}

export type TagActivitiesFillInTheBlankActivityCreateFieldInput = {
  node: FillInTheBlankActivityCreateInput
}

export type TagActivitiesFillInTheBlankActivityDeleteFieldInput = {
  where?: InputMaybe<TagActivitiesFillInTheBlankActivityConnectionWhere>
}

export type TagActivitiesFillInTheBlankActivityDisconnectFieldInput = {
  where?: InputMaybe<TagActivitiesFillInTheBlankActivityConnectionWhere>
}

export type TagActivitiesFillInTheBlankActivityFieldInput = {
  connect?: InputMaybe<Array<TagActivitiesFillInTheBlankActivityConnectFieldInput>>
  create?: InputMaybe<Array<TagActivitiesFillInTheBlankActivityCreateFieldInput>>
}

export type TagActivitiesFillInTheBlankActivityUpdateConnectionInput = {
  node?: InputMaybe<FillInTheBlankActivityUpdateInput>
}

export type TagActivitiesFillInTheBlankActivityUpdateFieldInput = {
  where?: InputMaybe<TagActivitiesFillInTheBlankActivityConnectionWhere>
  connect?: InputMaybe<Array<TagActivitiesFillInTheBlankActivityConnectFieldInput>>
  disconnect?: InputMaybe<Array<TagActivitiesFillInTheBlankActivityDisconnectFieldInput>>
  create?: InputMaybe<Array<TagActivitiesFillInTheBlankActivityCreateFieldInput>>
  update?: InputMaybe<TagActivitiesFillInTheBlankActivityUpdateConnectionInput>
  delete?: InputMaybe<Array<TagActivitiesFillInTheBlankActivityDeleteFieldInput>>
}

export type TagActivitiesMultipleChoiceActivityConnectFieldInput = {
  where?: InputMaybe<MultipleChoiceActivityConnectWhere>
}

export type TagActivitiesMultipleChoiceActivityConnectionWhere = {
  AND?: InputMaybe<Array<TagActivitiesMultipleChoiceActivityConnectionWhere>>
  OR?: InputMaybe<Array<TagActivitiesMultipleChoiceActivityConnectionWhere>>
  NOT?: InputMaybe<TagActivitiesMultipleChoiceActivityConnectionWhere>
  node?: InputMaybe<MultipleChoiceActivityWhere>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<MultipleChoiceActivityWhere>
}

export type TagActivitiesMultipleChoiceActivityCreateFieldInput = {
  node: MultipleChoiceActivityCreateInput
}

export type TagActivitiesMultipleChoiceActivityDeleteFieldInput = {
  where?: InputMaybe<TagActivitiesMultipleChoiceActivityConnectionWhere>
}

export type TagActivitiesMultipleChoiceActivityDisconnectFieldInput = {
  where?: InputMaybe<TagActivitiesMultipleChoiceActivityConnectionWhere>
}

export type TagActivitiesMultipleChoiceActivityFieldInput = {
  connect?: InputMaybe<Array<TagActivitiesMultipleChoiceActivityConnectFieldInput>>
  create?: InputMaybe<Array<TagActivitiesMultipleChoiceActivityCreateFieldInput>>
}

export type TagActivitiesMultipleChoiceActivityUpdateConnectionInput = {
  node?: InputMaybe<MultipleChoiceActivityUpdateInput>
}

export type TagActivitiesMultipleChoiceActivityUpdateFieldInput = {
  where?: InputMaybe<TagActivitiesMultipleChoiceActivityConnectionWhere>
  connect?: InputMaybe<Array<TagActivitiesMultipleChoiceActivityConnectFieldInput>>
  disconnect?: InputMaybe<Array<TagActivitiesMultipleChoiceActivityDisconnectFieldInput>>
  create?: InputMaybe<Array<TagActivitiesMultipleChoiceActivityCreateFieldInput>>
  update?: InputMaybe<TagActivitiesMultipleChoiceActivityUpdateConnectionInput>
  delete?: InputMaybe<Array<TagActivitiesMultipleChoiceActivityDeleteFieldInput>>
}

export type TagActivitiesPairMatchingActivityConnectFieldInput = {
  where?: InputMaybe<PairMatchingActivityConnectWhere>
}

export type TagActivitiesPairMatchingActivityConnectionWhere = {
  AND?: InputMaybe<Array<TagActivitiesPairMatchingActivityConnectionWhere>>
  OR?: InputMaybe<Array<TagActivitiesPairMatchingActivityConnectionWhere>>
  NOT?: InputMaybe<TagActivitiesPairMatchingActivityConnectionWhere>
  node?: InputMaybe<PairMatchingActivityWhere>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<PairMatchingActivityWhere>
}

export type TagActivitiesPairMatchingActivityCreateFieldInput = {
  node: PairMatchingActivityCreateInput
}

export type TagActivitiesPairMatchingActivityDeleteFieldInput = {
  where?: InputMaybe<TagActivitiesPairMatchingActivityConnectionWhere>
}

export type TagActivitiesPairMatchingActivityDisconnectFieldInput = {
  where?: InputMaybe<TagActivitiesPairMatchingActivityConnectionWhere>
}

export type TagActivitiesPairMatchingActivityFieldInput = {
  connect?: InputMaybe<Array<TagActivitiesPairMatchingActivityConnectFieldInput>>
  create?: InputMaybe<Array<TagActivitiesPairMatchingActivityCreateFieldInput>>
}

export type TagActivitiesPairMatchingActivityUpdateConnectionInput = {
  node?: InputMaybe<PairMatchingActivityUpdateInput>
}

export type TagActivitiesPairMatchingActivityUpdateFieldInput = {
  where?: InputMaybe<TagActivitiesPairMatchingActivityConnectionWhere>
  connect?: InputMaybe<Array<TagActivitiesPairMatchingActivityConnectFieldInput>>
  disconnect?: InputMaybe<Array<TagActivitiesPairMatchingActivityDisconnectFieldInput>>
  create?: InputMaybe<Array<TagActivitiesPairMatchingActivityCreateFieldInput>>
  update?: InputMaybe<TagActivitiesPairMatchingActivityUpdateConnectionInput>
  delete?: InputMaybe<Array<TagActivitiesPairMatchingActivityDeleteFieldInput>>
}

export type TagActivitiesSingleChoiceActivityConnectFieldInput = {
  where?: InputMaybe<SingleChoiceActivityConnectWhere>
}

export type TagActivitiesSingleChoiceActivityConnectionWhere = {
  AND?: InputMaybe<Array<TagActivitiesSingleChoiceActivityConnectionWhere>>
  OR?: InputMaybe<Array<TagActivitiesSingleChoiceActivityConnectionWhere>>
  NOT?: InputMaybe<TagActivitiesSingleChoiceActivityConnectionWhere>
  node?: InputMaybe<SingleChoiceActivityWhere>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<SingleChoiceActivityWhere>
}

export type TagActivitiesSingleChoiceActivityCreateFieldInput = {
  node: SingleChoiceActivityCreateInput
}

export type TagActivitiesSingleChoiceActivityDeleteFieldInput = {
  where?: InputMaybe<TagActivitiesSingleChoiceActivityConnectionWhere>
}

export type TagActivitiesSingleChoiceActivityDisconnectFieldInput = {
  where?: InputMaybe<TagActivitiesSingleChoiceActivityConnectionWhere>
}

export type TagActivitiesSingleChoiceActivityFieldInput = {
  connect?: InputMaybe<Array<TagActivitiesSingleChoiceActivityConnectFieldInput>>
  create?: InputMaybe<Array<TagActivitiesSingleChoiceActivityCreateFieldInput>>
}

export type TagActivitiesSingleChoiceActivityUpdateConnectionInput = {
  node?: InputMaybe<SingleChoiceActivityUpdateInput>
}

export type TagActivitiesSingleChoiceActivityUpdateFieldInput = {
  where?: InputMaybe<TagActivitiesSingleChoiceActivityConnectionWhere>
  connect?: InputMaybe<Array<TagActivitiesSingleChoiceActivityConnectFieldInput>>
  disconnect?: InputMaybe<Array<TagActivitiesSingleChoiceActivityDisconnectFieldInput>>
  create?: InputMaybe<Array<TagActivitiesSingleChoiceActivityCreateFieldInput>>
  update?: InputMaybe<TagActivitiesSingleChoiceActivityUpdateConnectionInput>
  delete?: InputMaybe<Array<TagActivitiesSingleChoiceActivityDeleteFieldInput>>
}

export type TagActivitiesUpdateInput = {
  SingleChoiceActivity?: InputMaybe<Array<TagActivitiesSingleChoiceActivityUpdateFieldInput>>
  CodeOutputActivity?: InputMaybe<Array<TagActivitiesCodeOutputActivityUpdateFieldInput>>
  MultipleChoiceActivity?: InputMaybe<Array<TagActivitiesMultipleChoiceActivityUpdateFieldInput>>
  PairMatchingActivity?: InputMaybe<Array<TagActivitiesPairMatchingActivityUpdateFieldInput>>
  FillInTheBlankActivity?: InputMaybe<Array<TagActivitiesFillInTheBlankActivityUpdateFieldInput>>
}

export type TagConnectInput = {
  name?: InputMaybe<TagNameConnectFieldInput>
  activities?: InputMaybe<TagActivitiesConnectInput>
  topics?: InputMaybe<Array<TagTopicsConnectFieldInput>>
}

export type TagConnectWhere = {
  node: TagWhere
}

export type TagCreateInput = {
  category: TagCategory
  name?: InputMaybe<TagNameFieldInput>
  activities?: InputMaybe<TagActivitiesCreateInput>
  topics?: InputMaybe<TagTopicsFieldInput>
}

export type TagDeleteInput = {
  name?: InputMaybe<TagNameDeleteFieldInput>
  activities?: InputMaybe<TagActivitiesDeleteInput>
  topics?: InputMaybe<Array<TagTopicsDeleteFieldInput>>
}

export type TagDisconnectInput = {
  name?: InputMaybe<TagNameDisconnectFieldInput>
  activities?: InputMaybe<TagActivitiesDisconnectInput>
  topics?: InputMaybe<Array<TagTopicsDisconnectFieldInput>>
}

export type TagNameAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>
  count_LT?: InputMaybe<Scalars["Int"]["input"]>
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>
  count_GT?: InputMaybe<Scalars["Int"]["input"]>
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>
  AND?: InputMaybe<Array<TagNameAggregateInput>>
  OR?: InputMaybe<Array<TagNameAggregateInput>>
  NOT?: InputMaybe<TagNameAggregateInput>
  node?: InputMaybe<TagNameNodeAggregationWhereInput>
}

export type TagNameConnectFieldInput = {
  where?: InputMaybe<TranslatedStringConnectWhere>
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"]
  connect?: InputMaybe<TranslatedStringConnectInput>
}

export type TagNameConnectionSort = {
  node?: InputMaybe<TranslatedStringSort>
}

export type TagNameConnectionWhere = {
  AND?: InputMaybe<Array<TagNameConnectionWhere>>
  OR?: InputMaybe<Array<TagNameConnectionWhere>>
  NOT?: InputMaybe<TagNameConnectionWhere>
  node?: InputMaybe<TranslatedStringWhere>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<TranslatedStringWhere>
}

export type TagNameCreateFieldInput = {
  node: TranslatedStringCreateInput
}

export type TagNameDeleteFieldInput = {
  where?: InputMaybe<TagNameConnectionWhere>
  delete?: InputMaybe<TranslatedStringDeleteInput>
}

export type TagNameDisconnectFieldInput = {
  where?: InputMaybe<TagNameConnectionWhere>
  disconnect?: InputMaybe<TranslatedStringDisconnectInput>
}

export type TagNameFieldInput = {
  connect?: InputMaybe<TagNameConnectFieldInput>
  create?: InputMaybe<TagNameCreateFieldInput>
}

export type TagNameNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TagNameNodeAggregationWhereInput>>
  OR?: InputMaybe<Array<TagNameNodeAggregationWhereInput>>
  NOT?: InputMaybe<TagNameNodeAggregationWhereInput>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  en_EQUAL?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  en_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  en_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  en_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>
  en_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>
  en_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>
  en_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  en_GT?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  en_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  en_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  en_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>
  en_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>
  en_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>
  en_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  en_GTE?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  en_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  en_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  en_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>
  en_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>
  en_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>
  en_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  en_LT?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  en_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  en_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  en_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>
  en_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>
  en_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>
  en_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  en_LTE?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  en_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  en_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  en_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>
  en_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>
  en_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>
  en_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  pt_EQUAL?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  pt_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  pt_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  pt_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>
  pt_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>
  pt_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>
  pt_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  pt_GT?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  pt_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  pt_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  pt_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>
  pt_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>
  pt_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>
  pt_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  pt_GTE?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  pt_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  pt_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  pt_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>
  pt_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>
  pt_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>
  pt_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  pt_LT?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  pt_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  pt_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  pt_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>
  pt_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>
  pt_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>
  pt_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  pt_LTE?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  pt_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  pt_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  pt_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>
  pt_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>
  pt_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>
  pt_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  fr_EQUAL?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  fr_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  fr_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  fr_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>
  fr_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>
  fr_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>
  fr_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  fr_GT?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  fr_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  fr_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  fr_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>
  fr_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>
  fr_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>
  fr_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  fr_GTE?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  fr_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  fr_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  fr_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>
  fr_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>
  fr_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>
  fr_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  fr_LT?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  fr_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  fr_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  fr_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>
  fr_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>
  fr_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>
  fr_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  fr_LTE?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  fr_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  fr_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  fr_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>
  fr_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>
  fr_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>
  fr_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  de_EQUAL?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  de_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  de_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  de_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>
  de_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>
  de_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>
  de_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  de_GT?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  de_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  de_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  de_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>
  de_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>
  de_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>
  de_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  de_GTE?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  de_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  de_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  de_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>
  de_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>
  de_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>
  de_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  de_LT?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  de_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  de_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  de_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>
  de_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>
  de_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>
  de_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  de_LTE?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  de_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  de_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  de_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>
  de_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>
  de_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>
  de_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  es_EQUAL?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  es_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  es_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  es_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>
  es_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>
  es_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>
  es_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  es_GT?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  es_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  es_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  es_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>
  es_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>
  es_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>
  es_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  es_GTE?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  es_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  es_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  es_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>
  es_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>
  es_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>
  es_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  es_LT?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  es_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  es_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  es_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>
  es_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>
  es_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>
  es_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  es_LTE?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  es_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  es_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  es_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>
  es_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>
  es_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>
  es_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>
}

export type TagNameUpdateConnectionInput = {
  node?: InputMaybe<TranslatedStringUpdateInput>
}

export type TagNameUpdateFieldInput = {
  where?: InputMaybe<TagNameConnectionWhere>
  connect?: InputMaybe<TagNameConnectFieldInput>
  disconnect?: InputMaybe<TagNameDisconnectFieldInput>
  create?: InputMaybe<TagNameCreateFieldInput>
  update?: InputMaybe<TagNameUpdateConnectionInput>
  delete?: InputMaybe<TagNameDeleteFieldInput>
}

export type TagOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  /** Specify one or more TagSort objects to sort Tags by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<TagSort>>
}

export type TagRelationInput = {
  name?: InputMaybe<TagNameCreateFieldInput>
  activities?: InputMaybe<TagActivitiesCreateFieldInput>
  topics?: InputMaybe<Array<TagTopicsCreateFieldInput>>
}

/** Fields to sort Tags by. The order in which sorts are applied is not guaranteed when specifying many fields in one TagSort object. */
export type TagSort = {
  id?: InputMaybe<SortDirection>
  category?: InputMaybe<SortDirection>
}

export type TagTopicsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>
  count_LT?: InputMaybe<Scalars["Int"]["input"]>
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>
  count_GT?: InputMaybe<Scalars["Int"]["input"]>
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>
  AND?: InputMaybe<Array<TagTopicsAggregateInput>>
  OR?: InputMaybe<Array<TagTopicsAggregateInput>>
  NOT?: InputMaybe<TagTopicsAggregateInput>
  node?: InputMaybe<TagTopicsNodeAggregationWhereInput>
}

export type TagTopicsConnectFieldInput = {
  where?: InputMaybe<TopicConnectWhere>
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"]
  connect?: InputMaybe<Array<TopicConnectInput>>
}

export type TagTopicsConnectionSort = {
  node?: InputMaybe<TopicSort>
}

export type TagTopicsConnectionWhere = {
  AND?: InputMaybe<Array<TagTopicsConnectionWhere>>
  OR?: InputMaybe<Array<TagTopicsConnectionWhere>>
  NOT?: InputMaybe<TagTopicsConnectionWhere>
  node?: InputMaybe<TopicWhere>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<TopicWhere>
}

export type TagTopicsCreateFieldInput = {
  node: TopicCreateInput
}

export type TagTopicsDeleteFieldInput = {
  where?: InputMaybe<TagTopicsConnectionWhere>
  delete?: InputMaybe<TopicDeleteInput>
}

export type TagTopicsDisconnectFieldInput = {
  where?: InputMaybe<TagTopicsConnectionWhere>
  disconnect?: InputMaybe<TopicDisconnectInput>
}

export type TagTopicsFieldInput = {
  connect?: InputMaybe<Array<TagTopicsConnectFieldInput>>
  create?: InputMaybe<Array<TagTopicsCreateFieldInput>>
}

export type TagTopicsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TagTopicsNodeAggregationWhereInput>>
  OR?: InputMaybe<Array<TagTopicsNodeAggregationWhereInput>>
  NOT?: InputMaybe<TagTopicsNodeAggregationWhereInput>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>
}

export type TagTopicsUpdateConnectionInput = {
  node?: InputMaybe<TopicUpdateInput>
}

export type TagTopicsUpdateFieldInput = {
  where?: InputMaybe<TagTopicsConnectionWhere>
  connect?: InputMaybe<Array<TagTopicsConnectFieldInput>>
  disconnect?: InputMaybe<Array<TagTopicsDisconnectFieldInput>>
  create?: InputMaybe<Array<TagTopicsCreateFieldInput>>
  update?: InputMaybe<TagTopicsUpdateConnectionInput>
  delete?: InputMaybe<Array<TagTopicsDeleteFieldInput>>
}

export type TagUpdateInput = {
  category?: InputMaybe<TagCategory>
  name?: InputMaybe<TagNameUpdateFieldInput>
  activities?: InputMaybe<TagActivitiesUpdateInput>
  topics?: InputMaybe<Array<TagTopicsUpdateFieldInput>>
}

export type TagWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  category?: InputMaybe<TagCategory>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  category_NOT?: InputMaybe<TagCategory>
  category_IN?: InputMaybe<Array<TagCategory>>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  category_NOT_IN?: InputMaybe<Array<TagCategory>>
  OR?: InputMaybe<Array<TagWhere>>
  AND?: InputMaybe<Array<TagWhere>>
  NOT?: InputMaybe<TagWhere>
  name?: InputMaybe<TranslatedStringWhere>
  name_NOT?: InputMaybe<TranslatedStringWhere>
  nameConnection?: InputMaybe<TagNameConnectionWhere>
  nameConnection_NOT?: InputMaybe<TagNameConnectionWhere>
  nameAggregate?: InputMaybe<TagNameAggregateInput>
  /** @deprecated Use `activities_SOME` instead. */
  activities?: InputMaybe<ActivityWhere>
  /** @deprecated Use `activities_NONE` instead. */
  activities_NOT?: InputMaybe<ActivityWhere>
  /** Return Tags where all of the related Activities match this filter */
  activities_ALL?: InputMaybe<ActivityWhere>
  /** Return Tags where none of the related Activities match this filter */
  activities_NONE?: InputMaybe<ActivityWhere>
  /** Return Tags where one of the related Activities match this filter */
  activities_SINGLE?: InputMaybe<ActivityWhere>
  /** Return Tags where some of the related Activities match this filter */
  activities_SOME?: InputMaybe<ActivityWhere>
  /** @deprecated Use `activitiesConnection_SOME` instead. */
  activitiesConnection?: InputMaybe<TagActivitiesConnectionWhere>
  /** @deprecated Use `activitiesConnection_NONE` instead. */
  activitiesConnection_NOT?: InputMaybe<TagActivitiesConnectionWhere>
  /** Return Tags where all of the related TagActivitiesConnections match this filter */
  activitiesConnection_ALL?: InputMaybe<TagActivitiesConnectionWhere>
  /** Return Tags where none of the related TagActivitiesConnections match this filter */
  activitiesConnection_NONE?: InputMaybe<TagActivitiesConnectionWhere>
  /** Return Tags where one of the related TagActivitiesConnections match this filter */
  activitiesConnection_SINGLE?: InputMaybe<TagActivitiesConnectionWhere>
  /** Return Tags where some of the related TagActivitiesConnections match this filter */
  activitiesConnection_SOME?: InputMaybe<TagActivitiesConnectionWhere>
  /** @deprecated Use `topics_SOME` instead. */
  topics?: InputMaybe<TopicWhere>
  /** @deprecated Use `topics_NONE` instead. */
  topics_NOT?: InputMaybe<TopicWhere>
  /** Return Tags where all of the related Topics match this filter */
  topics_ALL?: InputMaybe<TopicWhere>
  /** Return Tags where none of the related Topics match this filter */
  topics_NONE?: InputMaybe<TopicWhere>
  /** Return Tags where one of the related Topics match this filter */
  topics_SINGLE?: InputMaybe<TopicWhere>
  /** Return Tags where some of the related Topics match this filter */
  topics_SOME?: InputMaybe<TopicWhere>
  /** @deprecated Use `topicsConnection_SOME` instead. */
  topicsConnection?: InputMaybe<TagTopicsConnectionWhere>
  /** @deprecated Use `topicsConnection_NONE` instead. */
  topicsConnection_NOT?: InputMaybe<TagTopicsConnectionWhere>
  /** Return Tags where all of the related TagTopicsConnections match this filter */
  topicsConnection_ALL?: InputMaybe<TagTopicsConnectionWhere>
  /** Return Tags where none of the related TagTopicsConnections match this filter */
  topicsConnection_NONE?: InputMaybe<TagTopicsConnectionWhere>
  /** Return Tags where one of the related TagTopicsConnections match this filter */
  topicsConnection_SINGLE?: InputMaybe<TagTopicsConnectionWhere>
  /** Return Tags where some of the related TagTopicsConnections match this filter */
  topicsConnection_SOME?: InputMaybe<TagTopicsConnectionWhere>
  topicsAggregate?: InputMaybe<TagTopicsAggregateInput>
}

export type TaskWhere = {
  Lesson?: InputMaybe<LessonWhere>
  Content?: InputMaybe<ContentWhere>
}

export type TextOptionCreateInput = {
  /** Appears because this input type would be empty otherwise because this type is composed of just generated and/or relationship properties. See https://neo4j.com/docs/graphql-manual/current/troubleshooting/faqs/ */
  _emptyInput?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type TextOptionOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
}

export type TextOptionUpdateInput = {
  /** Appears because this input type would be empty otherwise because this type is composed of just generated and/or relationship properties. See https://neo4j.com/docs/graphql-manual/current/troubleshooting/faqs/ */
  _emptyInput?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type TextOptionWhere = {
  OR?: InputMaybe<Array<TextOptionWhere>>
  AND?: InputMaybe<Array<TextOptionWhere>>
  NOT?: InputMaybe<TextOptionWhere>
}

export type TopicBadgesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>
  count_LT?: InputMaybe<Scalars["Int"]["input"]>
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>
  count_GT?: InputMaybe<Scalars["Int"]["input"]>
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>
  AND?: InputMaybe<Array<TopicBadgesAggregateInput>>
  OR?: InputMaybe<Array<TopicBadgesAggregateInput>>
  NOT?: InputMaybe<TopicBadgesAggregateInput>
  node?: InputMaybe<TopicBadgesNodeAggregationWhereInput>
}

export type TopicBadgesConnectFieldInput = {
  where?: InputMaybe<BadgeConnectWhere>
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"]
  connect?: InputMaybe<Array<BadgeConnectInput>>
}

export type TopicBadgesConnectionSort = {
  node?: InputMaybe<BadgeSort>
}

export type TopicBadgesConnectionWhere = {
  AND?: InputMaybe<Array<TopicBadgesConnectionWhere>>
  OR?: InputMaybe<Array<TopicBadgesConnectionWhere>>
  NOT?: InputMaybe<TopicBadgesConnectionWhere>
  node?: InputMaybe<BadgeWhere>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<BadgeWhere>
}

export type TopicBadgesCreateFieldInput = {
  node: BadgeCreateInput
}

export type TopicBadgesDeleteFieldInput = {
  where?: InputMaybe<TopicBadgesConnectionWhere>
  delete?: InputMaybe<BadgeDeleteInput>
}

export type TopicBadgesDisconnectFieldInput = {
  where?: InputMaybe<TopicBadgesConnectionWhere>
  disconnect?: InputMaybe<BadgeDisconnectInput>
}

export type TopicBadgesFieldInput = {
  connect?: InputMaybe<Array<TopicBadgesConnectFieldInput>>
  create?: InputMaybe<Array<TopicBadgesCreateFieldInput>>
}

export type TopicBadgesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TopicBadgesNodeAggregationWhereInput>>
  OR?: InputMaybe<Array<TopicBadgesNodeAggregationWhereInput>>
  NOT?: InputMaybe<TopicBadgesNodeAggregationWhereInput>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>
}

export type TopicBadgesUpdateConnectionInput = {
  node?: InputMaybe<BadgeUpdateInput>
}

export type TopicBadgesUpdateFieldInput = {
  where?: InputMaybe<TopicBadgesConnectionWhere>
  connect?: InputMaybe<Array<TopicBadgesConnectFieldInput>>
  disconnect?: InputMaybe<Array<TopicBadgesDisconnectFieldInput>>
  create?: InputMaybe<Array<TopicBadgesCreateFieldInput>>
  update?: InputMaybe<TopicBadgesUpdateConnectionInput>
  delete?: InputMaybe<Array<TopicBadgesDeleteFieldInput>>
}

export type TopicConnectInput = {
  languages?: InputMaybe<Array<TopicLanguagesConnectFieldInput>>
  badges?: InputMaybe<Array<TopicBadgesConnectFieldInput>>
  prerequisiteTo?: InputMaybe<Array<TopicPrerequisiteToConnectFieldInput>>
  prerequisites?: InputMaybe<Array<TopicPrerequisitesConnectFieldInput>>
  tags?: InputMaybe<Array<TopicTagsConnectFieldInput>>
  lessons?: InputMaybe<Array<TopicLessonsConnectFieldInput>>
  content?: InputMaybe<Array<TopicContentConnectFieldInput>>
}

export type TopicConnectWhere = {
  node: TopicWhere
}

export type TopicContentAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>
  count_LT?: InputMaybe<Scalars["Int"]["input"]>
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>
  count_GT?: InputMaybe<Scalars["Int"]["input"]>
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>
  AND?: InputMaybe<Array<TopicContentAggregateInput>>
  OR?: InputMaybe<Array<TopicContentAggregateInput>>
  NOT?: InputMaybe<TopicContentAggregateInput>
  node?: InputMaybe<TopicContentNodeAggregationWhereInput>
}

export type TopicContentConnectFieldInput = {
  where?: InputMaybe<ContentConnectWhere>
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"]
}

export type TopicContentConnectionSort = {
  node?: InputMaybe<ContentSort>
}

export type TopicContentConnectionWhere = {
  AND?: InputMaybe<Array<TopicContentConnectionWhere>>
  OR?: InputMaybe<Array<TopicContentConnectionWhere>>
  NOT?: InputMaybe<TopicContentConnectionWhere>
  node?: InputMaybe<ContentWhere>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<ContentWhere>
}

export type TopicContentCreateFieldInput = {
  node: ContentCreateInput
}

export type TopicContentDeleteFieldInput = {
  where?: InputMaybe<TopicContentConnectionWhere>
}

export type TopicContentDisconnectFieldInput = {
  where?: InputMaybe<TopicContentConnectionWhere>
}

export type TopicContentFieldInput = {
  connect?: InputMaybe<Array<TopicContentConnectFieldInput>>
  create?: InputMaybe<Array<TopicContentCreateFieldInput>>
}

export type TopicContentNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TopicContentNodeAggregationWhereInput>>
  OR?: InputMaybe<Array<TopicContentNodeAggregationWhereInput>>
  NOT?: InputMaybe<TopicContentNodeAggregationWhereInput>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>
}

export type TopicContentUpdateConnectionInput = {
  node?: InputMaybe<ContentUpdateInput>
}

export type TopicContentUpdateFieldInput = {
  where?: InputMaybe<TopicContentConnectionWhere>
  connect?: InputMaybe<Array<TopicContentConnectFieldInput>>
  disconnect?: InputMaybe<Array<TopicContentDisconnectFieldInput>>
  create?: InputMaybe<Array<TopicContentCreateFieldInput>>
  update?: InputMaybe<TopicContentUpdateConnectionInput>
  delete?: InputMaybe<Array<TopicContentDeleteFieldInput>>
}

export type TopicCreateInput = {
  difficulty: Difficulty
  languages?: InputMaybe<TopicLanguagesFieldInput>
  badges?: InputMaybe<TopicBadgesFieldInput>
  prerequisiteTo?: InputMaybe<TopicPrerequisiteToFieldInput>
  prerequisites?: InputMaybe<TopicPrerequisitesFieldInput>
  tags?: InputMaybe<TopicTagsFieldInput>
  lessons?: InputMaybe<TopicLessonsFieldInput>
  content?: InputMaybe<TopicContentFieldInput>
}

export type TopicDeleteInput = {
  languages?: InputMaybe<Array<TopicLanguagesDeleteFieldInput>>
  badges?: InputMaybe<Array<TopicBadgesDeleteFieldInput>>
  prerequisiteTo?: InputMaybe<Array<TopicPrerequisiteToDeleteFieldInput>>
  prerequisites?: InputMaybe<Array<TopicPrerequisitesDeleteFieldInput>>
  tags?: InputMaybe<Array<TopicTagsDeleteFieldInput>>
  lessons?: InputMaybe<Array<TopicLessonsDeleteFieldInput>>
  content?: InputMaybe<Array<TopicContentDeleteFieldInput>>
}

export type TopicDisconnectInput = {
  languages?: InputMaybe<Array<TopicLanguagesDisconnectFieldInput>>
  badges?: InputMaybe<Array<TopicBadgesDisconnectFieldInput>>
  prerequisiteTo?: InputMaybe<Array<TopicPrerequisiteToDisconnectFieldInput>>
  prerequisites?: InputMaybe<Array<TopicPrerequisitesDisconnectFieldInput>>
  tags?: InputMaybe<Array<TopicTagsDisconnectFieldInput>>
  lessons?: InputMaybe<Array<TopicLessonsDisconnectFieldInput>>
  content?: InputMaybe<Array<TopicContentDisconnectFieldInput>>
}

export type TopicLanguagesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>
  count_LT?: InputMaybe<Scalars["Int"]["input"]>
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>
  count_GT?: InputMaybe<Scalars["Int"]["input"]>
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>
  AND?: InputMaybe<Array<TopicLanguagesAggregateInput>>
  OR?: InputMaybe<Array<TopicLanguagesAggregateInput>>
  NOT?: InputMaybe<TopicLanguagesAggregateInput>
  node?: InputMaybe<TopicLanguagesNodeAggregationWhereInput>
}

export type TopicLanguagesConnectFieldInput = {
  where?: InputMaybe<ProgrammingLanguageConnectWhere>
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"]
  connect?: InputMaybe<Array<ProgrammingLanguageConnectInput>>
}

export type TopicLanguagesConnectionSort = {
  node?: InputMaybe<ProgrammingLanguageSort>
}

export type TopicLanguagesConnectionWhere = {
  AND?: InputMaybe<Array<TopicLanguagesConnectionWhere>>
  OR?: InputMaybe<Array<TopicLanguagesConnectionWhere>>
  NOT?: InputMaybe<TopicLanguagesConnectionWhere>
  node?: InputMaybe<ProgrammingLanguageWhere>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<ProgrammingLanguageWhere>
}

export type TopicLanguagesCreateFieldInput = {
  node: ProgrammingLanguageCreateInput
}

export type TopicLanguagesDeleteFieldInput = {
  where?: InputMaybe<TopicLanguagesConnectionWhere>
  delete?: InputMaybe<ProgrammingLanguageDeleteInput>
}

export type TopicLanguagesDisconnectFieldInput = {
  where?: InputMaybe<TopicLanguagesConnectionWhere>
  disconnect?: InputMaybe<ProgrammingLanguageDisconnectInput>
}

export type TopicLanguagesFieldInput = {
  connect?: InputMaybe<Array<TopicLanguagesConnectFieldInput>>
  create?: InputMaybe<Array<TopicLanguagesCreateFieldInput>>
}

export type TopicLanguagesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TopicLanguagesNodeAggregationWhereInput>>
  OR?: InputMaybe<Array<TopicLanguagesNodeAggregationWhereInput>>
  NOT?: InputMaybe<TopicLanguagesNodeAggregationWhereInput>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_EQUAL?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_EQUAL?: InputMaybe<Scalars["Float"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_EQUAL?: InputMaybe<Scalars["Int"]["input"]>
  name_AVERAGE_LENGTH_EQUAL?: InputMaybe<Scalars["Float"]["input"]>
  name_LONGEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>
  name_SHORTEST_LENGTH_EQUAL?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GT?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GT?: InputMaybe<Scalars["Float"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GT?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GT?: InputMaybe<Scalars["Int"]["input"]>
  name_AVERAGE_LENGTH_GT?: InputMaybe<Scalars["Float"]["input"]>
  name_LONGEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>
  name_SHORTEST_LENGTH_GT?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_GTE?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_GTE?: InputMaybe<Scalars["Float"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_GTE?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_GTE?: InputMaybe<Scalars["Int"]["input"]>
  name_AVERAGE_LENGTH_GTE?: InputMaybe<Scalars["Float"]["input"]>
  name_LONGEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>
  name_SHORTEST_LENGTH_GTE?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LT?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LT?: InputMaybe<Scalars["Float"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LT?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LT?: InputMaybe<Scalars["Int"]["input"]>
  name_AVERAGE_LENGTH_LT?: InputMaybe<Scalars["Float"]["input"]>
  name_LONGEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>
  name_SHORTEST_LENGTH_LT?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  name_LTE?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_AVERAGE_LTE?: InputMaybe<Scalars["Float"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_LONGEST_LTE?: InputMaybe<Scalars["Int"]["input"]>
  /** @deprecated Please use the explicit _LENGTH version for string aggregation. */
  name_SHORTEST_LTE?: InputMaybe<Scalars["Int"]["input"]>
  name_AVERAGE_LENGTH_LTE?: InputMaybe<Scalars["Float"]["input"]>
  name_LONGEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>
  name_SHORTEST_LENGTH_LTE?: InputMaybe<Scalars["Int"]["input"]>
}

export type TopicLanguagesUpdateConnectionInput = {
  node?: InputMaybe<ProgrammingLanguageUpdateInput>
}

export type TopicLanguagesUpdateFieldInput = {
  where?: InputMaybe<TopicLanguagesConnectionWhere>
  connect?: InputMaybe<Array<TopicLanguagesConnectFieldInput>>
  disconnect?: InputMaybe<Array<TopicLanguagesDisconnectFieldInput>>
  create?: InputMaybe<Array<TopicLanguagesCreateFieldInput>>
  update?: InputMaybe<TopicLanguagesUpdateConnectionInput>
  delete?: InputMaybe<Array<TopicLanguagesDeleteFieldInput>>
}

export type TopicLessonsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>
  count_LT?: InputMaybe<Scalars["Int"]["input"]>
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>
  count_GT?: InputMaybe<Scalars["Int"]["input"]>
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>
  AND?: InputMaybe<Array<TopicLessonsAggregateInput>>
  OR?: InputMaybe<Array<TopicLessonsAggregateInput>>
  NOT?: InputMaybe<TopicLessonsAggregateInput>
  node?: InputMaybe<TopicLessonsNodeAggregationWhereInput>
}

export type TopicLessonsConnectFieldInput = {
  where?: InputMaybe<LessonConnectWhere>
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"]
  connect?: InputMaybe<Array<LessonConnectInput>>
}

export type TopicLessonsConnectionSort = {
  node?: InputMaybe<LessonSort>
}

export type TopicLessonsConnectionWhere = {
  AND?: InputMaybe<Array<TopicLessonsConnectionWhere>>
  OR?: InputMaybe<Array<TopicLessonsConnectionWhere>>
  NOT?: InputMaybe<TopicLessonsConnectionWhere>
  node?: InputMaybe<LessonWhere>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<LessonWhere>
}

export type TopicLessonsCreateFieldInput = {
  node: LessonCreateInput
}

export type TopicLessonsDeleteFieldInput = {
  where?: InputMaybe<TopicLessonsConnectionWhere>
  delete?: InputMaybe<LessonDeleteInput>
}

export type TopicLessonsDisconnectFieldInput = {
  where?: InputMaybe<TopicLessonsConnectionWhere>
  disconnect?: InputMaybe<LessonDisconnectInput>
}

export type TopicLessonsFieldInput = {
  connect?: InputMaybe<Array<TopicLessonsConnectFieldInput>>
  create?: InputMaybe<Array<TopicLessonsCreateFieldInput>>
}

export type TopicLessonsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TopicLessonsNodeAggregationWhereInput>>
  OR?: InputMaybe<Array<TopicLessonsNodeAggregationWhereInput>>
  NOT?: InputMaybe<TopicLessonsNodeAggregationWhereInput>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>
}

export type TopicLessonsUpdateConnectionInput = {
  node?: InputMaybe<LessonUpdateInput>
}

export type TopicLessonsUpdateFieldInput = {
  where?: InputMaybe<TopicLessonsConnectionWhere>
  connect?: InputMaybe<Array<TopicLessonsConnectFieldInput>>
  disconnect?: InputMaybe<Array<TopicLessonsDisconnectFieldInput>>
  create?: InputMaybe<Array<TopicLessonsCreateFieldInput>>
  update?: InputMaybe<TopicLessonsUpdateConnectionInput>
  delete?: InputMaybe<Array<TopicLessonsDeleteFieldInput>>
}

export type TopicOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  /** Specify one or more TopicSort objects to sort Topics by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<TopicSort>>
}

export type TopicPrerequisitesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>
  count_LT?: InputMaybe<Scalars["Int"]["input"]>
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>
  count_GT?: InputMaybe<Scalars["Int"]["input"]>
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>
  AND?: InputMaybe<Array<TopicPrerequisitesAggregateInput>>
  OR?: InputMaybe<Array<TopicPrerequisitesAggregateInput>>
  NOT?: InputMaybe<TopicPrerequisitesAggregateInput>
  node?: InputMaybe<TopicPrerequisitesNodeAggregationWhereInput>
}

export type TopicPrerequisitesConnectFieldInput = {
  where?: InputMaybe<TopicConnectWhere>
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"]
  connect?: InputMaybe<Array<TopicConnectInput>>
}

export type TopicPrerequisitesConnectionSort = {
  node?: InputMaybe<TopicSort>
}

export type TopicPrerequisitesConnectionWhere = {
  AND?: InputMaybe<Array<TopicPrerequisitesConnectionWhere>>
  OR?: InputMaybe<Array<TopicPrerequisitesConnectionWhere>>
  NOT?: InputMaybe<TopicPrerequisitesConnectionWhere>
  node?: InputMaybe<TopicWhere>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<TopicWhere>
}

export type TopicPrerequisitesCreateFieldInput = {
  node: TopicCreateInput
}

export type TopicPrerequisitesDeleteFieldInput = {
  where?: InputMaybe<TopicPrerequisitesConnectionWhere>
  delete?: InputMaybe<TopicDeleteInput>
}

export type TopicPrerequisitesDisconnectFieldInput = {
  where?: InputMaybe<TopicPrerequisitesConnectionWhere>
  disconnect?: InputMaybe<TopicDisconnectInput>
}

export type TopicPrerequisitesFieldInput = {
  connect?: InputMaybe<Array<TopicPrerequisitesConnectFieldInput>>
  create?: InputMaybe<Array<TopicPrerequisitesCreateFieldInput>>
}

export type TopicPrerequisitesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TopicPrerequisitesNodeAggregationWhereInput>>
  OR?: InputMaybe<Array<TopicPrerequisitesNodeAggregationWhereInput>>
  NOT?: InputMaybe<TopicPrerequisitesNodeAggregationWhereInput>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>
}

export type TopicPrerequisitesUpdateConnectionInput = {
  node?: InputMaybe<TopicUpdateInput>
}

export type TopicPrerequisitesUpdateFieldInput = {
  where?: InputMaybe<TopicPrerequisitesConnectionWhere>
  connect?: InputMaybe<Array<TopicPrerequisitesConnectFieldInput>>
  disconnect?: InputMaybe<Array<TopicPrerequisitesDisconnectFieldInput>>
  create?: InputMaybe<Array<TopicPrerequisitesCreateFieldInput>>
  update?: InputMaybe<TopicPrerequisitesUpdateConnectionInput>
  delete?: InputMaybe<Array<TopicPrerequisitesDeleteFieldInput>>
}

export type TopicPrerequisiteToAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>
  count_LT?: InputMaybe<Scalars["Int"]["input"]>
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>
  count_GT?: InputMaybe<Scalars["Int"]["input"]>
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>
  AND?: InputMaybe<Array<TopicPrerequisiteToAggregateInput>>
  OR?: InputMaybe<Array<TopicPrerequisiteToAggregateInput>>
  NOT?: InputMaybe<TopicPrerequisiteToAggregateInput>
  node?: InputMaybe<TopicPrerequisiteToNodeAggregationWhereInput>
}

export type TopicPrerequisiteToConnectFieldInput = {
  where?: InputMaybe<TopicConnectWhere>
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"]
  connect?: InputMaybe<Array<TopicConnectInput>>
}

export type TopicPrerequisiteToConnectionSort = {
  node?: InputMaybe<TopicSort>
}

export type TopicPrerequisiteToConnectionWhere = {
  AND?: InputMaybe<Array<TopicPrerequisiteToConnectionWhere>>
  OR?: InputMaybe<Array<TopicPrerequisiteToConnectionWhere>>
  NOT?: InputMaybe<TopicPrerequisiteToConnectionWhere>
  node?: InputMaybe<TopicWhere>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<TopicWhere>
}

export type TopicPrerequisiteToCreateFieldInput = {
  node: TopicCreateInput
}

export type TopicPrerequisiteToDeleteFieldInput = {
  where?: InputMaybe<TopicPrerequisiteToConnectionWhere>
  delete?: InputMaybe<TopicDeleteInput>
}

export type TopicPrerequisiteToDisconnectFieldInput = {
  where?: InputMaybe<TopicPrerequisiteToConnectionWhere>
  disconnect?: InputMaybe<TopicDisconnectInput>
}

export type TopicPrerequisiteToFieldInput = {
  connect?: InputMaybe<Array<TopicPrerequisiteToConnectFieldInput>>
  create?: InputMaybe<Array<TopicPrerequisiteToCreateFieldInput>>
}

export type TopicPrerequisiteToNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TopicPrerequisiteToNodeAggregationWhereInput>>
  OR?: InputMaybe<Array<TopicPrerequisiteToNodeAggregationWhereInput>>
  NOT?: InputMaybe<TopicPrerequisiteToNodeAggregationWhereInput>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>
}

export type TopicPrerequisiteToUpdateConnectionInput = {
  node?: InputMaybe<TopicUpdateInput>
}

export type TopicPrerequisiteToUpdateFieldInput = {
  where?: InputMaybe<TopicPrerequisiteToConnectionWhere>
  connect?: InputMaybe<Array<TopicPrerequisiteToConnectFieldInput>>
  disconnect?: InputMaybe<Array<TopicPrerequisiteToDisconnectFieldInput>>
  create?: InputMaybe<Array<TopicPrerequisiteToCreateFieldInput>>
  update?: InputMaybe<TopicPrerequisiteToUpdateConnectionInput>
  delete?: InputMaybe<Array<TopicPrerequisiteToDeleteFieldInput>>
}

export type TopicRelationInput = {
  languages?: InputMaybe<Array<TopicLanguagesCreateFieldInput>>
  badges?: InputMaybe<Array<TopicBadgesCreateFieldInput>>
  prerequisiteTo?: InputMaybe<Array<TopicPrerequisiteToCreateFieldInput>>
  prerequisites?: InputMaybe<Array<TopicPrerequisitesCreateFieldInput>>
  tags?: InputMaybe<Array<TopicTagsCreateFieldInput>>
  lessons?: InputMaybe<Array<TopicLessonsCreateFieldInput>>
  content?: InputMaybe<Array<TopicContentCreateFieldInput>>
}

/** Fields to sort Topics by. The order in which sorts are applied is not guaranteed when specifying many fields in one TopicSort object. */
export type TopicSort = {
  id?: InputMaybe<SortDirection>
  difficulty?: InputMaybe<SortDirection>
}

export type TopicTagsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>
  count_LT?: InputMaybe<Scalars["Int"]["input"]>
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>
  count_GT?: InputMaybe<Scalars["Int"]["input"]>
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>
  AND?: InputMaybe<Array<TopicTagsAggregateInput>>
  OR?: InputMaybe<Array<TopicTagsAggregateInput>>
  NOT?: InputMaybe<TopicTagsAggregateInput>
  node?: InputMaybe<TopicTagsNodeAggregationWhereInput>
}

export type TopicTagsConnectFieldInput = {
  where?: InputMaybe<TagConnectWhere>
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"]
  connect?: InputMaybe<Array<TagConnectInput>>
}

export type TopicTagsConnectionSort = {
  node?: InputMaybe<TagSort>
}

export type TopicTagsConnectionWhere = {
  AND?: InputMaybe<Array<TopicTagsConnectionWhere>>
  OR?: InputMaybe<Array<TopicTagsConnectionWhere>>
  NOT?: InputMaybe<TopicTagsConnectionWhere>
  node?: InputMaybe<TagWhere>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<TagWhere>
}

export type TopicTagsCreateFieldInput = {
  node: TagCreateInput
}

export type TopicTagsDeleteFieldInput = {
  where?: InputMaybe<TopicTagsConnectionWhere>
  delete?: InputMaybe<TagDeleteInput>
}

export type TopicTagsDisconnectFieldInput = {
  where?: InputMaybe<TopicTagsConnectionWhere>
  disconnect?: InputMaybe<TagDisconnectInput>
}

export type TopicTagsFieldInput = {
  connect?: InputMaybe<Array<TopicTagsConnectFieldInput>>
  create?: InputMaybe<Array<TopicTagsCreateFieldInput>>
}

export type TopicTagsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TopicTagsNodeAggregationWhereInput>>
  OR?: InputMaybe<Array<TopicTagsNodeAggregationWhereInput>>
  NOT?: InputMaybe<TopicTagsNodeAggregationWhereInput>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>
}

export type TopicTagsUpdateConnectionInput = {
  node?: InputMaybe<TagUpdateInput>
}

export type TopicTagsUpdateFieldInput = {
  where?: InputMaybe<TopicTagsConnectionWhere>
  connect?: InputMaybe<Array<TopicTagsConnectFieldInput>>
  disconnect?: InputMaybe<Array<TopicTagsDisconnectFieldInput>>
  create?: InputMaybe<Array<TopicTagsCreateFieldInput>>
  update?: InputMaybe<TopicTagsUpdateConnectionInput>
  delete?: InputMaybe<Array<TopicTagsDeleteFieldInput>>
}

export type TopicUpdateInput = {
  difficulty?: InputMaybe<Difficulty>
  languages?: InputMaybe<Array<TopicLanguagesUpdateFieldInput>>
  badges?: InputMaybe<Array<TopicBadgesUpdateFieldInput>>
  prerequisiteTo?: InputMaybe<Array<TopicPrerequisiteToUpdateFieldInput>>
  prerequisites?: InputMaybe<Array<TopicPrerequisitesUpdateFieldInput>>
  tags?: InputMaybe<Array<TopicTagsUpdateFieldInput>>
  lessons?: InputMaybe<Array<TopicLessonsUpdateFieldInput>>
  content?: InputMaybe<Array<TopicContentUpdateFieldInput>>
}

export type TopicWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>
  id_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<Scalars["ID"]["input"]>>
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  difficulty?: InputMaybe<Difficulty>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  difficulty_NOT?: InputMaybe<Difficulty>
  difficulty_IN?: InputMaybe<Array<Difficulty>>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  difficulty_NOT_IN?: InputMaybe<Array<Difficulty>>
  OR?: InputMaybe<Array<TopicWhere>>
  AND?: InputMaybe<Array<TopicWhere>>
  NOT?: InputMaybe<TopicWhere>
  /** @deprecated Use `languages_SOME` instead. */
  languages?: InputMaybe<ProgrammingLanguageWhere>
  /** @deprecated Use `languages_NONE` instead. */
  languages_NOT?: InputMaybe<ProgrammingLanguageWhere>
  /** Return Topics where all of the related ProgrammingLanguages match this filter */
  languages_ALL?: InputMaybe<ProgrammingLanguageWhere>
  /** Return Topics where none of the related ProgrammingLanguages match this filter */
  languages_NONE?: InputMaybe<ProgrammingLanguageWhere>
  /** Return Topics where one of the related ProgrammingLanguages match this filter */
  languages_SINGLE?: InputMaybe<ProgrammingLanguageWhere>
  /** Return Topics where some of the related ProgrammingLanguages match this filter */
  languages_SOME?: InputMaybe<ProgrammingLanguageWhere>
  /** @deprecated Use `languagesConnection_SOME` instead. */
  languagesConnection?: InputMaybe<TopicLanguagesConnectionWhere>
  /** @deprecated Use `languagesConnection_NONE` instead. */
  languagesConnection_NOT?: InputMaybe<TopicLanguagesConnectionWhere>
  /** Return Topics where all of the related TopicLanguagesConnections match this filter */
  languagesConnection_ALL?: InputMaybe<TopicLanguagesConnectionWhere>
  /** Return Topics where none of the related TopicLanguagesConnections match this filter */
  languagesConnection_NONE?: InputMaybe<TopicLanguagesConnectionWhere>
  /** Return Topics where one of the related TopicLanguagesConnections match this filter */
  languagesConnection_SINGLE?: InputMaybe<TopicLanguagesConnectionWhere>
  /** Return Topics where some of the related TopicLanguagesConnections match this filter */
  languagesConnection_SOME?: InputMaybe<TopicLanguagesConnectionWhere>
  languagesAggregate?: InputMaybe<TopicLanguagesAggregateInput>
  /** @deprecated Use `badges_SOME` instead. */
  badges?: InputMaybe<BadgeWhere>
  /** @deprecated Use `badges_NONE` instead. */
  badges_NOT?: InputMaybe<BadgeWhere>
  /** Return Topics where all of the related Badges match this filter */
  badges_ALL?: InputMaybe<BadgeWhere>
  /** Return Topics where none of the related Badges match this filter */
  badges_NONE?: InputMaybe<BadgeWhere>
  /** Return Topics where one of the related Badges match this filter */
  badges_SINGLE?: InputMaybe<BadgeWhere>
  /** Return Topics where some of the related Badges match this filter */
  badges_SOME?: InputMaybe<BadgeWhere>
  /** @deprecated Use `badgesConnection_SOME` instead. */
  badgesConnection?: InputMaybe<TopicBadgesConnectionWhere>
  /** @deprecated Use `badgesConnection_NONE` instead. */
  badgesConnection_NOT?: InputMaybe<TopicBadgesConnectionWhere>
  /** Return Topics where all of the related TopicBadgesConnections match this filter */
  badgesConnection_ALL?: InputMaybe<TopicBadgesConnectionWhere>
  /** Return Topics where none of the related TopicBadgesConnections match this filter */
  badgesConnection_NONE?: InputMaybe<TopicBadgesConnectionWhere>
  /** Return Topics where one of the related TopicBadgesConnections match this filter */
  badgesConnection_SINGLE?: InputMaybe<TopicBadgesConnectionWhere>
  /** Return Topics where some of the related TopicBadgesConnections match this filter */
  badgesConnection_SOME?: InputMaybe<TopicBadgesConnectionWhere>
  badgesAggregate?: InputMaybe<TopicBadgesAggregateInput>
  /** @deprecated Use `prerequisiteTo_SOME` instead. */
  prerequisiteTo?: InputMaybe<TopicWhere>
  /** @deprecated Use `prerequisiteTo_NONE` instead. */
  prerequisiteTo_NOT?: InputMaybe<TopicWhere>
  /** Return Topics where all of the related Topics match this filter */
  prerequisiteTo_ALL?: InputMaybe<TopicWhere>
  /** Return Topics where none of the related Topics match this filter */
  prerequisiteTo_NONE?: InputMaybe<TopicWhere>
  /** Return Topics where one of the related Topics match this filter */
  prerequisiteTo_SINGLE?: InputMaybe<TopicWhere>
  /** Return Topics where some of the related Topics match this filter */
  prerequisiteTo_SOME?: InputMaybe<TopicWhere>
  /** @deprecated Use `prerequisiteToConnection_SOME` instead. */
  prerequisiteToConnection?: InputMaybe<TopicPrerequisiteToConnectionWhere>
  /** @deprecated Use `prerequisiteToConnection_NONE` instead. */
  prerequisiteToConnection_NOT?: InputMaybe<TopicPrerequisiteToConnectionWhere>
  /** Return Topics where all of the related TopicPrerequisiteToConnections match this filter */
  prerequisiteToConnection_ALL?: InputMaybe<TopicPrerequisiteToConnectionWhere>
  /** Return Topics where none of the related TopicPrerequisiteToConnections match this filter */
  prerequisiteToConnection_NONE?: InputMaybe<TopicPrerequisiteToConnectionWhere>
  /** Return Topics where one of the related TopicPrerequisiteToConnections match this filter */
  prerequisiteToConnection_SINGLE?: InputMaybe<TopicPrerequisiteToConnectionWhere>
  /** Return Topics where some of the related TopicPrerequisiteToConnections match this filter */
  prerequisiteToConnection_SOME?: InputMaybe<TopicPrerequisiteToConnectionWhere>
  prerequisiteToAggregate?: InputMaybe<TopicPrerequisiteToAggregateInput>
  /** @deprecated Use `prerequisites_SOME` instead. */
  prerequisites?: InputMaybe<TopicWhere>
  /** @deprecated Use `prerequisites_NONE` instead. */
  prerequisites_NOT?: InputMaybe<TopicWhere>
  /** Return Topics where all of the related Topics match this filter */
  prerequisites_ALL?: InputMaybe<TopicWhere>
  /** Return Topics where none of the related Topics match this filter */
  prerequisites_NONE?: InputMaybe<TopicWhere>
  /** Return Topics where one of the related Topics match this filter */
  prerequisites_SINGLE?: InputMaybe<TopicWhere>
  /** Return Topics where some of the related Topics match this filter */
  prerequisites_SOME?: InputMaybe<TopicWhere>
  /** @deprecated Use `prerequisitesConnection_SOME` instead. */
  prerequisitesConnection?: InputMaybe<TopicPrerequisitesConnectionWhere>
  /** @deprecated Use `prerequisitesConnection_NONE` instead. */
  prerequisitesConnection_NOT?: InputMaybe<TopicPrerequisitesConnectionWhere>
  /** Return Topics where all of the related TopicPrerequisitesConnections match this filter */
  prerequisitesConnection_ALL?: InputMaybe<TopicPrerequisitesConnectionWhere>
  /** Return Topics where none of the related TopicPrerequisitesConnections match this filter */
  prerequisitesConnection_NONE?: InputMaybe<TopicPrerequisitesConnectionWhere>
  /** Return Topics where one of the related TopicPrerequisitesConnections match this filter */
  prerequisitesConnection_SINGLE?: InputMaybe<TopicPrerequisitesConnectionWhere>
  /** Return Topics where some of the related TopicPrerequisitesConnections match this filter */
  prerequisitesConnection_SOME?: InputMaybe<TopicPrerequisitesConnectionWhere>
  prerequisitesAggregate?: InputMaybe<TopicPrerequisitesAggregateInput>
  /** @deprecated Use `tags_SOME` instead. */
  tags?: InputMaybe<TagWhere>
  /** @deprecated Use `tags_NONE` instead. */
  tags_NOT?: InputMaybe<TagWhere>
  /** Return Topics where all of the related Tags match this filter */
  tags_ALL?: InputMaybe<TagWhere>
  /** Return Topics where none of the related Tags match this filter */
  tags_NONE?: InputMaybe<TagWhere>
  /** Return Topics where one of the related Tags match this filter */
  tags_SINGLE?: InputMaybe<TagWhere>
  /** Return Topics where some of the related Tags match this filter */
  tags_SOME?: InputMaybe<TagWhere>
  /** @deprecated Use `tagsConnection_SOME` instead. */
  tagsConnection?: InputMaybe<TopicTagsConnectionWhere>
  /** @deprecated Use `tagsConnection_NONE` instead. */
  tagsConnection_NOT?: InputMaybe<TopicTagsConnectionWhere>
  /** Return Topics where all of the related TopicTagsConnections match this filter */
  tagsConnection_ALL?: InputMaybe<TopicTagsConnectionWhere>
  /** Return Topics where none of the related TopicTagsConnections match this filter */
  tagsConnection_NONE?: InputMaybe<TopicTagsConnectionWhere>
  /** Return Topics where one of the related TopicTagsConnections match this filter */
  tagsConnection_SINGLE?: InputMaybe<TopicTagsConnectionWhere>
  /** Return Topics where some of the related TopicTagsConnections match this filter */
  tagsConnection_SOME?: InputMaybe<TopicTagsConnectionWhere>
  tagsAggregate?: InputMaybe<TopicTagsAggregateInput>
  /** @deprecated Use `lessons_SOME` instead. */
  lessons?: InputMaybe<LessonWhere>
  /** @deprecated Use `lessons_NONE` instead. */
  lessons_NOT?: InputMaybe<LessonWhere>
  /** Return Topics where all of the related Lessons match this filter */
  lessons_ALL?: InputMaybe<LessonWhere>
  /** Return Topics where none of the related Lessons match this filter */
  lessons_NONE?: InputMaybe<LessonWhere>
  /** Return Topics where one of the related Lessons match this filter */
  lessons_SINGLE?: InputMaybe<LessonWhere>
  /** Return Topics where some of the related Lessons match this filter */
  lessons_SOME?: InputMaybe<LessonWhere>
  /** @deprecated Use `lessonsConnection_SOME` instead. */
  lessonsConnection?: InputMaybe<TopicLessonsConnectionWhere>
  /** @deprecated Use `lessonsConnection_NONE` instead. */
  lessonsConnection_NOT?: InputMaybe<TopicLessonsConnectionWhere>
  /** Return Topics where all of the related TopicLessonsConnections match this filter */
  lessonsConnection_ALL?: InputMaybe<TopicLessonsConnectionWhere>
  /** Return Topics where none of the related TopicLessonsConnections match this filter */
  lessonsConnection_NONE?: InputMaybe<TopicLessonsConnectionWhere>
  /** Return Topics where one of the related TopicLessonsConnections match this filter */
  lessonsConnection_SINGLE?: InputMaybe<TopicLessonsConnectionWhere>
  /** Return Topics where some of the related TopicLessonsConnections match this filter */
  lessonsConnection_SOME?: InputMaybe<TopicLessonsConnectionWhere>
  lessonsAggregate?: InputMaybe<TopicLessonsAggregateInput>
  /** @deprecated Use `content_SOME` instead. */
  content?: InputMaybe<ContentWhere>
  /** @deprecated Use `content_NONE` instead. */
  content_NOT?: InputMaybe<ContentWhere>
  /** Return Topics where all of the related Contents match this filter */
  content_ALL?: InputMaybe<ContentWhere>
  /** Return Topics where none of the related Contents match this filter */
  content_NONE?: InputMaybe<ContentWhere>
  /** Return Topics where one of the related Contents match this filter */
  content_SINGLE?: InputMaybe<ContentWhere>
  /** Return Topics where some of the related Contents match this filter */
  content_SOME?: InputMaybe<ContentWhere>
  /** @deprecated Use `contentConnection_SOME` instead. */
  contentConnection?: InputMaybe<TopicContentConnectionWhere>
  /** @deprecated Use `contentConnection_NONE` instead. */
  contentConnection_NOT?: InputMaybe<TopicContentConnectionWhere>
  /** Return Topics where all of the related TopicContentConnections match this filter */
  contentConnection_ALL?: InputMaybe<TopicContentConnectionWhere>
  /** Return Topics where none of the related TopicContentConnections match this filter */
  contentConnection_NONE?: InputMaybe<TopicContentConnectionWhere>
  /** Return Topics where one of the related TopicContentConnections match this filter */
  contentConnection_SINGLE?: InputMaybe<TopicContentConnectionWhere>
  /** Return Topics where some of the related TopicContentConnections match this filter */
  contentConnection_SOME?: InputMaybe<TopicContentConnectionWhere>
  contentAggregate?: InputMaybe<TopicContentAggregateInput>
}

export type TranslatedStringConnectInput = {
  tags?: InputMaybe<Array<TranslatedStringTagsConnectFieldInput>>
}

export type TranslatedStringConnectWhere = {
  node: TranslatedStringWhere
}

export type TranslatedStringCreateInput = {
  en: Scalars["String"]["input"]
  pt?: InputMaybe<Scalars["String"]["input"]>
  fr?: InputMaybe<Scalars["String"]["input"]>
  de?: InputMaybe<Scalars["String"]["input"]>
  es?: InputMaybe<Scalars["String"]["input"]>
  tags?: InputMaybe<TranslatedStringTagsFieldInput>
}

export type TranslatedStringDeleteInput = {
  tags?: InputMaybe<Array<TranslatedStringTagsDeleteFieldInput>>
}

export type TranslatedStringDisconnectInput = {
  tags?: InputMaybe<Array<TranslatedStringTagsDisconnectFieldInput>>
}

export type TranslatedStringOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  /** Specify one or more TranslatedStringSort objects to sort TranslatedStrings by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<TranslatedStringSort>>
}

export type TranslatedStringRelationInput = {
  tags?: InputMaybe<Array<TranslatedStringTagsCreateFieldInput>>
}

/** Fields to sort TranslatedStrings by. The order in which sorts are applied is not guaranteed when specifying many fields in one TranslatedStringSort object. */
export type TranslatedStringSort = {
  en?: InputMaybe<SortDirection>
  pt?: InputMaybe<SortDirection>
  fr?: InputMaybe<SortDirection>
  de?: InputMaybe<SortDirection>
  es?: InputMaybe<SortDirection>
}

export type TranslatedStringTagsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>
  count_LT?: InputMaybe<Scalars["Int"]["input"]>
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>
  count_GT?: InputMaybe<Scalars["Int"]["input"]>
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>
  AND?: InputMaybe<Array<TranslatedStringTagsAggregateInput>>
  OR?: InputMaybe<Array<TranslatedStringTagsAggregateInput>>
  NOT?: InputMaybe<TranslatedStringTagsAggregateInput>
  node?: InputMaybe<TranslatedStringTagsNodeAggregationWhereInput>
}

export type TranslatedStringTagsConnectFieldInput = {
  where?: InputMaybe<TagConnectWhere>
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"]
  connect?: InputMaybe<Array<TagConnectInput>>
}

export type TranslatedStringTagsConnectionSort = {
  node?: InputMaybe<TagSort>
}

export type TranslatedStringTagsConnectionWhere = {
  AND?: InputMaybe<Array<TranslatedStringTagsConnectionWhere>>
  OR?: InputMaybe<Array<TranslatedStringTagsConnectionWhere>>
  NOT?: InputMaybe<TranslatedStringTagsConnectionWhere>
  node?: InputMaybe<TagWhere>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<TagWhere>
}

export type TranslatedStringTagsCreateFieldInput = {
  node: TagCreateInput
}

export type TranslatedStringTagsDeleteFieldInput = {
  where?: InputMaybe<TranslatedStringTagsConnectionWhere>
  delete?: InputMaybe<TagDeleteInput>
}

export type TranslatedStringTagsDisconnectFieldInput = {
  where?: InputMaybe<TranslatedStringTagsConnectionWhere>
  disconnect?: InputMaybe<TagDisconnectInput>
}

export type TranslatedStringTagsFieldInput = {
  connect?: InputMaybe<Array<TranslatedStringTagsConnectFieldInput>>
  create?: InputMaybe<Array<TranslatedStringTagsCreateFieldInput>>
}

export type TranslatedStringTagsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TranslatedStringTagsNodeAggregationWhereInput>>
  OR?: InputMaybe<Array<TranslatedStringTagsNodeAggregationWhereInput>>
  NOT?: InputMaybe<TranslatedStringTagsNodeAggregationWhereInput>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>
}

export type TranslatedStringTagsUpdateConnectionInput = {
  node?: InputMaybe<TagUpdateInput>
}

export type TranslatedStringTagsUpdateFieldInput = {
  where?: InputMaybe<TranslatedStringTagsConnectionWhere>
  connect?: InputMaybe<Array<TranslatedStringTagsConnectFieldInput>>
  disconnect?: InputMaybe<Array<TranslatedStringTagsDisconnectFieldInput>>
  create?: InputMaybe<Array<TranslatedStringTagsCreateFieldInput>>
  update?: InputMaybe<TranslatedStringTagsUpdateConnectionInput>
  delete?: InputMaybe<Array<TranslatedStringTagsDeleteFieldInput>>
}

export type TranslatedStringUpdateInput = {
  en?: InputMaybe<Scalars["String"]["input"]>
  pt?: InputMaybe<Scalars["String"]["input"]>
  fr?: InputMaybe<Scalars["String"]["input"]>
  de?: InputMaybe<Scalars["String"]["input"]>
  es?: InputMaybe<Scalars["String"]["input"]>
  tags?: InputMaybe<Array<TranslatedStringTagsUpdateFieldInput>>
}

export type TranslatedStringWhere = {
  en?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  en_NOT?: InputMaybe<Scalars["String"]["input"]>
  en_IN?: InputMaybe<Array<Scalars["String"]["input"]>>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  en_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>
  en_CONTAINS?: InputMaybe<Scalars["String"]["input"]>
  en_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>
  en_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  en_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  en_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  en_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>
  pt?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  pt_NOT?: InputMaybe<Scalars["String"]["input"]>
  pt_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  pt_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  pt_CONTAINS?: InputMaybe<Scalars["String"]["input"]>
  pt_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>
  pt_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  pt_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  pt_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  pt_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>
  fr?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  fr_NOT?: InputMaybe<Scalars["String"]["input"]>
  fr_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  fr_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  fr_CONTAINS?: InputMaybe<Scalars["String"]["input"]>
  fr_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>
  fr_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  fr_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  fr_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  fr_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>
  de?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  de_NOT?: InputMaybe<Scalars["String"]["input"]>
  de_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  de_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  de_CONTAINS?: InputMaybe<Scalars["String"]["input"]>
  de_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>
  de_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  de_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  de_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  de_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>
  es?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  es_NOT?: InputMaybe<Scalars["String"]["input"]>
  es_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  es_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
  es_CONTAINS?: InputMaybe<Scalars["String"]["input"]>
  es_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>
  es_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  es_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  es_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  es_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>
  OR?: InputMaybe<Array<TranslatedStringWhere>>
  AND?: InputMaybe<Array<TranslatedStringWhere>>
  NOT?: InputMaybe<TranslatedStringWhere>
  /** @deprecated Use `tags_SOME` instead. */
  tags?: InputMaybe<TagWhere>
  /** @deprecated Use `tags_NONE` instead. */
  tags_NOT?: InputMaybe<TagWhere>
  /** Return TranslatedStrings where all of the related Tags match this filter */
  tags_ALL?: InputMaybe<TagWhere>
  /** Return TranslatedStrings where none of the related Tags match this filter */
  tags_NONE?: InputMaybe<TagWhere>
  /** Return TranslatedStrings where one of the related Tags match this filter */
  tags_SINGLE?: InputMaybe<TagWhere>
  /** Return TranslatedStrings where some of the related Tags match this filter */
  tags_SOME?: InputMaybe<TagWhere>
  /** @deprecated Use `tagsConnection_SOME` instead. */
  tagsConnection?: InputMaybe<TranslatedStringTagsConnectionWhere>
  /** @deprecated Use `tagsConnection_NONE` instead. */
  tagsConnection_NOT?: InputMaybe<TranslatedStringTagsConnectionWhere>
  /** Return TranslatedStrings where all of the related TranslatedStringTagsConnections match this filter */
  tagsConnection_ALL?: InputMaybe<TranslatedStringTagsConnectionWhere>
  /** Return TranslatedStrings where none of the related TranslatedStringTagsConnections match this filter */
  tagsConnection_NONE?: InputMaybe<TranslatedStringTagsConnectionWhere>
  /** Return TranslatedStrings where one of the related TranslatedStringTagsConnections match this filter */
  tagsConnection_SINGLE?: InputMaybe<TranslatedStringTagsConnectionWhere>
  /** Return TranslatedStrings where some of the related TranslatedStringTagsConnections match this filter */
  tagsConnection_SOME?: InputMaybe<TranslatedStringTagsConnectionWhere>
  tagsAggregate?: InputMaybe<TranslatedStringTagsAggregateInput>
}

export type UserBadgesAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>
  count_LT?: InputMaybe<Scalars["Int"]["input"]>
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>
  count_GT?: InputMaybe<Scalars["Int"]["input"]>
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>
  AND?: InputMaybe<Array<UserBadgesAggregateInput>>
  OR?: InputMaybe<Array<UserBadgesAggregateInput>>
  NOT?: InputMaybe<UserBadgesAggregateInput>
  node?: InputMaybe<UserBadgesNodeAggregationWhereInput>
}

export type UserBadgesConnectFieldInput = {
  where?: InputMaybe<BadgeConnectWhere>
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"]
  connect?: InputMaybe<Array<BadgeConnectInput>>
}

export type UserBadgesConnectionSort = {
  node?: InputMaybe<BadgeSort>
}

export type UserBadgesConnectionWhere = {
  AND?: InputMaybe<Array<UserBadgesConnectionWhere>>
  OR?: InputMaybe<Array<UserBadgesConnectionWhere>>
  NOT?: InputMaybe<UserBadgesConnectionWhere>
  node?: InputMaybe<BadgeWhere>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<BadgeWhere>
}

export type UserBadgesCreateFieldInput = {
  node: BadgeCreateInput
}

export type UserBadgesDeleteFieldInput = {
  where?: InputMaybe<UserBadgesConnectionWhere>
  delete?: InputMaybe<BadgeDeleteInput>
}

export type UserBadgesDisconnectFieldInput = {
  where?: InputMaybe<UserBadgesConnectionWhere>
  disconnect?: InputMaybe<BadgeDisconnectInput>
}

export type UserBadgesFieldInput = {
  connect?: InputMaybe<Array<UserBadgesConnectFieldInput>>
  create?: InputMaybe<Array<UserBadgesCreateFieldInput>>
}

export type UserBadgesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserBadgesNodeAggregationWhereInput>>
  OR?: InputMaybe<Array<UserBadgesNodeAggregationWhereInput>>
  NOT?: InputMaybe<UserBadgesNodeAggregationWhereInput>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>
}

export type UserBadgesUpdateConnectionInput = {
  node?: InputMaybe<BadgeUpdateInput>
}

export type UserBadgesUpdateFieldInput = {
  where?: InputMaybe<UserBadgesConnectionWhere>
  connect?: InputMaybe<Array<UserBadgesConnectFieldInput>>
  disconnect?: InputMaybe<Array<UserBadgesDisconnectFieldInput>>
  create?: InputMaybe<Array<UserBadgesCreateFieldInput>>
  update?: InputMaybe<UserBadgesUpdateConnectionInput>
  delete?: InputMaybe<Array<UserBadgesDeleteFieldInput>>
}

export type UserCompletedTasksConnectInput = {
  Lesson?: InputMaybe<Array<UserCompletedTasksLessonConnectFieldInput>>
  Content?: InputMaybe<Array<UserCompletedTasksContentConnectFieldInput>>
}

export type UserCompletedTasksConnectionSort = {
  edge?: InputMaybe<CompletedSort>
}

export type UserCompletedTasksConnectionWhere = {
  Lesson?: InputMaybe<UserCompletedTasksLessonConnectionWhere>
  Content?: InputMaybe<UserCompletedTasksContentConnectionWhere>
}

export type UserCompletedTasksContentConnectFieldInput = {
  edge: CompletedCreateInput
  where?: InputMaybe<ContentConnectWhere>
}

export type UserCompletedTasksContentConnectionWhere = {
  AND?: InputMaybe<Array<UserCompletedTasksContentConnectionWhere>>
  OR?: InputMaybe<Array<UserCompletedTasksContentConnectionWhere>>
  NOT?: InputMaybe<UserCompletedTasksContentConnectionWhere>
  node?: InputMaybe<ContentWhere>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<ContentWhere>
  edge?: InputMaybe<CompletedWhere>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<CompletedWhere>
}

export type UserCompletedTasksContentCreateFieldInput = {
  edge: CompletedCreateInput
  node: ContentCreateInput
}

export type UserCompletedTasksContentDeleteFieldInput = {
  where?: InputMaybe<UserCompletedTasksContentConnectionWhere>
}

export type UserCompletedTasksContentDisconnectFieldInput = {
  where?: InputMaybe<UserCompletedTasksContentConnectionWhere>
}

export type UserCompletedTasksContentFieldInput = {
  connect?: InputMaybe<Array<UserCompletedTasksContentConnectFieldInput>>
  create?: InputMaybe<Array<UserCompletedTasksContentCreateFieldInput>>
}

export type UserCompletedTasksContentUpdateConnectionInput = {
  node?: InputMaybe<ContentUpdateInput>
  edge?: InputMaybe<CompletedUpdateInput>
}

export type UserCompletedTasksContentUpdateFieldInput = {
  where?: InputMaybe<UserCompletedTasksContentConnectionWhere>
  connect?: InputMaybe<Array<UserCompletedTasksContentConnectFieldInput>>
  disconnect?: InputMaybe<Array<UserCompletedTasksContentDisconnectFieldInput>>
  create?: InputMaybe<Array<UserCompletedTasksContentCreateFieldInput>>
  update?: InputMaybe<UserCompletedTasksContentUpdateConnectionInput>
  delete?: InputMaybe<Array<UserCompletedTasksContentDeleteFieldInput>>
}

export type UserCompletedTasksCreateFieldInput = {
  Lesson?: InputMaybe<Array<UserCompletedTasksLessonCreateFieldInput>>
  Content?: InputMaybe<Array<UserCompletedTasksContentCreateFieldInput>>
}

export type UserCompletedTasksCreateInput = {
  Lesson?: InputMaybe<UserCompletedTasksLessonFieldInput>
  Content?: InputMaybe<UserCompletedTasksContentFieldInput>
}

export type UserCompletedTasksDeleteInput = {
  Lesson?: InputMaybe<Array<UserCompletedTasksLessonDeleteFieldInput>>
  Content?: InputMaybe<Array<UserCompletedTasksContentDeleteFieldInput>>
}

export type UserCompletedTasksDisconnectInput = {
  Lesson?: InputMaybe<Array<UserCompletedTasksLessonDisconnectFieldInput>>
  Content?: InputMaybe<Array<UserCompletedTasksContentDisconnectFieldInput>>
}

export type UserCompletedTasksLessonConnectFieldInput = {
  edge: CompletedCreateInput
  where?: InputMaybe<LessonConnectWhere>
  connect?: InputMaybe<Array<LessonConnectInput>>
}

export type UserCompletedTasksLessonConnectionWhere = {
  AND?: InputMaybe<Array<UserCompletedTasksLessonConnectionWhere>>
  OR?: InputMaybe<Array<UserCompletedTasksLessonConnectionWhere>>
  NOT?: InputMaybe<UserCompletedTasksLessonConnectionWhere>
  node?: InputMaybe<LessonWhere>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<LessonWhere>
  edge?: InputMaybe<CompletedWhere>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  edge_NOT?: InputMaybe<CompletedWhere>
}

export type UserCompletedTasksLessonCreateFieldInput = {
  edge: CompletedCreateInput
  node: LessonCreateInput
}

export type UserCompletedTasksLessonDeleteFieldInput = {
  where?: InputMaybe<UserCompletedTasksLessonConnectionWhere>
  delete?: InputMaybe<LessonDeleteInput>
}

export type UserCompletedTasksLessonDisconnectFieldInput = {
  where?: InputMaybe<UserCompletedTasksLessonConnectionWhere>
  disconnect?: InputMaybe<LessonDisconnectInput>
}

export type UserCompletedTasksLessonFieldInput = {
  connect?: InputMaybe<Array<UserCompletedTasksLessonConnectFieldInput>>
  create?: InputMaybe<Array<UserCompletedTasksLessonCreateFieldInput>>
}

export type UserCompletedTasksLessonUpdateConnectionInput = {
  node?: InputMaybe<LessonUpdateInput>
  edge?: InputMaybe<CompletedUpdateInput>
}

export type UserCompletedTasksLessonUpdateFieldInput = {
  where?: InputMaybe<UserCompletedTasksLessonConnectionWhere>
  connect?: InputMaybe<Array<UserCompletedTasksLessonConnectFieldInput>>
  disconnect?: InputMaybe<Array<UserCompletedTasksLessonDisconnectFieldInput>>
  create?: InputMaybe<Array<UserCompletedTasksLessonCreateFieldInput>>
  update?: InputMaybe<UserCompletedTasksLessonUpdateConnectionInput>
  delete?: InputMaybe<Array<UserCompletedTasksLessonDeleteFieldInput>>
}

export type UserCompletedTasksUpdateInput = {
  Lesson?: InputMaybe<Array<UserCompletedTasksLessonUpdateFieldInput>>
  Content?: InputMaybe<Array<UserCompletedTasksContentUpdateFieldInput>>
}

export type UserConnectInput = {
  completedTasks?: InputMaybe<UserCompletedTasksConnectInput>
  badges?: InputMaybe<Array<UserBadgesConnectFieldInput>>
  unlockedTopics?: InputMaybe<Array<UserUnlockedTopicsConnectFieldInput>>
}

export type UserConnectWhere = {
  node: UserWhere
}

export type UserCreateInput = {
  username: Scalars["String"]["input"]
  password: Scalars["String"]["input"]
  learningStyle?: InputMaybe<LearningStyle>
  completedTasks?: InputMaybe<UserCompletedTasksCreateInput>
  badges?: InputMaybe<UserBadgesFieldInput>
  unlockedTopics?: InputMaybe<UserUnlockedTopicsFieldInput>
}

export type UserDeleteInput = {
  completedTasks?: InputMaybe<UserCompletedTasksDeleteInput>
  badges?: InputMaybe<Array<UserBadgesDeleteFieldInput>>
  unlockedTopics?: InputMaybe<Array<UserUnlockedTopicsDeleteFieldInput>>
}

export type UserDisconnectInput = {
  completedTasks?: InputMaybe<UserCompletedTasksDisconnectInput>
  badges?: InputMaybe<Array<UserBadgesDisconnectFieldInput>>
  unlockedTopics?: InputMaybe<Array<UserUnlockedTopicsDisconnectFieldInput>>
}

export type UserOptions = {
  limit?: InputMaybe<Scalars["Int"]["input"]>
  offset?: InputMaybe<Scalars["Int"]["input"]>
  /** Specify one or more UserSort objects to sort Users by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<UserSort>>
}

export type UserRelationInput = {
  completedTasks?: InputMaybe<UserCompletedTasksCreateFieldInput>
  badges?: InputMaybe<Array<UserBadgesCreateFieldInput>>
  unlockedTopics?: InputMaybe<Array<UserUnlockedTopicsCreateFieldInput>>
}

/** Fields to sort Users by. The order in which sorts are applied is not guaranteed when specifying many fields in one UserSort object. */
export type UserSort = {
  id?: InputMaybe<SortDirection>
  username?: InputMaybe<SortDirection>
  password?: InputMaybe<SortDirection>
  learningStyle?: InputMaybe<SortDirection>
}

export type UserUnlockedTopicsAggregateInput = {
  count?: InputMaybe<Scalars["Int"]["input"]>
  count_LT?: InputMaybe<Scalars["Int"]["input"]>
  count_LTE?: InputMaybe<Scalars["Int"]["input"]>
  count_GT?: InputMaybe<Scalars["Int"]["input"]>
  count_GTE?: InputMaybe<Scalars["Int"]["input"]>
  AND?: InputMaybe<Array<UserUnlockedTopicsAggregateInput>>
  OR?: InputMaybe<Array<UserUnlockedTopicsAggregateInput>>
  NOT?: InputMaybe<UserUnlockedTopicsAggregateInput>
  node?: InputMaybe<UserUnlockedTopicsNodeAggregationWhereInput>
}

export type UserUnlockedTopicsConnectFieldInput = {
  where?: InputMaybe<TopicConnectWhere>
  /** Whether or not to overwrite any matching relationship with the new properties. */
  overwrite?: Scalars["Boolean"]["input"]
  connect?: InputMaybe<Array<TopicConnectInput>>
}

export type UserUnlockedTopicsConnectionSort = {
  node?: InputMaybe<TopicSort>
}

export type UserUnlockedTopicsConnectionWhere = {
  AND?: InputMaybe<Array<UserUnlockedTopicsConnectionWhere>>
  OR?: InputMaybe<Array<UserUnlockedTopicsConnectionWhere>>
  NOT?: InputMaybe<UserUnlockedTopicsConnectionWhere>
  node?: InputMaybe<TopicWhere>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  node_NOT?: InputMaybe<TopicWhere>
}

export type UserUnlockedTopicsCreateFieldInput = {
  node: TopicCreateInput
}

export type UserUnlockedTopicsDeleteFieldInput = {
  where?: InputMaybe<UserUnlockedTopicsConnectionWhere>
  delete?: InputMaybe<TopicDeleteInput>
}

export type UserUnlockedTopicsDisconnectFieldInput = {
  where?: InputMaybe<UserUnlockedTopicsConnectionWhere>
  disconnect?: InputMaybe<TopicDisconnectInput>
}

export type UserUnlockedTopicsFieldInput = {
  connect?: InputMaybe<Array<UserUnlockedTopicsConnectFieldInput>>
  create?: InputMaybe<Array<UserUnlockedTopicsCreateFieldInput>>
}

export type UserUnlockedTopicsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserUnlockedTopicsNodeAggregationWhereInput>>
  OR?: InputMaybe<Array<UserUnlockedTopicsNodeAggregationWhereInput>>
  NOT?: InputMaybe<UserUnlockedTopicsNodeAggregationWhereInput>
  /** @deprecated Aggregation filters that are not relying on an aggregating function will be deprecated. */
  id_EQUAL?: InputMaybe<Scalars["ID"]["input"]>
}

export type UserUnlockedTopicsUpdateConnectionInput = {
  node?: InputMaybe<TopicUpdateInput>
}

export type UserUnlockedTopicsUpdateFieldInput = {
  where?: InputMaybe<UserUnlockedTopicsConnectionWhere>
  connect?: InputMaybe<Array<UserUnlockedTopicsConnectFieldInput>>
  disconnect?: InputMaybe<Array<UserUnlockedTopicsDisconnectFieldInput>>
  create?: InputMaybe<Array<UserUnlockedTopicsCreateFieldInput>>
  update?: InputMaybe<UserUnlockedTopicsUpdateConnectionInput>
  delete?: InputMaybe<Array<UserUnlockedTopicsDeleteFieldInput>>
}

export type UserUpdateInput = {
  username?: InputMaybe<Scalars["String"]["input"]>
  password?: InputMaybe<Scalars["String"]["input"]>
  learningStyle?: InputMaybe<LearningStyle>
  completedTasks?: InputMaybe<UserCompletedTasksUpdateInput>
  badges?: InputMaybe<Array<UserBadgesUpdateFieldInput>>
  unlockedTopics?: InputMaybe<Array<UserUnlockedTopicsUpdateFieldInput>>
}

export type UserWhere = {
  id?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT?: InputMaybe<Scalars["ID"]["input"]>
  id_IN?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>
  id_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>
  id_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  id_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_CONTAINS?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_STARTS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  id_NOT_ENDS_WITH?: InputMaybe<Scalars["ID"]["input"]>
  username?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  username_NOT?: InputMaybe<Scalars["String"]["input"]>
  username_IN?: InputMaybe<Array<Scalars["String"]["input"]>>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  username_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>
  username_CONTAINS?: InputMaybe<Scalars["String"]["input"]>
  username_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>
  username_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  username_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  username_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  username_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>
  password?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  password_NOT?: InputMaybe<Scalars["String"]["input"]>
  password_IN?: InputMaybe<Array<Scalars["String"]["input"]>>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  password_NOT_IN?: InputMaybe<Array<Scalars["String"]["input"]>>
  password_CONTAINS?: InputMaybe<Scalars["String"]["input"]>
  password_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>
  password_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  password_NOT_CONTAINS?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  password_NOT_STARTS_WITH?: InputMaybe<Scalars["String"]["input"]>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  password_NOT_ENDS_WITH?: InputMaybe<Scalars["String"]["input"]>
  learningStyle?: InputMaybe<LearningStyle>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  learningStyle_NOT?: InputMaybe<LearningStyle>
  learningStyle_IN?: InputMaybe<Array<InputMaybe<LearningStyle>>>
  /** @deprecated Negation filters will be deprecated, use the NOT operator to achieve the same behavior */
  learningStyle_NOT_IN?: InputMaybe<Array<InputMaybe<LearningStyle>>>
  OR?: InputMaybe<Array<UserWhere>>
  AND?: InputMaybe<Array<UserWhere>>
  NOT?: InputMaybe<UserWhere>
  /** @deprecated Use `completedTasks_SOME` instead. */
  completedTasks?: InputMaybe<TaskWhere>
  /** @deprecated Use `completedTasks_NONE` instead. */
  completedTasks_NOT?: InputMaybe<TaskWhere>
  /** Return Users where all of the related Tasks match this filter */
  completedTasks_ALL?: InputMaybe<TaskWhere>
  /** Return Users where none of the related Tasks match this filter */
  completedTasks_NONE?: InputMaybe<TaskWhere>
  /** Return Users where one of the related Tasks match this filter */
  completedTasks_SINGLE?: InputMaybe<TaskWhere>
  /** Return Users where some of the related Tasks match this filter */
  completedTasks_SOME?: InputMaybe<TaskWhere>
  /** @deprecated Use `completedTasksConnection_SOME` instead. */
  completedTasksConnection?: InputMaybe<UserCompletedTasksConnectionWhere>
  /** @deprecated Use `completedTasksConnection_NONE` instead. */
  completedTasksConnection_NOT?: InputMaybe<UserCompletedTasksConnectionWhere>
  /** Return Users where all of the related UserCompletedTasksConnections match this filter */
  completedTasksConnection_ALL?: InputMaybe<UserCompletedTasksConnectionWhere>
  /** Return Users where none of the related UserCompletedTasksConnections match this filter */
  completedTasksConnection_NONE?: InputMaybe<UserCompletedTasksConnectionWhere>
  /** Return Users where one of the related UserCompletedTasksConnections match this filter */
  completedTasksConnection_SINGLE?: InputMaybe<UserCompletedTasksConnectionWhere>
  /** Return Users where some of the related UserCompletedTasksConnections match this filter */
  completedTasksConnection_SOME?: InputMaybe<UserCompletedTasksConnectionWhere>
  /** @deprecated Use `badges_SOME` instead. */
  badges?: InputMaybe<BadgeWhere>
  /** @deprecated Use `badges_NONE` instead. */
  badges_NOT?: InputMaybe<BadgeWhere>
  /** Return Users where all of the related Badges match this filter */
  badges_ALL?: InputMaybe<BadgeWhere>
  /** Return Users where none of the related Badges match this filter */
  badges_NONE?: InputMaybe<BadgeWhere>
  /** Return Users where one of the related Badges match this filter */
  badges_SINGLE?: InputMaybe<BadgeWhere>
  /** Return Users where some of the related Badges match this filter */
  badges_SOME?: InputMaybe<BadgeWhere>
  /** @deprecated Use `badgesConnection_SOME` instead. */
  badgesConnection?: InputMaybe<UserBadgesConnectionWhere>
  /** @deprecated Use `badgesConnection_NONE` instead. */
  badgesConnection_NOT?: InputMaybe<UserBadgesConnectionWhere>
  /** Return Users where all of the related UserBadgesConnections match this filter */
  badgesConnection_ALL?: InputMaybe<UserBadgesConnectionWhere>
  /** Return Users where none of the related UserBadgesConnections match this filter */
  badgesConnection_NONE?: InputMaybe<UserBadgesConnectionWhere>
  /** Return Users where one of the related UserBadgesConnections match this filter */
  badgesConnection_SINGLE?: InputMaybe<UserBadgesConnectionWhere>
  /** Return Users where some of the related UserBadgesConnections match this filter */
  badgesConnection_SOME?: InputMaybe<UserBadgesConnectionWhere>
  badgesAggregate?: InputMaybe<UserBadgesAggregateInput>
  /** @deprecated Use `unlockedTopics_SOME` instead. */
  unlockedTopics?: InputMaybe<TopicWhere>
  /** @deprecated Use `unlockedTopics_NONE` instead. */
  unlockedTopics_NOT?: InputMaybe<TopicWhere>
  /** Return Users where all of the related Topics match this filter */
  unlockedTopics_ALL?: InputMaybe<TopicWhere>
  /** Return Users where none of the related Topics match this filter */
  unlockedTopics_NONE?: InputMaybe<TopicWhere>
  /** Return Users where one of the related Topics match this filter */
  unlockedTopics_SINGLE?: InputMaybe<TopicWhere>
  /** Return Users where some of the related Topics match this filter */
  unlockedTopics_SOME?: InputMaybe<TopicWhere>
  /** @deprecated Use `unlockedTopicsConnection_SOME` instead. */
  unlockedTopicsConnection?: InputMaybe<UserUnlockedTopicsConnectionWhere>
  /** @deprecated Use `unlockedTopicsConnection_NONE` instead. */
  unlockedTopicsConnection_NOT?: InputMaybe<UserUnlockedTopicsConnectionWhere>
  /** Return Users where all of the related UserUnlockedTopicsConnections match this filter */
  unlockedTopicsConnection_ALL?: InputMaybe<UserUnlockedTopicsConnectionWhere>
  /** Return Users where none of the related UserUnlockedTopicsConnections match this filter */
  unlockedTopicsConnection_NONE?: InputMaybe<UserUnlockedTopicsConnectionWhere>
  /** Return Users where one of the related UserUnlockedTopicsConnections match this filter */
  unlockedTopicsConnection_SINGLE?: InputMaybe<UserUnlockedTopicsConnectionWhere>
  /** Return Users where some of the related UserUnlockedTopicsConnections match this filter */
  unlockedTopicsConnection_SOME?: InputMaybe<UserUnlockedTopicsConnectionWhere>
  unlockedTopicsAggregate?: InputMaybe<UserUnlockedTopicsAggregateInput>
}

export interface UserAggregateSelectionInput {
  count?: boolean
  id?: boolean
  username?: boolean
  password?: boolean
}

export declare class UserModel {
  public find(args?: {
    where?: UserWhere

    options?: UserOptions
    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<User[]>
  public create(args: {
    input: UserCreateInput[]
    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<CreateUsersMutationResponse>
  public update(args: {
    where?: UserWhere
    update?: UserUpdateInput
    connect?: UserConnectInput
    disconnect?: UserDisconnectInput
    create?: UserCreateInput

    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<UpdateUsersMutationResponse>
  public delete(args: {
    where?: UserWhere
    delete?: UserDeleteInput
    context?: any
    rootValue?: any
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>
  public aggregate(args: {
    where?: UserWhere

    aggregate: UserAggregateSelectionInput
    context?: any
    rootValue?: any
  }): Promise<UserAggregateSelection>
}

export interface TopicAggregateSelectionInput {
  count?: boolean
  id?: boolean
}

export declare class TopicModel {
  public find(args?: {
    where?: TopicWhere

    options?: TopicOptions
    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<Topic[]>
  public create(args: {
    input: TopicCreateInput[]
    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<CreateTopicsMutationResponse>
  public update(args: {
    where?: TopicWhere
    update?: TopicUpdateInput
    connect?: TopicConnectInput
    disconnect?: TopicDisconnectInput
    create?: TopicCreateInput

    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<UpdateTopicsMutationResponse>
  public delete(args: {
    where?: TopicWhere
    delete?: TopicDeleteInput
    context?: any
    rootValue?: any
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>
  public aggregate(args: {
    where?: TopicWhere

    aggregate: TopicAggregateSelectionInput
    context?: any
    rootValue?: any
  }): Promise<TopicAggregateSelection>
}

export interface ContentAggregateSelectionInput {
  count?: boolean
  id?: boolean
}

export declare class ContentModel {
  public find(args?: {
    where?: ContentWhere

    options?: ContentOptions
    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<Content[]>
  public create(args: {
    input: ContentCreateInput[]
    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<CreateContentsMutationResponse>
  public update(args: {
    where?: ContentWhere
    update?: ContentUpdateInput

    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<UpdateContentsMutationResponse>
  public delete(args: {
    where?: ContentWhere

    context?: any
    rootValue?: any
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>
  public aggregate(args: {
    where?: ContentWhere

    aggregate: ContentAggregateSelectionInput
    context?: any
    rootValue?: any
  }): Promise<ContentAggregateSelection>
}

export interface LessonAggregateSelectionInput {
  count?: boolean
  id?: boolean
}

export declare class LessonModel {
  public find(args?: {
    where?: LessonWhere

    options?: LessonOptions
    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<Lesson[]>
  public create(args: {
    input: LessonCreateInput[]
    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<CreateLessonsMutationResponse>
  public update(args: {
    where?: LessonWhere
    update?: LessonUpdateInput
    connect?: LessonConnectInput
    disconnect?: LessonDisconnectInput
    create?: LessonCreateInput

    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<UpdateLessonsMutationResponse>
  public delete(args: {
    where?: LessonWhere
    delete?: LessonDeleteInput
    context?: any
    rootValue?: any
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>
  public aggregate(args: {
    where?: LessonWhere

    aggregate: LessonAggregateSelectionInput
    context?: any
    rootValue?: any
  }): Promise<LessonAggregateSelection>
}

export interface SingleChoiceActivityAggregateSelectionInput {
  count?: boolean
  id?: boolean
  answer?: boolean
}

export declare class SingleChoiceActivityModel {
  public find(args?: {
    where?: SingleChoiceActivityWhere

    options?: SingleChoiceActivityOptions
    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<SingleChoiceActivity[]>
  public create(args: {
    input: SingleChoiceActivityCreateInput[]
    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<CreateSingleChoiceActivitiesMutationResponse>
  public update(args: {
    where?: SingleChoiceActivityWhere
    update?: SingleChoiceActivityUpdateInput

    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<UpdateSingleChoiceActivitiesMutationResponse>
  public delete(args: {
    where?: SingleChoiceActivityWhere

    context?: any
    rootValue?: any
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>
  public aggregate(args: {
    where?: SingleChoiceActivityWhere

    aggregate: SingleChoiceActivityAggregateSelectionInput
    context?: any
    rootValue?: any
  }): Promise<SingleChoiceActivityAggregateSelection>
}

export interface CodeOutputActivityAggregateSelectionInput {
  count?: boolean
  id?: boolean
  codeSnippet?: boolean
  answer?: boolean
}

export declare class CodeOutputActivityModel {
  public find(args?: {
    where?: CodeOutputActivityWhere

    options?: CodeOutputActivityOptions
    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<CodeOutputActivity[]>
  public create(args: {
    input: CodeOutputActivityCreateInput[]
    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<CreateCodeOutputActivitiesMutationResponse>
  public update(args: {
    where?: CodeOutputActivityWhere
    update?: CodeOutputActivityUpdateInput

    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<UpdateCodeOutputActivitiesMutationResponse>
  public delete(args: {
    where?: CodeOutputActivityWhere

    context?: any
    rootValue?: any
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>
  public aggregate(args: {
    where?: CodeOutputActivityWhere

    aggregate: CodeOutputActivityAggregateSelectionInput
    context?: any
    rootValue?: any
  }): Promise<CodeOutputActivityAggregateSelection>
}

export interface MultipleChoiceActivityAggregateSelectionInput {
  count?: boolean
  id?: boolean
}

export declare class MultipleChoiceActivityModel {
  public find(args?: {
    where?: MultipleChoiceActivityWhere

    options?: MultipleChoiceActivityOptions
    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<MultipleChoiceActivity[]>
  public create(args: {
    input: MultipleChoiceActivityCreateInput[]
    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<CreateMultipleChoiceActivitiesMutationResponse>
  public update(args: {
    where?: MultipleChoiceActivityWhere
    update?: MultipleChoiceActivityUpdateInput

    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<UpdateMultipleChoiceActivitiesMutationResponse>
  public delete(args: {
    where?: MultipleChoiceActivityWhere

    context?: any
    rootValue?: any
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>
  public aggregate(args: {
    where?: MultipleChoiceActivityWhere

    aggregate: MultipleChoiceActivityAggregateSelectionInput
    context?: any
    rootValue?: any
  }): Promise<MultipleChoiceActivityAggregateSelection>
}

export interface PairMatchingActivityAggregateSelectionInput {
  count?: boolean
  id?: boolean
}

export declare class PairMatchingActivityModel {
  public find(args?: {
    where?: PairMatchingActivityWhere

    options?: PairMatchingActivityOptions
    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<PairMatchingActivity[]>
  public create(args: {
    input: PairMatchingActivityCreateInput[]
    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<CreatePairMatchingActivitiesMutationResponse>
  public update(args: {
    where?: PairMatchingActivityWhere
    update?: PairMatchingActivityUpdateInput

    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<UpdatePairMatchingActivitiesMutationResponse>
  public delete(args: {
    where?: PairMatchingActivityWhere

    context?: any
    rootValue?: any
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>
  public aggregate(args: {
    where?: PairMatchingActivityWhere

    aggregate: PairMatchingActivityAggregateSelectionInput
    context?: any
    rootValue?: any
  }): Promise<PairMatchingActivityAggregateSelection>
}

export interface StringPairAggregateSelectionInput {
  count?: boolean
  first?: boolean
  second?: boolean
}

export declare class StringPairModel {
  public find(args?: {
    where?: StringPairWhere

    options?: StringPairOptions
    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<StringPair[]>
  public create(args: {
    input: StringPairCreateInput[]
    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<CreateStringPairsMutationResponse>
  public update(args: {
    where?: StringPairWhere
    update?: StringPairUpdateInput

    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<UpdateStringPairsMutationResponse>
  public delete(args: {
    where?: StringPairWhere

    context?: any
    rootValue?: any
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>
  public aggregate(args: {
    where?: StringPairWhere

    aggregate: StringPairAggregateSelectionInput
    context?: any
    rootValue?: any
  }): Promise<StringPairAggregateSelection>
}

export interface FillInTheBlankActivityAggregateSelectionInput {
  count?: boolean
  id?: boolean
}

export declare class FillInTheBlankActivityModel {
  public find(args?: {
    where?: FillInTheBlankActivityWhere

    options?: FillInTheBlankActivityOptions
    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<FillInTheBlankActivity[]>
  public create(args: {
    input: FillInTheBlankActivityCreateInput[]
    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<CreateFillInTheBlankActivitiesMutationResponse>
  public update(args: {
    where?: FillInTheBlankActivityWhere
    update?: FillInTheBlankActivityUpdateInput

    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<UpdateFillInTheBlankActivitiesMutationResponse>
  public delete(args: {
    where?: FillInTheBlankActivityWhere

    context?: any
    rootValue?: any
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>
  public aggregate(args: {
    where?: FillInTheBlankActivityWhere

    aggregate: FillInTheBlankActivityAggregateSelectionInput
    context?: any
    rootValue?: any
  }): Promise<FillInTheBlankActivityAggregateSelection>
}

export interface GapSegmentAggregateSelectionInput {
  count?: boolean
  id?: boolean
  size?: boolean
}

export declare class GapSegmentModel {
  public find(args?: {
    where?: GapSegmentWhere

    options?: GapSegmentOptions
    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<GapSegment[]>
  public create(args: {
    input: GapSegmentCreateInput[]
    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<CreateGapSegmentsMutationResponse>
  public update(args: {
    where?: GapSegmentWhere
    update?: GapSegmentUpdateInput

    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<UpdateGapSegmentsMutationResponse>
  public delete(args: {
    where?: GapSegmentWhere

    context?: any
    rootValue?: any
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>
  public aggregate(args: {
    where?: GapSegmentWhere

    aggregate: GapSegmentAggregateSelectionInput
    context?: any
    rootValue?: any
  }): Promise<GapSegmentAggregateSelection>
}

export interface OptionAggregateSelectionInput {
  count?: boolean
  id?: boolean
}

export declare class OptionModel {
  public find(args?: {
    where?: OptionWhere

    options?: OptionOptions
    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<Option[]>
  public create(args: {
    input: OptionCreateInput[]
    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<CreateOptionsMutationResponse>
  public update(args: {
    where?: OptionWhere
    update?: OptionUpdateInput

    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<UpdateOptionsMutationResponse>
  public delete(args: {
    where?: OptionWhere

    context?: any
    rootValue?: any
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>
  public aggregate(args: {
    where?: OptionWhere

    aggregate: OptionAggregateSelectionInput
    context?: any
    rootValue?: any
  }): Promise<OptionAggregateSelection>
}

export interface TextOptionAggregateSelectionInput {
  count?: boolean
}

export declare class TextOptionModel {
  public find(args?: {
    where?: TextOptionWhere

    options?: TextOptionOptions
    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<TextOption[]>
  public create(args: {
    input: TextOptionCreateInput[]
    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<CreateTextOptionsMutationResponse>
  public update(args: {
    where?: TextOptionWhere
    update?: TextOptionUpdateInput

    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<UpdateTextOptionsMutationResponse>
  public delete(args: {
    where?: TextOptionWhere

    context?: any
    rootValue?: any
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>
  public aggregate(args: {
    where?: TextOptionWhere

    aggregate: TextOptionAggregateSelectionInput
    context?: any
    rootValue?: any
  }): Promise<TextOptionAggregateSelection>
}

export interface CodeOptionAggregateSelectionInput {
  count?: boolean
  code?: boolean
}

export declare class CodeOptionModel {
  public find(args?: {
    where?: CodeOptionWhere

    options?: CodeOptionOptions
    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<CodeOption[]>
  public create(args: {
    input: CodeOptionCreateInput[]
    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<CreateCodeOptionsMutationResponse>
  public update(args: {
    where?: CodeOptionWhere
    update?: CodeOptionUpdateInput

    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<UpdateCodeOptionsMutationResponse>
  public delete(args: {
    where?: CodeOptionWhere

    context?: any
    rootValue?: any
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>
  public aggregate(args: {
    where?: CodeOptionWhere

    aggregate: CodeOptionAggregateSelectionInput
    context?: any
    rootValue?: any
  }): Promise<CodeOptionAggregateSelection>
}

export interface TagAggregateSelectionInput {
  count?: boolean
  id?: boolean
}

export declare class TagModel {
  public find(args?: {
    where?: TagWhere

    options?: TagOptions
    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<Tag[]>
  public create(args: {
    input: TagCreateInput[]
    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<CreateTagsMutationResponse>
  public update(args: {
    where?: TagWhere
    update?: TagUpdateInput
    connect?: TagConnectInput
    disconnect?: TagDisconnectInput
    create?: TagCreateInput

    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<UpdateTagsMutationResponse>
  public delete(args: {
    where?: TagWhere
    delete?: TagDeleteInput
    context?: any
    rootValue?: any
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>
  public aggregate(args: {
    where?: TagWhere

    aggregate: TagAggregateSelectionInput
    context?: any
    rootValue?: any
  }): Promise<TagAggregateSelection>
}

export interface ProgrammingLanguageAggregateSelectionInput {
  count?: boolean
  id?: boolean
  name?: boolean
}

export declare class ProgrammingLanguageModel {
  public find(args?: {
    where?: ProgrammingLanguageWhere

    options?: ProgrammingLanguageOptions
    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<ProgrammingLanguage[]>
  public create(args: {
    input: ProgrammingLanguageCreateInput[]
    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<CreateProgrammingLanguagesMutationResponse>
  public update(args: {
    where?: ProgrammingLanguageWhere
    update?: ProgrammingLanguageUpdateInput
    connect?: ProgrammingLanguageConnectInput
    disconnect?: ProgrammingLanguageDisconnectInput
    create?: ProgrammingLanguageCreateInput

    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<UpdateProgrammingLanguagesMutationResponse>
  public delete(args: {
    where?: ProgrammingLanguageWhere
    delete?: ProgrammingLanguageDeleteInput
    context?: any
    rootValue?: any
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>
  public aggregate(args: {
    where?: ProgrammingLanguageWhere

    aggregate: ProgrammingLanguageAggregateSelectionInput
    context?: any
    rootValue?: any
  }): Promise<ProgrammingLanguageAggregateSelection>
}

export interface TranslatedStringAggregateSelectionInput {
  count?: boolean
  en?: boolean
  pt?: boolean
  fr?: boolean
  de?: boolean
  es?: boolean
}

export declare class TranslatedStringModel {
  public find(args?: {
    where?: TranslatedStringWhere

    options?: TranslatedStringOptions
    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<TranslatedString[]>
  public create(args: {
    input: TranslatedStringCreateInput[]
    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<CreateTranslatedStringsMutationResponse>
  public update(args: {
    where?: TranslatedStringWhere
    update?: TranslatedStringUpdateInput
    connect?: TranslatedStringConnectInput
    disconnect?: TranslatedStringDisconnectInput
    create?: TranslatedStringCreateInput

    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<UpdateTranslatedStringsMutationResponse>
  public delete(args: {
    where?: TranslatedStringWhere
    delete?: TranslatedStringDeleteInput
    context?: any
    rootValue?: any
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>
  public aggregate(args: {
    where?: TranslatedStringWhere

    aggregate: TranslatedStringAggregateSelectionInput
    context?: any
    rootValue?: any
  }): Promise<TranslatedStringAggregateSelection>
}

export interface BadgeAggregateSelectionInput {
  count?: boolean
  id?: boolean
}

export declare class BadgeModel {
  public find(args?: {
    where?: BadgeWhere

    options?: BadgeOptions
    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<Badge[]>
  public create(args: {
    input: BadgeCreateInput[]
    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<CreateBadgesMutationResponse>
  public update(args: {
    where?: BadgeWhere
    update?: BadgeUpdateInput
    connect?: BadgeConnectInput
    disconnect?: BadgeDisconnectInput
    create?: BadgeCreateInput

    selectionSet?: string | DocumentNode | SelectionSetNode
    args?: any
    context?: any
    rootValue?: any
  }): Promise<UpdateBadgesMutationResponse>
  public delete(args: {
    where?: BadgeWhere
    delete?: BadgeDeleteInput
    context?: any
    rootValue?: any
  }): Promise<{ nodesDeleted: number; relationshipsDeleted: number }>
  public aggregate(args: {
    where?: BadgeWhere

    aggregate: BadgeAggregateSelectionInput
    context?: any
    rootValue?: any
  }): Promise<BadgeAggregateSelection>
}

export interface ModelMap {
  User: UserModel
  Topic: TopicModel
  Content: ContentModel
  Lesson: LessonModel
  SingleChoiceActivity: SingleChoiceActivityModel
  CodeOutputActivity: CodeOutputActivityModel
  MultipleChoiceActivity: MultipleChoiceActivityModel
  PairMatchingActivity: PairMatchingActivityModel
  StringPair: StringPairModel
  FillInTheBlankActivity: FillInTheBlankActivityModel
  GapSegment: GapSegmentModel
  Option: OptionModel
  TextOption: TextOptionModel
  CodeOption: CodeOptionModel
  Tag: TagModel
  ProgrammingLanguage: ProgrammingLanguageModel
  TranslatedString: TranslatedStringModel
  Badge: BadgeModel
}
