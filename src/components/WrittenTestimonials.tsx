import styled from "@emotion/styled";
import { useState } from "react";
import QuoteIcon from "../assets/icons/quote.svg";
import Dev from "../assets/testimonials/Dev.jpg";
import Radha from "../assets/testimonials/Radha.png";
import Samy from "../assets/testimonials/Samy.png";
import Suman from "../assets/testimonials/Suman.png";
import { darkGreen, lightGreen, white } from "./Core/Colors";
import { BorderRadius, Row } from "./Core/Layout";
import { ContentText, ContentTextBold, DisclaimerText, HeadingTextLight } from "./Core/Typography";
import { HyperlinkButton } from "./CoreButtons";
import useWindowDimensions from "../hooks/useWindowDimensions";

interface TestimonialItem {
    title: string;
    description: string;
    imageUrl: string;
    name: string;
    alt?: string;
}

export default function WrittenTestimonials () {
    const [_, isMobile] = useWindowDimensions();
    const [count, setCount] = useState(2);

    const testimonialsCol1: TestimonialItem[] = [
        {
            title: "Reduced Insulin Medication and Low H1AC",
            description: "The number speaks more than words. When your H1Ac is down to 5.8 and medicine is cut down to half, then you cannot find the right sentence to share your experience except the \"wow, it can be done!\" Well done Anita, you breathed new life in me. Thanks for your inspiration.",
            imageUrl: Dev,
            name: "Dev",
            alt: "Brown man with black hair, and mustache wearing a blue button down shirt."
        },
        {
            title: "Group Coaching and Healthy Eating",
            description: "Anita is a very good advisor on health care. She taught us a lot about health care during the online classes for a short time. It was very helpful to me. Following her advice, I got a lot of information about making food healthy, adding healthy things doing some exercise for body etc. I am really thankful to Anita",
            imageUrl: "",
            name: "Mohini",
        },
        {
            title: "Accountability and Collaborative Coaching",
            description: "I am incredibly grateful for the outstanding guidance and support provided by Anita ji. Her expertise and dedication have truly made positive impact since from the very day on my health and well being. Anita ji has a very remarkable ability to communicate in a clear and understandable manner. I have seen significant improvement in my health and energy levels. Her motivational support and encouragement have been invaluable in keeping me focused and in track. Ordered my supplements and excited to get them. Highly appreciate n recommend for Anitaji.",
            imageUrl: Samy,
            name: "Samy",
            alt: "Smiling brown man wearing white shirt with hands in a fist close to his face, kind of like a punching position."
        },
        {
            title: "Healing and Lifestyle",
            description: "Anita hold my hand when I was feeling so low health wise I was feeling like I m drowning. She made sure I feel good internally and physically fit. She worked on with me every step of the way, educated me on my blood work and supplements that was needed for my body. She worked with me on my diet too . She continuously made sure that I am doing ok and feeling good and what I am eating and how Ia m doing even when she was on vacation to her India trip still she made sure that she should not miss my sessions with her ! I feel that I'm back in routine and feel good about myself inside out feeling healthy and I'm able to manage work and life well now. Thankyou so much dear Anita for everything sending kisses 😘,hugs and prayers that may you heal many like me !",
            imageUrl: "",
            name: "Kunjan",
        },
        {
            title: "Addressing Chronic Symptoms of Diabetes",
            description: "Anita ji has been working with my mother for her chronic diabetes. Her wholistic approach as a health coach is truly remarkable. The overall improvement in my mother’s health is clearly visible. Thank you💐",
            imageUrl: "",
            name: "Vikram",
        },
    ];

    const testimonialsCol2: TestimonialItem[] = [
        {
            title: "Reversed Diabetes & Fatty Liver",
            description: "Connecting with Wellness n Vitality has been my best decision and investment for my health. With all valued guidance from Anita, i was magically able to reverse my Type 2 Diabetes as well as fatty liver and other improvements within 6 months. That too without consuming any medicines. Highly recommend and grateful 😇🙏🙏",
            imageUrl: "",
            name: "Vikas",
        },
        {
            title: "Regained our Lifestyle and Became Parents",
            description: "100% effective and reguler sessions with food,exercise and suppliments , very helpful in nature and cooperative, by the advice of respective Anita mam we become parents.",
            imageUrl: Suman,
            name: "Suman",
            alt: "Brown man wearing colorful clothes and having some hindu religious markings.",
        },
        {
            title: "Reversing Diabetes - 3 months",
            description: "Anita is helping me to reverse my diabetes. I am seeing great results in just three months! She helps at every step and guides you through the recovery journey. Highly recommend",
            imageUrl: "",
            name: "Amit",
        },
        {
            title: "Reversed Diabetes and Regained Confidence",
            description: "Working with Anita was the best choice I made.I was diagnosed pre diabetic, but Anita made the magic happened and empowered me to reverse the condition. Not only this, I was able to control my increasing weight and am now full of energy to take life and its challenges head on. Investing in your health is the most beneficial investment one can ever make. This counseling is highly recommended and it will show results 100% in a very short time. Thank you dear Anita.",
            imageUrl: Radha,
            name: "Radha",
            alt: "2 brown women, one wearing glasses, smiling and taking a selfie together."
        },
        {
            title: "Post Covid Symptom Management",
            description: "I would like to thank you to Anita ji, connecting with her was my best decision and like God grace. Post severe Covid19 there was lots of ups and downs in my medical test reports. Even after seven months post covid, I was struggling for improvement and there was not much improvements. With continuous guidance with Anita ji , in short span of time I come back to normal without consuming lots of medicines. My last reports were all normal . With her help my and my family life style also totally changed. Highly recommended",
            imageUrl: "",
            name: "Sandeep",
        },
    ];

    return (
        <Wrapper>
            <HeadingTextLight $isMobile={isMobile} $color="secondary">Hear From Clients</HeadingTextLight>
            <TestimonialRow $isMobile={isMobile}>
                <TestimonialCol>
                    {testimonialsCol1.slice(0,count).map((testimonial, i) => {
                        return (
                            <WrittenTestimonial id={`col_1_${i}`} testimonial={testimonial} />
                        );
                    })}
                </TestimonialCol>
                <TestimonialCol>
                    {testimonialsCol2.slice(0,count).map((testimonial, i) => {
                        return (
                            <WrittenTestimonial id={`col_2_${i}`} testimonial={testimonial} />
                        );
                    })}
                </TestimonialCol>
            </TestimonialRow>
            {count == 2 && <HyperlinkButton $variant="default" onClick={() => setCount(Math.max(testimonialsCol1.length, testimonialsCol2.length))}> See More </HyperlinkButton>}
        </Wrapper>
    );
}

interface InnerWrittenContentProps {
    testimonial: TestimonialItem;
    id: string;
}

function WrittenTestimonial({testimonial, id}: InnerWrittenContentProps) {
    const [isSelected, setIsSelected] = useState(false);
    const [_, isMobile] = useWindowDimensions();

    return (
        <Card key={id}>
            <img src={QuoteIcon} width={isMobile ? 20 : 100} alt=""/>
            <CardWrapper $isMobile={isMobile}>
                {isMobile && <InnerContent>
                    {testimonial.imageUrl !== "" && <TestimonialImage src={testimonial.imageUrl} width={150} height={150} alt={testimonial.alt}/>}
                    <DisclaimerText $isMobile={isMobile} style={{textAlign: "center", alignSelf: "center"}}>{testimonial.name}</DisclaimerText>
                </InnerContent>}
                <InnerContent style={{width: "65%"}}>
                    <ContentTextBold $isMobile={isMobile}>{testimonial.title}</ContentTextBold>
                    <Text $isMobile={isMobile}>{isSelected ? testimonial.description : `${testimonial.description.substring(0, 115)}...`}</Text>
                    {!isSelected && <HyperlinkButton $variant="testimonials" onClick={() => setIsSelected(true)}>See More</HyperlinkButton>}
                </InnerContent>
                {!isMobile && <InnerContent>
                    {testimonial.imageUrl !== "" && <TestimonialImage src={testimonial.imageUrl} width={150} height={150} alt={testimonial.alt}/>}
                    <DisclaimerText $isMobile={isMobile} style={{textAlign: "center", alignSelf: "center"}}>{testimonial.name}</DisclaimerText>
                </InnerContent>}
            </CardWrapper>
        </Card>
    );
}

const Wrapper = styled.div`
    height: auto;
    background: linear-gradient(0deg, ${lightGreen}, ${darkGreen});
    border-radius: ${BorderRadius.button}px;
    flex-direction: column;
    display: flex;
    gap: 60px;
    padding: 10%;
`;

const Card = styled.div`
    height: auto;
    max-width: 510px;
    background-color: ${white};
    padding: 20px;
    border-radius: ${BorderRadius.button}px;
    display: inline-block;
    margin: 5px;
`;

const CardWrapper = styled(Row)<{$isMobile: boolean}>`
    overflow: hidden;
    padding: ${(props) => props.$isMobile ? 0: 15}px;
    flex-direction: ${(props) => props.$isMobile ? 'column' : 'row'};
    align-items: center;
`;


const TestimonialRow = styled(Row)<{$isMobile: boolean}>`
    flex-direction: ${(props) => props.$isMobile ? 'column' : 'row'};
`;

const TestimonialCol = styled(Row)`
    flex-direction: column;
    justify-content: flex-start;
`;

const TestimonialImage = styled.img`
    border-radius: 100%;
    object-fit: fit;
    align-self: center;
`;

const InnerContent = styled.div`
    gap: 20px;
    display: flex;
    flex-direction: column;
    align-items: start;
`;

const Text = styled(ContentText)`
    font-size: ${(props) => props.$isMobile ? 10 : 20}px;
`;