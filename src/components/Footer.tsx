import Copyright from "./Copyright";
import Disclaimer from "./Disclaimer";
import { StyledRow } from "./Styles/Layouts";
import Socials from "./Socials";
import styled from "@emotion/styled";

function Footer() {
    return (
        <StyledFooter>
            <Socials />
            <Disclaimer />
            <Copyright />
        </StyledFooter>
    );
}

const StyledFooter = styled(StyledRow)`
    padding: 50px 0px;
`;

export default Footer;