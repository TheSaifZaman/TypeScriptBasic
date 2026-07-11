const http = require('http');
const fs = require('fs');
const path = require('path');

// Serve only files inside this directory. Anything that resolves outside
// ROOT (e.g. via `../` or URL-encoded traversal) is rejected.
const ROOT = path.resolve(__dirname);

const server = http.createServer((req, res) => {
    // Decode and strip the query string, then normalize away any `..` segments.
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const relative = path.normalize(pathname === '/' ? '/index.html' : pathname).replace(/^([/\\])+/, '');
    const filePath = path.resolve(ROOT, relative);

    // Reject paths that escape ROOT before touching the filesystem.
    if (filePath !== ROOT && !filePath.startsWith(ROOT + path.sep)) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end('Not Found');
            return;
        }

        const ext = path.extname(filePath);
        let contentType = 'text/html';

        switch (ext) {
            case '.js':
                contentType = 'application/javascript';
                break;
            case '.css':
                contentType = 'text/css';
                break;
        }

        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});