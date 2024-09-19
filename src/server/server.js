import http from "http";
import fs from "fs";
import path from "path";

// Helper function to get the content type based on file extension
const getContentType = (filePath) => {
  const ext = path.extname(filePath).toLowerCase();
  switch (ext) {
    case ".html":
      return "text/html";
    case ".js":
      return "application/javascript";
    case ".css":
      return "text/css";
    case ".jpg":
      return "image/jpg";
    case ".svg":
      return "image/svg+xml";
    case ".jpeg":
      return "image/jpeg";
    case ".png":
      return "image/png";
    case ".gif":
      return "image/gif";
    default:
      return "application/octet-stream";
  }
};

const server = http.createServer((req, res) => {
  let filePath = path.join(
    process.cwd(),
    req.url === "/" ? "index.html" : req.url
  );

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/plain");
      res.end("File not found");
    } else {
      // Set common headers
      res.statusCode = 200;
      res.setHeader("Content-Type", getContentType(filePath));

      // Set Cache-Control headers based on file type
      const ext = path.extname(filePath).toLowerCase();
      if (ext === ".html" || ext === ".js" || ext === ".css") {
        // For dynamic content, disable caching
        res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
      } else if (
        ext === ".jpg" ||
        ext === ".png" ||
        ext === ".gif" ||
        ext === ".jpeg" ||
        ext === ".svg"
      ) {
        // For static assets, enable long caching (e.g., 1 year)
        res.setHeader("Cache-Control", "max-age=31536000, public");
      } else {
        // Default for other files
        res.setHeader("Cache-Control", "no-cache");
      }

      // Send the response
      res.end(data);
    }
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
