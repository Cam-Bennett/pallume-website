// claude:// links for /setup: open a Claude Code session on a folder with a
// first line typed but not sent (form VERIFIED on Camden's Mac, 10/28/2026:
// claude://code/new?folder=~/Documents&q=<encoded line>).
// The folder stays unencoded (the tested form); the line is encoded strictly
// (RFC 3986), so ' ( ) ! * are escaped too, matching the tested encoder.
export function encodeStrict(text: string) {
  return encodeURIComponent(text).replace(/[!'()*]/g, (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`);
}

export function claudeCodeLink(folder: string, firstLine: string) {
  return `claude://code/new?folder=${folder}&q=${encodeStrict(firstLine)}`;
}
