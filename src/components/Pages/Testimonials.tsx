import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { darkGray, gray } from "../Core/Colors";
import { BorderRadius, PaddingOrMargin, Row } from "../Core/Layout";
import { ContentText, ContentTextBold, DisclaimerText, HeadingText } from "../Core/Typography";
import LazyVideo from "../Core/Video/LazyVideo";
import Footer from "../Footer";
import Heading from "../Heading";
import Seo from "../Seo";
import TestimonialsCoverComponent from "../TestimonialsCoverComponents";
import WrittenTestimonials from "../WrittenTestimonials";
import { breadcrumbSchema, videoSchema } from "../../seo/schema";
import { testimonialVideos } from "../../data/testimonials";

/** The featured testimonial rotates once an hour. */
const ROTATION_INTERVAL_MS = 60 * 60 * 1000;

export default function TestimonialsPage() {
    // Seed the featured index from the current hour so the highlighted story
    // rotates across visits (not just during a single long-lived session).
    const [currIndex, setCurrIndex] = useState(
        () => Math.floor(Date.now() / ROTATION_INTERVAL_MS) % testimonialVideos.length,
    );
    // Once a visitor picks a story, stop auto-rotating so their video isn't
    // swapped out from under them mid-watch.
    const [autoRotate, setAutoRotate] = useState(true);
    const [_, isMobile] = useWindowDimensions();

    useEffect(() => {
        if (!autoRotate) return;
        const id = setInterval(() => {
            setCurrIndex((i) => (i + 1) % testimonialVideos.length);
        }, ROTATION_INTERVAL_MS);
        return () => clearInterval(id);
    }, [autoRotate]);

    const setTestimonial = (index: number) => {
        setCurrIndex(index);
        setAutoRotate(false); // Respect the visitor's pick; don't rotate it away.
    }
    return (
        <>
            <Seo
                title="Client Success Stories & Testimonials — Wellness n Vitality"
                description="Real client transformations: reversing Type II Diabetes, easing chronic pain and migraines, weight loss, and better gut health through functional medicine coaching with Wellness n Vitality."
                path="/testimonials"
                jsonLd={[
                    ...testimonialVideos.map((v) => videoSchema(v)),
                    breadcrumbSchema([["Home", "/"], ["Testimonials", "/testimonials"]]),
                ]}
            />
            <Heading />
            <TestimonialsCoverComponent />
            <VideoTestimonials $isMobile={isMobile}>
                <CoverVideoWrapper $isMobile={isMobile}>
                <Video
                    $isMobile={isMobile}
                    src={`https://www.youtube.com/embed/${testimonialVideos[currIndex].videoId}`} // Construct the embed URL
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
                <CoverVideoContent $isMobile={isMobile}>
                    <HeadingText $isMobile={isMobile} $color="primary">{testimonialVideos[currIndex].title}</HeadingText>
                    <Description $isMobile={isMobile}>{testimonialVideos[currIndex].description}</Description>
                </CoverVideoContent>
                </CoverVideoWrapper>
                <SeeMoreLink to="/testimonials/gallery">
                    <ContentTextBold $isMobile={isMobile}>See More →</ContentTextBold>
                </SeeMoreLink>
                <TestimonialsRow>
                    {testimonialVideos.map((testimonial, i) => {
                        return (
                            <TestimonialCard 
                                key={i} 
                                title={testimonial.thumbnailTitle} 
                                tag={testimonial.tag} 
                                date={testimonial.date} 
                                videoId={testimonial.videoId}
                                onClick={() => setTestimonial(i)}/>
                        );
                    })}
                </TestimonialsRow>
            </VideoTestimonials>
            <WrittenTestimonials />
            <Footer />
        </>
    );
}

interface TestimonialCardProps {
    title: string;
    tag: string;
    date: string;
    videoId: string;
    onClick: () => void;
}

function TestimonialCard ({title, date, videoId, onClick}: TestimonialCardProps) {
    const [_, isMobile] = useWindowDimensions();
    return (
        <Card role="button" onClick={onClick}>
            <LazyVideo videoId={videoId} title={title} />
            <CardContent>
                <ContentText $isMobile={isMobile}>{title}</ContentText>
                <Text $isMobile={isMobile}>{date}</Text>
            </CardContent>
        </Card>
    );
}

const VideoTestimonials = styled.div<{$isMobile: boolean}>`
    display: block;
    position: relative;
    margin-top: ${(props) => props.$isMobile ? 50 : 110}vh; // size of cover image
    padding: ${PaddingOrMargin.large * 3}px 10%;
`;

const Video = styled.iframe<{$isMobile: boolean}>`
    width: ${(props) => props.$isMobile ? 100 : 60}%;
    border-radius: ${BorderRadius.button}px;
    height: ${(props) => props.$isMobile ? 'auto' : '400px'};
`;

const CoverVideoContent = styled.div<{$isMobile: boolean}>`
    width: ${(props) => props.$isMobile ? 100: 40}%;
    align-items: center;
    gap: 20px;
    display: flex;
    flex-direction: column;
    align-self: center;
`;

const CoverVideoWrapper = styled(Row)<{$isMobile: boolean}>`
    flex-direction: ${(props) => props.$isMobile ? 'column': 'row'};
    margin: ${(props) => props.$isMobile ? PaddingOrMargin.medium : PaddingOrMargin.extraLarge}px 0px;
    gap: ${(props) => props.$isMobile ? 20 : 40}px;
`;

const Card = styled(Row)`
    background-color: rgba(128, 128, 128, 0.2); // gray with 20% opacity
    border-radius: ${BorderRadius.button}px;
    padding: 15px;
    min-width: 500px;
    gap: 15px;
    justify-content: space-evenly;
    height: 150px;
    :hover {
        cursor: pointer;
        background-image: linear-gradient(90deg, ${gray}, ${darkGray});
    }
`;

const CardContent = styled.div`
    gap: 5px;
    align-self: center;
`;

const TestimonialsRow = styled.div`
    gap: 15px;
    overflow-x: scroll;
    display: flex;
    margin-top: 40px;
`;

const Text = styled(DisclaimerText)`
    font-size: 14px;
`;

const SeeMoreLink = styled(Link)`
    display: inline-block;
    text-decoration: none;
    color: inherit;
    :hover {
        text-decoration: underline;
    }
`;

const Description = styled(ContentText)`
    white-space: pre-line; /* Preserve line breaks so bulleted lists in a testimonial stay legible */
    text-align: left;
    width: 100%;
`;