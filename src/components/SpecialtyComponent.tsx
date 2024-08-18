import styled from "@emotion/styled";
import { theme } from "./Core/Colors";
import { ContentText } from "./Core/Typography";
import { BorderRadius } from "./Core/Layout";

interface ISpecialtyContentProps {
    text: string;
    imageUrl: string;
    imageAlt: string;
}

export default function SpecialtyComponent({text, imageUrl, imageAlt}: ISpecialtyContentProps) {
    return (
        <Wrapper>
            <ImageWrapper src={imageUrl} alt={imageAlt}>
            </ImageWrapper>
            <StyledContentText>{text}</StyledContentText>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    background-color: ${theme.palette.background.default};
    width: 230px;
    height: 290px;
    border-radius: ${BorderRadius.button}px;
    padding: 15px;
    align-items: center;
`;

const StyledContentText = styled(ContentText)`
    margin-top: -25px;
`;

const ImageWrapper = styled.img`
    background-color: #cccccc;
    width: 200px;
    height: 200px;
    margin: 0px 15px;
    position: relative;
    top: -50px;
    border: 4px solid ${theme.palette.background.default};
    border-radius: ${BorderRadius.button}px;
    object-fit: cover;
`;