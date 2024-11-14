import styled from "@emotion/styled";
import FruitsImage from "../assets/raw_ingredients.png";
import { theme } from "./Core/Colors";
import { ContentText, HeadingTextLight } from "./Core/Typography";
import { BorderRadius, PaddingOrMargin } from "./Core/Layout";
import useWindowDimensions from "../hooks/useWindowDimensions";

export default function InformationComponent () {
    const [_, isMobile] = useWindowDimensions();
    return (
        <Wrapper $isMobile={isMobile}>
            <ContentWrapper>
                <HeadingTextLight $isMobile = {isMobile} $color='secondary'>What is the Functional</HeadingTextLight>
                <HeadingTextLight $isMobile={isMobile} $color='secondary'>Medicine Approach?</HeadingTextLight>
                <StyledContentText $isMobile={isMobile}>Functional Medicine is a proactive, lifestyle-based approach that seeks to understand the root causes of chronic diseases. It emphasizes treating the whole person, supporting each individual's unique health and vitality, rather than focusing solely on symptoms.</StyledContentText>
            </ContentWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.div<{$isMobile: boolean}>`
    position: relative;
    background-image: url(${FruitsImage});
    height: ${(props) => props.$isMobile ? '30vh' : '60vh'};
    background-size: cover;
    border-radius: ${BorderRadius.button}px;
    margin-top: 300px;
    /* Flexbox for centering */
    display: flex;
    align-items: center; /* Vertical centering */
    justify-content: center; /* Horizontal centering */
`;

const ContentWrapper = styled.div`
    padding: 5% 5%;
    color: ${theme.palette.text.secondary};
`;

const StyledContentText = styled(ContentText)`
    margin-top: ${PaddingOrMargin.large}px;
`;