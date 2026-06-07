const DEFAULT_APP_URL = "https://app.gestaobem.com";

function normalizeUrl(url: string): string {
  return url.trim().replace(/\/+$/, "");
}

function getPublicUrl(value: string | undefined, fallback: string): string {
  if (!value) return fallback;

  try {
    return normalizeUrl(new URL(value).toString());
  } catch {
    return fallback;
  }
}

export function getAppUrl(): string {
  return getPublicUrl(process.env.NEXT_PUBLIC_APP_URL, DEFAULT_APP_URL);
}

export function getAppLoginUrl(): string {
  return `${getAppUrl()}/login`;
}

export function getAppSignupUrl(): string {
  return `${getAppUrl()}/sign_up`;
}

export function buildAppUrl(
  path: "login" | "sign_up" = "sign_up",
  searchParams?: Record<string, string>
): string {
  const basePath = path === "login" ? getAppLoginUrl() : getAppSignupUrl();

  if (!searchParams || Object.keys(searchParams).length === 0) {
    return basePath;
  }

  try {
    const url = new URL(basePath);
    for (const [key, value] of Object.entries(searchParams)) {
      url.searchParams.set(key, value);
    }
    return url.toString();
  } catch {
    return basePath;
  }
}
