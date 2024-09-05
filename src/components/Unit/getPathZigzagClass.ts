export const getPathZigzagClass = (pathIndex: number) => {
  switch (pathIndex % 8) {
    case 0:
      return ""
    case 7:
      return "-mr-20"
    case 6:
      return "-mr-40"
    case 5:
      return "-mr-20"
    case 4:
      return ""
    case 3:
      return "pr-20"
    case 2:
      return "pr-40"
    case 1:
      return "pr-20"
    default:
      return ""
  }
}
