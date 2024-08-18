import styled from "@emotion/styled";
import { ContentText, HeadingText } from "./Core/Typography";
import { BorderRadius, PaddingOrMargin, Row } from "./Core/Layout";
import { Park } from "@mui/icons-material";
import { darkGreen } from "./Core/Colors";
import { ActionButton } from "./CoreButtons";

export interface IResonateProps{
    question: string;
    bulletPoints: string[];
    buttonText?: string;
}
export default function Resonate({question, bulletPoints, buttonText}: IResonateProps) {
    return (
        <Wrapper $hasBorder={!!buttonText}>
            <HeadingText $color="primary">{question}</HeadingText>
            <ContentWrapper>
                {bulletPoints.map((point, i) =>  {
                    return (
                        <PainPointRow key={`pain_point_${i}`}>
                            <Park htmlColor={darkGreen}/>
                            <ContentText>{point}</ContentText>
                        </PainPointRow>
                    );
                })}
                {buttonText && <CenterActionButton $variant="default">{buttonText}</CenterActionButton>}
            </ContentWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.div<{$hasBorder: boolean}>`
    display: inline-block;
    flex: 1;
    border: ${(props) => props.$hasBorder ? '2px solid black' : 'none'};
    padding: ${PaddingOrMargin.large * 2}px;
    border-radius: ${BorderRadius.button}px;
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

const CenterActionButton = styled(ActionButton)`
    align-self: center;
`;