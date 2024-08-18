import styled from "@emotion/styled";
import { FacebookRounded } from "@mui/icons-material";
import EmailRounded from "../assets/Socials/Email.tif.svg";
import InstagramRounded from "../assets/Socials/Instagram.tif.svg";
import YouTubeRounded from "../assets/Socials/YouTube.tif.svg";
import { darkGreen, offWhite } from "./Core/Colors";
import { BorderRadius, PaddingOrMargin, Row } from "./Core/Layout";
import { DisclaimerText } from "./Core/Typography";
import { ActionButton } from "./CoreButtons";
import Logo from "./Logo";

export default function Footer() {
    const fontSize = 50;
    return (
        <Wrapper>
            <FirstRow>
                <Logo size={150}/>
                <SocialsRow $fontSize={fontSize}>
                    <StyledAnchor href="https://www.facebook.com/WellnessnVitality" target="_blank"><FacebookRounded style={{ width: fontSize, height: fontSize }} /></StyledAnchor>
                    <StyledAnchor href="https://www.youtube.com/@wellnessnvitality" target="_blank"><RoundedIcon src={YouTubeRounded} alt="Instagram" $size={fontSize}/></StyledAnchor>
                    <StyledAnchor href="https://www.instagram.com/wellnessnvitality?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank"><RoundedIcon src={InstagramRounded} alt="Instagram" $size={fontSize}/></StyledAnchor>
                    <StyledAnchor href="mailto:wellnessvitality20@gmail.com" target="_blank"><RoundedIcon src={EmailRounded} alt="Instagram" $size={fontSize}/></StyledAnchor>
                    <ActionButton $variant="default">Schedule a FREE Discovery Call</ActionButton>
                </SocialsRow>
            </FirstRow>
            <Divider/>
            <DisclaimerText>
                Disclaimer: A health coach’s specialty is behavioral change, and is not intended to substitute the advice, treatment and/or diagnosis of your doctor or licensed medical professional. Health coaches do not diagnose conditions, prescribe medications or recommend higher or lower doses of your current medications. Consult your Health Care Provider.
            </DisclaimerText>
            <DisclaimerText>
               Copyright © 2024 Wellness n Vitality. All Rights Reserved. Established 2020.
            </DisclaimerText>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    /* position: relative; */
    /* top: -5vh; */
    /* bottom: 0; */
    height: 40vh;
    background: ${offWhite};
    border-top-right-radius: ${BorderRadius.button}px;
    border-top-left-radius: ${BorderRadius.button}px;
    padding: ${PaddingOrMargin.extraLarge}px ${PaddingOrMargin.large * 3}px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const FirstRow = styled(Row)`
    justify-content: space-between;
`;

const SocialsRow = styled(Row)<{$fontSize: number}>`
    height: ${(props) => props.$fontSize}px;
    justify-content: space-evenly;
    gap: 15px;
    align-self: center;
`;

const StyledAnchor = styled.a`
    color: #33691e;
`;

const RoundedIcon = styled.img<{$size: number}>`
    width: ${(props) => props.$size};
    height: ${(props) => props.$size};
`;

const Divider = styled.div`
    height: 1px;
    background-color: ${darkGreen};
    width: 100%;
`;