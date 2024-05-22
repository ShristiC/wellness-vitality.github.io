import styled from "@emotion/styled";

function Disclaimer() {
    return (
        <StyledParagraph>
            A health coach’s specialty is behavioral change, and is not intended to substitute the advice, treatment and/or diagnosis of your doctor or licensed medical professional. Health coaches do not diagnose conditions, prescribe medications or recommend higher or lower doses of your current medications. Consult your Health Care Provider.
        </StyledParagraph>
    );
}

const StyledParagraph = styled.p`
    flex-basis: 50%;
`;

export default Disclaimer;