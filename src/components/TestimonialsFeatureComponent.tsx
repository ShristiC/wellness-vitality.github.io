import styled from "@emotion/styled";
import { darkGreen, lightGreen, theme } from "./Core/Colors";
import { BorderRadius } from "./Core/Layout";
import { HeadingTextLight } from "./Core/Typography";
import { HyperlinkButton } from "./CoreButtons";
import { useNavigate } from "react-router-dom";

export default function TestimonialsFeatureComponent () {
    const navigate = useNavigate();
    return (
        <Wrapper>
            <HeadingTextLight $color="secondary">Success Stories</HeadingTextLight>
            <Video src="https://www.youtube.com/embed/iS0Z10eWd9o" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="How Catherine got her life back from Arthritis and High Inflammation"/>
            <HyperlinkButton $variant="default" onClick={() => {
                    navigate('/testimonials', {preventScrollReset: false});
                    window.scrollTo(0,0);
            }}>
                More Testimonials 
            </HyperlinkButton>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    height: 110vh;
    background: linear-gradient(0deg, ${lightGreen}, ${darkGreen});
    border-radius: ${BorderRadius.button}px;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    display: flex;
    align-items: center;
    gap: 60px;
`;

const Video = styled.iframe`
    border-radius: ${BorderRadius.button}px;
    border: 1px solid ${theme.palette.text.secondary};
    width: 800px;
    height: 400px;
`;