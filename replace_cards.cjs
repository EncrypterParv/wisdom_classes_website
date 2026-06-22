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
    content = content.replace(/import\s+\{\s*fallbackThumbnails\s*\}\s+from\s+"[^"]+getThumbnail";/, 
      `import { fallbackThumbnails, MathThumbnail } from "../utils/getThumbnail";`);
  }

  // Find the thumbnail wrapper block
  const oldThumbRegex = /<div className="w-full h-48 overflow-hidden rounded-t-3xl bg-forest\/5 shrink-0 relative">\s*<img\s*src=\{imgSrc\}\s*alt=\{[^\}]+\}\s*className="w-full h-48 object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-700 ease-out"\s*onError=\{handleImageError\}\s*\/>/g;
  
  content = content.replace(oldThumbRegex, `<MathThumbnail 
        videoIdOrUrl={chapter.videoId} 
        topicKey={chapter.id} 
        alt={chapter.name} 
        manualThumbnail={chapter.thumbnail}
      >`);

  // We also need to close MathThumbnail. The old code had `</div>` after the Play Button Overlay.
  // Play Button Overlay:
  //         <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
  //           <div className="w-14 h-14 rounded-full bg-gold text-forest flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
  //             <Play className="w-6 h-6 fill-current ml-1" />
  //           </div>
  //         </div>
  //       </div>
  // We just replace the closing </div> of that block with `</MathThumbnail>`
  
  // But wait! It's easier to use a more precise regex.
  const regex = /<div className="w-full h-48 overflow-hidden rounded-t-3xl bg-forest\/5 shrink-0 relative">[\s\S]*?className="w-6 h-6 fill-current ml-1" \/>\s*<\/div>\s*<\/div>\s*<\/div>/g;
  
  content = content.replace(regex, (match) => {
    return `<MathThumbnail 
        videoIdOrUrl={chapter.videoId} 
        topicKey={chapter.id} 
        alt={chapter.name} 
        manualThumbnail={chapter.thumbnail}
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-14 h-14 rounded-full bg-gold text-forest flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
            <Play className="w-6 h-6 fill-current ml-1" />
          </div>
        </div>
      </MathThumbnail>`;
  });
  
  // Remove the old state logic from ChapterCard
  content = content.replace(/const videoId = chapter.videoId;\s*const initialThumbnail = chapter.thumbnail \|\| \(videoId \? `https:\/\/i\.ytimg\.com\/vi\/\$\{videoId\}\/hqdefault\.jpg` : fallbackThumbnails\[chapter\.id\] \|\| fallbackThumbnails\["default"\]\);\s*const \[imgSrc, setImgSrc\] = useState\(initialThumbnail\);\s*const handleImageError = \(\) => \{\s*setImgSrc\(fallbackThumbnails\[chapter\.id\] \|\| fallbackThumbnails\["default"\]\);\s*\};\s*/g, '');

  fs.writeFileSync(filePath, content, 'utf-8');
});
console.log('Cards replaced');
