import styled from "@emotion/styled";
import CoachingImage from "../assets/cover/CoachingPhilosophyCover.png";
import Leaf from "../assets/icons/Leaf-Bullet-White.svg";
import { theme } from "./Core/Colors";
import { BorderRadius, PaddingOrMargin, Row } from "./Core/Layout";
import { ContentText, HeadingTextLight } from "./Core/Typography";

export default function CoachingPhilosophy () {
    const coachingPoints = ["Accountability Partner", "Sustainable Life Choices", "Champion of Goals", "Honesty and Empathy"];
    return (
        <Wrapper>
            <BlurWrapper/>
            <ContentWrapper>
                <HeadingTextLight $color='secondary'>Coaching Philosophy</HeadingTextLight>
                <StyledContentText>As a Health and Wellness Nutrition Coach, my coaching is a client-focused partnership that fosters self-awareness, motivation, and positive accountability to achieve meaningful, lasting changes. As my client, you and I will collaborate together to tailor improvement plans to your needs and goals. I will empower you to self-monitor, reflect, and achieve attainable goals. Together, we will create sustainable behavioral changes that will lead you to a longer, healthier, and happier life.</StyledContentText>
                {coachingPoints.map((point, i) => {
                    return (
                        <PainPointRow key={`pain_point_${i}`}>
                            <img src={Leaf} height={24} alt="white leaf bullet point"/>
                            <ContentText>{point}</ContentText>
                        </PainPointRow>
                );})}
                
            </ContentWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    position: relative;
    background-image: url(${CoachingImage});
    height: 50vh;
    background-size: cover;
    border-radius: ${BorderRadius.button}px;
    padding: 10%;
`;

const ContentWrapper = styled.div`
    position: absolute;
    color: ${theme.palette.text.secondary};
    top: 15%;
    padding-right: 10%;
    padding-bottom: 10%;
`;

const BlurWrapper = styled.div`
    background-color: black;
    filter: opacity(0.5) blur(40px);
    border-radius: ${BorderRadius.button}px;
    height: 500px;
`;

const StyledContentText = styled(ContentText)`
    margin-top: ${PaddingOrMargin.extraLarge}px;
    margin-bottom: ${PaddingOrMargin.extraLarge}px;
`;

const PainPointRow = styled(Row)`
    justify-content: flex-start;
    gap: ${PaddingOrMargin.medium}px;
    margin: ${PaddingOrMargin.medium}px;
`;