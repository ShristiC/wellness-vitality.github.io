import styled from '@emotion/styled';
import TestimonialsCover from '../assets/cover/Testimonials.jpeg';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { theme } from './Core/Colors';
import { PaddingOrMargin } from './Core/Layout';
import { ContentTextBold, Title } from './Core/Typography';
import { WhiteLogoIcon } from './Logo';
import useCoverComponentDimensions from '../hooks/useCoverComponentDimensions';
import { FixedTopWrapper, IconWrapper } from './CoverComponent';

export default function TestimonialsCoverComponent() {
    const [_, isMobile] = useWindowDimensions();
    const [coverHeight] = useCoverComponentDimensions();

    return (
        <FixedTopWrapper $isMobile={isMobile} $coverHeight={coverHeight}>
            <CoverImage src={TestimonialsCover} alt="Family of 3 holding hands and jumping together" />
            <BlurContent/>
            <CenterContent>
                <CoverTitle $isMobile={isMobile}>Success Stories</CoverTitle>
                <CoverSubtitle $isMobile={isMobile}>Better Sleep | Healthy Gut | More Energy | Confidence</CoverSubtitle>
            </CenterContent>
            <IconWrapper $isMobile={isMobile}>
                <WhiteLogoIcon size={isMobile ? 50 : 100} />
            </IconWrapper>
        </FixedTopWrapper>
    );
}

const CoverImage = styled.img`
    width: 100%;
    height: 90%;
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
    height: 60%;
    z-index: -1;
`;

const CoverTitle = styled(Title)`
    color: ${theme.palette.getContrastText('default')};
    text-shadow: 0 0 4px ${theme.palette.text.primary};
`;

const CoverSubtitle = styled(ContentTextBold)`
    color: ${theme.palette.getContrastText('default')};
    text-align: center;
`;