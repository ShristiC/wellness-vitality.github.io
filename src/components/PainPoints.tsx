import styled from "@emotion/styled";
import Resonate from "./Resonate";
import { PaddingOrMargin, Row, TopLayer } from "./Core/Layout";
import { white } from "./Core/Colors";
import LeftBackgroundPetals from "./LeftBackgroundPetals";
import GreenArrowVector from '../assets/cover/Green Arrow.png';
import useWindowDimensions from "../hooks/useWindowDimensions";
import RightBackgroundPetals from "./RightBackgroundPetals";
import useCoverComponentDimensions from "../hooks/useCoverComponentDimensions";

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
                    <GreenArrow $isMobile={isMobile} src ={GreenArrowVector} alt="curved arrow pointing starting from Pain Points to Resonating Points" />
                    <PainPointRow>
                        <Resonate question="Are you..." bulletPoints={painPoints}/>
                        <ImagineContentWrapper $isMobile={isMobile}>
                            <Resonate question="Imagine a life where You..." bulletPoints={imaginePoints} buttonText="Let's Start Today"/>
                        </ImagineContentWrapper>
                    </PainPointRow>
                </>:
                <>
                    <RightBackgroundPetals />
                    <LeftBackgroundPetals />
                    <GreenArrow $isMobile={isMobile} src ={GreenArrowVector} alt="curved arrow pointing starting from Pain Points to Resonating Points" />
                    <PainPointRow>
                        <Resonate question="Are you..." bulletPoints={painPoints}/>
                        <ImagineContentWrapper $isMobile={isMobile}>
                            <Resonate question="Imagine a life where You..." bulletPoints={imaginePoints} buttonText="Let's Start Today"/>
                        </ImagineContentWrapper>
                    </PainPointRow>
                </>
            }
        </PainPointsWrapper>
    );
}

const PainPointRow = styled(Row)`
    justify-content: space-evenly;
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
    top: ${(props) => props.$isMobile ? '30vh' : '300px'};
    background-color: ${white};
    z-index: ${TopLayer};
`;

const GreenArrow = styled.img<{$isMobile: boolean}>`
    position: absolute;
    bottom: ${(props) => props.$isMobile ? '-40%' : '-10%'};
    left: ${(props) => props.$isMobile ? '0': '15%'};
    scale: ${(props) => props.$isMobile ? '0.4': '0.8'};
`;