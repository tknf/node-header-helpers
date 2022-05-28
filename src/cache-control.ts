import { getCustomHeader } from "./others";

// Types

export interface NoStoreStrategy {
  mode: string;
}

export type CachingStrategy = AllCacheOptions;

export interface AllCacheOptions {
  mode?: string;
  maxAge?: number;
  staleWhileRevalidate?: number;
  sMaxAge?: number;
  staleIfError?: number;
}

const PUBLIC = "public";
const PRIVATE = "private";
const NO_STORE = "no-store";

const cacheOptionsMap: {
  [key: string]: string;
} = {
  maxAge: "max-age",
  staleWhileRevalidate: "stale-while-revalidate",
  sMaxAge: "s-maxage",
  staleIfError: "stale-if-error"
};

// implementations

export function generateCacheControlHeader(cacheOptions: AllCacheOptions): string {
  const cacheControl: string[] = [];
  Object.keys(cacheOptions).forEach((key) => {
    if (key === "mode") {
      cacheControl.push(cacheOptions[key] as string);
    } else if (cacheOptionsMap[key]) {
      cacheControl.push(`${cacheOptionsMap[key]}=${cacheOptions[key as keyof AllCacheOptions]}`);
    }
  });

  return cacheControl.join(", ");
}

export function getCacheControlHeader(dev?: boolean) {
  return dev ? getCustomHeader("cache-control-preview") : `cache-control`;
}

export function NoStore() {
  return generateCacheControlHeader({
    mode: NO_STORE
  });
}

function guardExpirableModeType(overrideOptions?: CachingStrategy) {
  if (overrideOptions?.mode && overrideOptions?.mode !== PUBLIC && overrideOptions?.mode !== PRIVATE) {
    throw Error("cache mode must be either 'public' or 'private'");
  }
}

// 10 seconds

export function Cache10Seconds(overrideOptions?: CachingStrategy): string {
  guardExpirableModeType(overrideOptions);
  return generateCacheControlHeader({
    mode: PUBLIC,
    maxAge: 10,
    ...overrideOptions
  });
}

export function CacheRevalidate10Seconds(overrideOptions?: CachingStrategy): string {
  guardExpirableModeType(overrideOptions);
  return generateCacheControlHeader({
    mode: PUBLIC,
    maxAge: 1,
    staleWhileRevalidate: 9,
    ...overrideOptions
  });
}

// 30 minutes

export function Cache30Minutes(overrideOptions?: CachingStrategy): string {
  guardExpirableModeType(overrideOptions);
  return generateCacheControlHeader({
    mode: PUBLIC,
    maxAge: 1800,
    ...overrideOptions
  });
}

export function CacheRevalidate30Minutes(overrideOptions?: CachingStrategy): string {
  guardExpirableModeType(overrideOptions);
  return generateCacheControlHeader({
    mode: PUBLIC,
    maxAge: 900,
    staleWhileRevalidate: 900,
    ...overrideOptions
  });
}

// 1 hour

export function CacheHours(overrideOptions?: CachingStrategy): string {
  guardExpirableModeType(overrideOptions);
  return generateCacheControlHeader({
    mode: PUBLIC,
    maxAge: 3600,
    ...overrideOptions
  });
}

export function CacheRevalidateHours(overrideOptions?: CachingStrategy): string {
  guardExpirableModeType(overrideOptions);
  return generateCacheControlHeader({
    mode: PUBLIC,
    maxAge: 1800,
    staleWhileRevalidate: 1800,
    ...overrideOptions
  });
}

// 1day

export function CacheDays(overrideOptions?: CachingStrategy): string {
  guardExpirableModeType(overrideOptions);
  return generateCacheControlHeader({
    mode: PUBLIC,
    maxAge: 86400,
    ...overrideOptions
  });
}

export function CacheRevalidateDays(overrideOptions?: CachingStrategy): string {
  guardExpirableModeType(overrideOptions);
  return generateCacheControlHeader({
    mode: PUBLIC,
    maxAge: 3600,
    staleWhileRevalidate: 82800,
    ...overrideOptions
  });
}

// 2weeks

export function Cache2Weeks(overrideOptions?: CachingStrategy): string {
  guardExpirableModeType(overrideOptions);
  return generateCacheControlHeader({
    mode: PUBLIC,
    maxAge: 2592000,
    ...overrideOptions
  });
}

export function CacheRevalidate2Weeks(overrideOptions?: CachingStrategy): string {
  guardExpirableModeType(overrideOptions);
  return generateCacheControlHeader({
    mode: PUBLIC,
    maxAge: 1296000,
    staleWhileRevalidate: 1296000,
    ...overrideOptions
  });
}

export function CacheCustom(overrideOptions?: CachingStrategy): string {
  return generateCacheControlHeader(overrideOptions || {});
}
