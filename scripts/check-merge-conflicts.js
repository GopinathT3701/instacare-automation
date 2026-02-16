#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const rootDir = process.cwd();
const scanDir = path.join(rootDir, 'tests');
const conflictPattern = /^(<<<<<<<|=======|>>>>>>>)\b/m;
const filesWithConflicts = [];

function scan(currentPath) {
  const entries = fs.readdirSync(currentPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(currentPath, entry.name);

    if (entry.isDirectory()) {
      scan(fullPath);
      continue;
    }

    if (!entry.isFile()) {
      continue;
    }

    if (!/\.(ts|tsx|js|jsx|mjs|cjs)$/.test(entry.name)) {
      continue;
    }

    const fileContent = fs.readFileSync(fullPath, 'utf8');
    if (conflictPattern.test(fileContent)) {
      filesWithConflicts.push(path.relative(rootDir, fullPath));
    }
  }
}

if (!fs.existsSync(scanDir)) {
  console.log('No tests directory found, skipping merge-conflict check.');
  process.exit(0);
}

scan(scanDir);

if (filesWithConflicts.length > 0) {
  console.error('Merge conflict markers were found in test files:');
  for (const file of filesWithConflicts) {
    console.error(` - ${file}`);
  }
  console.error('\nResolve the conflict markers before running tests.');
  process.exit(1);
}

console.log('No merge conflict markers found in test files.');
