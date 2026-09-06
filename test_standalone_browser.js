const http = require('https');
const fs = require('fs');

console.log('Fetching Babel Standalone script to test exact browser execution...');

http.get('https://unpkg.com/@babel/standalone@7.24.0/babel.min.js', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('babel-standalone-tmp.js', data);
    console.log('Downloaded Babel Standalone! Size:', data.length);
    
    // Now evaluate script from index.html with Babel standalone
    const html = fs.readFileSync('index.html', 'utf8');
    const scriptContent = html.split('<script type="text/babel">')[1].split('</script>')[0];
    
    // Load babel standalone in vm
    const vm = require('vm');
    const sandbox = { console };
    vm.createContext(sandbox);
    vm.runInContext(data, sandbox);
    
    try {
      const transpiled = sandbox.Babel.transform(scriptContent, { presets: ['react'] }).code;
      console.log('✅ BROWSER BABEL STANDALONE TRANSPILED SUCCESSFULLY! Transpiled length:', transpiled.length);
    } catch (err) {
      console.error('❌ BROWSER BABEL STANDALONE TRANSPILE ERROR:', err.message);
      if (err.loc) console.error('At Line:', err.loc.line, 'Col:', err.loc.column);
    }
  });
});
