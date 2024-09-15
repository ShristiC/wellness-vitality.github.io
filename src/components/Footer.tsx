import styled from "@emotion/styled";
import { FacebookRounded } from "@mui/icons-material";
import EmailRounded from "../assets/Socials/Email.tif.svg";
import InstagramRounded from "../assets/Socials/Instagram.tif.svg";
import YouTubeRounded from "../assets/Socials/YouTube.tif.svg";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { darkGreen, offWhite } from "./Core/Colors";
import { BorderRadius, PaddingOrMargin, Row } from "./Core/Layout";
import { DisclaimerText } from "./Core/Typography";
import { ActionButton } from "./CoreButtons";
import Logo from "./Logo";

export default function Footer() {
    const [windowDimensions, isMobile, isMedium] = useWindowDimensions();
    const fontSize = isMobile ? 32 : 50;
    const logoSize = isMobile ? 80 : 150;
    const largeWidth = windowDimensions.width > 950;

    const openBookingLink = (e: React.MouseEvent) => {
        e.preventDefault();
        window.open("https://my.practicebetter.io/#/5c6a01b7627db308702273dc/bookings?step=services", "_blank", "noreferrer");
    };

    const SocialIcons = () => (
        <SocialsRow $fontSize={fontSize}>
            <StyledAnchor href="https://www.facebook.com/WellnessnVitality" title="Facebook">
                <FacebookRounded style={{ width: fontSize, height: fontSize }} />
            </StyledAnchor>
            <StyledAnchor href="https://www.youtube.com/@wellnessnvitality">
                <RoundedIcon src={YouTubeRounded} alt="YouTube" $size={fontSize} />
            </StyledAnchor>
            <StyledAnchor href="https://www.instagram.com/wellnessnvitality?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                <RoundedIcon src={InstagramRounded} alt="Instagram" $size={fontSize} />
            </StyledAnchor>
            <StyledAnchor href="mailto:wellnessvitality20@gmail.com">
                <RoundedIcon src={EmailRounded} alt="Email" $size={fontSize} />
            </StyledAnchor>
            {largeWidth && <ActionButton $variant="default" $isMobile={isMobile} onClick={openBookingLink}>Schedule a FREE Discovery Call</ActionButton>}
        </SocialsRow>
    );

    return (
        <Wrapper $isMobile={isMobile} $isMedium={isMedium}>
            <FirstRow $isMobile={isMobile}>
                <Logo size={logoSize} />
                {!isMobile && <SocialIcons />}
                {!isMobile && !largeWidth && <ActionButton $variant="default" $isMobile={isMobile} onClick={openBookingLink}>Schedule a FREE Discovery Call</ActionButton>}
            </FirstRow>
            {isMobile && (
                <MobileFirstRow>
                    <SocialIcons />
                    <ActionButton $variant="default" $isMobile={isMobile} onClick={openBookingLink}>Schedule a FREE Discovery Call</ActionButton>
                </MobileFirstRow>
            )}
            <Divider />
            <DisclaimerText $isMobile={isMobile}>
            Disclaimer: A health coach’s specialty is behavioral change, and is not intended to substitute the advice, treatment and/or diagnosis of your doctor or licensed medical professional. Health coaches do not diagnose conditions, prescribe medications or recommend higher or lower doses of your current medications. Consult your Health Care Provider.
            </DisclaimerText>
            <DisclaimerText $isMobile={isMobile}>
               Copyright © 2024 Wellness n Vitality. All Rights Reserved. Established 2020.
            </DisclaimerText>
        </Wrapper>
    );
}

const Wrapper = styled.div<{$isMobile: boolean, $isMedium: boolean}>`
    height: ${(props) => props.$isMedium ? 60 : 40}vh;
    background: ${offWhite};
    border-top-right-radius: ${BorderRadius.button}px;
    border-top-left-radius: ${BorderRadius.button}px;
    padding: ${PaddingOrMargin.extraLarge}px ${PaddingOrMargin.large * 3}px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const FirstRow = styled(Row)<{$isMobile: boolean}>`
    justify-content: space-between;
    flex-direction: ${(props) => props.$isMobile ? "column" : "row"};
    align-items: center;
    gap: 20px;
`;

const MobileFirstRow = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
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
    width: ${(props) => props.$size}px;
    height: ${(props) => props.$size}px;
`;

const Divider = styled.div`
    height: 1px;
    background-color: ${darkGreen};
    width: 100%;
    margin: 15px 0px;
`;
