const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Source directories
const sourceDirs = [
  'src/Assets',
  'public'
];

// Supported image extensions
const imageExtensions = ['.jpg', '.jpeg', '.png'];

// Function to process a single image
async function processImage(filePath, outputDir) {
  try {
    const parsedPath = path.parse(filePath);
    const outputPath = path.join(
      outputDir,
      `${parsedPath.name}.webp`
    );

    // Skip if already processed
    if (fs.existsSync(outputPath)) return;

    await sharp(filePath)
      .webp({
        quality: 80,
        effort: 6,
      })
      .toFile(outputPath);

    console.log(`Processed: ${filePath} -> ${outputPath}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

// Function to process all images in a directory
async function processDirectory(dir, outputBaseDir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      await processDirectory(filePath, path.join(outputBaseDir, file));
    } else if (imageExtensions.includes(path.extname(file).toLowerCase())) {
      // Create output directory if it doesn't exist
      const relativePath = path.relative(dir, path.dirname(filePath));
      const outputDir = path.join(outputBaseDir, relativePath);
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }
      
      await processImage(filePath, outputDir);
    }
  }
}

// Main function
async function main() {
  console.log('Starting image optimization...');
  
  for (const dir of sourceDirs) {
    const outputDir = dir.includes('public') 
      ? path.join('public', 'optimized-images')
      : path.join('src', 'Assets', 'optimized');
      
    await processDirectory(dir, outputDir);
  }
  
  console.log('Image optimization complete!');}

// Run the script
main().catch(console.error);
