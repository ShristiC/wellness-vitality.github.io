import styled from "@emotion/styled";
import { theme } from "./Colors";

export const FontSizes = {
    button: 18,
    buttonSmall: 16,
    coverTitle: 60,
    heading: 36,
    headingLarge: 56,
    largeContent: 28,
    default: 22,
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
    font-weight: ${Weights.regular};
    color: ${(props) => theme.palette.text[props.$color]};
`;

export const HeadingTextLight = styled.h2<{$color: 'primary' | 'secondary', $isMobile: boolean}>`
    font-size: ${(props) => props.$isMobile ? FontSizes.mobile.headingLarge : FontSizes.headingLarge}px;
    font-weight: ${Weights.light};
    color: ${(props) => theme.palette.text[props.$color]};
`;

export const ContentTextBold = styled.p<{$isMobile: boolean}>`
    font-size: ${(props) => props.$isMobile ? `${FontSizes.mobile.default}px` : `${FontSizes.default}px`};
    font-weight: ${Weights.regular};
`;

export const ContentText = styled(ContentTextBold)`
    font-weight: ${Weights.extraLight};
`;

export const DisclaimerText = styled(ContentTextBold)`
    font-size: ${(props) => props.$isMobile ? FontSizes.mobile.buttonSmall : FontSizes.buttonSmall}px;
    font-weight: ${Weights.light};
`;