export function getConnectionHeader() {
  return `connection`;
}

export function ConnectionClose() {
  return `close`;
}

export function ConnectionKeepAlive() {
  return `keep-alive`;
}

export function getCustomHeader(name: string) {
  return `x-${name}`;
}
