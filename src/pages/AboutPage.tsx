import PageTemplate from "./PageTemplate";
import AnitaProfessional from '../assets/anita_professional.jpg'
import ScheduleDiscovery from "../components/ScheduleDiscovery";
import styled from "@emotion/styled";

function AboutPage() {
    return <PageTemplate>
        <img src={AnitaProfessional} width={400}/>
        <AlignLeft>Growing up, I thought it was normal to experience fatigue after an hour of doing something. I thought it was okay that I did not have the energy to run after my brothers because I was a “girl”. I thought it was fine to be a little overweight. But, when I witnessed my father with similar health conditions get diagnosed with Type II Diabetes, Kidney Failure, and forced to get Dialysis 3 times a week — I realized these “conditions” were not normal and lead to disease in the body.</AlignLeft>
        <AlignLeft>As I began to search for answers to my father’s health concerns, I started working for a functional and integrative medical doctor, who taught me the importance of holistic approach to health and well-being. On a quest to learn more, I decided to attend the Functional Medicine Health Coach Academy (FMCA), in partnership with the Institute for Functional medicine (IFM), and become a Functional Medicine Certified health Coach, so that I could help inspire and empower my clients to take a proactive and preventative approach to their health. To further expand my knowledge and qualification, I also got certified as a National Board Health and Wellness Coach.</AlignLeft>
        <AlignLeft>Since then, I have lost 15 lbs and  I am full of energy, which allows me to enjoy doing the things I love, like cooking healthy and delicious meals for family gatherings. As a Health Coach I, have successfully guided my clients to significantly reduce, or in some cases reverse, their chronic conditions (Arthritis, Diabetes, Auto-immune diseases), with the added benefit of weight loss, elevated energy, and improved sleep. Some of my milestones included normalizing blood sugar levels in a diabetic client within 4 weeks. I helped another client combat her 13 year long struggle with Arthritis and managed to reduce her inflammation (she is now on less pain killers). Most importantly, I inspire my clients to eat healthy, colorful, flavorful, nutrient rich foods, that boost their immune system and give them the vitality they have been longing for.</AlignLeft>
        <AlignLeft>I am passionate about helping those who are ready to take action towards reducing and/or reversing Type II Diabetes, through healthy weight management, improved sleep practices, and stress management.</AlignLeft>
        <ScheduleDiscovery/>
    </PageTemplate>
}

const AlignLeft = styled.p`
    text-align: left;
`;

export default AboutPage;