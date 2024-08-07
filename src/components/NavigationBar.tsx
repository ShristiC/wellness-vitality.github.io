import { Row } from "./Styles/Layout";
import { ActionButton, CoreButton } from "./StyledCore";

interface INavigationItem {
    name: string,
    route: string,
}
export default function NavigationBar() {
    // const navigate = useNavigate();

    const navigationItems: INavigationItem[] = [
        { name: 'Home', route: '/' },
        { name: 'About', route: '/about' },
        { name: 'Recipes', route: '/recipes' },
        { name: 'Testimonials', route: '/testimonials' },
        { name: 'Contact', route: '/contact' },
    ];

    return (
        <Row>
            {navigationItems.map((item, i) => {
                return <CoreButton key={i}>
                    {item.name}
                </CoreButton>
            })}
            <ActionButton $variant="default">LEARN MORE</ActionButton>
        </Row>
    );
}