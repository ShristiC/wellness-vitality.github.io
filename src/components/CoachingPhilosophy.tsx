import styled from "@emotion/styled";
import CoachingImage from "../assets/cover/CoachingPhilosophyCover.png";
import Leaf from "../assets/icons/Leaf-Bullet-White.svg";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { theme } from "./Core/Colors";
import { BorderRadius, PaddingOrMargin, Row } from "./Core/Layout";
import { ContentText, HeadingTextLight } from "./Core/Typography";

export default function CoachingPhilosophy () {
    const [_, isMobile, isMedium] = useWindowDimensions();
    const smallerScreen = isMobile || isMedium;

    const partners = ["Accountability Partner", "Champion of Goals"];
    const guide = ["Sustainable Life Choices"];
    const lead = ["Honesty", "Empathy", "Sincerity"];
    return (
        <Wrapper $isMobile={smallerScreen}>
            <BlurWrapper/>
            <ContentWrapper>
                <HeadingTextLight $isMobile={smallerScreen} $color='secondary'>Coaching Philosophy</HeadingTextLight>
                <StyledContentText $isMobile={smallerScreen}>As your health and nutritional coach, I will be your...</StyledContentText>
                {partners.map((point, i) => {
                    return (
                        <PainPointRow key={`pain_point_${i}`}>
                            <img src={Leaf} height={isMobile ? 16 : 20} alt="white leaf bullet point"/>
                            <ContentText $isMobile={smallerScreen}>{point}</ContentText>
                        </PainPointRow>
                );})}
                 <StyledContentText $isMobile={smallerScreen}>I will guide you in making...</StyledContentText>
                {guide.map((point, i) => {
                    return (
                        <PainPointRow key={`pain_point_${i}`}>
                            <img src={Leaf} height={isMobile ? 16 : 20} alt="white leaf bullet point"/>
                            <ContentText $isMobile={smallerScreen}>{point}</ContentText>
                        </PainPointRow>
                );})}
                <StyledContentText $isMobile={smallerScreen}>I will lead with...</StyledContentText>
                {lead.map((point, i) => {
                    return (
                        <PainPointRow key={`pain_point_${i}`}>
                            <img src={Leaf} height={isMobile ? 16 : 20} alt="white leaf bullet point"/>
                            <ContentText $isMobile={smallerScreen}>{point}</ContentText>
                        </PainPointRow>
                );})}
            </ContentWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.div<{$isMobile: boolean}>`
    position: relative;
    background-image: url(${CoachingImage});
    background-position: 60% ;
    height: ${(props) => props.$isMobile ? 50 : 50}vh;
    background-size: cover;
    border-radius: ${BorderRadius.button}px;
    padding: 5%;
`;

const ContentWrapper = styled.div`
    position: absolute;
    color: ${theme.palette.text.secondary};
    top: 10%;
    padding-right: 10%;
    padding-bottom: 10%;
`;

const BlurWrapper = styled.div`
    background-color: black;
    filter: opacity(0.5) blur(40px);
    border-radius: ${BorderRadius.button}px;
    height: 400px;
`;

const StyledContentText = styled(ContentText)`
    margin-top: ${PaddingOrMargin.extraLarge}px;
    margin-bottom: ${PaddingOrMargin.large}px;
`;

const PainPointRow = styled(Row)`
    justify-content: flex-start;
    gap: ${PaddingOrMargin.medium}px;
    margin: ${PaddingOrMargin.small}px;
`;