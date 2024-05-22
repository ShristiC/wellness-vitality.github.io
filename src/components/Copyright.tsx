import styled from "@emotion/styled";

function Copyright() {
    return <StyledParagraph>
        Copyright © 2024 Wellness n Vitality. All Rights Reserved. Established 2020.
    </StyledParagraph>
}

const StyledParagraph = styled.p`
    width: 200px;
    font-size: 12px;
`;

export default Copyright;