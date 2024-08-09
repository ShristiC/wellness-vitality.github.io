import styled from "@emotion/styled";
import { theme } from "./Colors";

export const FontSizes = {
    button: 20,
    buttonSmall: 16,
    coverTitle: 90,
    heading: 40,
    default: 24,
}

export const Weights = {
    extraLight: 400,
    light: 500,
    regular: 600,
    medium: 700,
    bold: 900,
}

export const Title = styled.h1`
    font-size: ${FontSizes.coverTitle}px;
    font-weight: ${Weights.regular};
`;

export const HeadingText = styled.h2`
    font-size: ${FontSizes.heading}px;
    font-weight: ${Weights.medium};
    color: ${theme.palette.text.primary};
`;

export const ContentTextBold = styled.p`
    font-size: ${FontSizes.default}px;
    font-weight: ${Weights.medium};
`;

export const ContentText = styled(ContentTextBold)`
    font-weight: ${Weights.extraLight};
`;