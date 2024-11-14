import styled from "@emotion/styled";
import { theme } from "./Core/Colors";
import { BorderRadius } from "./Core/Layout";
import { ContentText, FontSizes } from "./Core/Typography";
import useWindowDimensions from "../hooks/useWindowDimensions";

interface IPillarProps {
    text: string;
    icon: string;
    alt: string;
}

export default function Pillar ({text, icon, alt}: IPillarProps) {
    const [_, isMobile] = useWindowDimensions();
    return (
        <Wrapper $isMobile={isMobile}>
            <OuterPillarRow $isMobile={isMobile}/>
                <InnerPillarRow $isMobile={isMobile}/>
                    <InnerContent $isMobile={isMobile}>
                        <img src={icon} height={isMobile ? "30" : "50"} alt={alt} />
                        <SmallContentText $isMobile={isMobile}>{text}</SmallContentText>
                    </InnerContent>
                <InnerPillarRow $isMobile={isMobile}/>
            <OuterPillarRow $isMobile={isMobile}/>
        </Wrapper>
    );
}

const Wrapper = styled.div<{$isMobile: boolean}>`
    max-height: ${(props) => props.$isMobile ? 150 : 250}px;
    max-width: ${(props) => props.$isMobile ? 75 : 200}px;

    /* Flexbox for centering */
    display: flex;
    flex-direction: column;
    align-items: center; /* Horizontal centering */
    justify-content: center; /* Vertical centering */
    margin: 5px;
`;

const OuterPillarRow = styled.div<{$isMobile: boolean}>`
    width: ${(props) => props.$isMobile ? 90 : 170}px;
    height: ${(props) => props.$isMobile ? 10 : 24}px;
    border: 3px solid ${theme.palette.divider};
    border-radius: ${BorderRadius.pill}px;
`;

const InnerPillarRow = styled(OuterPillarRow)`
    height: 12px;
    width: ${(props) => props.$isMobile ? 80 : 150}px;
    /* margin: 0px 10px; */
`;

const InnerContent = styled.div<{$isMobile: boolean}>`
    width: ${(props) => props.$isMobile ? 70 : 140}px;
    height: ${(props) => props.$isMobile ? 110 : 160}px;
    border: 3px solid ${theme.palette.divider};
    font-size: ${FontSizes.coverTitle}px;
    color: ${theme.palette.text.primary};
    padding: ${(props) => props.$isMobile ? '2px 2px' : '10px 2px'};
`;

const SmallContentText = styled (ContentText)`
    font-size: ${(props) => props.$isMobile ? FontSizes.mobile.button : FontSizes.button}px;
`;