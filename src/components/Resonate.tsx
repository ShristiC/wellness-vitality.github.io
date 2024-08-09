import styled from "@emotion/styled";
import { ContentText, HeadingText } from "./Constants/Typography";
import { PaddingOrMargin, Row } from "./Styles/Layout";
import { Park } from "@mui/icons-material";
import { darkGreen } from "./Constants/Colors";

export default function Resonate() {
    const painPoints = [
        'Tired of Taking Medication?', 
        'Feeling Endless Fatigue?',
        'Experiencing Uncomfortable Joint Pain?', 
        'Struggling with Digestive Issues?', 
        'Experiencing Lower Self Confidence?'
    ];

    return (
        <Wrapper>
            <HeadingText>Are You ...</HeadingText>
            <ContentWrapper>
                {painPoints.map((pain, i) =>  {
                    return (
                        <PainPointRow key={`pain_point_${i}`}>
                            <Park htmlColor={darkGreen}/>
                            <ContentText>{pain}</ContentText>
                        </PainPointRow>
                    );
                })}
            </ContentWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: inline-block;
    flex: 1;
`;

const ContentWrapper = styled.div`
    flex-direction: column;
    display: flex;
    gap: ${PaddingOrMargin.large}px;
    margin: ${PaddingOrMargin.large}px 0px;
`;

const PainPointRow = styled(Row)`
    justify-content: flex-start;
    gap: ${PaddingOrMargin.medium}px;
`;