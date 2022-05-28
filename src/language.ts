export function getAcceptLanguageHeader() {
  return `accept-language`;
}

export function getContentLanguageHeader() {
  return `content-language`;
}

export function Language(language: string | string[]) {
  return Array.isArray(language) ? language.join(",") : language;
}
