import styled from "@emotion/styled";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { theme } from "./Core/Colors";
import { Row, TopLayer } from "./Core/Layout";
import { BaseButton } from "./CoreButtons";
import Logo from "./Logo";
import NavigationBar from "./NavigationBar";

export default function Heading() {
    const [windowDimensions, isMobile] = useWindowDimensions();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // The full nav row doesn't fit on narrow tablets, so collapse it there too
    const useMenu = isMobile || windowDimensions.width < 900;

    // Close the menu if the screen grows back to desktop size
    useEffect(() => {
        if (!useMenu) setIsMenuOpen(false);
    }, [useMenu]);

    return useMenu ? (
        <HeadingWrap>
            <Logo size={50} margin="5px"/>
            <MenuButton aria-label={isMenuOpen ? "Close menu" : "Open menu"} aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <CloseIcon fontSize="large"/> : <MenuIcon fontSize="large"/>}
            </MenuButton>
            {isMenuOpen &&
                <MobileMenu>
                    <NavigationBar vertical onNavigate={() => setIsMenuOpen(false)}/>
                </MobileMenu>
            }
        </HeadingWrap>
    ) : (
        <HeadingRow>
            <Logo size={90} margin="10px"/>
            <NavigationWrap>
                <NavigationBar />
            </NavigationWrap>
        </HeadingRow>
    );
}

const HeadingRow = styled(Row)`
    justify-content: space-between;
    max-height: 120px;
    background-color: ${theme.palette.background.paper};
    z-index: ${TopLayer};
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
`;

const HeadingWrap = styled(HeadingRow)`
    align-items: center;
    padding: 5px 10px;
    box-sizing: border-box;
`;

const NavigationWrap = styled.div`
    flex: 1;
    max-width: 50%;
    min-width: fit-content;
    margin-right: 10px;
    position: relative;
    align-self: center;
`;

const MenuButton = styled(BaseButton)`
    background-color: transparent;
    color: ${theme.palette.text.primary};
    display: flex;
    align-items: center;
    padding: 5px;
    cursor: pointer;
`;

const MobileMenu = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 20px 20px 20px;
    background-color: ${theme.palette.background.paper};
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
`;
