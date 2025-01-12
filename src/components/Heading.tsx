import styled from "@emotion/styled";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { theme } from "./Core/Colors";
import { Row, TopLayer } from "./Core/Layout";
import Logo from "./Logo";
import NavigationBar from "./NavigationBar";

export default function Heading() {
    const [_, isMobile] = useWindowDimensions();

    return isMobile ? (
        <HeadingWrap>
            <Logo size={50} margin="5px"/>
            <NavigationWrap $isMobile={isMobile}>
                <NavigationBar />
            </NavigationWrap>
        </HeadingWrap>
    ) : (
        <HeadingRow>
            <Logo size={90} margin="10px"/>
            <NavigationWrap $isMobile={isMobile}>
                <NavigationBar />
            </NavigationWrap>
        </HeadingRow>
    );
}

const HeadingRow = styled(Row)`
    justify-content: space-between;
    max-height: 120px;
    background-color: ${theme.palette.background.paper};
    z-index: ${TopLayer};
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
`;

const HeadingWrap = styled(HeadingRow)`
    flex-direction: column;
    justify-content: flex-start;
    padding: 5px;
`;

const NavigationWrap = styled.div<{$isMobile: boolean}>`
    width: ${(props) => props.$isMobile ? '100%' : '50%'};
    position: relative;
    align-self: center;
`;