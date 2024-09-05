export const getSectionPathIndexClass = (topicPosition: number) => {
  switch (topicPosition % 4) {
    case 0:
      return "bg-lime-500 border-b-lime-600 dark:border-b-lime-700"
    case 3:
      return "bg-indigo-500 border-b-indigo-600 dark:border-b-indigo-700"
    case 2:
      return "bg-red-500 border-b-red-600 dark:border-b-red-700"
    case 1:
      return "bg-amber-500 border-b-amber-600 dark:border-b-amber-700"
    default:
      return ""
  }
}
