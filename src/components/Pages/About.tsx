import styled from "@emotion/styled";
import { useState } from "react";
import ProfessionalImage from "../../assets/anita_professional.jpg";
import { PaddingOrMargin, Row } from "../Core/Layout";
import { ContentText, ContentTextBold, Title } from "../Core/Typography";
import { ExpanderCard } from "../ExpanderCard";
import Footer from "../Footer";
import Heading from "../Heading";
import CoachingPhilosophy from "../CoachingPhilosophy";
import Qualifications from "../Qualifications";
import { ActionButton } from "../CoreButtons";

export default function AboutPage() {
    const inspirationStory = [
        "When I was a young girl, I would feel fatigue within an 1 hour of physical activity. I lacked the energy to chase my siblings and go through the day without napping in between. I was also overweight which led me to have lower self-confidence. Growing up, I thought it was expected, normal even, to feel this way. However, when my father was diagnosed with Type II Diabetes and Kidney Failure, requiring dialysis 3x a week  — I realized these “conditions” were detrimental and not normal.",
        "Determined to find answers, I began working for a functional and integrative medical doctor. There, I learned of the profound impact holistic approach has on sustainable health and well-being. Inspired, I enrolled in my first Functional Medicine course and became a Certified Functional Medicine Health and Wellness Coach. Seeing success with my own transformation, I dedicated myself to help others discover the root causes of their health challenges, and guide them towards a path of vitality and wellness. ",
    ];

    const experiences = [
        "I have worked as a Functional Medicine Health and Wellness Coach for 6+ years. During my initial years, I closely worked with Functional and Integrative Medical Doctors by providing individualized care plans to clients and fostering a positive journey for clients to meet their desired goals. During the peak of the COVID 19 Pandemic, I founded Wellness n Vitality with the hope to empower people to take a proactive and preventative approach to their health. Since then, I have worked with over 40+ patients across the world, offer remote first services, and can conduct coaching in English, Spanish, Hindi, and Bengali.",
        "I have experience working with clients who have chronic conditions such as Type II Diabetes, Arthritis, IBS, and Auto-Immune Diseases leading some to even reverse their diagnosis! I also have experience with weight loss and stress management programs leading to results within a couple of weeks. I am an expert in planning delicious, healthy, and nutritious meals — primarily improving Indian Vegetarian diets, but can provide consultation on other cuisines and dietary interests too. Along with 1-1 individualized coaching, I have also had the honor of conducting group coaching sessions, workshops, seminars and more to raise educational awareness.",
        "I value my client’s goals and provide customized plans that are collaborative, positive, and sustainable during the health journey. I understand that improving our health journey can be a long and stressful time, but I want to be your champion and cheer leader, promising to be there with you every step of the way."
    ];

    const [showInspiration, setShowInspiration] = useState(true);
    const [showExperience, setShowExperience] = useState(false);

    const handleInspirationOpen = () => {
        setShowInspiration(!showInspiration);
    }

    const handleExperienceOpen = () => {
        setShowExperience(!showExperience)
    }

    return (
        <>
            <Heading />
            <Content>
                <InnerContent>
                    <Title>Empowering Wellness</Title>
                    <Row style={{marginTop: '25px'}}>
                        <QuickWrap>
                            <ExpanderCard title="My Inspiration" open={showInspiration} handleOpen={handleInspirationOpen}>
                                <ContentWrap>
                                        {inspirationStory.map((story, i) => {
                                            return <ContentText key={`inspiration_${i}`}>{story}</ContentText>
                                        })}
                                </ContentWrap>
                            </ExpanderCard>
                            <ExpanderCard title="My Experience" open={showExperience} handleOpen={handleExperienceOpen}>
                                <ContentWrap>
                                        {experiences.map((story, i) => {
                                            return <ContentText key={`credibility_${i}`}>{story}</ContentText>
                                        })}
                                </ContentWrap>
                            </ExpanderCard>
                        </QuickWrap>
                        <ProfessionalContent>
                            <ProfessionalWrap src={ProfessionalImage} alt="Professional image of a South Asian brown woman, with parted dark brown hair, dark brown eyes, and a smiling friendly face. She is wearing a dark green dress with her arms crossed and her body slightly tilted."/>
                            <ContentTextBold style={{marginTop: "20px", textAlign: "center"}}>Anita Chitlangia</ContentTextBold>
                            <ContentText style={{textAlign: "center"}}>Founder of Wellness n Vitality</ContentText>
                        </ProfessionalContent>
                    </Row>
                </InnerContent>
            </Content>
            <Qualifications />
            <CoachingPhilosophy/>
            <CallToAction>
                <ContentText>Are you looking for an accountability partner, someone to be your champion, and make your goals bite sized? Have you tried before, but are too scared to again?</ContentText>
                <ContentTextBold>You are not alone and it is not too late! Let's work together to take charge of your life and help you live your most vibrant life.</ContentTextBold>
                <ActionButton $variant="default" onClick={(e) => {
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
    gap: ${PaddingOrMargin.extraLarge}px;
`;

const QuickWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;
    transition: width 2s, height 4s, ease;
`;

const ContentWrap = styled(InnerContent)`
    justify-content: space-around;
    text-indent: 48px;
    padding: 20px 0px;
    width: 600px;
`;

const ProfessionalWrap = styled.img`
    height: 500px;
`;

const ProfessionalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-self: center;
`;

const CallToAction = styled.div`
    padding: 10%;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
`;