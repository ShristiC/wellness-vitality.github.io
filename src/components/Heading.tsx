import { StyledRow } from "./Layouts";
import Logo from "./Logo";
import LogoSubtitle from "./LogoSubtitle";
import MenuItem from "./MenuItem";

function Heading() {
    return (
        <StyledRow>
            <div>
                <Logo />
                <LogoSubtitle variant='heading' />
            </div>
            <MenuItem variant='horizontal'/>
        </StyledRow>
    );
}

export default Heading;