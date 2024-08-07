import styled from "@emotion/styled";
import { Row } from "./Styles/Layout";
import NavigationBar from "./NavigationBar";
import Logo from "./Logo";
import { theme } from "./Constants/Colors";

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
    flex: 1;
    height: 100px;
    background-color: ${theme.palette.background.paper};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 10px 0px;
`;

const NavigationWrap = styled.div`
    width: 50%;
    padding-top: 27px;
`;