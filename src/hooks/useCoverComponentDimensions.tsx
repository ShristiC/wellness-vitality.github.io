import { useEffect, useState } from "react";
import useWindowDimensions from "./useWindowDimensions";

// Height (in vh) the cover occupies. Computed synchronously on first render so
// the cover doesn't jump from 0 -> full height after mount (which caused a
// large Cumulative Layout Shift).
function computeCoverHeight(): number {
    if (typeof window === "undefined") return 120;
    const isCompact = window.innerWidth <= 450;
    return isCompact ? 50 : 120;
}

export default function useCoverComponentDimensions() {
    const [windowDimensions, isMobile] = useWindowDimensions();
    const [height, setHeight] = useState(() => computeCoverHeight());

    useEffect(() => {
        const isCompact = isMobile && windowDimensions.width <= 450;
        setHeight(isCompact ? 50 : 120);
    }, [windowDimensions, isMobile])

    return [height];
}
