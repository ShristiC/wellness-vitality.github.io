import styled from "@emotion/styled";
import { theme } from "./Colors";

export const FontSizes = {
    button: 18,
    buttonSmall: 16,
    coverTitle: 52,
    heading: 24,
    headingMedium: 30,
    headingLarge: 42,
    largeContent: 16,
    default: 18,
    mobile: {
        button: 12,
        buttonSmall: 10,
        coverTitle: 20,
        heading: 20,
        headingMedium: 22,
        headingLarge: 24,
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
    letter-spacing: 6;
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

export const CardHeading = styled.h3<{$color: 'primary' | 'secondary', $isMobile: boolean}>`
    font-size: ${(props) => props.$isMobile ? FontSizes.mobile.headingMedium : FontSizes.headingMedium}px;
    font-weight: ${Weights.light};
    color: ${(props) => theme.palette.text[props.$color]};
`;

export const ContentTextBold = styled.p<{$isMobile: boolean}>`
    font-size: ${(props) => props.$isMobile ? `${FontSizes.mobile.default}px` : `${FontSizes.default}px`};
    font-weight: ${Weights.light};
`;

export const ContentText = styled(ContentTextBold)`
    font-weight: ${Weights.extraLight};
`;

export const DisclaimerText = styled(ContentTextBold)`
    font-size: ${(props) => props.$isMobile ? FontSizes.mobile.buttonSmall : FontSizes.buttonSmall}px;
    font-weight: ${Weights.light};
`;