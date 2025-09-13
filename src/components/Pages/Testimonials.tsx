import styled from "@emotion/styled";
import { useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { darkGray, gray } from "../Core/Colors";
import { BorderRadius, PaddingOrMargin, Row } from "../Core/Layout";
import { ContentText, ContentTextBold, DisclaimerText, HeadingText } from "../Core/Typography";
import Footer from "../Footer";
import Heading from "../Heading";
import TestimonialsCoverComponent from "../TestimonialsCoverComponents";
import WrittenTestimonials from "../WrittenTestimonials";

export default function TestimonialsPage() {
    const [currIndex, setCurrIndex] = useState(0);
    const [_, isMobile] = useWindowDimensions();

    const testimonialVideos = [
        {
            title: "In 30 Days - I had Regular Bowel Movement after 20 years",
            description: "Meet Cameron, who had acute constipation for 2 decades, acid reflux, knee pain, and brain fog. In a month, all of it has been reversed.",
            thumbnailTitle: "Cameron's Journey",
            tag: "Constipation, Acid Reflux & Knee Pain",
            videoUrl: "https://www.youtube.com/embed/YzLEwxfVGQ4?si=rD0atdX03HAm2dDi",
            date: "May 2025"
        },
        {
            title: "I am Not Internalizing the Saddness in the World. I now have a Brighter Outlook in Life",
            description: "Meet Suzan Dimon, who stopped taking allergy shots, reduced steroid sprays, stopped taking cholestorl medication, eliminated muscle scramps, and lost 15 pounds.",
            thumbnailTitle: "Suzan's Journey",
            tag: "Allergies, Cholesterol & Weight Loss",
            videoUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FWellnessnVitality%2Fvideos%2F3983651408538457%2F&show_text=false&width=476&t=0",
            date: "April 2025"
        },
        {
            title: "I lost 15lbs, and my Cholesterol Levels Reduced Significantly",
            description: "Meet Amit, who learned how to manage his lifestyle and food, leading to life changes that felt so difficult before.",
            thumbnailTitle: "Amit's Journey",
            tag: "Cholesterol & Weight Loss",
            videoUrl: "https://youtube.com/embed/52I-bTy2mMU?si=53sFFiZby-dZ1WFm",
            date: "June 2024"
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
            title: "I Reveresed my Type II Diabetes",
            description: "Meet Sonal, who reversed her Type II Diabetes within weeks.",
            thumbnailTitle: "Sonal's Story",
            tag: "Type II Diabetes",
            videoUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FWellnessnVitality%2Fvideos%2F309632591752273%2F&show_text=false&width=476&t=0",
            date: "January 2025"
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
            title: "How Wellness & Vitality helped my Arthritis",
            description: "Meet Catherine, who regained her life back from Severe Pain due to Arthritis and High Inflammation.",
            thumbnailTitle: "Catherine's Journey",
            tag: "Arthritis & Inflammation",
            videoUrl: "https://www.youtube.com/embed/iS0Z10eWd9o",
            date: "August 2022"
        },
        {
            title: "How Wellness & Vitality regained my Self-Confidence",
            description: "Meet Hasita, who struggled with her self-confidence due to obesity and weight. She meets her goals in sustainable ways and is on the journey to regain her life back",
            thumbnailTitle: "Hasita's Journey",
            tag: "Weight Loss",
            videoUrl: "https://www.youtube.com/embed/ZwkWNf4cI_c",
            date: "March 2022"
        },
    ];

    const setTestimonial = (index: number) => {
        setCurrIndex(index);
    }
    return (
        <>
            <Heading />
            <TestimonialsCoverComponent />
            <VideoTestimonials $isMobile={isMobile}>
                <CoverVideoWrapper $isMobile={isMobile}>
                    <Video $isMobile={isMobile} src={testimonialVideos[currIndex].videoUrl} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={testimonialVideos[currIndex].title}/>
                    <CoverVideoContent $isMobile={isMobile}>
                        <HeadingText $isMobile={isMobile} $color="primary">{testimonialVideos[currIndex].title}</HeadingText>
                        <ContentText $isMobile={isMobile}>{testimonialVideos[currIndex].description}</ContentText>
                    </CoverVideoContent>
                </CoverVideoWrapper>
                <ContentTextBold $isMobile={isMobile}>See More</ContentTextBold>
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
    const [_, isMobile] = useWindowDimensions();
    return (
        <Card role="button" onClick={onClick}>
            <ThumbnailVideo $isMobile={isMobile} src={videoURL} title={title} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture;" />
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
    min-width: 300px;
    gap: 15px;
    justify-content: space-evenly;
    height: 150px;
    :hover {
        cursor: pointer;
        background-image: linear-gradient(90deg, ${gray}, ${darkGray});
    }
`;

const ThumbnailVideo = styled.iframe<{$isMobile: boolean}>`
    border-radius: ${BorderRadius.button}px;
    width: ${(props) => props.$isMobile ? 150 : 200}px;
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