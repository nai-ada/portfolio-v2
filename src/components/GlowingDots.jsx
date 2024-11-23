// 'use client'

// import React from 'react'

// const GlowingDots = ({ children, className = '' }) => {
//   return (
//     <div className={`relative ${className}`}>
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
//           <defs>
//             <radialGradient id="dotGradient">
//               <stop offset="0%" stopColor="#a6beff" />
//               <stop offset="50%" stopColor="#86A6F6" />
//               <stop offset="100%" stopColor="#6686d6" />
//             </radialGradient>
//             <pattern id="glowPattern" x="0" y="0" width="13" height="13" patternUnits="userSpaceOnUse">
//               <circle cx="7.5" cy="7.5" r="0.8" fill="url(#dotGradient)">
//                 <animate
//                   attributeName="opacity"
//                   values="0.1;0.4;0.1"
//                   dur="4s"
//                   repeatCount="indefinite"
//                 />
//               </circle>
//             </pattern>
//           </defs>
//           <rect width="100%" height="100%" fill="url(#glowPattern)" />
//         </svg>
//       </div>
//       <div className="relative z-10">{children}</div>
//     </div>
//   )
// }

// export default GlowingDots