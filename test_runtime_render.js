const fs = require('fs');
const vm = require('vm');

// 1. Load Babel Standalone
const babelCode = fs.readFileSync('babel-standalone-tmp.js', 'utf8');

// 2. Load React and ReactDOM
const html = fs.readFileSync('index.html', 'utf8');
const scriptContent = html.split('<script type="text/babel">')[1].split('</script>')[0];

const sandbox = {
  console,
  setTimeout,
  clearTimeout,
  setInterval,
  clearInterval,
  window: {},
  document: {
    createElement: () => ({ setAttribute: () => {}, appendChild: () => {}, removeChild: () => {} }),
    getElementById: (id) => id === 'root' ? { appendChild: () => {}, innerHTML: '' } : null,
    body: { appendChild: () => {}, removeChild: () => {} }
  }
};

sandbox.window = sandbox;

vm.createContext(sandbox);
vm.runInContext(babelCode, sandbox);

// Transpile JSX script
const transpiledCode = sandbox.Babel.transform(scriptContent, { presets: ['react'] }).code;

// Also load React 18 & ReactDOM from CDN or mock basic React
console.log('Testing runtime execution of transpiled Babel code...');

try {
  // Execute transpiled script in VM
  vm.runInContext(transpiledCode, sandbox);
  console.log('✅ RUNTIME EXECUTION COMPLETED WITHOUT ANY UNCAUGHT SYNTAX OR EVALUATION ERROR!');
} catch (err) {
  console.error('❌ RUNTIME ERROR DURING COMPONENT INITIALIZATION:', err.message);
  console.error(err.stack);
}
