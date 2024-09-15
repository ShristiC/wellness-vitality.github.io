import styled from "@emotion/styled";
import { theme } from "./Core/Colors";
import { ContentText } from "./Core/Typography";
import { BorderRadius } from "./Core/Layout";
import useWindowDimensions from "../hooks/useWindowDimensions";

interface ISpecialtyContentProps {
    text: string;
    imageUrl: string;
    imageAlt: string;
}

export default function SpecialtyComponent({text, imageUrl, imageAlt}: ISpecialtyContentProps) {
    const [_, isMobile] = useWindowDimensions();
    return (
        <Wrapper $isMobile={isMobile}>
            <ImageWrapper src={imageUrl} alt={imageAlt} $isMobile={isMobile}/>
            <StyledContentText $isMobile={isMobile}>{text}</StyledContentText>
        </Wrapper>
    );
}

const Wrapper = styled.div<{$isMobile: boolean}>`
    background-color: ${theme.palette.background.default};
    width: ${(props) => props.$isMobile ? 150 : 230}px;
    height: ${(props) => props.$isMobile ? 180 : 290}px;
    border-radius: ${BorderRadius.button}px;
    padding: ${(props) => props.$isMobile ? 5 : 15}px;
    align-items: center;
    margin: ${(props) => props.$isMobile ? '30px 0px' : '30px 5px'};
`;

const StyledContentText = styled(ContentText)`
    margin-top: ${(props) => props.$isMobile ? -40 : -25}px;
`;

const ImageWrapper = styled.img<{$isMobile: boolean}>`
    background-color: #cccccc;
    width: ${(props) => props.$isMobile ? 130 : 200}px;
    height: ${(props) => props.$isMobile ? 130 :200}px;
    margin: 0px ${(props) => props.$isMobile ? 5 : 15}px;
    position: relative;
    top: -50px;
    border: 4px solid ${theme.palette.background.default};
    border-radius: ${BorderRadius.button}px;
    object-fit: cover;
`;