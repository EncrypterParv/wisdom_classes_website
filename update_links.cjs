const fs = require('fs');
const path = require('path');

const updates = [
  {
    file: 'src/data/class12Playlists.js',
    items: [
      {
        nameRegex: /Differential Equations/i,
        url: "https://www.youtube.com/watch?v=09c3dDy0IK8&list=PLkG0JIX8a6A45IiwwfXuz2ESsRGOFQoTW",
        id: "09c3dDy0IK8"
      },
      {
        nameRegex: /Continuity and Differentiability/i,
        url: "https://www.youtube.com/watch?v=-LInTs_KDx0&list=PLkG0JIX8a6A4aycSfVu5vp3hNY94p_nGj",
        id: "-LInTs_KDx0"
      },
      {
        nameRegex: /Differentiation Core|Differentiation \(Core\)/i,
        url: "https://www.youtube.com/watch?v=pBizgy_IT2g&list=PLkG0JIX8a6A4JMEYHcl6hdnxUcAy4Txoz",
        id: "pBizgy_IT2g"
      }
    ]
  },
  {
    file: 'src/data/ndaPlaylists.js',
    items: [
      {
        nameRegex: /Logarithm/i,
        url: "https://www.youtube.com/watch?v=Af9MRelICzQ&list=PLh612HIcYw1U6N7Vn9FSmkb6KVmUvZ4-&index=3&pp=iAQB",
        id: "Af9MRelICzQ",
        section: "2025" // We'll just replace the first one that matches Logarithm for 2025? Wait, both are Logarithm. 
      },
      {
        nameRegex: /Binomial Theorem/i,
        url: "https://www.youtube.com/watch?v=MIsYy_CDQ7Y&list=PLh612HIcYw1U6N7Vn9FSmkb6KVmUvZ4-&index=10&pp=iAQB",
        id: "MIsYy_CDQ7Y"
      },
      {
        nameRegex: /Trigonometry Part 2/i,
        url: "https://www.youtube.com/watch?v=-mVIL-YIJnU&list=PLh612HIcYw1U6N7Vn9FSmkb6KVmUvZ4-&index=12&pp=iAQB",
        id: "-mVIL-YIJnU"
      },
      {
        nameRegex: /Limits/i,
        url: "https://www.youtube.com/watch?v=JuhL9u-3e0&list=PLh612HIcYw1U6N7Vn9FSmkb6KVmUvZ4-&index=18&pp=iAQB",
        id: "JuhL9u-3e0"
      },
      {
        nameRegex: /Differentiation/i,
        url: "https://www.youtube.com/watch?v=Z5IvWgJfjJs&list=PLh612HIcYw1U6N7Vn9FSmkb6KVmUvZ4-&index=20&pp=iAQB",
        id: "Z5IvWgJfjJs"
      },
      // NDA 2026 Logarithm
      {
        nameRegex: /Logarithm/i,
        url: "https://www.youtube.com/watch?v=lZ5zjgJ6Hww&list=PLh612HIcYw1UyfrMtK8pt2vTLb3Q0Vv80&index=1&pp=iAQB",
        id: "lZ5zjgJ6Hww",
        section: "2026"
      },
      {
        nameRegex: /Probability Part 2/i,
        url: "https://www.youtube.com/watch?v=sNooeb_XNA&list=PLh612HIcYw1UyfrMtK8pt2vTLb3Q0Vv80&index=4&pp=iAQB",
        id: "sNooeb_XNA"
      }
    ]
  },
  {
    file: 'src/data/ipmatPlaylists.js',
    items: [
      {
        nameRegex: /Linear Inequalities/i,
        url: "https://www.youtube.com/watch?v=1RS_5qiLIQg",
        id: "1RS_5qiLIQg"
      }
    ]
  }
];

const basePath = '/Users/parvgoyal1321/.gemini/antigravity-ide/scratch/wisdom-classes';

updates.forEach(update => {
  const filePath = path.join(basePath, update.file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // This is a bit tricky, let's just use string replacement on the whole file using regex
  update.items.forEach(item => {
    // We can replace videoId and playlistUrl by matching the name
    const blockRegex = new RegExp(`name:\\s*["']([^"']*${item.nameRegex.source}[^"']*)["']([^\\}]*?)(videoId|playlistUrl|thumbnail):\\s*[^\\n]+([^\\}]*?)(videoId|playlistUrl|thumbnail):\\s*[^\\n]+([^\\}]*?)(videoId|playlistUrl|thumbnail):\\s*[^\\n]+`, 'g');
    
    // Actually a simpler way is to find the index of the name, and then replace the next videoId, playlistUrl, and thumbnail
    let nameMatch;
    let searchPattern = new RegExp(`name:\\s*["'][^"']*${item.nameRegex.source}[^"']*["']`, 'ig');
    
    // Find all matches
    let matches = [...content.matchAll(searchPattern)];
    for (const match of matches) {
      if (item.section === "2026" && match.index < content.indexOf('nda2026Playlists')) continue;
      if (item.section === "2025" && match.index > content.indexOf('nda2026Playlists')) continue;
      
      let blockStart = match.index;
      let blockEnd = content.indexOf('}', blockStart);
      
      let block = content.substring(blockStart, blockEnd);
      block = block.replace(/videoId:\s*"[^"]*"/, `videoId: "${item.id}"`);
      block = block.replace(/playlistUrl:\s*"[^"]*"/, `playlistUrl: "${item.url}"`);
      block = block.replace(/thumbnail:\s*(null|"[^"]*")/, `thumbnail: null`); // set to null so getThumbnail takes over
      
      content = content.substring(0, blockStart) + block + content.substring(blockEnd);
    }
  });

  fs.writeFileSync(filePath, content, 'utf-8');
});
console.log('Updated links in data files');
