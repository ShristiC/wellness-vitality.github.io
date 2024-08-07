import styled from "@emotion/styled";
import { theme } from "./Constants/Colors";
import Logo from "./Logo";
import NavigationBar from "./NavigationBar";
import { PaddingOrMargin, Row, TopLayer } from "./Styles/Layout";

export default function Heading() {
    return (
        <HeadingRow>
            <Logo />
            <NavigationWrap>
                <NavigationBar />
            </NavigationWrap>
        </HeadingRow>
    );
}

const HeadingRow = styled(Row)`
    justify-content: space-between;
    height: 100px;
    background-color: ${theme.palette.background.paper};
    padding: ${PaddingOrMargin.small}px 0px;
    z-index: ${TopLayer};
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
`;

const NavigationWrap = styled.div`
    width: 50%;
    position: relative;
    top: 25%;
`;