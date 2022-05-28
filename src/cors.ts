function accessControl(name: string) {
  return `access-control-${name}`;
}

export function getAllowOriginHeader() {
  return accessControl(`allow-origin`);
}

export function getAllowCredentialsHeader() {
  return accessControl(`allow-credentials`);
}

export function getAllowHeadersHeader() {
  return accessControl(`allow-headers`);
}

export function getAllowMethodsHeader() {
  return accessControl(`allow-methods`);
}

export function getAllowMaxAge() {
  return accessControl(`max-age`);
}
