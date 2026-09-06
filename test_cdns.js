const https = require('https');

function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      console.log(`URL: ${url} -> Status: ${res.statusCode}`);
      resolve(res.statusCode === 200);
    }).on('error', (err) => {
      console.log(`URL: ${url} -> Error: ${err.message}`);
      resolve(false);
    });
  });
}

async function testAll() {
  await checkUrl('https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js');
  await checkUrl('https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js');
  await checkUrl('https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.23.6/babel.min.js');
  await checkUrl('https://cdn.jsdelivr.net/npm/react@18/umd/react.production.min.js');
  await checkUrl('https://cdn.jsdelivr.net/npm/react-dom@18/umd/react-dom.production.min.js');
}

testAll();
