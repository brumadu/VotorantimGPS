import React from "react";

function Background() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" >
  <defs>
   <linearGradient id="lgrad" x1="50%" y1="0%" x2="50%" y2="100%" >
    
          <stop offset="0%" stopColor="rgb(230,17,89)" stopOpacity="1.00" />
          <stop offset="100%" stopColor="rgb(238,130,238)" stopOpacity="1.00" />

    </linearGradient>
  </defs>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#lgrad)"/>
</svg>
  );
}

export default Background;
