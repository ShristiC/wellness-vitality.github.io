import styled from "@emotion/styled";
import Resonate from "./Resonate";
import { PaddingOrMargin, Row, TopLayer } from "./Core/Layout";
import BackgroundPetals from "./BackgroundPetals";
import { white } from "./Core/Colors";
import LeftBackgroundPetals from "./LeftBackgroundPetals";
import GreenArrowVector from '../assets/cover/Green Arrow.png';

export default function PainPoints() {
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
        <PainPointsWrapper>
            <BackgroundPetals/>
            <LeftBackgroundPetals />
            <GreenArrow src ={GreenArrowVector}/>
            <PainPointRow>
                <Resonate question="Are you..." bulletPoints={painPoints}/>
                <ImagineContentWrapper>
                    <Resonate question="Imagine a life where You..." bulletPoints={imaginePoints} buttonText="Let's Start Today"/>
                </ImagineContentWrapper>
            </PainPointRow>
        </PainPointsWrapper>
    );
}

const PainPointRow = styled(Row)`
    justify-content: space-evenly;
`;

const PainPointsWrapper = styled.div`
    display: block;
    position: relative;
    margin-top: 850px; // size of cover image
    padding: ${PaddingOrMargin.extraLarge * 3}px 10%;
    max-width: 100%;
    overflow-x: clip;
`;

const ImagineContentWrapper = styled.div`
    position: relative;
    top: 300px;
    background-color: ${white};
    z-index: ${TopLayer};
`;

const GreenArrow = styled.img`
    position: absolute;
    bottom: -10%;
    left: 25%;
    scale: 0.8;
`;