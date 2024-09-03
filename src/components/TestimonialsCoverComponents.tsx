import styled from '@emotion/styled';
import TestimonialsCover from '../assets/cover/Testimonials.jpeg';
import { theme } from './Core/Colors';
import { BorderRadius, PaddingOrMargin } from './Core/Layout';
import { ContentTextBold, Title } from './Core/Typography';
import { WhiteLogoIcon } from './Logo';

export default function TestimonialsCoverComponent() {
    return (
        <FixedTopWrapper>
            <CoverImage src={TestimonialsCover} alt="Family of 3 holding hands and jumping together" />
            <BlurContent/>
            <CenterContent>
                <CoverTitle>Success Stories</CoverTitle>
                <CoverSubtitle>Better Sleep | Healthy Gut | More Energy | Confidence</CoverSubtitle>
            </CenterContent>
            <IconWrap>
                <WhiteLogoIcon />
            </IconWrap>
        </FixedTopWrapper>
    );
}

const FixedTopWrapper = styled.div`
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
`;

const CoverImage = styled.img`
    width: 100%;
    transform: rotateY(180deg);
    filter: brightness(70%);
    clip-path: ellipse(95% 97% at 50% 0%);
    display: block;
`;

const CenterContent = styled.div`
    position: absolute;
    top: 350px;
    left: 20%;
    width: 60%;
    border-radius: ${BorderRadius.pill};
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: ${PaddingOrMargin.extraLarge}px;
    align-items: center;
    height: 50%;
`;

const BlurContent = styled(CenterContent)`
    background-color: black;
    padding: ${PaddingOrMargin.medium};
    filter: opacity(30%) blur(40px);
`;

const CoverTitle = styled(Title)`
    color: ${theme.palette.getContrastText('default')};
    text-shadow: 0 0 4px ${theme.palette.text.primary};
`;

const CoverSubtitle = styled(ContentTextBold)`
    color: ${theme.palette.getContrastText('default')};
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${theme.palette.text.primary};
    text-shadow: 0 1px 0px ${theme.palette.text.primary};
    letter-spacing: 0cap.5;
`;

const IconWrap = styled.div`
    left: 45%;
    position: absolute;
    top: 775px;
`;