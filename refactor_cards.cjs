const fs = require('fs');
const path = require('path');

const files = [
  'src/pages/Class11.jsx',
  'src/pages/Class12.jsx',
  'src/pages/JEE.jsx',
  'src/pages/NDA.jsx',
  'src/pages/IPMAT.jsx'
];

files.forEach(file => {
  const filePath = path.join('/Users/parvgoyal1321/.gemini/antigravity-ide/scratch/wisdom-classes', file);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Make sure MathThumbnail is imported
  if (!content.includes('MathThumbnail')) {
    content = content.replace(/import { fallbackThumbnails } from "\.\.\/utils\/getThumbnail";/g, 
      `import { fallbackThumbnails, MathThumbnail } from "../utils/getThumbnail";`);
  }

  // Find the entire ChapterCard component definition
  const componentStartRegex = /const ChapterCard = \(\{ chapter, index \}\) => \{/g;
  let match;
  if ((match = componentStartRegex.exec(content)) !== null) {
    const startIndex = match.index;
    
    // Replace the state logic and img tag inside the component
    // Actually, just find the `return (` inside ChapterCard
    const returnIndex = content.indexOf('return (', startIndex);
    
    // We can replace the preamble:
    const preamble = content.substring(startIndex, returnIndex);
    const newPreamble = `const ChapterCard = ({ chapter, index }) => {\n  `;
    content = content.replace(preamble, newPreamble);
    
    // Now replace the thumbnail area inside the return block.
    // The Thumbnail Area starts with `{/* Thumbnail Area */}` or `{/* Thumbnail */}`
    // And ends right before `{/* Card Content */}`
    const thumbAreaStart = content.indexOf('{/* Thumbnail', returnIndex);
    const contentAreaStart = content.indexOf('{/* Card Content', returnIndex);
    
    if (thumbAreaStart !== -1 && contentAreaStart !== -1) {
      const oldThumbArea = content.substring(thumbAreaStart, contentAreaStart);
      
      const newThumbArea = `{/* Thumbnail */}
      <MathThumbnail 
        videoIdOrUrl={chapter.videoId} 
        topicKey={chapter.id} 
        alt={chapter.name} 
        manualThumbnail={chapter.thumbnail}
      >
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-14 h-14 rounded-full bg-gold text-forest flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
            <Play className="w-6 h-6 fill-current ml-1" />
          </div>
        </div>
      </MathThumbnail>

      `;
      
      content = content.replace(oldThumbArea, newThumbArea);
    }
  }

  fs.writeFileSync(filePath, content, 'utf-8');
});
console.log('Cards successfully refactored');
