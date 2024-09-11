import { useState, useEffect } from 'react';
import { WindowDimensions } from '../models/WindowDimensions';

function getWindowDimensions(): WindowDimensions {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function isMobileDimensions(dimensions: WindowDimensions): boolean {
    return dimensions.width <= 450;
}

export default function useWindowDimensions(): [WindowDimensions, boolean] {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const [isMobile, setIsMobile] = useState<boolean>(isMobileDimensions(windowDimensions));

  useEffect(() => {
    function handleResize() {
        const dimensions = getWindowDimensions();
        setWindowDimensions(dimensions);
        setIsMobile(isMobileDimensions(dimensions));
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return [windowDimensions, isMobile];
}