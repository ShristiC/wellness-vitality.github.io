import styled from "@emotion/styled";
import CleanEatingPDF from "../../assets/programs/healthy eating.pdf";
import CleanEatingPng from "../../assets/programs/healthyEating.png";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { darkGreen, white } from "../Core/Colors";
import { BorderRadius, PaddingOrMargin } from "../Core/Layout";
import { CardHeading, ContentText, ContentTextBold, Title } from "../Core/Typography";
import { ActionButton } from "../CoreButtons";
import Footer from "../Footer";
import Heading from "../Heading";


export default function ProgramsPage() {
    const programs = [
        {
            title: "Clean Eating for Energy",
            description: "Why are we getting so sick? It's the environment where we live, the food we eat, and the air we breathe full of toxins and pesticides.",
            additionalInfo: "South Regional Library: April 8, 2025 at 1PM",
            link: "https://montgomeryco-southregional-tx.whofi.com/calendar/event/1269208/s?method=embed",
            buttonText: "Register Now",
            imageSrc: CleanEatingPng,
            onClick: () => window.open(CleanEatingPDF, "_blank", "noreferrer")
        },
        {
            title: "Spring Liver Cleanse 2025",
            description: "Online Cleanse for Better Metabolism, More Energy, and Lasting Vitality. No Supplements Required.",
            additionalInfo: "Registration Starts April 7th!",
            link: "https://l.bttr.to/EpSF0",
            buttonText: "Coming Soon...",
            imageSrc: "https://www.nlpfitness.ca/cdn/shop/articles/Smoked_Tofu_Vegan_Protein_Bowl_1.jpg?v=1519308465",
            isDisabled: true,
        }, 
    ]

    const [, isMobile] = useWindowDimensions();

    return (
        <>
        <Heading />
        <Content>
            <Title $isMobile={isMobile}>Programs</Title>
            <GridWrapper>
                {programs.map((p) => (
                    <Card key={p.title}>
                        <CoverImage src={p.imageSrc} alt={p.title} onClick={p.onClick}/>
                        <InnerContent>
                            <CardHeading $color="secondary" $isMobile={isMobile}>
                                {p.title}
                            </CardHeading>
                            <ContentText $isMobile={isMobile}>{p.description}</ContentText>
                            <Wrapper>
                                <ContentTextBold $isMobile={isMobile}>{p.additionalInfo}</ContentTextBold>
                                <StyledActionButton
                                    disabled={p.isDisabled}
                                    $variant="paper"
                                    $isMobile={isMobile}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.open(p.link, "_blank", "noreferrer");
                                    }}
                                >
                                    {p.buttonText}
                                </StyledActionButton>
                            </Wrapper>
                        </InnerContent>
                    </Card>
                ))}
            </GridWrapper>
        </Content>
        <Footer />
        </>
    );
}

const GridWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 20px;

    & > * {
        flex: 1 1 calc(33.333% - 20px); /* Adjust for 3 items per row with gap */
        box-sizing: border-box;
    }
`;

const Content = styled.div`
    display: block;
    position: relative;
    top: 110px;
    padding: ${PaddingOrMargin.extraLarge}px 10% ${PaddingOrMargin.extraLarge * 3}px 10%;
    max-width: 100%;
    overflow-x: clip;
`;

const Card = styled.div`
    width: 200px;
    border: 2px solid ${white};
    padding: ${PaddingOrMargin.large}px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: ${BorderRadius.light}px;
    background-color: ${darkGreen};
`;

const CoverImage = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    max-height: 66.67%; /* Set max height to 2/3 of the available container */
    cursor: pointer;
    flex: 1 1 auto; /* Allow the image to grow and fill the space */
    border-color: ${white};
    background-color: ${white};
`;

const InnerContent = styled.div`
    text-align: center;
    color: ${white} !important;
    padding: ${PaddingOrMargin.small}px 0;
    display: flex;
    flex-direction: column;
    gap: ${PaddingOrMargin.small}px;
    flex: 1 1 auto; /* Allow the content to grow and fill the space */
    align-items: center;
    justify-content: center; /* Center content vertically */
`;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${PaddingOrMargin.medium}px;
    align-items: center;
`;

const StyledActionButton = styled(ActionButton)`
    width: 100%;
`;