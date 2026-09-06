const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const scriptIdx = html.indexOf('<script type="text/babel">');
const code = html.substring(scriptIdx + '<script type="text/babel">'.length, html.indexOf('</script>', scriptIdx));

// Check line by line for strange constructs or syntax issues
const lines = code.split('\n');
lines.forEach((line, idx) => {
  if (line.includes('undefined') || line.includes('\\"') || line.includes('${')) {
    console.log(`Line ${idx + 1}:`, line.trim());
  }
});
