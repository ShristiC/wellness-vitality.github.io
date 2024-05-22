import Copyright from "./Copyright";
import Disclaimer from "./Disclaimer";
import { StyledRow } from "./Layouts";
import { LogoIcon } from "./Logo";
import LogoSubtitle from "./LogoSubtitle";
import MenuItem from "./MenuItem";
import Socials from "./Socials";

function Footer() {
    return (
        <div>
            <StyledRow>
                <div>
                    <LogoIcon />
                    <LogoSubtitle variant='footer' />
                </div>
                <Socials />
                <MenuItem variant='vertical' />
            </StyledRow>
            <StyledRow>
                <Disclaimer />
                <Copyright />
            </StyledRow>

        </div>

    );
}

export default Footer;