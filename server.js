import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let PORT = parseInt(process.env.PORT) || 3000;

const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.js': 'text/javascript; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2'
};

function startServer(portToTry) {
  const server = http.createServer((req, res) => {
    let reqUrl = req.url.split('?')[0];
    
    // First check dist folder for production build, fallback to root
    let distPath = path.join(__dirname, 'dist', reqUrl === '/' ? 'index.html' : reqUrl);
    let rootPath = path.join(__dirname, reqUrl === '/' ? 'index.html' : reqUrl);

    let filePath = fs.existsSync(distPath) ? distPath : rootPath;
    let ext = path.extname(filePath);
    
    if (!ext) {
      if (fs.existsSync(path.join(__dirname, 'dist', 'index.html'))) {
        filePath = path.join(__dirname, 'dist', 'index.html');
      } else {
        filePath = path.join(__dirname, 'index.html');
      }
      ext = '.html';
    }

    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, content) => {
      if (err) {
        if (err.code === 'ENOENT') {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end('<h1>404 Not Found</h1>', 'utf-8');
        } else {
          res.writeHead(500);
          res.end(`Server Error: ${err.code}`);
        }
      } else {
        res.writeHead(200, { 
          'Content-Type': contentType, 
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'no-cache'
        });
        res.end(content, 'utf-8');
      }
    });
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${portToTry} in use, trying port ${portToTry + 1}...`);
      startServer(portToTry + 1);
    } else {
      console.error('Server error:', err);
    }
  });

  server.listen(portToTry, () => {
    console.log(`\n==================================================`);
    console.log(`✅ KisanSetu-Agri DSS Server running!`);
    console.log(`🌐 Open in browser: http://localhost:${portToTry}`);
    console.log(`==================================================\n`);
  });
}

startServer(PORT);
