const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const scriptContent = html.split('<script type="text/babel">')[1].split('</script>')[0];

console.log('Script length to test:', scriptContent.length);

// Let's test Babel Standalone parsing
// We can load babel standalone from node_modules or evaluate parsing
try {
  const babel = require('@babel/core');
  const res = babel.transformSync(scriptContent, {
    presets: ['@babel/preset-react']
  });
  console.log('✅ Babel Compilation Successful! Transpiled code size:', res.code.length);
} catch (err) {
  console.error('❌ Babel Syntax Error:', err.message);
  if (err.loc) {
    console.error(`Line: ${err.loc.line}, Column: ${err.loc.column}`);
    const lines = scriptContent.split('\n');
    console.error('Context:', lines[err.loc.line - 1]);
  }
}
