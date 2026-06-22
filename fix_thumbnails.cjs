const fs = require('fs');
const path = require('path');

const files = [
  'src/data/class11Playlists.js',
  'src/data/class12Playlists.js',
  'src/data/jeePlaylists.js',
  'src/data/ndaPlaylists.js',
  'src/data/ipmatPlaylists.js'
];

files.forEach(file => {
  const filePath = path.join('/Users/parvgoyal1321/.gemini/antigravity-ide/scratch/wisdom-classes', file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Find videoId and replace thumbnail: null or anything else if requested
  content = content.replace(/videoId:\s*"([^"]+)"(?:,|\s*\n)(?:[^}]*?)thumbnail:\s*(null|"[^"]*")/g, (match, videoId) => {
    return match.replace(/thumbnail:\s*(null|"[^"]*")/, `thumbnail: "https://i.ytimg.com/vi/${videoId}/hqdefault.jpg"`);
  });

  fs.writeFileSync(filePath, content, 'utf-8');
});
console.log('Fixed thumbnails');
