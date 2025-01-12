import styled from "@emotion/styled";
import { darkGreen, theme } from "./Core/Colors";
import { BorderRadius } from "./Core/Layout";
import { FontSizes, Weights } from "./Core/Typography";


export const BaseButton = styled.button`
    border: 0px solid transparent;
`;

export const ActionButton = styled(BaseButton) <{ $variant: 'default' | 'paper', $isMobile: boolean }>`
    border-radius: ${BorderRadius.button}px;
    background-color: ${(props) => theme.palette.background[props.$variant]};
    font-size: ${(props) => props.$isMobile ? `${FontSizes.mobile.buttonSmall}px` : `${FontSizes.buttonSmall}px`};
    padding: ${(props) => props.$isMobile ? '10px 10px' : '15px 30px'};
    color: ${(props) => theme.palette.getContrastText(props.$variant)};
    font-weight: ${(props) => props.$variant == 'default' ? Weights.regular : Weights.light};
    width: ${(props) => props.$isMobile ? '100%': 'fit-content'};
    :hover {
        background-color: ${(props) => theme.palette.background[props.$variant == 'default'? 'paper' : 'default']};
        color: ${(props) => theme.palette.getContrastText(props.$variant == 'default' ? 'paper' : 'default')};
        border: 1px solid ${(props) => theme.palette.background[props.$variant]};
    }
`;

export const CoreButton = styled(BaseButton) <{$isMobile: boolean}>`
    font-size: ${(props) => props.$isMobile ? `${FontSizes.mobile.button}px` : `${FontSizes.button}px`};
    background-color: transparent;
    :hover {
        text-decoration: underline;
    }
`;

type linkVariant = 'default' | 'testimonials';

const linkColors: {[key in linkVariant]: string} = {
    default: theme.palette.text.secondary,
    testimonials: darkGreen
}

export const HyperlinkButton = styled(BaseButton)<{$variant: 'default' | 'testimonials'}>`
    font-size: ${FontSizes.default}px;
    text-decoration: underline;
    background: transparent;
    color: ${(props) => linkColors[props.$variant]};
    :hover {
        text-decoration: none;
    }
`;

export const StyledLink = styled.a`
    text-decoration: underline;
    color: ${theme.palette.text.primary};
    :hover {
        text-decoration: none;
    }
    :visited {
        color: ${theme.palette.text.primary};
    }
`;