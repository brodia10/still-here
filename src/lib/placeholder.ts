export function getPlaceholderSrc(width: number, height: number): string {
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}'%3E%3Crect fill='%23111111' width='${width}' height='${height}'/%3E%3C/svg%3E`;
}
