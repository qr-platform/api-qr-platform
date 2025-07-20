const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Building custom utilities...');

// Create utils output directory if it doesn't exist
const utilsDistDir = path.join(__dirname, '..', 'dist', 'utils');
if (!fs.existsSync(utilsDistDir)) {
  fs.mkdirSync(utilsDistDir, { recursive: true });
}

try {
  // Compile utils
  execSync('tsc -p tsconfig.utils.json', { stdio: 'inherit' });
  console.log('✅ Custom utilities built successfully!');
} catch (error) {
  console.error('❌ Failed to build custom utilities:', error.message);
  process.exit(1);
}
