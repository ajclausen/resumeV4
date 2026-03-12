export function parseBold(text: string): string {
  return text.replace(/\*\*(.*?)\*\*/g, '<span class="lux-copper-text">$1</span>');
}
