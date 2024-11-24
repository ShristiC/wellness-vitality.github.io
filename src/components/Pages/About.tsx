import styled from "@emotion/styled";
import ProfessionalImage from "../../assets/anita_professional.jpg";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import CoachingPhilosophy from "../CoachingPhilosophy";
import { PaddingOrMargin, Row } from "../Core/Layout";
import { ContentText, ContentTextBold, Title } from "../Core/Typography";
import { ActionButton } from "../CoreButtons";
import FolderTab from "../FolderTab";
import Footer from "../Footer";
import Heading from "../Heading";
import Qualifications from "../Qualifications";

export default function AboutPage() {
    const [_, isMobile, isMedium] = useWindowDimensions();

    const inspirationStory = [
        "My journey begins as a young girl, when I lacked the energy to chase my siblings and had to take an afternoon nap to feel somewhat energized. I had low self confidence due to my physical appearance. Growing up, I didn’t think much of it. Until several years ago, when my father was diagnosed with Type II Diabetes and Kidney Failure (requiring dialysis 3x a week) — I realized these “conditions” were detrimental and not normal.",
        "Determined to find answers, I began working for a functional and integrative medical doctor. There, I learned of the profound impact sustainable health and well-being has on chronic and long term conditions. Inspired, I enrolled in my first Functional Medicine course and became a Certified Functional Medicine Health and Wellness Coach. Seeing success with my own transformation, I dedicated myself to help others discover the root causes of their health challenges, and guide them towards a path of vitality and wellness. ",

    ];

    const experiences = [
        "I have worked as a Functional Medicine Health and Wellness Coach for 6+ years. During my initial years, I closely worked with Functional and Integrative Doctors by providing individualized care plans to clients and fostering a positive journey for clients to meet their desired goals. During the peak of the COVID 19 Pandemic, I founded Wellness n Vitality empowering people to take a proactive and preventative approach to their health. Since then, I have worked with over 50+ patients across the world, offer remote first services, and conduct coaching in English, Spanish, Hindi, and Bengali.",
        "I have experience working with clients who have chronic conditions such as Type II Diabetes, Arthritis, IBS, Stress, and Auto-Immune Diseases. My expertise lies in addressing root causes, taking a holistic approach to my client’s well being, and being my client’s champion from start to finish.  Planning delicious, healthy, and nutritious meals is my favorite - with an added plus of bringing these into Indian Vegetarian diets. Along with 1-1 individualized coaching, I also conduct group coaching sessions, corporate workshops, community workshops, and seminars to raise educational awareness.",
    ];

    const ProfessionalComponent = () => {
       let dimension: 'wide' | 'medium' | 'compact'  = 'wide';
        if (isMedium) {
            dimension = 'medium';
        } else if (isMobile) {
            dimension = 'compact';
        }
        return (
            <ProfessionalContent $isMobile={isMobile}>
                <ProfessionalWrap $dimension={dimension} src={ProfessionalImage} alt="Professional image of a South Asian brown woman, with parted dark brown hair, dark brown eyes, and a smiling friendly face. She is wearing a dark green dress with her arms crossed and her body slightly tilted."/>
                {isMobile ? 
                    <div style={{textAlign: 'center', marginTop: `${PaddingOrMargin.large}px`}}>
                        <ContentTextBold $isMobile={isMobile}>Anita Chitlangia</ContentTextBold>
                        <ContentText $isMobile={isMobile}>Founder of Wellness n Vitality</ContentText>
                    </div> : 
                    <ProfessionContentText>
                        <ContentTextBold $isMobile={isMobile}>Anita Chitlangia</ContentTextBold>
                        <ContentText $isMobile={isMobile}>Founder of Wellness n Vitality</ContentText>
                    </ProfessionContentText>
                }
            </ProfessionalContent>
    );
 }
    return (
        <>
            <Heading />
            <Content>
                <InnerContent>
                    <Title $isMobile={isMobile}>Empowering Wellness</Title>
                    <Layout $isMobile={isMobile}>
                        <FolderTab labels={["Inspiration", "Experience"]} tab1Content={inspirationStory} tab2Content={experiences}/>
                        {ProfessionalComponent()}
                    </Layout>
                </InnerContent>
            </Content>
            <Qualifications />
            <CoachingPhilosophy/>
            <CallToAction>
                <ContentText $isMobile={isMobile}>Are you looking for an accountability partner, someone to be your champion, and make your goals bite sized? Have you tried before, but are too scared to again?</ContentText>
                <ContentTextBold $isMobile={isMobile}>You are not alone and it is not too late! Let's work together to take charge of your life and help you live your most vibrant life.</ContentTextBold>
                <ActionButton $isMobile={isMobile} $variant="default" onClick={(e) => {
                        e.preventDefault();
                        window.open("https://my.practicebetter.io/#/5c6a01b7627db308702273dc/bookings?step=services", "_blank", "noreferrer");
                    }}>Let's start NOW!</ActionButton>
            </CallToAction>
            <Footer />
        </>
    );
}

const Content = styled.div`
    display: block;
    position: relative;
    top: 110px;
    padding: ${PaddingOrMargin.extraLarge}px 10% ${PaddingOrMargin.extraLarge * 3}px 10%;
    max-width: 100%;
    overflow-x: clip;
`;

const InnerContent = styled.div`
    display: flex;
    flex-direction: column;
`;

const heights: {[key in 'wide' | 'medium' | 'compact']: string} = {
    'wide': '550px',
    'medium': '300px',
    'compact': '40vh',
};

const ProfessionalWrap = styled.img<{$dimension: 'wide' | 'medium' | 'compact'}>`
    height: ${(props) => heights[props.$dimension]};
    object-fit: cover;
`;

const ProfessionalContent = styled.div<{$isMobile: boolean}>`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-self: center;
    height: ${(props) => props.$isMobile ? '50vh' : 'auto'};
`;

const CallToAction = styled.div`
    padding: 10%;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
`;

const Layout = styled(Row)<{$isMobile: boolean}>`
    margin-top: ${(props) => props.$isMobile ? PaddingOrMargin.medium: PaddingOrMargin.medium}px;
    flex-direction: ${(props) => props.$isMobile ? 'column' : 'row'};
`;

const ProfessionContentText = styled.div`
    position: absolute;
    top: 220px;
    right: 10%;
    max-width: 170px;
    flex-wrap: wrap;
`;