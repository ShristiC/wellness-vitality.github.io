import styled from "@emotion/styled";
import Footer from "../components/Footer";
import Heading from "../components/Heading";

export interface IPageTemplateProps {
    children: React.ReactNode;
}
function PageTemplate({ children }: IPageTemplateProps) {
    return (
        <StyledDiv>
            <Heading />
            <CenteredContent>
                {children}
            </CenteredContent>
            <Footer />
        </StyledDiv>

    );

}

const StyledDiv = styled.div`
    padding: 20px;
`;

const CenteredContent = styled.div`
    justify-items: center;
    align-items: center;
    width: 100%;
    text-align: center;
`;

export default PageTemplate;