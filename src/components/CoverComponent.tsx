import styled from '@emotion/styled';
import HomeCoverImg from '../assets/cover/Family Holding Hands Landing.webp';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { theme } from './Core/Colors';
import { PaddingOrMargin } from './Core/Layout';
import { ContentTextBold, Title, Weights } from './Core/Typography';
import { ActionButton } from './CoreButtons';
import { WhiteLogoIcon } from './Logo';

export default function CoverComponent() {
    const [windowDimensions, isMobile] = useWindowDimensions();
    const isCompact = isMobile && windowDimensions.width <= 450;
    return (
        <FixedTopWrapper $isMobile={isCompact}>
            <CoverImage src={HomeCoverImg} alt="Family of 3 holding hands and jumping together" />
            <BlurContent />
            <CenterContent>
                <InnerContent $isMobile={isCompact}>
                    <div>
                        <CoverTitle $isMobile={isCompact}>Let's take charge</CoverTitle>
                        <CoverTitle $isMobile={isCompact}>of<OutlineTitle as="span" $isMobile={isCompact}> OUR </OutlineTitle> lives</CoverTitle>
                    </div>
                    <CoverSubtitle $isMobile={isCompact}>1-1 Functional Nutrition Coaching</CoverSubtitle>
                    <ActionButton $variant='paper' $isMobile={isCompact} style={{marginBottom: `${isMobile ? '5px' : '0px'}`, zIndex: '1'}} onClick={(e) => {
                        e.preventDefault();
                        window.open("https://my.practicebetter.io/#/5c6a01b7627db308702273dc/bookings?step=services", "_blank", "noreferrer");
                    }}>Schedule a FREE Discovery Call</ActionButton>
                </InnerContent>
                <IconWrapper $isMobile={isCompact}>
                    <WhiteLogoIcon size={isCompact ? 50 : 100} />
                </IconWrapper>
            </CenterContent>
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

const InnerContent = styled.div<{$isMobile: boolean}>`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${(props) => props.$isMobile ? PaddingOrMargin.medium : PaddingOrMargin.extraLarge}px;
`;

const BlurContent = styled.div`
    background-color: black;
    filter: opacity(30%) blur(40px);
    position: absolute;
    width: 100%;
    height: 50%;
    z-index: -1;
`;

const CoverTitle = styled(Title)`
    color: ${theme.palette.getContrastText('default')};
    text-shadow: 0 0 4px ${theme.palette.text.primary};
`;

const OutlineTitle = styled(Title)`
    -webkit-text-stroke-width: ${(props) => props.$isMobile ? '2px' : '4px'};
    -webkit-text-stroke-color: ${theme.palette.text.secondary};
    color: transparent;
    text-shadow: none;
    font-weight: ${Weights.bold};
`;

const CoverSubtitle = styled(ContentTextBold)`
    color: ${theme.palette.getContrastText('default')};
`;

const IconWrapper = styled.div<{$isMobile: boolean}>`
    position: absolute;
    bottom: ${(props) => props.$isMobile ? '5%' : '15%'};
    left: 50%;
    transform: translateX(-50%);
`;

