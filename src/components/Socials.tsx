import { EmailOutlined, FacebookOutlined, Instagram, YouTube } from '@mui/icons-material';
import { StyledRow } from './Styles/Layouts';
import styled from '@emotion/styled';
function Socials() {
    return (
        <SmallerStyledRow>
            <StyledAnchor><FacebookOutlined /></StyledAnchor>

            <StyledAnchor><Instagram /></StyledAnchor>
            <StyledAnchor><YouTube /></StyledAnchor>
            <StyledAnchor><EmailOutlined /></StyledAnchor>
        </SmallerStyledRow>
    );
}

const SmallerStyledRow = styled(StyledRow)`
    gap: 5px;
    justify-content: space-around;
    width: 150px;
`;

const StyledAnchor = styled.a`
    color: #33691e;
`;

export default Socials;