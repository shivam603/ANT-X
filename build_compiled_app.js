const fs = require('fs');
const path = require('path');
const vm = require('vm');

// 1. Load Babel Standalone from local cached file
const babelCode = fs.readFileSync('babel-standalone-tmp.js', 'utf8');

const sandbox = { console };
vm.createContext(sandbox);
vm.runInContext(babelCode, sandbox);

// 2. Read src/App.jsx
const appJsx = fs.readFileSync(path.join(__dirname, 'src', 'App.jsx'), 'utf8');

// Strip ES module exports so it attaches App to window in plain browser JS script
let cleanJsx = appJsx
  .replace(/import React,?\s*\{?[^}]*\}?\s*from\s*['"]react['"];?/g, '')
  .replace(/export const /g, 'const ')
  .replace(/export default function App\(\)/g, 'function App()')
  .replace(/export default App;/g, '');

cleanJsx += `

function mountKisanSetuApp() {
  const rootElement = document.getElementById('root');
  if (rootElement && typeof ReactDOM !== 'undefined' && typeof React !== 'undefined') {
    const root = ReactDOM.createRoot(rootElement);
    root.render(React.createElement(App, null));
  } else {
    console.error('Error mounting KisanSetu App: React, ReactDOM or #root element not found.');
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountKisanSetuApp);
} else {
  mountKisanSetuApp();
}
`;

console.log('Transpiling React App JSX into plain browser JS...');

const transpiledResult = sandbox.Babel.transform(cleanJsx, {
  presets: ['react']
}).code;

// 3. Ensure js directory exists and write js/app-compiled.js
const jsDir = path.join(__dirname, 'js');
if (!fs.existsSync(jsDir)) {
  fs.mkdirSync(jsDir, { recursive: true });
}

fs.writeFileSync(path.join(jsDir, 'app-compiled.js'), transpiledResult, 'utf8');
console.log('✅ js/app-compiled.js created! Size:', transpiledResult.length, 'bytes');

// 4. Create bulletproof index.html loading plain JS without Babel in browser!
const cleanHtml = `<!DOCTYPE html>
<html lang="hi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>KisanSetu-Agri DSS — Decision Support System | Team ANT-X</title>
  <meta name="description" content="Agricultural Decision Support System for Logistics, Procurement, Weighbridge Queue, and Multilingual Support across all 22 Official Languages of India.">
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
          }
        }
      }
    }
  </script>

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@500;600;700;800&display=swap" rel="stylesheet">

  <!-- React 18 & ReactDOM UMD CDN (Cloudflare CDN with unpkg fallbacks) -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js"></script>
  <script>window.React || document.write('<script src="https://unpkg.com/react@18/umd/react.production.min.js"><\\/script>')</script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js"></script>
  <script>window.ReactDOM || document.write('<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"><\\/script>')</script>
</head>
<body class="bg-slate-50 text-slate-900 font-sans antialiased">

  <!-- React Root Container -->
  <div id="root"></div>

  <!-- PRE-COMPILED PLAIN JAVASCRIPT APPLICATION -->
  <script src="js/app-compiled.js"></script>

</body>
</html>
`;

fs.writeFileSync(path.join(__dirname, 'index.html'), cleanHtml, 'utf8');
console.log('✅ index.html updated to load pre-compiled app-compiled.js! Zero browser Babel compilation required!');
