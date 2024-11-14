import { useEffect, useState } from "react";
import useWindowDimensions from "./useWindowDimensions";

export default function useCoverComponentDimensions() {
    const [windowDimensions, isMobile] = useWindowDimensions();
    const [height, setHeight] = useState(0);

    useEffect(() => {
        const isCompact = isMobile && windowDimensions.width <= 450;
        setHeight(isCompact ? 50 : 120);
    }, [windowDimensions])

    return [height];
}