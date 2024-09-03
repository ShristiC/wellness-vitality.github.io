import styled from "@emotion/styled";
import { ChevronLeft, ChevronRight, Rotate90DegreesCcw } from "@mui/icons-material";
import { PropsWithChildren } from "react";
import { darkGreen } from "./Core/Colors";
import { Row } from "./Core/Layout";
import { FontSizes, HeadingText } from "./Core/Typography";

interface IExpanderCardProps {
    open: boolean;
    title: string;
    handleOpen: () => void;
    
}

export const ExpanderCard: React.FC<PropsWithChildren<IExpanderCardProps>> = ({open, title, handleOpen, children})  => {
    return (
        <Card>
            <CardTitle role="button" onClick={handleOpen}>
                {open ? 
                        <Icon>
                            <ChevronLeft htmlColor={darkGreen} fontSize='large' sx={{transform: 'rotate(-90deg)'}}/>
                        </Icon> 
                        : <Icon>
                            <ChevronRight htmlColor={darkGreen} fontSize="large" />
                        </Icon>}
                <HeadingText $color="primary">{title}</HeadingText>
            </CardTitle>
            <BorderBottom>
                {open && children}
            </BorderBottom>
        </Card>
    );
}

const Card = styled.div`
`;

const Icon = styled.div`
    height: ${FontSizes.largeContent}px;
`;

const CardTitle = styled(Row)`
    justify-content: flex-start;
`;

const BorderBottom = styled.div`
    width: 100%;
    transition: height 0.2s ease-in-out;
`;