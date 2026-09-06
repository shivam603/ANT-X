const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const scriptContent = html.split('<script type="text/babel">')[1].split('</script>')[0];
const lines = scriptContent.split('\n');

for (let i = 1; i <= lines.length; i++) {
  const codeChunk = lines.slice(0, i).join('\n');
  try {
    new Function(codeChunk);
  } catch (e) {
    if (!e.message.includes('Unexpected end of input') && !e.message.includes('Unterminated') && !e.message.includes('Unexpected token')) {
      console.log(`Line ${i}:`, e.message);
    } else if (e.message.includes('Unexpected token') && !e.message.includes('Unexpected token \'<') && !e.message.includes('Unexpected token \';\'')) {
      console.log(`Line ${i} error: ${e.message} -> ${lines[i-1].trim()}`);
    }
  }
}
