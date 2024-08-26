export const getPathZigzagPath = (pathIndex: number) => {
  switch (pathIndex % 8) {
    case 0:
      return ""
    case 7:
      return "-mr-24 sm:-mr-48 "
    case 6:
      return "-mr-36 sm:-mr-96 "
    case 5:
      return "-mr-24 sm:-mr-48 "
    case 4:
      return ""
    case 3:
      return "mr-24 sm:mr-48 "
    case 2:
      return "mr-36 sm:mr-96 "
    case 1:
      return "mr-24 sm:mr-48 "
    default:
      return ""
  }
}
