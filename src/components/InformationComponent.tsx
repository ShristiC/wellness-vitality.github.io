import styled from "@emotion/styled";
import FruitsImage from "../assets/raw_ingredients.png";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { theme } from "./Core/Colors";
import { BorderRadius, PaddingOrMargin } from "./Core/Layout";
import { ContentText, HeadingTextLight } from "./Core/Typography";

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
    min-height: ${(props) => props.$isMobile ? '30vh' : '50vh'};
    background-size: cover;
    border-radius: ${BorderRadius.button}px;
    margin-top: ${(props) => props.$isMobile ? '30px' : '300px'};
    /* Flexbox for centering */
    display: flex;
    align-items: center; /* Vertical centering */
    justify-content: center; /* Horizontal centering */
`;

const ContentWrapper = styled.div`
    padding: 0% 10%;
    color: ${theme.palette.text.secondary};
`;

const StyledContentText = styled(ContentText)`
    margin-top: ${PaddingOrMargin.extraLarge}px;
`;