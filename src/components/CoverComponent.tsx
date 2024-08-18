import styled from '@emotion/styled';
import HomeCoverImg from '../assets/cover/Family Holding Hands Landing.webp';
import { theme } from './Core/Colors';
import { ContentTextBold, Title, Weights } from './Core/Typography';
import { WhiteLogoIcon } from './Logo';
import { ActionButton } from './CoreButtons';
import { BorderRadius, PaddingOrMargin } from './Core/Layout';

export default function CoverComponent() {
    return (
        <FixedTopWrapper>
            <CoverImage src={HomeCoverImg} alt="Family of 3 holding hands and jumping together" />
            <BlurContent/>
            <CenterContent>
                <div>
                    <CoverTitle>Let's take charge</CoverTitle>
                    <CoverTitle>of<OutlineTitle as="span"> OUR </OutlineTitle> lives</CoverTitle>
                </div>
                <CoverSubtitle>1-1 Functional Nutrition Coaching</CoverSubtitle>
                <ActionButton $variant='paper'>Schedule a FREE Discovery Call</ActionButton>
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
    top: 300px;
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
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${theme.palette.text.primary};
    text-shadow: 0 0 4px ${theme.palette.text.primary};
`;

const OutlineTitle = styled(Title)`
    -webkit-text-stroke-width: 4px;
    -webkit-text-stroke-color: ${theme.palette.text.secondary};
    color: transparent;
    text-shadow: none;
    font-weight: ${Weights.bold};
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