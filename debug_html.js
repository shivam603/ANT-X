const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const scriptIdx = html.indexOf('<script type="text/babel">');
const code = html.substring(scriptIdx + '<script type="text/babel">'.length, html.indexOf('</script>', scriptIdx));

console.log('Script Length:', code.length);

// Let's check for any unescaped syntax errors:
// 1. Check template literals for single quote or backtick mismatch
// 2. Check for missing brackets or braces

let openBraces = 0;
let openParens = 0;
let openBrackets = 0;

for (let i = 0; i < code.length; i++) {
  const char = code[i];
  if (char === '{') openBraces++;
  if (char === '}') openBraces--;
  if (char === '(') openParens++;
  if (char === ')') openParens--;
  if (char === '[') openBrackets++;
  if (char === ']') openBrackets--;
}

console.log('Braces balance:', openBraces);
console.log('Parens balance:', openParens);
console.log('Brackets balance:', openBrackets);

// Print any template literal syntax error:
const lines = code.split('\n');
lines.forEach((line, idx) => {
  if (line.includes('brx') && line.includes("ber'")) {
    console.log(`Line ${idx + 1} issue check:`, line);
  }
});
