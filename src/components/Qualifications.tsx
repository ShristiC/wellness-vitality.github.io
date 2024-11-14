import styled from "@emotion/styled";
import FMCA from "../assets/qualifications/FMCA.png";
import FNA from "../assets/qualifications/FunctionalNutritionalAlliance.webp";
import NBHWC from "../assets/qualifications/NBHWC.svg";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { black } from "./Core/Colors";
import { BorderRadius, PaddingOrMargin, Row } from "./Core/Layout";
import { HeadingText } from "./Core/Typography";

export default function Qualifications() {
    const [_, isMobile] = useWindowDimensions();
    const quals = [
        {
            name: "Certified Functional Nutrition Counselor",
            link: "https://www.fxnutrition.com/programs/full-body-systems",
            imgUrl: FNA,
            alt: "Functional Nutritional Alliance Logo",
        },
        {
            name: "National Board Certified Health and Wellness Coach",
            link: "https://nbhwc.org/",
            imgUrl: NBHWC,
            alt: "National Board Certified Health and Wellness Coach Logo"
        }, 
        {
            name: "Certified Functional Medicine Health and Wellness Coach",
            link: "https://functionalmedicinecoaching.org/",
            imgUrl: FMCA,
            alt: "Functional Medicine Coaching Academy, Inc Logo"
        }
    ];

    return (
        <Wrapper>
            <HeadingText $isMobile={isMobile} $color="primary">My Qualifications</HeadingText>
            <Layout $isMobile={isMobile}>
                <QualItem>
                    <img src={quals[0].imgUrl} alt={quals[0].alt} height={100}/>
                    <a href={quals[0].link} target="_blank">{quals[0].name}</a>
                </QualItem>
                <QualItem>
                    <img src={quals[1].imgUrl} alt={quals[1].alt} height={150}/>
                    <a href={quals[1].link} target="_blank">{quals[1].name}</a>
                </QualItem>
                <QualItem>
                    <img src={quals[2].imgUrl} alt={quals[2].alt} height={100}/>
                    <a href={quals[2].link} target="_blank">{quals[2].name}</a>
                </QualItem>
            </Layout>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    border-radius: ${BorderRadius.button}px;
    border: 1px solid ${black};
    margin: 8%;
    padding: ${PaddingOrMargin.extraLarge}px 2%;
    text-align: center;
    align-items: center;
`;

const QualItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${PaddingOrMargin.medium}px;
    width: 220px;
    padding: ${PaddingOrMargin.small}px;
    text-align: center;
    align-items: center;
    justify-content: space-between;
`;

const Layout = styled(Row)<{$isMobile: boolean}>`
    flex-direction: ${(props) => props.$isMobile ? 'column' : 'row'};
    padding-top: 20px;
    gap: ${(props) => props.$isMobile ? '10px' : '0'};
    justify-content: center;
    align-items: center;
`;