import styled from "@emotion/styled";
import { darkGreen, theme } from "./Core/Colors";
import { BorderRadius } from "./Core/Layout";
import { FontSizes, Weights } from "./Core/Typography";


export const BaseButton = styled.button`
    border: 0px solid transparent;
`;

export const ActionButton = styled(BaseButton) <{ $variant: 'default' | 'paper' }>`
    border-radius: ${BorderRadius.button}px;
    background-color: ${(props) => theme.palette.background[props.$variant]};
    font-size: ${FontSizes.buttonSmall}px;
    padding: 15px 30px;
    color: ${(props) => theme.palette.getContrastText(props.$variant)};
    font-weight: ${(props) => props.$variant == 'default' ? Weights.medium : Weights.light};
    width: fit-content;
`;

export const CoreButton = styled(BaseButton)`
    font-size: ${FontSizes.button}px;
    background-color: transparent;
`;

type linkVariant = 'default' | 'testimonials';

const linkColors: {[key in linkVariant]: string} = {
    default: theme.palette.text.secondary,
    testimonials: darkGreen
}

export const HyperlinkButton = styled(BaseButton)<{$variant: 'default' | 'testimonials'}>`
    font-size: ${FontSizes.button}px;
    text-decoration: underline;
    background: transparent;
    color: ${(props) => linkColors[props.$variant]};
`;