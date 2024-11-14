import styled from "@emotion/styled";
import { theme } from "./Colors";

export const FontSizes = {
    button: 16,
    buttonSmall: 14,
    coverTitle: 48,
    heading: 24,
    headingLarge: 40,
    largeContent: 20,
    default: 18,
    mobile: {
        button: 12,
        buttonSmall: 10,
        coverTitle: 20,
        heading: 20,
        headingLarge: 18,
        largeContent: 16,
        default: 12,
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