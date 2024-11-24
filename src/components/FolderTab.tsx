import styled from "@emotion/styled";
import { ContentText } from "./Core/Typography";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { useEffect, useState } from "react";
import { BorderRadius, PaddingOrMargin, Row } from "./Core/Layout";
import { darkGreen, lightGreen, theme } from "./Core/Colors";

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
    height: ${(props) => props.$isMobile ? '65vh' : '70vh'};
`;