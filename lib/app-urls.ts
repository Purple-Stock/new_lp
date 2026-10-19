/**
 * Public app destinations for landing CTAs.
 * WHY split login vs signup: "Testar 7 dias" used to open app root (login
 * with a red "precisa entrar" banner). Trial traffic must land on /signup.
 */

export const APP_ORIGIN = "https://app.purplestock.com.br";
export const APP_LOGIN_URL = `${APP_ORIGIN}/`;
export const APP_SIGNUP_URL = `${APP_ORIGIN}/signup`;

export function buildAppSignupUrl(query?: Record<string, string>): string {
  if (!query) return APP_SIGNUP_URL;

  const url = new URL(APP_SIGNUP_URL);
  for (const [key, value] of Object.entries(query)) {
    url.searchParams.set(key, value);
  }
  return url.toString();
}
