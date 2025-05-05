

const { spawn } = require('child_process');
const path = require('path');

console.log('Starting development server...');

// Run vite in development mode
const viteProcess = spawn('npx', ['vite', '--host', '::', '--port', '8080'], {
  stdio: 'inherit',
  shell: true
});

viteProcess.on('error', (error) => {
  console.error(`Error starting Vite: ${error.message}`);
  process.exit(1);
});

