import styled from "@emotion/styled";

export const StyledRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 10px;
`;

export const StyledColumn = styled(StyledRow)`
    flex-direction: column;
`;