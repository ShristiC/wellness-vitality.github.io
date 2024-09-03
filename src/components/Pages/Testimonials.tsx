import styled from "@emotion/styled";
import { gray } from "../Core/Colors";
import { BorderRadius, PaddingOrMargin, Row } from "../Core/Layout";
import { ContentText, DisclaimerText, HeadingText } from "../Core/Typography";
import Footer from "../Footer";
import Heading from "../Heading";
import TestimonialsCoverComponent from "../TestimonialsCoverComponents";
import { useState } from "react";
import WrittenTestimonials from "../WrittenTestimonials";

export default function TestimonialsPage() {
    const [currIndex, setCurrIndex] = useState(0);

    const testimonialVideos = [
        {
            title: "How Wellness & Vitality helped my Arthritis",
            description: "Meet Catherine, who regained her life back from Severe Pain due to Arthritis and High Inflammation.",
            thumbnailTitle: "Catherine's Journey",
            tag: "Arthritis & Inflammation",
            videoUrl: "https://www.youtube.com/embed/iS0Z10eWd9o",
            date: "August 2022"
        },
        {
            title: "My 40 Day Report Card",
            description: "Meet Satish, who reflects on his 40 day journey with Wellness & Vitality and achieves unimagined success in reducing Insulin Medication with Type II Diabetes.",
            thumbnailTitle: "Satish's Story",
            tag: "Type II Diabetes & Weight Loss",
            videoUrl: "https://www.youtube.com/embed/j6GY5FYBKlk",
            date: "August 2023"
        },
        {
            title: "15 days - My Migrane Pain Went Away",
            description: "For 18 years, Shyam was struggling with severe migrane pains. Within 15 days, his migrane is gone and his sugar levels went down by 132 points.",
            thumbnailTitle: "Shyam's Journey",
            tag: "Migrane and Type II Diabetes",
            videoUrl: "https://www.youtube.com/embed/E6h3_ut6bEg",
            date: "April 2023"
        },
        {
            title: "I Reveresed my Type II Diabetes",
            description: "Meet Sonal, who reversed her Type II Diabetes within weeks.",
            thumbnailTitle: "Sonal's Story",
            tag: "Type II Diabetes",
            videoUrl: "https://www.youtube.com/embed/Dr972vQslCo",
            date: "July 2023"
        },
        {
            title: "How Wellness & Vitality regained my Self-Confidence",
            description: "Meet Hasita, who struggled with her self-confidence due to obesity and weight. She meets her goals in sustainable ways and is on the journey to regain her life back",
            thumbnailTitle: "Hasita's Journey",
            tag: "Weight Loss",
            videoUrl: "https://www.youtube.com/embed/ZwkWNf4cI_c",
            date: "March 2022"
        }
    ];

    const setTestimonial = (index: number) => {
        setCurrIndex(index);
    }
    return (
        <>
            <Heading />
            <TestimonialsCoverComponent />
            <VideoTestimonials>
                <CoverVideoWrapper>
                    <Video src={testimonialVideos[currIndex].videoUrl} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={testimonialVideos[currIndex].title}/>
                    <CoverVideoContent>
                        <HeadingText $color="primary">{testimonialVideos[currIndex].title}</HeadingText>
                        <ContentText>{testimonialVideos[currIndex].description}</ContentText>
                    </CoverVideoContent>
                </CoverVideoWrapper>
                <TestimonialsRow>
                    {testimonialVideos.map((testimonial, i) => {
                        return (
                            <TestimonialCard 
                                key={i} 
                                title={testimonial.thumbnailTitle} 
                                tag={testimonial.tag} 
                                date={testimonial.date} 
                                videoURL={testimonial.videoUrl}
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
    videoURL: string;
    onClick: () => void;
}

function TestimonialCard ({title, date, videoURL, onClick}: TestimonialCardProps) {
    return (
        <Card role="button" onClick={onClick}>
            <ThumbnailVideo src={videoURL} title={title} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture;" />
            <CardContent>
                <ContentText>{title}</ContentText>
                <Text>{date}</Text>
            </CardContent>
        </Card>
    );
}

const VideoTestimonials = styled.div`
    display: block;
    position: relative;
    margin-top: 850px; // size of cover image
    padding: ${PaddingOrMargin.extraLarge * 3}px 10%;
`;

const Video = styled.iframe`
    width: 60%;
    border-radius: ${BorderRadius.button}px;
    height: 400px;
`;

const CoverVideoContent = styled.div`
    width: 40%;
    align-items: center;
    gap: 20px;
    display: flex;
    flex-direction: column;
    align-self: center;
`;

const CoverVideoWrapper = styled(Row)`
    margin: ${PaddingOrMargin.extraLarge}px 0px;
    gap: 40px;
`;

const Card = styled(Row)`
    background-color: ${gray};
    border-radius: ${BorderRadius.button}px;
    padding: 15px;
    width: 520px;
    gap: 15px;
    justify-content: space-evenly;
    height: 150px;
`;

const ThumbnailVideo = styled.iframe`
    border-radius: ${BorderRadius.button}px;
    width: 200px;
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