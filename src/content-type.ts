export function getContentTypeHeader() {
  return `content-type`;
}

/// Text

export function TextPlain(charset = "utf-8") {
  return `text/plain; charset=${charset}`;
}

export function TextHtml(charset = "utf-8") {
  return `text/html; charset=${charset}`;
}

export function TextCsv(charset = "utf-8") {
  return `text/csv; charset=${charset}`;
}

/// Application

export function ApplicationOctetStream(charset = "utf-8") {
  return `application/octet-stream; charset=${charset}`;
}

export function ApplicationJson(charset = "utf-8") {
  return `application/json; charset=${charset}`;
}

export function ApplicationPdf(charset = "utf-8") {
  return `application/pdf; charset=${charset}`;
}

export function ApplicationXlsx(charset = "utf-8", before2007 = false) {
  const subtype = before2007 ? `vnd.ms-excel` : `vnd.openxmlformats-officedocument.spreadsheetml.sheet`;
  return `application/${subtype}; charset=${charset}`;
}

export function ApplicationPptx(charset = "utf-8", before2007 = false) {
  const subtype = before2007 ? `vnd.ms-powerpoint` : `vnd.openxmlformats-officedocument.presentationml.presentation`;
  return `application/${subtype}; charset=${charset}`;
}

export function ApplicationDocx(charset = "utf-8", before2007 = false) {
  const subtype = before2007 ? `msword` : `vnd.openxmlformats-officedocument.wordprocessingml.document`;
  return `application/${subtype}; charset=${charset}`;
}

export function ApplicationZip(charset = "utf-8") {
  return `application/zip; charset=${charset}`;
}
