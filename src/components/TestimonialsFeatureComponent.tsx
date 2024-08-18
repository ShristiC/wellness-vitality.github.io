import styled from "@emotion/styled";
import { darkGreen, lightGreen, theme } from "./Core/Colors";
import { BorderRadius } from "./Core/Layout";
import { HeadingTextLight } from "./Core/Typography";
import { HyperlinkButton } from "./CoreButtons";

export default function TestimonialsFeatureComponent () {
    return (
        <Wrapper>
            <HeadingTextLight $color="secondary">Success Stories</HeadingTextLight>
            <Box />
            <HyperlinkButton> More Testimonials </HyperlinkButton>
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

const Box = styled.div`
    border-radius: ${BorderRadius.button}px;
    border: 1px solid ${theme.palette.text.secondary};
    width: 800px;
    height: 300px;
`;