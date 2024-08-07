import styled from "@emotion/styled";
import { theme } from "./Constants/Colors";
import { TypographyConstants } from "./Constants/Typography";


export const ActionButton = styled.button<{ $variant: 'default' | 'paper' }>`
    border-radius: 26px;
    background-color: ${(props) => theme.palette.background[props.$variant]};
    font-size: ${TypographyConstants.buttonSmall}px;
    border: 0px solid transparent;
    padding: 15px 30px;
    color: ${(props) => theme.palette.getContrastText(props.$variant)};
    font-weight: ${(props) => props.$variant == 'default' ? 700 : 500};
`;

export const CoreButton = styled.button`
    font-size: ${TypographyConstants.button}px;
    border: 0px solid transparent;
    background-color: transparent;
`;