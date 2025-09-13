import { useState, useEffect } from "react";

export default function LazyVideo({ videoUrl, title }: { videoUrl: string; title: string }) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsLoaded(true);
                }
            },
            { threshold: 0.5 }
        );

        const element = document.getElementById(title);
        if (element) observer.observe(element);

        return () => observer.disconnect();
    }, [title]);

    return isLoaded ? (
        <iframe
            src={videoUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        />
    ) : (
        <div style={{ width: "100%", height: "200px", backgroundColor: "#ccc" }}>Loading...</div>
    );
}