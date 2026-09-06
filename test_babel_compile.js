const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const scriptIdx = html.indexOf('<script type="text/babel">');
const code = html.substring(scriptIdx + '<script type="text/babel">'.length, html.indexOf('</script>', scriptIdx));

console.log('Testing JSX compilation...');
// Test simple JSX parsing using Babel if available or checking string syntax
try {
  // Check if there are any unclosed tags or syntax errors by attempting basic parsing
  const evalCheck = new Function('React', 'ReactDOM', 'useState', 'useEffect', 'useMemo', 'useRef', `
    try {
      ${code}
    } catch(e) {
      console.error('Execution Error inside Function:', e);
    }
  `);
  console.log('JS syntax evaluation test succeeded!');
} catch (err) {
  console.error('JS Syntax Error caught:', err.message);
  console.error(err.stack);
}
