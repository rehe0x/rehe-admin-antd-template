import React, { useState, useEffect } from 'react';
 
function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
 
  useEffect(() => {
    const handleWindowResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
 
  return screenWidth
}
 
export default App;