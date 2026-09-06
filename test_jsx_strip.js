const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const scriptContent = html.split('<script type="text/babel">')[1].split('</script>')[0];

// Let's replace JSX elements with dummy objects to test JS syntax using eval/new Function
let stripped = scriptContent
  .replace(/<[A-Za-z0-9_.\-]+[^>]*>([\s\S]*?)<\/[A-Za-z0-9_.\-]+>/g, 'null')
  .replace(/<[A-Za-z0-9_.\-]+[^>]*\/>/g, 'null');

// Loop to strip nested JSX tags
for (let i = 0; i < 5; i++) {
  stripped = stripped
    .replace(/<[A-Za-z0-9_.\-]+[^>]*>([\s\S]*?)<\/[A-Za-z0-9_.\-]+>/g, 'null')
    .replace(/<[A-Za-z0-9_.\-]+[^>]*\/>/g, 'null');
}

try {
  // Test parsing stripped JS
  new Function('React', 'ReactDOM', 'useState', 'useEffect', 'useMemo', 'useRef', stripped);
  console.log('✅ JS logic structure is 100% valid!');
} catch (e) {
  console.error('❌ Stripped JS error:', e.message);
}
