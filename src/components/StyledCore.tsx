import styled from "@emotion/styled";
import { theme } from "./Constants/Colors";
import { FontSizes, Weights } from "./Constants/Typography";
import { BorderRadius } from "./Styles/Layout";


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