import React, { useState, useEffect } from 'react';

function Dimensions() {
  const [ dimensions, setDimensions ] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    setDimensions({
      width: innerWidth,
      height: innerHeight,
    });
    const handleChange= e => {
      const { innerWidth, innerHeight } = e.target
      setDimensions ({height:innerHeight,width:innerWidth})
    }
    window.addEventListener('resize', handleChange)
    return()=>{
      window.removeEventListener('resize', handleChange)
    }
  },[]);

  const { width, height } = dimensions;
  return (
  <div className="dimensions">{`${width}px - ${height}px`}</div>
  );
}

export default Dimensions;
