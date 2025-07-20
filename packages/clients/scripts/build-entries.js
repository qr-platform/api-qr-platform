const fs = require("fs");
const path = require("path");

// Create node.js entry point with client functions, utils, generated API, and global client
const nodeEntry = `
const nodeExports = require('./dist/node/index.js');
const clientExports = require('./dist/node/client/index.js');
const utilsExports = require('./dist/utils/bulk/index.js');
const { client } = require('./dist/node/client.gen.js');
module.exports = { ...nodeExports, ...clientExports, ...utilsExports, client };
`;
fs.writeFileSync(path.join(__dirname, "..", "node.js"), nodeEntry.trim());

// Create node.d.ts entry point with client functions, utils, generated API, and global client
const nodeTypes = `export * from './dist/node/index';
export * from './dist/node/client/index';
export * from './dist/utils/bulk/index';
export { client } from './dist/node/client.gen';`;
fs.writeFileSync(path.join(__dirname, "..", "node.d.ts"), nodeTypes);

// Create react.js entry point with client functions, utils, generated API, and global client
const reactEntry = `
const reactExports = require('./dist/react/react/index.js');
const clientExports = require('./dist/react/react/client/index.js');
const utilsExports = require('./dist/utils/bulk/index.js');
const { client } = require('./dist/react/react/client.gen.js');
module.exports = { ...reactExports, ...clientExports, ...utilsExports, client };
`;
fs.writeFileSync(path.join(__dirname, "..", "react.js"), reactEntry.trim());

// Create react.d.ts entry point with client functions, utils, generated API, and global client
const reactTypes = `export * from './dist/react/react/index';
export * from './dist/react/react/client/index';
export * from './dist/utils/bulk/index';
export { client } from './dist/react/react/client.gen';`;
fs.writeFileSync(path.join(__dirname, "..", "react.d.ts"), reactTypes);

console.log("Entry point files created successfully!");
console.log(
  "✅ Client functions, bulk utilities, generated API, and global client included in exports"
);
