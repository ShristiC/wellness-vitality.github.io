import styled from '@emotion/styled';
import TestimonialsCover from '../assets/cover/Testimonials.jpeg';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { theme } from './Core/Colors';
import { PaddingOrMargin } from './Core/Layout';
import { ContentTextBold, Title } from './Core/Typography';
import { WhiteLogoIcon } from './Logo';

export default function TestimonialsCoverComponent() {
    const [_, isMobile] = useWindowDimensions();
    return (
        <FixedTopWrapper $isMobile={isMobile}>
            <CoverImage src={TestimonialsCover} alt="Family of 3 holding hands and jumping together" />
            <BlurContent/>
            <CenterContent>
                <CoverTitle $isMobile={isMobile}>Success Stories</CoverTitle>
                <CoverSubtitle $isMobile={isMobile}>Better Sleep | Healthy Gut | More Energy | Confidence</CoverSubtitle>
            </CenterContent>
            <IconWrapper $isMobile={isMobile}>
                <WhiteLogoIcon />
            </IconWrapper>
        </FixedTopWrapper>
    );
}

const FixedTopWrapper = styled.div<{$isMobile: boolean}>`
    width: 100%;
    height: ${(props) => props.$isMobile ? '100vh' : '120vh'};
    top: 100px;
    left: 0;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CoverImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: rotateY(180deg);
    filter: brightness(70%);
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    clip-path: ellipse(95% 97% at 50% 0%);
`;


const CenterContent = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${PaddingOrMargin.medium}px;
`;

const BlurContent = styled.div`
    background-color: black;
    filter: opacity(30%) blur(40px);
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
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
    text-align: center;
`;

const IconWrapper = styled.div<{$isMobile: boolean}>`
    position: absolute;
    bottom: ${(props) => props.$isMobile ? '5%' : '8%'};
    left: 50%;
    transform: translateX(-50%);
`;