import styled from "@emotion/styled";
import ChronicPain from '../assets/specialties/chronic pain 2.jpg';
import GutHealth from '../assets/specialties/gut health.jpg';
import HydrationIcon from "../assets/specialties/Hydration.svg";
import NutritionIcon from "../assets/specialties/Nutrition.svg";
import PhysicalActivityIcon from "../assets/specialties/PhysicalHealth.svg";
import RelationshipIcon from "../assets/specialties/Relationship.svg";
import SleepIcon from "../assets/specialties/Sleep.svg";
import StressIcon from "../assets/specialties/Stress.svg";
import Type2Diabetes from '../assets/specialties/type II diabetes.jpg';
import WeightManagement from '../assets/specialties/weight management.png';
import { theme } from "./Core/Colors";
import { PaddingOrMargin, Row } from "./Core/Layout";
import { ContentText, HeadingTextLight } from "./Core/Typography";
import { ActionButton } from "./CoreButtons";
import Pillar from "./Pillar";
import SpecialtyComponent from "./SpecialtyComponent";
import useWindowDimensions from "../hooks/useWindowDimensions";

export default function SpecialtiesAndServices() {
    const [_, isMobile] = useWindowDimensions();
    return (
        <Wrapper>
            <Section $isMobile={isMobile}>
                <HeadingTextLight $isMobile={isMobile} $color="primary">My Specialties</HeadingTextLight>
                <StyledRow $isMobile={isMobile}>
                    <SpecialtyComponent text='Type II Diabetes' imageUrl={Type2Diabetes} imageAlt="insulin measure of 113 with a tape measure around it"/>
                    <SpecialtyComponent text='Chronic Pain / Fatigue' imageUrl={ChronicPain} imageAlt="Person holding their left wrist with their right hand"/>
                    <SpecialtyComponent text='Weight Management' imageUrl={WeightManagement} imageAlt="Weight Machine with measuring tape over it"/>
                    <SpecialtyComponent text='Irritable Bowel Syndrome (IBS)' imageUrl={GutHealth} imageAlt="Person holding their stomach towards the left, with a diagram of digestive system above it"/>
                </StyledRow>
            </Section>
            <Section $isMobile={isMobile}>
                <HeadingTextLight $isMobile={isMobile} $color="primary">Pillars of Holistic Approach</HeadingTextLight>
                <StyledRow $isMobile={isMobile}>
                    <Pillar text="Functional Nutrition" icon={NutritionIcon} alt="apple"/>
                    <Pillar text="Physical Activity" icon={PhysicalActivityIcon} alt="person running"/>
                    <Pillar text="Stress Management" icon={StressIcon} alt="face icon with a worried face"/>
                    <Pillar text="Sleep Hygeine" icon={SleepIcon} alt="bed"/>
                    <Pillar text="Hydration" icon={HydrationIcon} alt="water drop"/>
                    <Pillar text="Relationship Management" icon={RelationshipIcon} alt="2 people holding hands"/>
                </StyledRow>
            </Section>
            <ContentText $isMobile={isMobile}>At Wellness n Vitality, we believe in the power of functional nutrition to transform lives. Our 1-1 coaching program focuses on these six foundational pillars, offering personalized plans and continuous support. Join us to unlock a healthier, more energized you.</ContentText>
            <StyledActionButton $isMobile={isMobile} $variant='default' onClick={(e) => {
                        e.preventDefault();
                        window.open("https://my.practicebetter.io/#/5c6a01b7627db308702273dc/bookings?step=services", "_blank", "noreferrer");
                    }}>Start Your Journey Now</StyledActionButton>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    padding: ${PaddingOrMargin.extraLarge * 2}px 10%;
    text-align: center;
    align-items: center;
`;

const StyledRow = styled(Row)<{$isMobile: boolean}>`
    padding: ${(props) => props.$isMobile ? PaddingOrMargin.extraLarge : PaddingOrMargin.extraLarge}px 0px;
    color: ${theme.palette.text.secondary};
    flex-wrap: wrap;
    gap: ${(props) => props.$isMobile ? '15px' : '0px'};
`;

const StyledActionButton = styled(ActionButton)`
    margin-top: ${PaddingOrMargin.extraLarge}px;
`;

const Section = styled.div<{$isMobile: boolean}>`
    min-height: ${(props) => props.$isMobile ? 30 : 50}vh;
`;