/**
 * Truncate text.
 * If the text exceeds the limit it should truncate
 * @param text Text to truncate
 * @param limit Limit to truncate the text
 * @param ellipses Text to end with the truncation
 * @returns The text truncated
 */
export function truncateText(text: string, limit: number = 10, ellipses: string = '...'): string {
  return text.length > limit ? `${text.substring(0, limit)}${ellipses}` : text;
}
