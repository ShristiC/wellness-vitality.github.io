import { useNavigate } from 'react-router-dom';
import { StyledColumn, StyledRow } from './Layouts';

interface IMenuItemProps {
    variant: 'horizontal' | 'vertical';
}

function MenuItem({ variant }: IMenuItemProps) {
    const navigate = useNavigate();

    // Define your component dictionary
    const componentDictionary = {
        'horizontal': StyledRow,
        'vertical': StyledColumn,
    };

    const OuterComponent = componentDictionary[variant];

    return (
        <OuterComponent>
            <button onClick={() => navigate('/')}>Home</button>
            <button onClick={() => navigate('/about')}>About</button>
            <button onClick={() => navigate('/coaching')}>Coaching</button>
            <button onClick={() => navigate('/testimonials')}>Testimonials</button>
            <button onClick={() => navigate('/recipes')}>Recipes</button>
            <button onClick={() => navigate('/workshops')}>Workshops</button>
            <button onClick={() => navigate('/contact')}>Contact</button>
            <button onClick={() => navigate('/discovery')}>Discovery</button>
        </OuterComponent>
    );
}

export default MenuItem;