import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { darkGreen, lightGreen, theme } from "./Core/Colors";
import { BorderRadius, PaddingOrMargin, Row } from "./Core/Layout";
import { ContentText } from "./Core/Typography";

interface IFolderTab {
    labels: string[];
    tab1Content: string[];
    tab2Content: string[];
}

export default function FolderTab({labels, tab1Content, tab2Content}: IFolderTab) {
    const [_, isMobile] = useWindowDimensions();
    const [isFirstTabClicked, setIsFirstTabClicked] = useState(true);
    const [contentBody, setContentBody] = useState(tab1Content);

    useEffect(() => {
        if (isFirstTabClicked) {
            setContentBody(tab1Content);
        } else {
            setContentBody(tab2Content);
        }

    }, [isFirstTabClicked]);

    return (
        <Wrapper $isMobile={isMobile}>
            <TabRow>
                {labels.map((label, i) => {
                    const isFirstTab = i == 0;
                    return (<Tab key={i} onClick={() => setIsFirstTabClicked(isFirstTab)} $isFirstTab={isFirstTab}>
                        <ContentText $isMobile={isMobile}>{label}</ContentText>
                    </Tab>);
                })}
            </TabRow>
            
            <Content $isFirstTab={isFirstTabClicked} $isMobile={isMobile}>
                {contentBody.map((content, i) => {
                    return <ContentText $isMobile={isMobile} key={i}>{content}</ContentText>
                })}
            </Content>
        </Wrapper>
    );
}

const Wrapper = styled.div<{$isMobile: boolean}>`
    display: flex;
    flex-direction: column;
    margin-right: ${(props) => props.$isMobile ? '0px' : '20px'};
    margin-bottom: ${(props) => props.$isMobile ? '20px' : '0px'};
`;

const TabRow = styled(Row)`
    justify-content: flex-start;
    flex: 1;
`;

const Tab = styled.div<{$isFirstTab: boolean}>`
    width: fit-content;
    background-color: ${(props) => props.$isFirstTab ? lightGreen : darkGreen};
    padding: ${PaddingOrMargin.medium}px ${PaddingOrMargin.extraLarge}px;
    border-top-left-radius: ${BorderRadius.light}px;
    border-top-right-radius: ${BorderRadius.light}px;
    color: ${theme.palette.text.secondary};
    :hover {
        cursor: pointer;
        background: linear-gradient(90deg, ${darkGreen}, ${lightGreen});
    }
`;

const Content = styled.div<{$isFirstTab: boolean, $isMobile: boolean}>`
    background: ${(props) => props.$isFirstTab ? `linear-gradient(0deg, ${darkGreen}, ${lightGreen})` : `linear-gradient(0deg, ${lightGreen}, ${darkGreen})`};
    border-bottom-left-radius: ${BorderRadius.light}px;
    border-bottom-right-radius: ${BorderRadius.light}px;
    border-top-right-radius: ${BorderRadius.light}px;
    text-align: center;
    padding: ${PaddingOrMargin.extraLarge}px;
    color: ${theme.palette.text.secondary};
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: ${PaddingOrMargin.large}px;
    // Let height adapt to content
    overflow: hidden; // Prevent content from overflowing during animation
    transition: height 1s smooth; // Smooth height transition

    // Allow flexible resizing
    width: 100%; // Or use a percentage of the viewport/container
    box-sizing: border-box; // Ensure padding is included in the element’s total dimensions
`;