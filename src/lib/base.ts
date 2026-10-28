export const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : "";

export function asset(path: string) {
  return `${basePath}${path}`;
}
