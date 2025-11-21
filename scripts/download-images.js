// Script to help identify and download images from the original website
// Run this in browser console on https://www.lotticodipaese.com/

console.log('=== Image Downloader Helper ===');
console.log('Run this script in the browser console on lotticodipaese.com');

const downloadImages = () => {
  // Find all images on the page
  const images = Array.from(document.querySelectorAll('img'));
  
  console.log(`Found ${images.length} images on the page`);
  
  const imageData = images.map((img, index) => {
    const src = img.src || img.getAttribute('data-src') || img.getAttribute('data-lazy-src');
    const alt = img.alt || 'image-' + index;
    
    return {
      index: index + 1,
      src: src,
      alt: alt,
      filename: src.split('/').pop() || `image-${index + 1}.jpg`
    };
  }).filter(img => img.src && !img.src.includes('data:image'));

  console.table(imageData);
  
  // Create download links
  console.log('\n=== Download Instructions ===');
  console.log('1. Copy the image URLs from the table above');
  console.log('2. Open each URL in a new tab');
  console.log('3. Right-click and "Save image as..."');
  console.log('4. Save to: public/images/ folder');
  console.log('\nOr use this function to download all:');
  
  return imageData;
};

// Function to download a single image
const downloadImage = (url, filename) => {
  fetch(url)
    .then(response => response.blob())
    .then(blob => {
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      link.click();
    })
    .catch(err => console.error('Error downloading:', err));
};

console.log('\nTo use:');
console.log('1. const images = downloadImages();');
console.log('2. images.forEach(img => downloadImage(img.src, img.filename));');

