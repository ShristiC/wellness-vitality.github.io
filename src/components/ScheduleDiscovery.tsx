import styled from "@emotion/styled";

interface IScheduleDiscoveryProps {
    includeBorder?: boolean;
}

function ScheduleDiscovery({includeBorder=true}:IScheduleDiscoveryProps) {
    return (
        <ContentWrap $includeBorder={includeBorder}>
            <h3>Schedule a Discovery Call!</h3>
            <LeftAlignedParagraph>Do you struggle with insulin resistance, ineffective medicine, IBS, arthritis, chronic pain, unhealthy relationship with weight, or have trouble sleeping?</LeftAlignedParagraph>
            <LeftAlignedParagraph>You are not alone and it is not too late! Let's work together to take charge of your life and help you live your most vibrant life. </LeftAlignedParagraph>
            <StyledLink href='mailto:wellnessvitality20@gmail.com'>Schedule a free call now!</StyledLink>
        </ContentWrap>
    );
}

const StyledLink = styled.a`
    color: #ffffff;
    background-color: #33691e;
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    margin: 15px 0;
    font-size: 1em;
    font-weight: 500;
    &:hover {
        border-color: #646cff;
        color: #ffffff;
  }
`;

const LeftAlignedParagraph = styled.p`
    text-align: left;
`;

const ContentWrap = styled.div<{$includeBorder:boolean}>`
    padding: 20px;
    border-radius: 8px;
    gap: 5px;
    height: 425x;
    align-content: center;
    border: ${(props) => props.$includeBorder ? '2px solid #aed581' : '0'};
`;

export default ScheduleDiscovery;