import { useNavigate } from "react-router-dom";
import { Row } from "./Core/Layout";
import { ActionButton, CoreButton } from "./CoreButtons";
import useWindowDimensions from "../hooks/useWindowDimensions";
import styled from "@emotion/styled";

interface INavigationItem {
    name: string,
    route: string,
}

interface INavigationBarProps {
    // Called after a link is clicked, e.g. to close the mobile menu
    onNavigate?: () => void;
    // Stack the links in a column, e.g. inside the collapsed menu
    vertical?: boolean;
}

export default function NavigationBar({ onNavigate, vertical = false }: INavigationBarProps) {
    const navigate = useNavigate();
    const [_, isMobile] = useWindowDimensions();

    const navigationItems: INavigationItem[] = [
        { name: 'Home', route: '/' },
        { name: 'About', route: '/about' },
        { name: 'Gallery', route: '/gallery' },
        { name: 'Programs', route: '/programs' },
        { name: 'Testimonials', route: '/testimonials' },
        // { name: 'Contact', route: '/contact' },
    ];

    return (
        <NavRow $vertical={vertical}>
            {navigationItems.map((item, i) => {
                return <CoreButton key={i} onClick={() => { navigate(item.route); onNavigate?.(); }} $isMobile={isMobile}>
                    {item.name}
                </CoreButton>
            })}
            <StyledButton $variant="default" $isMobile={isMobile} onClick={(e) => {
                        e.preventDefault();
                        window.open("https://my.practicebetter.io/#/5c6a01b7627db308702273dc/bookings?step=services", "_blank", "noreferrer");
                        onNavigate?.();
            }}>Learn More</StyledButton>
        </NavRow>
    );
}

const NavRow = styled(Row)<{$vertical: boolean}>`
    flex-direction: ${(props) => props.$vertical ? 'column' : 'row'};
    align-items: center;
    gap: ${(props) => props.$vertical ? '12px' : '0'};
`;

const StyledButton = styled(ActionButton)`
    width: fit-content;
`;
