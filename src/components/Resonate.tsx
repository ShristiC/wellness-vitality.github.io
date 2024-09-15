import styled from "@emotion/styled";
import Leaf from "../assets/icons/Leaf-Bullet.svg";
import { BorderRadius, PaddingOrMargin, Row } from "./Core/Layout";
import { ContentText, HeadingText } from "./Core/Typography";
import { ActionButton } from "./CoreButtons";
import useWindowDimensions from "../hooks/useWindowDimensions";

export interface IResonateProps{
    question: string;
    bulletPoints: string[];
    buttonText?: string;
}
export default function Resonate({question, bulletPoints, buttonText}: IResonateProps) {
    const [_, isMobile] = useWindowDimensions();
    return (
        <Wrapper $hasBorder={!!buttonText} $isMobile={isMobile}>
            <HeadingText $color="primary" $isMobile={isMobile}>{question}</HeadingText>
            <ContentWrapper>
                {bulletPoints.map((point, i) =>  {
                    return (
                        <PainPointRow key={`pain_point_${i}`}>
                            <img src={Leaf} height={24} alt="Leaf shaped bullet point"/>
                            <ContentText $isMobile={isMobile}>{point}</ContentText>
                        </PainPointRow>
                    );
                })}
                {buttonText && <CenterActionButton $isMobile={isMobile} $variant="default" onClick={(e) => {
                        e.preventDefault();
                        window.open("https://my.practicebetter.io/#/5c6a01b7627db308702273dc/bookings?step=services", "_blank", "noreferrer");
                    }}>{buttonText}</CenterActionButton>}
            </ContentWrapper>
        </Wrapper>
    );
}

const Wrapper = styled.div<{$hasBorder: boolean, $isMobile: boolean}>`
    display: inline-block;
    flex: 1;
    border: ${(props) => props.$hasBorder ? '2px solid black' : 'none'};
    padding: ${(props) => props.$isMobile ? PaddingOrMargin.medium : PaddingOrMargin.large * 2}px;
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