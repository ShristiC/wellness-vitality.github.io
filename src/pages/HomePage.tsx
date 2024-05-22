import styled from "@emotion/styled";
import { AirlineSeatFlatAngledOutlined, MedicalInformationOutlined, SquareFootOutlined, VaccinesOutlined } from "@mui/icons-material";
import CoverImage from "../assets/CoverImage.jpg";
import ScheduleDiscovery from "../components/ScheduleDiscovery";
import { StyledColumn, StyledRow } from "../components/Styles/Layouts";
import PageTemplate from "./PageTemplate";

function HomePage() {
    return <PageTemplate>
        <StyledColumn>

            <ContainedContent>
                <StyledImage src={CoverImage} alt="assortment of colorful fruits and nuts on a table" />
                <ScheduleDiscovery />
            </ContainedContent>
            <h2>The Functional Medicine Approach</h2>
            <p>Functional Medicine is a proactive lifestyle based approach attempts to understand the root cause of chronic diseases and support the unique expression of health and vitality for each individual. It addresses the whole person, not just an isolated set of symptoms.</p>
            <h2>My Services</h2>
            <ShortedRow>
                <SkillItems>
                    <VaccinesOutlined htmlColor="#33691e" />
                    <p>Diabetes</p>
                </SkillItems>
                <SkillItems>
                    <MedicalInformationOutlined htmlColor="#33691e" />
                    <p>Chronic Pain</p>
                </SkillItems>
                <SkillItems>
                    <SquareFootOutlined htmlColor="#33691e" />
                    <p>Weight Management</p>
                </SkillItems>
                <SkillItems>
                    <AirlineSeatFlatAngledOutlined htmlColor="#33691e" />
                    <p>Stress and Fatigue</p>
                </SkillItems>
            </ShortedRow>
        </StyledColumn>

    </PageTemplate>
}

const ContainedContent = styled(StyledRow)`
    flex: 1;
    padding: 10px;
    margin: 10px 0px;
    border: 2px solid transparent;
    max-height: 400;
`;

const StyledImage = styled.img`
    width: 30%;
`;

const SkillItems = styled(StyledRow)`
    max-width: 200px;
    justify-content: space-around;
    gap: 0px;
`;

const ShortedRow = styled(StyledRow)`
    width: 90%;
    justify-content: space-evenly;
    gap: 15px;
`;
export default HomePage;