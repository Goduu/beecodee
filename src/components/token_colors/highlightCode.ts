import Prism from "prismjs";

export type Token = {
  content: string;
  type: string | null;
}

/**
 * Highlights code using Prism.js and returns HTML with color.
 * @param code - The code to be highlighted, either as a single string or an array of strings.
 * @param language - The language of the code (e.g., 'javascript', 'python').
 * @returns The highlighted code with HTML and CSS classes for syntax highlighting.
 */
export function highlightCode(code: string | string[], language: string): Token[] {
  // Check if code is an array and join it into a single string
  const codeStr = Array.isArray(code) ? code.join(' ') : code;
  const codeWithTabs = codeStr.replace(/  /g, '\t')
  // Use Prism to highlight the code
  // const highlightedCode = Prism.highlight(codeWithTabs, Prism.languages[language] || Prism.languages.javascript, language);
  const codeTokenized = Prism.tokenize(codeWithTabs, Prism.languages[language]);


  const tokens: Token[] = [];

  const processToken = (token: Prism.Token | string) => {
    if (typeof token === 'string') {
      if (token.includes("\n")) {
        tokens.push({ content: "\n", type: "format" });
      }
      if (token.replace(/\n/g, '') !== '') {
        tokens.push({ content: token, type: null });
      }
    } else {
      if (typeof token.content === 'string') {
        tokens.push({
          content: token.content,
          type: token.type,
        });
      }
      if (Array.isArray(token.content)) {
        token.content.forEach(processToken);
      }
    }
  }
  codeTokenized.forEach(processToken);
  return tokens;
}

export function highlightArray(code: string[], language: string): Token[] {
  const tokens: Token[] = [];
  const processToken = (token: Prism.Token | string) => {
    if (typeof token === 'string') {
      if (token.includes("\n")) {
        tokens.push({ content: "\n", type: "format" });
      }
      if (token.replace(/\n/g, '') !== '') {
        tokens.push({ content: token, type: null });
      }
    } else {
      if (typeof token.content === 'string') {
        tokens.push({
          content: token.content,
          type: token.type,
        });
      }
      if (Array.isArray(token.content)) {
        token.content.forEach(processToken);
      }
    }
  }

  code.forEach((codeStr) => {
    const tokenizedCode = Prism.tokenize(codeStr, Prism.languages[language] || Prism.languages.javascript);
    tokenizedCode.forEach(processToken);
  })

  return tokens;
}

export const tokenizeCode = (code: string, language: string) => {
  const codeTokenized = Prism.highlight(code, Prism.languages[language] || Prism.languages.javascript, language);

  return codeTokenized;
}