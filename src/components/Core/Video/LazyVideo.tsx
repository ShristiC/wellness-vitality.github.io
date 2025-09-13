import { useState, useEffect } from "react";

interface ILazyVideoProps {
    videoId: string;
    title: string;
}

export default function LazyVideo({ videoId, title }: ILazyVideoProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const videoUrl = `https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0&showinfo=0&controls=1&iv_load_policy=3&fs=0 `;
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

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
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        />
    ) : (
        <div
            id={title}
            style={{
                width: "100%",
                height: "200px",
                backgroundColor: "#000",
                backgroundImage: `url(${thumbnailUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                cursor: "pointer",
            }}
            onClick={() => setIsLoaded(true)} // Load the video when the thumbnail is clicked
        />
    );
}