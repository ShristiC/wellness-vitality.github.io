import styled from "@emotion/styled";

export const StyledRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    flex: 1;
`;

export const StyledColumn = styled(StyledRow)`
    flex-direction: column;
`;