const fs = require('fs');
const path = require('path');

const basePath = '/Users/parvgoyal1321/.gemini/antigravity-ide/scratch/wisdom-classes';

const files = [
  { path: 'src/pages/Class11.jsx', importName: 'class11Playlists', importPath: '../data/class11Playlists' },
  { path: 'src/pages/Class12.jsx', importName: 'class12Playlists', importPath: '../data/class12Playlists' },
  { path: 'src/pages/JEE.jsx', importName: 'jeePlaylists', importPath: '../data/jeePlaylists' },
  { path: 'src/pages/NDA.jsx', importName: 'ndaPlaylists', importPath: '../data/ndaPlaylists' },
  { path: 'src/pages/IPMAT.jsx', importName: 'ipmatPlaylists', importPath: '../data/ipmatPlaylists' }
];

files.forEach(file => {
  const filePath = path.join(basePath, file.path);
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');
  
  // 1. Add import if missing
  const importStatement = `import { ${file.importName} } from "${file.importPath}";`;
  if (!content.includes(importStatement)) {
    // try to insert after react-router-dom
    if (content.includes('import { Link } from "react-router-dom";')) {
      content = content.replace('import { Link } from "react-router-dom";', `import { Link } from "react-router-dom";\n${importStatement}`);
    } else {
      // just put it near the top
      content = importStatement + '\n' + content;
    }
  }
  
  // 2. Remove inline chaptersData array
  // Wait! Some might have `const chaptersData = [` and some might have `const chaptersData = [\n`
  const startIndex = content.indexOf('const chaptersData = [');
  if (startIndex !== -1) {
    // Find the matching closing bracket `];`
    // We can just use a simple approach since these are standard files
    const endIndex = content.indexOf('  ];', startIndex); // The array usually closes with 2 spaces indent and ];
    if (endIndex !== -1) {
      content = content.substring(0, startIndex) + `const chaptersData = ${file.importName};` + content.substring(endIndex + 4);
    } else {
      // Try just ];
      const altEnd = content.indexOf('];', startIndex);
      if (altEnd !== -1) {
        content = content.substring(0, startIndex) + `const chaptersData = ${file.importName};` + content.substring(altEnd + 2);
      }
    }
  }

  // Also replace `const nda2025Playlists = [` and `const nda2026Playlists = [` in NDA.jsx if they exist
  if (file.path.includes('NDA.jsx')) {
    const nda25Start = content.indexOf('const nda2025Playlists = [');
    if (nda25Start !== -1) {
      const nda25End = content.indexOf('];', nda25Start);
      content = content.substring(0, nda25Start) + content.substring(nda25End + 2);
    }
    const nda26Start = content.indexOf('const nda2026Playlists = [');
    if (nda26Start !== -1) {
      const nda26End = content.indexOf('];', nda26Start);
      content = content.substring(0, nda26Start) + content.substring(nda26End + 2);
    }
    // Also we need to make sure the data variables are used
    content = content.replace(/nda2025Playlists\.map/g, 'ndaPlaylists.filter(p => !p.category || p.category !== "2026").map');
    // Wait! NDA.jsx might use nda2025Playlists and nda2026Playlists directly from the data file!
    // The ndaPlaylists.js exports nda2025Playlists and nda2026Playlists
    if (!content.includes('import { nda2025Playlists, nda2026Playlists }')) {
      content = content.replace(importStatement, `import { nda2025Playlists, nda2026Playlists } from "../data/ndaPlaylists";`);
    }
  }

  fs.writeFileSync(filePath, content);
});
console.log('Restored external data connections');
