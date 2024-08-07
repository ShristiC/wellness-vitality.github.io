import styled from '@emotion/styled';
import HomeCoverImg from '../assets/cover/Family Holding Hands (HOME LANDING).webp';
import { theme } from './Constants/Colors';
import { TypographyConstants } from './Constants/Typography';
import { ActionButton } from './StyledCore';
import { LogoIcon } from './Logo';

export default function CoverImage() {
    return (
        <>
            <StyledCover src={HomeCoverImg} alt="Family of 3 holding hands and jumping together" />
            <BlurContent />
            <ContentWrap>
                <Title>Let's take charge of<OutlineTitle as="span"> OUR </OutlineTitle> lives</Title>
                <Subtitle>1-1 Functional Nutrition Coaching</Subtitle>
                <ActionButton $variant='paper'>SCHEDULE A FREE DISCOVERY CALL</ActionButton>
            </ContentWrap>
            <IconWrap>
                <LogoIcon />
            </IconWrap>
        </>
    );
}

const StyledCover = styled.img`
    width: 100%;
    z-index: -210;
    transform: rotateY(180deg);
    position: absolute;
    top: 0;
    left: 0;
    filter: brightness(70%);
    clip-path: ellipse(95% 97% at 50% 0%);
`;

const BlurContent = styled.div`
    position: absolute;
    top: 275px;
    left: 300px;
    background-color: black;
    border-radius: 190px;
    width: 60%;
    padding: 15px;
    filter: opacity(20%) blur(40px);
    height: 450px;
    z-index: -100px;
`;

const ContentWrap = styled.div`
    border-radius: 190px;
    left: 20%;
    right: 20%;
    z-index: 100px;
    text-align: center;
    position: absolute;
    top: 275px;
    font-family: 'inter';
    justify-self: center;
`;

const Title = styled.h1`
    color: ${theme.palette.getContrastText('default')};
    font-size: ${TypographyConstants.coverTitle}px;
    font-weight: 600;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    text-shadow: 0 0 4px black;
    overflow-wrap: normal;
    margin: 15px;
`;

const OutlineTitle = styled(Title)`
    -webkit-text-stroke-width: 4px;
    -webkit-text-stroke-color: white;
    color: transparent;
    text-shadow: none;
    font-weight: 900;
`;

const Subtitle = styled.h2`
    color: ${theme.palette.getContrastText('default')};
    font-size: ${TypographyConstants.default}px;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    font-weight: 900;
    margin: 40px;
`;

const IconWrap = styled.div`
    z-index: 100px;
    left: 45%;
    position: absolute;
    top: 775px;
    font-family: 'inter';
`;