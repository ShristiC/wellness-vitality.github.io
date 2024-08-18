import styled from "@emotion/styled";
import { theme } from "./Core/Colors";
import { BorderRadius } from "./Core/Layout";
import { BedOutlined } from "@mui/icons-material";
import { ContentText, FontSizes } from "./Core/Typography";

interface IPillarProps {
    text: string;
    icon: string;
}

export default function Pillar ({text, icon}: IPillarProps) {
    return (
        <Wrapper>
            <OuterPillarRow/>
                <InnerPillarRow/>
                    <InnerContent>
                        <img src={icon} sizes="24" />
                        <SmallContentText>{text}</SmallContentText>
                    </InnerContent>
                <InnerPillarRow/>
            <OuterPillarRow/>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    max-height: 250px;
    max-width: 200px;
`;

const OuterPillarRow = styled.div`
    width: 170px;
    height: 24px;
    border: 3px solid ${theme.palette.divider};
    border-radius: ${BorderRadius.pill}px;
`;

const InnerPillarRow = styled(OuterPillarRow)`
    height: 12px;
    width: 150px;
    margin: 0px 10px;
`;

const InnerContent = styled.div`
    width: 140px;
    height: 160px;
    border: 3px solid ${theme.palette.divider};
    margin: 0px 15px;
    font-size: ${FontSizes.coverTitle}px;
    color: ${theme.palette.text.primary};
`;

const SmallContentText = styled (ContentText)`
    font-size: ${FontSizes.button}px;
    margin-top: -20px;
`;