import { useEffect } from 'react';

const glowStyles = `
  :root {
    --glow-size: 800px;
    --glow-x: 50%;
    --glow-y: 50%;
  }
`;

function GlowEffect() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      
      document.documentElement.style.setProperty('--glow-x', `${x}px`);
      document.documentElement.style.setProperty('--glow-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <style>{glowStyles}</style>
      <div className="fixed top-0 left-0 w-full h-full" style={{ zIndex: -1 }}>
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: `
              radial-gradient(
                800px circle at var(--glow-x) var(--glow-y),
                rgba(255, 255, 255, 0.4),
                transparent 40%
              )
            `,
            transition: 'all 0.2s ease',
          }}
        />
      </div>
    </>
  );
}

export default GlowEffect;