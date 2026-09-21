import styled from "@emotion/styled";
import CleanEatingPDF from "../../assets/programs/healthy eating.pdf";
import CleanEatingPng from "../../assets/programs/healthyEating.png";
import LiverPaloozaPDF from "../../assets/programs/Liverpalooza Flier.pdf";
import LiverPaloozaPng from "../../assets/programs/Liverpalooza.png";
import ArthritisPng from "../../assets/programs/Arthritis Masterclass.png";
import CleanEatingPDFJune from "../../assets/programs/Clean Eating Wallpaper Background.pdf";
import CleanEatingJunePng from "../../assets/programs/CleanEatingJune.png";
import HealthyCooking from "../../assets/programs/Healthy Cooking Flyer .jpeg";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { darkGreen, white } from "../Core/Colors";
import { BorderRadius, PaddingOrMargin } from "../Core/Layout";
import { CardHeading, ContentText, ContentTextBold, FontSizes, Title } from "../Core/Typography";
import { ActionButton } from "../CoreButtons";
import Footer from "../Footer";
import Heading from "../Heading";
import Seo from "../Seo";
import { breadcrumbSchema, eventSchema } from "../../seo/schema";


interface Program {
    title: string;
    description: string;
    location: string;
    link?: string;
    buttonText?: string;
    imageSrc?: string;
    onClick?: () => void;
    date?: Date;
}

export default function ProgramsPage() {
    const programs: Program[] = [
        {
            title: "Clean Eating for Energy",
            description: "Choosing high=quality proteins to keep you full for longer periods of time. Energy-boosting fats to strenghen the immune system. Foods to avoid that cause inflammation and chronic diseases",
            location: "The Lake House in Grand Central Park, Conroe",
            imageSrc: CleanEatingJunePng,
            onClick: () => window.open(CleanEatingPDFJune, "_blank", "noreferrer"),
            date: new Date("2026-06-04T00:00:00")
        },
        {
            title: "Healthy Cooking Class",
            description: `Join us for a hands-on workshop where we'll explore the art of wholesome, flavorful cooking inspired by Indian culinary tradition. On the menu:

• Lentil Crepes
• Spiced Mixed Vegetables
• Scrambled Chickpea`,
            imageSrc: HealthyCooking,
            location: "Grand Central Park, Conroe, TX",
            date: new Date("2026-05-19T00:00:00"),
        },
        {
            title: "Conquer Arthritis Pain",
            description: "An interactive workshop exploring the impact of arthritis. Discover how simple dietary & lifestyle changes can make a world of difference in alleviating symptoms and promoting overall wellness.",
            location: "Lonestar University Park",
            imageSrc: ArthritisPng,
            link: "https://www.facebook.com/WellnessnVitality/posts/pfbid02ro8ryBfeVNqR58V4hAQq5y9JzodYMsuSJsBf7AvMkSgNg1fyGGDEy1VaE2Pw8Cwxl",
            onClick: () => window.open("https://www.facebook.com/WellnessnVitality/posts/pfbid02ro8ryBfeVNqR58V4hAQq5y9JzodYMsuSJsBf7AvMkSgNg1fyGGDEy1VaE2Pw8Cwxl", "_blank", "noreferrer"),
            date: new Date("2025-09-07T00:00:00")
        },
        {
            title: "Clean Eating for Energy",
            description: "Why are we getting so sick? It's the environment where we live, the food we eat, and the air we breathe full of toxins and pesticides.",
            location: "South Regional Library",
            link: "https://montgomeryco-southregional-tx.whofi.com/calendar/event/1269208/s?method=embed",
            buttonText: "Register Now",
            imageSrc: CleanEatingPng,
            onClick: () => window.open(CleanEatingPDF, "_blank", "noreferrer"),
            date: new Date("2025-04-08T13:00:00"),
        },
        {
            title: "Spring Liver Cleanse 2025",
            description: "Online Cleanse for Better Metabolism, More Energy, and Lasting Vitality. No Supplements Required.",
            location: "Remote",
            link: "https://l.bttr.to/EpSF0",
            buttonText: "Register Now",
            imageSrc: LiverPaloozaPng,
            onClick: () => window.open(LiverPaloozaPDF, "_blank", "noreferrer"),
            date: new Date("2025-04-07T00:00:00"),
        }, 
    ]

    const [, isMobile] = useWindowDimensions();

    const now = new Date();

    const formatDate = (date: Date) =>
        date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });

    return (
        <>
        <Seo
            title="Programs & Workshops | Cleanses and Clean Eating — Wellness n Vitality"
            description="Join Wellness n Vitality programs and workshops — from Clean Eating for Energy to the Spring Liver Cleanse — designed for better metabolism, more energy, and lasting vitality."
            path="/programs"
            jsonLd={[
                ...programs
                    .filter((p): p is Program & { date: Date } => !!p.date && p.date >= now)
                    .map((p) => eventSchema(p)),
                breadcrumbSchema([["Home", "/"], ["Programs", "/programs"]]),
            ]}
        />
        <Heading />
        <Content>
            <Title $isMobile={isMobile}>Programs</Title>
            <GridWrapper>
                {programs.map((p) => {
                    const isPast = !!p.date && p.date < now;
                    return (
                    <Card key={`${p.title}-${p.date?.toISOString() ?? ""}`}>
                        <CoverImage
                            src={p.imageSrc}
                            alt={p.title}
                            onClick={p.onClick}
                            $clickable={!!p.onClick}
                        />
                        <InnerContent>
                            <CardHeading $color="secondary" $isMobile={isMobile}>
                                {p.title}
                            </CardHeading>
                            <Description $isMobile={isMobile}>{p.description}</Description>
                            <Wrapper>
                                {p.date && <MetaText $isMobile={isMobile}>{formatDate(p.date)}</MetaText>}
                                <MetaText $isMobile={isMobile}>{p.location}</MetaText>
                                {!isPast && p.link && (
                                    <StyledActionButton
                                        $variant="paper"
                                        $isMobile={isMobile}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            window.open(p.link, "_blank", "noreferrer");
                                        }}
                                    >
                                        {p.buttonText}
                                    </StyledActionButton>
                                )}
                            </Wrapper>
                        </InnerContent>
                    </Card>
                    );
                })}
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
        /* rem-based basis so cards (and their images) scale with Firefox
           "Zoom Text Only" and OS text scaling, not just window resize.
           flex-grow fills the row; flex-wrap drops columns as space shrinks. */
        flex: 1 1 18rem;
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
    min-width: 0; /* Sizing comes from the flex basis in GridWrapper (rem-based) */
    border: 2px solid ${white};
    padding: ${PaddingOrMargin.small}px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: ${BorderRadius.light}px;
    background-color: ${darkGreen};
`;

const CoverImage = styled.img<{ $clickable?: boolean }>`
    object-fit: cover;
    width: 100%;
    aspect-ratio: 3 / 4; /* Reserve space up front (flyers are ~3:4) to avoid layout shift */
    height: auto;
    cursor: ${(props) => (props.$clickable ? "pointer" : "default")};
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

const Description = styled(ContentText)`
    white-space: pre-line; /* Preserve line breaks (e.g. bulleted menus) in descriptions */
`;

const MetaText = styled(ContentTextBold)`
    font-size: ${(props) => props.$isMobile ? FontSizes.mobile.buttonSmall : FontSizes.buttonSmall}px;
`;