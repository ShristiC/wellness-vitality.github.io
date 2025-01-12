import styled from "@emotion/styled";
import FMCA from "../assets/qualifications/FMCA.png";
import FNA from "../assets/qualifications/FunctionalNutritionalAlliance.webp";
import NBHWC from "../assets/qualifications/NBHWC.svg";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { black } from "./Core/Colors";
import { BorderRadius, PaddingOrMargin, Row } from "./Core/Layout";
import { HeadingText } from "./Core/Typography";
import { StyledLink } from "./CoreButtons";

export default function Qualifications() {
    const [_, isMobile] = useWindowDimensions();
    const quals = [
        {
            names: ["Certified Functional Nutrion and Lifestyle Practitioner", "Certified Functional Nutrition Counselor"],
            links: ["https://www.fxnutrition.com/programs/functional-nutrition-and-lifestyle-practitioner-certification-fnlp", "https://www.fxnutrition.com/programs/full-body-systems"],
            imgUrl: FNA,
            alt: "Functional Nutritional Alliance Logo",
        },
        {
            names: ["National Board Certified Health and Wellness Coach"],
            links: ["https://nbhwc.org/"],
            imgUrl: NBHWC,
            alt: "National Board Certified Health and Wellness Coach Logo"
        }, 
        {
            names: ["Certified Functional Medicine Health and Wellness Coach"],
            links: ["https://functionalmedicinecoaching.org/"],
            imgUrl: FMCA,
            alt: "Functional Medicine Coaching Academy, Inc Logo"
        }
    ];

    return (
        <Wrapper>
            <HeadingText $isMobile={isMobile} $color="primary">My Qualifications</HeadingText>
            <Layout $isMobile={isMobile}>
                {quals.map((qual) => (
                    <QualItem>
                    <img src={qual.imgUrl} alt={qual.alt}    height={100}/>
                    {qual.names.map((name, index) => {
                        return (
                            <StyledLink href={qual.links[index]} target="_blank">{name}</StyledLink>
                        )
                    })}
                </QualItem>
            ))}
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
    justify-content: ${(props) => props.$isMobile ? 'center' : 'space-around'}; ;
    align-items: center;
`;