/**
 * IndexNow key and payload helpers for Bing/Yandex/Naver.
 * Host the key at /{INDEXNOW_KEY}.txt (see public/).
 */

export const INDEXNOW_KEY = "c4e8f1a2b9d0476e8c3a5f7b1d0e9c82";

export function getIndexNowKeyPath(): string {
  return `/${INDEXNOW_KEY}.txt`;
}

export function buildIndexNowPayload(
  host: string,
  urlList: string[]
): {
  host: string;
  key: string;
  keyLocation: string;
  urlList: string[];
} {
  if (urlList.length === 0) {
    throw new Error("IndexNow urlList must include at least one URL");
  }

  return {
    host,
    key: INDEXNOW_KEY,
    keyLocation: `https://${host}${getIndexNowKeyPath()}`,
    urlList,
  };
}
