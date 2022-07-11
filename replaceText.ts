export function replaceText(
  text: string,
  from: number,
  to: number,
  replacement: string
) {
  return text.substring(0, from) + replacement + text.substring(to);
}

export function replaceTextWithValidation(
  text: string,
  from: number,
  to: number,
  replacement: string
) {
  try {
    if (from > text.length || to > text.length)
      throw new Error("Index out of text range");
    return text.substring(0, from) + replacement + text.substring(to);
  } catch (error) {
    return text;
  }
}

export function replaceTextWithForcedIndex(
  text: string,
  from: number,
  to: number,
  replacement: string
) {
  if (from > text.length) {
    from -= text.length;
  }
  if (to > text.length) {
    to -= text.length;
  }
  return text.substring(0, from) + replacement + text.substring(to);
}
