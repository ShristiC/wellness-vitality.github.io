import { useNavigate } from "react-router-dom";
import { Row } from "./Core/Layout";
import { ActionButton, CoreButton } from "./CoreButtons";
import useWindowDimensions from "../hooks/useWindowDimensions";
import styled from "@emotion/styled";

interface INavigationItem {
    name: string,
    route: string,
}
export default function NavigationBar() {
    const navigate = useNavigate();
    const [_, isMobile] = useWindowDimensions();

    const navigationItems: INavigationItem[] = [
        { name: 'Home', route: '/' },
        { name: 'About', route: '/about' },
        { name: 'Recipes', route: '/recipes' },
        { name: 'Programs', route: '/programs' },
        { name: 'Testimonials', route: '/testimonials' },
        // { name: 'Contact', route: '/contact' },
    ];

    return (
        <Row>
            {navigationItems.map((item, i) => {
                return <CoreButton key={i} onClick={() => navigate(item.route)} $isMobile={isMobile}>
                    {item.name}
                </CoreButton>
            })}
            <StyledButton $variant="default" $isMobile={isMobile} onClick={(e) => {
                        e.preventDefault();
                        window.open("https://my.practicebetter.io/#/5c6a01b7627db308702273dc/bookings?step=services", "_blank", "noreferrer");
            }}>Learn More</StyledButton>
        </Row>
    );
}

const StyledButton = styled(ActionButton)`
    width: fit-content;
`;