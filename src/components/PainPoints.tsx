import styled from "@emotion/styled";
import Resonate from "./Resonate";
import { PaddingOrMargin, Row, TopLayer } from "./Core/Layout";
import { white } from "./Core/Colors";
import LeftBackgroundPetals from "./LeftBackgroundPetals";
import GreenArrowVector from '../assets/cover/Green Arrow.png';
import useWindowDimensions from "../hooks/useWindowDimensions";
import RightBackgroundPetals from "./RightBackgroundPetals";

export default function PainPoints() {
    const [_, isMobile] = useWindowDimensions();

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
        <PainPointsWrapper $isMobile={isMobile}>
            {isMobile ? 
                <>
                    <GreenArrow $isMobile={isMobile} src ={GreenArrowVector} alt="curved arrow pointing starting from Pain Points to Resonating Points" />
                    <PainPointRow>
                        <Resonate question="Are you..." bulletPoints={painPoints}/>
                        <ImagineContentWrapper>
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
                        <ImagineContentWrapper>
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

const PainPointsWrapper = styled.div<{$isMobile: boolean}>`
    display: block;
    position: relative;
    margin-top: ${(props) => props.$isMobile ? 100 : 120}vh; // size of cover image
    padding: ${PaddingOrMargin.extraLarge * 3}px ${(props) => props.$isMobile ? '5%' : '10%'};
    max-width: 100%;
    overflow-x: clip;
`;

const ImagineContentWrapper = styled.div`
    position: relative;
    top: 300px;
    background-color: ${white};
    z-index: ${TopLayer};
`;

const GreenArrow = styled.img<{$isMobile: boolean}>`
    position: absolute;
    bottom: ${(props) => props.$isMobile ? '5%' : '-10%'};
    left: ${(props) => props.$isMobile ? '0': '15%'};
    scale: ${(props) => props.$isMobile ? '0.6': '0.8'};
`;