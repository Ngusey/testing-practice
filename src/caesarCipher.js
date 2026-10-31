export function caesarCipher(string, shift) {
  const shiftAmount = ((shift % 26) + 26) % 26;

  return string.replace(/[a-z]/gi, (char) => {
    const base = char === char.toUpperCase() ? 65 : 97;

    return String.fromCharCode(
      ((char.charCodeAt(0) - base + shiftAmount) % 26) + base
    );
  });
}