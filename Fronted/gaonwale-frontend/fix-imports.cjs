const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if(file.endsWith('.ts') || file.endsWith('.tsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace `import { Type } from '../types'` with `import type { Type } from '../types'`
  // Make sure it doesn't break if it's already type
  let modified = content.replace(/import\s+\{([^}]+)\}\s+from\s+['"](?:\.\.\/)+types['"]/g, (match, p1) => {
    // Check if it already has 'type ' inside, if so, it's fine, though we should just replace `import ` with `import type `
    return `import type { ${p1.trim()} } from '../../types'`.replace('../../types', match.match(/['"](.*?)['"]/)[1]);
  });
  
  modified = modified.replace(/import\s+\{([^}]+)\}\s+from\s+['"]\.\/types['"]/g, (match, p1) => {
    return `import type { ${p1.trim()} } from './types'`;
  });

  if (content !== modified) {
    fs.writeFileSync(file, modified);
  }
});
