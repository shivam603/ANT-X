const fs = require('fs');
const vm = require('vm');

const appCompiled = fs.readFileSync('js/app-compiled.js', 'utf8');

const mockWindow = {};
const mockDocument = {
  getElementById: (id) => {
    if (id === 'root') {
      return {
        innerHTML: '',
        appendChild: () => {},
        setAttribute: () => {}
      };
    }
    return null;
  },
  createElement: () => ({ setAttribute: () => {}, appendChild: () => {}, removeChild: () => {}, style: {} }),
  body: { appendChild: () => {}, removeChild: () => {} }
};

const sandbox = {
  console,
  window: mockWindow,
  document: mockDocument,
  React: {
    createElement: (...args) => ({ type: args[0], props: args[1], children: args.slice(2) }),
    useState: (val) => [val, () => {}],
    useEffect: (fn) => fn(),
    useMemo: (fn) => fn(),
    useRef: (val) => ({ current: val })
  },
  ReactDOM: {
    createRoot: (container) => ({
      render: (element) => {
        console.log('✅ ReactDOM.createRoot render called successfully with element:', element.type ? (element.type.name || typeof element.type) : element);
      }
    })
  }
};

mockWindow.React = sandbox.React;
mockWindow.ReactDOM = sandbox.ReactDOM;
mockWindow.window = mockWindow;

vm.createContext(sandbox);

try {
  vm.runInContext(appCompiled, sandbox);
  console.log('✅ js/app-compiled.js evaluated with zero errors!');
} catch (err) {
  console.error('❌ ERROR IN js/app-compiled.js:', err.message);
  console.error(err.stack);
}
