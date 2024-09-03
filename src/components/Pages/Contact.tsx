import styled from "@emotion/styled";
import { PaddingOrMargin } from "../Core/Layout";
import { ContentText, Title } from "../Core/Typography";
import Footer from "../Footer";
import Heading from "../Heading";

export default function ContactPage() {
    const description = "Starting a change sounds scary, but it doesn’t have to be. Schedule a free discovery call to consult and answer any of your questions.";
    return (
        <>
            <Heading />
            <Content>
                <InnerContent>
                    <Title>Contact</Title>
                    <ContentText>
                        {description}
                    </ContentText>
                </InnerContent>
            </Content>
            <Footer />
        </>
    );
}

const Content = styled.div`
    display: block;
    position: relative;
    top: 110px;
    padding: ${PaddingOrMargin.extraLarge}px 10% ${PaddingOrMargin.extraLarge * 3}px 10%;
    max-width: 100%;
    overflow-x: clip;
    margin-bottom: ${PaddingOrMargin.extraLarge * 3}px;
`;

const InnerContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${PaddingOrMargin.extraLarge}px;
`;