import { useEffect, useState } from 'react';
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

function isMediumWidth(dimensions: WindowDimensions): boolean {
    return dimensions.width > 450 && dimensions.width < 1100;
}

export default function useWindowDimensions(): [WindowDimensions, boolean, boolean] {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  const [isMobile, setIsMobile] = useState<boolean>(isMobileDimensions(windowDimensions));
  const [isMedium, setIsMedium] = useState<boolean>(isMediumWidth(windowDimensions));

  useEffect(() => {
    function handleResize() {
        const dimensions = getWindowDimensions();
        setWindowDimensions(dimensions);
        setIsMobile(isMobileDimensions(dimensions));
        setIsMedium(isMediumWidth(windowDimensions));
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return [windowDimensions, isMobile, isMedium];
}