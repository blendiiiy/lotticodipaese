// Node.js script to download images from lotticodipaese.com
// Run with: node scripts/download-images-node.js

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, '..', 'public', 'images');

// Create directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
  console.log('Created directory:', outputDir);
}

// Function to download a single image
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    
    protocol.get(url, (response) => {
      if (response.statusCode === 200) {
        const filePath = path.join(outputDir, filename);
        const fileStream = fs.createWriteStream(filePath);
        
        response.pipe(fileStream);
        
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`✓ Downloaded: ${filename}`);
          resolve();
        });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        // Handle redirects
        downloadImage(response.headers.location, filename)
          .then(resolve)
          .catch(reject);
      } else {
        console.log(`✗ Failed to download ${filename}: ${response.statusCode}`);
        reject(new Error(`HTTP ${response.statusCode}`));
      }
    }).on('error', (err) => {
      console.log(`✗ Error downloading ${filename}:`, err.message);
      reject(err);
    });
  });
}

// Common image paths to try (you'll need to update these with actual URLs)
const imageUrls = [
  // Add actual image URLs here after finding them on the website
  // Example format:
  // 'https://www.lotticodipaese.com/wp-content/uploads/2024/image.jpg',
];

console.log('=== Image Downloader ===\n');
console.log('To use this script:');
console.log('1. Open https://www.lotticodipaese.com/ in your browser');
console.log('2. Press F12 → Network tab → Filter by "Img"');
console.log('3. Refresh the page');
console.log('4. Copy image URLs and add them to the imageUrls array in this file');
console.log('5. Update the filenames array to match');
console.log('\nOr use the manual method in HOW-TO-DOWNLOAD-IMAGES.md\n');

// If you have URLs, uncomment and modify this:
/*
const filenames = [
  'lenti-anti-luce-blu.jpg',
  'lenti-monofocali.jpg',
  'lenti-progressive.jpg',
  'montature.jpg',
];

if (imageUrls.length > 0) {
  console.log(`Downloading ${imageUrls.length} images...\n`);
  
  Promise.all(
    imageUrls.map((url, index) => 
      downloadImage(url, filenames[index] || `image-${index + 1}.jpg`)
    )
  )
    .then(() => {
      console.log('\n✓ All images downloaded successfully!');
    })
    .catch((err) => {
      console.log('\n✗ Some images failed to download');
    });
} else {
  console.log('No image URLs configured. Please add URLs to the script first.');
}
*/

