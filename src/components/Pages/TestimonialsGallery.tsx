import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { BorderRadius, PaddingOrMargin } from "../Core/Layout";
import { ContentText, ContentTextBold, DisclaimerText, Title } from "../Core/Typography";
import LazyVideo from "../Core/Video/LazyVideo";
import Footer from "../Footer";
import Heading from "../Heading";
import Seo from "../Seo";
import { breadcrumbSchema, videoSchema } from "../../seo/schema";
import { testimonialVideos } from "../../data/testimonials";

export default function TestimonialsGalleryPage() {
    const [_, isMobile] = useWindowDimensions();

    return (
        <>
            <Seo
                title="All Client Testimonials — Wellness n Vitality"
                description="Browse every client success story from Wellness n Vitality — real transformations reversing Type II Diabetes, easing chronic pain and migraines, weight loss, and better gut health through functional medicine coaching."
                path="/testimonials/gallery"
                jsonLd={[
                    ...testimonialVideos.map((v) => videoSchema(v)),
                    breadcrumbSchema([
                        ["Home", "/"],
                        ["Testimonials", "/testimonials"],
                        ["Gallery", "/testimonials/gallery"],
                    ]),
                ]}
            />
            <Heading />
            <Content>
                <InnerContent>
                    <Title $isMobile={isMobile}>All Testimonials</Title>
                    <ContentText $isMobile={isMobile}>
                        Every client success story in one place. Tap any video to play it.
                    </ContentText>
                    <BackLink to="/testimonials">
                        <ContentTextBold $isMobile={isMobile}>← Back to Testimonials</ContentTextBold>
                    </BackLink>
                    <Grid>
                        {testimonialVideos.map((testimonial) => (
                            <Card key={testimonial.videoId + testimonial.thumbnailTitle}>
                                <VideoWrapper>
                                    <LazyVideo videoId={testimonial.videoId} title={testimonial.thumbnailTitle} />
                                </VideoWrapper>
                                <CardContent>
                                    <ContentTextBold $isMobile={isMobile}>{testimonial.thumbnailTitle}</ContentTextBold>
                                    <ContentText $isMobile={isMobile}>{testimonial.title}</ContentText>
                                    <DisclaimerText $isMobile={isMobile}>{testimonial.tag}</DisclaimerText>
                                    <DateText $isMobile={isMobile}>{testimonial.date}</DateText>
                                </CardContent>
                            </Card>
                        ))}
                    </Grid>
                </InnerContent>
            </Content>
            <Footer />
        </>
    );
}

const Content = styled.div`
    display: block;
    position: relative;
    top: 110px;
    padding: ${PaddingOrMargin.extraLarge}px 10% ${PaddingOrMargin.extraLarge * 3}px 10%;
    max-width: 100%;
    overflow-x: clip;
    margin-bottom: ${PaddingOrMargin.large * 3}px;
`;

const InnerContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${PaddingOrMargin.medium}px;
`;

const BackLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    :hover {
        text-decoration: underline;
    }
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    gap: 20px;
    margin-top: 20px;
`;

const Card = styled.div`
    background-color: rgba(128, 128, 128, 0.2); /* gray with 20% opacity */
    border-radius: ${BorderRadius.button}px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

/* Constrain the lazily-loaded iframe/thumbnail to a 16:9 box that fills the card. */
const VideoWrapper = styled.div`
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: ${BorderRadius.button}px;
    overflow: hidden;
    background-color: #000;

    & > iframe,
    & > div {
        position: absolute;
        inset: 0;
        width: 100% !important;
        height: 100% !important;
        border: none;
    }
`;

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

const DateText = styled(DisclaimerText)`
    font-size: 14px;
`;
