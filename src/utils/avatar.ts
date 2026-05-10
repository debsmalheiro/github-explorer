export function getAvatarUrl(url: string, size: number): string {
  const urlObj = new URL(url);
  urlObj.searchParams.set('s', size.toString());
  return urlObj.toString();
}
