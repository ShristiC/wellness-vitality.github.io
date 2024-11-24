import styled from "@emotion/styled";
import GreenArrowVector from '../assets/cover/Green Arrow.png';
import useCoverComponentDimensions from "../hooks/useCoverComponentDimensions";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { theme, white } from "./Core/Colors";
import { BorderRadius, PaddingOrMargin, Row, TopLayer } from "./Core/Layout";
import LeftBackgroundPetals from "./LeftBackgroundPetals";
import Resonate from "./Resonate";
import RightBackgroundPetals from "./RightBackgroundPetals";

export default function PainPoints() {
    const [_, isMobile] = useWindowDimensions();
    const [coverHeight] = useCoverComponentDimensions();

    const painPoints = [
        'Tired of Taking Medication?', 
        'Feeling Endless Fatigue?',
        'Experiencing Uncomfortable Joint Pain?', 
        'Struggling with Digestive Issues?', 
        'Experiencing Lower Self Confidence?'
    ];

    const imaginePoints = [
        'Eliminate Your Medication',
        'Reduce your Insulin Dosage',
        'Lead an Active Lifestyle',
        'Live a Confident and Healthy life',
        'Can Spend Time With Loved Ones'

    ];
    return (
        <PainPointsWrapper $isMobile={isMobile} $coverHeight={coverHeight}>
            {isMobile ? 
                <>
                    <Resonate question="Are You..." bulletPoints={painPoints}/>
                    <ImagineContentWrapper $isMobile={isMobile}>
                        <Resonate question="Imagine a Life Where You..." bulletPoints={imaginePoints} buttonText="Let's Start Today"/>
                    </ImagineContentWrapper>
                </>:
                <>
                    <RightBackgroundPetals />
                    <LeftBackgroundPetals />
                    <GreenArrow $isMobile={isMobile} src ={GreenArrowVector} alt="curved arrow pointing starting from Pain Points to Resonating Points" />
                    <PainPointRow>
                        <Resonate question="Are You..." bulletPoints={painPoints}/>
                        <ImagineContentWrapper $isMobile={isMobile}>
                            <Resonate question="Imagine a Life Where You..." bulletPoints={imaginePoints} buttonText="Let's Start Today"/>
                        </ImagineContentWrapper>
                    </PainPointRow>
                </>
            }
        </PainPointsWrapper>
    );
}

const PainPointRow = styled(Row)`
    justify-content: space-evenly;
    padding-bottom: ${PaddingOrMargin.large}px;
`;

const PainPointsWrapper = styled.div<{$isMobile: boolean, $coverHeight: number}>`
    display: block;
    position: relative;
    margin-top: ${(props) => props.$coverHeight}vh; // size of cover image
    padding: ${(props) => props.$isMobile ? `${PaddingOrMargin.medium}px 5%` : `${PaddingOrMargin.medium * 3}px 10%`};
    max-width: 100%;
    overflow-x: clip;
`;

const ImagineContentWrapper = styled.div<{$isMobile: boolean}>`
    position: relative;
    top: ${(props) => props.$isMobile ? '0' : '300px'};
    background-color: ${white};
    z-index: ${TopLayer};
    border: ${(props) => props.$isMobile ? '0px' : '2px'} solid ${theme.palette.text.primary};
    border-radius: ${(props) => props.$isMobile ? '0' : BorderRadius.button}px;
`;

const GreenArrow = styled.img<{$isMobile: boolean}>`
    position: absolute;
    bottom: ${(props) => props.$isMobile ? '-40%' : '-15%'};
    left: ${(props) => props.$isMobile ? '0': '25%'};
    scale: ${(props) => props.$isMobile ? '0.4': '0.8'};
`;