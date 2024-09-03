import styled from "@emotion/styled";
import { EmailOutlined, FacebookOutlined, Instagram, YouTube } from "@mui/icons-material";
import Logo from "../components/Logo";

export default function FillerPage() {
    const fontSize = 50;
    return (
        <CenterContent>
            <Logo />
            <XLargeHeading>New Website Coming Soon...</XLargeHeading>
            <StyledButton href="https://my.practicebetter.io/#/5c6a01b7627db308702273dc/bookings?step=services" target="_blank">Schedule a FREE discovery call now!</StyledButton>
            <ContainedSocials>
                <StyledRow>
                    <StyledAnchor href="https://www.facebook.com/WellnessnVitality" target="_blank"><FacebookOutlined style={{ width: fontSize, height: fontSize }} /></StyledAnchor>
                    <StyledAnchor href="https://www.instagram.com/wellnessnvitality?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank"><Instagram style={{ width: fontSize, height: fontSize }} /></StyledAnchor>
                    <StyledAnchor href="https://www.youtube.com/@wellnessnvitality" target="_blank"><YouTube style={{ width: fontSize, height: fontSize }} /></StyledAnchor>
                    <StyledAnchor href="mailto:wellnessvitality20@gmail.com" target="_blank"><EmailOutlined style={{ width: fontSize, height: fontSize }} /></StyledAnchor>
                </StyledRow>
            </ContainedSocials>

        </CenterContent>
    );
}

const CenterContent = styled.div`
    width: 100%;
    height: 100vh;
    text-align: center;
    align-content: center;
`;

const ContainedSocials = styled.div`
    justify-content: center;
    display: flex;
    margin: 30px;
`;

const XLargeHeading = styled.h1`
    font-size: 48px;
`;

const StyledAnchor = styled.a`
    color: #33691e;
`;

const StyledButton = styled.a`
    color: #ffffff;
    background-color: #33691e;
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    margin: 15px;
    font-size: 1em;
    font-weight: 500;
    text-decoration: none;
`;

export const StyledRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
`;