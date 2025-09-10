const fs = require('fs');
const path = require('path');

// Directory to search for React components
const componentDirs = [
  'src/components'
];

// Function to update image references in a file
function updateImageReferences(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Pattern to match image imports and requires
    const importPattern = /(import\s+[\w{}\s*,]*\s+from\s+['"]\.\.?\/Assets\/)([^'"\/]+\.[a-z]+)(['"])/g;
    const requirePattern = /(require\(['"]\.\.?\/Assets\/)([^'"\/]+\.[a-z]+)(['"]\))/g;
    
    // Update import statements
    content = content.replace(importPattern, (match, p1, p2, p3) => {
      const ext = path.extname(p2);
      if (['.jpg', '.jpeg', '.png'].includes(ext.toLowerCase())) {
        const baseName = path.basename(p2, ext);
        return `${p1}optimized/${baseName}.webp${p3}`;
      }
      return match;
    });
    
    // Update require statements
    content = content.replace(requirePattern, (match, p1, p2, p3) => {
      const ext = path.extname(p2);
      if (['.jpg', '.jpeg', '.png'].includes(ext.toLowerCase())) {
        const baseName = path.basename(p2, ext);
        return `${p1}optimized/${baseName}.webp${p3}`;
      }
      return match;
    });
    
    // Update img src attributes
    const imgSrcPattern = /(<img[^>]*src=["'])(\.\.?\/Assets\/)([^'"\/]+\.[a-z]+)(['"])/g;
    content = content.replace(imgSrcPattern, (match, p1, p2, p3, p4) => {
      const ext = path.extname(p3);
      if (['.jpg', '.jpeg', '.png'].includes(ext.toLowerCase())) {
        const baseName = path.basename(p3, ext);
        return `${p1}${p2}optimized/${baseName}.webp${p4} loading="lazy"`;
      }
      return match;
    });
    
    // Write back if changes were made
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated image references in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

// Function to process all files in a directory
function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
      updateImageReferences(filePath);
    }
  });
}

// Main function
function main() {
  console.log('Updating image references...');
  
  componentDirs.forEach(dir => {
    if (fs.existsSync(dir)) {
      processDirectory(dir);
    }
  });
  
  console.log('Image reference update complete!');
}

// Run the script
main();
