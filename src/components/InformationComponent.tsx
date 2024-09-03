import styled from "@emotion/styled";
import FruitsImage from "../assets/raw_ingredients.png";
import { theme } from "./Core/Colors";
import { ContentText, HeadingTextLight } from "./Core/Typography";
import { BorderRadius, PaddingOrMargin } from "./Core/Layout";

export default function InformationComponent () {
    return (
        <Wrapper>
            <ContentWrapper>
                <HeadingTextLight $color='secondary'>What is the Functional</HeadingTextLight>
                <HeadingTextLight $color='secondary'>Medicine Approach?</HeadingTextLight>
                <StyledContentText>Functional Medicine is a proactive, lifestyle-based approach that seeks to understand the root causes of chronic diseases. It emphasizes treating the whole person, supporting each individual's unique health and vitality, rather than focusing solely on symptoms.</StyledContentText>
            </ContentWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    position: relative;
    background-image: url(${FruitsImage});
    height: 550px;
    background-size: cover;
    border-radius: ${BorderRadius.button}px;
    margin-top: 300px;
`;

const ContentWrapper = styled.div`
    padding: 10% 10%;
    color: ${theme.palette.text.secondary};
`;

const StyledContentText = styled(ContentText)`
    margin-top: ${PaddingOrMargin.extraLarge}px;
`;