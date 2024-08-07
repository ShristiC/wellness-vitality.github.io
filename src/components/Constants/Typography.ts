import styled from "@emotion/styled";

export const FontSizes = {
    button: 20,
    buttonSmall: 16,
    coverTitle: 90,
    default: 24,
}

export const Weights = {
    light: 500,
    regular: 600,
    medium: 700,
    bold: 900,
}

export const Title = styled.h1`
    font-size: ${FontSizes.coverTitle}px;
    font-weight: ${Weights.regular};
`;

export const Subtitle = styled.h2`
    font-size: ${FontSizes.default}px;
    font-weight: ${Weights.medium};
`;