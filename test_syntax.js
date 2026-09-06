const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const scriptIdx = html.indexOf('<script type="text/babel">');
console.log('Script index:', scriptIdx);

if (scriptIdx !== -1) {
  const code = html.substring(scriptIdx + '<script type="text/babel">'.length, html.indexOf('</script>', scriptIdx));
  console.log('Code length:', code.length);
  
  // Check for any unescaped quotes or template literal issues
  const lines = code.split('\n');
  console.log('Total lines in script:', lines.length);
}
