import styled from "@emotion/styled";
import { theme } from "./Colors";

export const FontSizes = {
    button: 20,
    buttonSmall: 16,
    coverTitle: 80,
    heading: 40,
    headingLarge: 60,
    largeContent: 30,
    default: 24,
    mobile: {
        button: 14,
        buttonSmall: 12,
        coverTitle: 35,
        heading: 26,
        headingLarge: 40,
        largeContent: 30,
        default: 16,
    }
}

export const Weights = {
    extraLight: 400,
    light: 500,
    regular: 600,
    medium: 700,
    bold: 900,
}

export const Title = styled.h1<{$isMobile: boolean}>`
    font-size: ${(props) => props.$isMobile ? `${FontSizes.mobile.coverTitle}px` : `${FontSizes.coverTitle}px`};
    font-weight: ${Weights.light};
`;

export const HeadingText = styled.h2<{$color: 'primary' | 'secondary', $isMobile: boolean}>`
    font-size: ${(props) =>  props.$isMobile ? FontSizes.mobile.heading : FontSizes.heading}px;
    font-weight: ${Weights.medium};
    color: ${(props) => theme.palette.text[props.$color]};
`;

export const HeadingTextLight = styled.h2<{$color: 'primary' | 'secondary', $isMobile: boolean}>`
    font-size: ${(props) => props.$isMobile ? FontSizes.mobile.headingLarge : FontSizes.headingLarge}px;
    font-weight: ${Weights.light};
    color: ${(props) => theme.palette.text[props.$color]};
`;

export const ContentTextBold = styled.p<{$isMobile: boolean}>`
    font-size: ${(props) => props.$isMobile ? `${FontSizes.mobile.default}px` : `${FontSizes.default}px`};
    font-weight: ${Weights.medium};
`;

export const ContentText = styled(ContentTextBold)`
    font-weight: ${Weights.extraLight};
`;

export const DisclaimerText = styled(ContentTextBold)`
    font-size: ${(props) => props.$isMobile ? FontSizes.mobile.buttonSmall : FontSizes.buttonSmall}px;
    font-weight: ${Weights.extraLight};
`;