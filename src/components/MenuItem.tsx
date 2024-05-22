import { useNavigate } from 'react-router-dom';
import { StyledColumn, StyledRow } from './Styles/Layouts';
import styled from '@emotion/styled';

interface IMenuItemProps {
    variant: 'horizontal' | 'vertical';
}

function MenuItem({ variant }: IMenuItemProps) {
    const navigate = useNavigate();

    // Define your component dictionary
    const componentDictionary = {
        'horizontal': StyledOuterRow,
        'vertical': WrappedColumn,
    };

    const OuterComponent = componentDictionary[variant];

    return (
        <OuterComponent>
            <StyledButton onClick={() => navigate('/')}>Home</StyledButton>
            <StyledButton onClick={() => navigate('/about')}>About</StyledButton>
            {/* <StyledButton onClick={() => navigate('/coaching')}>Coaching</StyledButton>
            <StyledButton onClick={() => navigate('/testimonials')}>Testimonials</StyledButton>
            <StyledButton onClick={() => navigate('/recipes')}>Recipes</StyledButton>
            <StyledButton onClick={() => navigate('/workshops')}>Workshops</StyledButton>
            <StyledButton onClick={() => navigate('/contact')}>Contact</StyledButton> */}
            <StyledLink href='mailto:wellnessvitality20@gmail.com'>Discovery</StyledLink>
        </OuterComponent>

    );
}

const StyledLink = styled.a`
    color: #ffffff;
    background-color: #33691e;
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.3em 1.2em;
    margin: 15px 0;
    font-size: 1em;
    font-weight: 500;
    &:hover {
        border-color: #646cff;
        color: #ffffff;
  }
`;

const StyledOuterRow = styled(StyledRow)`
    max-width: 400px;
    justify-content: space-around;
`;


const WrappedColumn = styled(StyledColumn)`
    flex-wrap: wrap;
`;

const StyledButton = styled.button`
    height: fit-content;
    width: 115px;
    text-align: center;
    font-size: 14px;
`;

export default MenuItem;