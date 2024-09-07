export const tokenTypeToTailwindClass = (type: string | null): string => {
  switch (type) {
    case "comment":
    case "prolog":
    case "doctype":
    case "cdata":
      return "text-slate-600"
    case "punctuation":
      return "text-gray-600"
    case "property":
    case "tag":
    case "boolean":
    case "number":
    case "constant":
    case "symbol":
    case "deleted":
      return "text-red-600"
    case "selector":
    case "attr-name":
    case "string":
    case "template-string":
    case "char":
    case "builtin":
    case "inserted":
      return "text-green-600"
    case "operator":
    case "entity":
    case "url":
    case "variable":
      return "text-yellow-600"
    case "atrule":
    case "attr-value":
    case "function":
    case "class-name":
    case "keyword":
      return "text-blue-600"
    case "regex":
    case "important":
      return "text-orange-600"
    // Custom token types
    case "gap":
      return "border-b border-dashed border-gray-500"
    default:
      return ""
  }
}
