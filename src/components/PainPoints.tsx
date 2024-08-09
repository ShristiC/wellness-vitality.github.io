import styled from "@emotion/styled";
import Resonate from "./Resonate";
import { PaddingOrMargin, Row } from "./Styles/Layout";

export default function PainPoints() {
    return (
        <PainPointsWrapper>
            <Row>
                <Resonate />
                <ImagineContentWrapper>
                    <Resonate />
                </ImagineContentWrapper>
            </Row>
        </PainPointsWrapper>
    );
}

const PainPointsWrapper = styled.div`
    display: block;
    position: relative;
    margin-top: 930px; // size of cover image
    padding: ${PaddingOrMargin.extraLarge * 2}px 10%;
`;

const ImagineContentWrapper = styled.div`
    margin-top: ${PaddingOrMargin.extraLarge * 6}px;
`;