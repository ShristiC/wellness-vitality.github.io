import styled from "@emotion/styled";
import { theme } from "./Colors";

export const FontSizes = {
    button: 20,
    buttonSmall: 16,
    coverTitle: 90,
    heading: 40,
    headingLarge: 60,
    largeContent: 30,
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
    font-weight: ${Weights.light};
`;

export const HeadingText = styled.h2<{$color: 'primary' | 'secondary'}>`
    font-size: ${FontSizes.heading}px;
    font-weight: ${Weights.medium};
    color: ${(props) => theme.palette.text[props.$color]};
`;

export const HeadingTextLight = styled.h2<{$color: 'primary' | 'secondary'}>`
    font-size: ${FontSizes.headingLarge}px;
    font-weight: ${Weights.light};
    color: ${(props) => theme.palette.text[props.$color]};
`;

export const ContentTextBold = styled.p`
    font-size: ${FontSizes.default}px;
    font-weight: ${Weights.medium};
`;

export const ContentText = styled(ContentTextBold)`
    font-weight: ${Weights.extraLight};
`;

export const DisclaimerText = styled(ContentTextBold)`
    font-size: ${FontSizes.buttonSmall}px;
    font-weight: ${Weights.extraLight};
`;