import styled from '@emotion/styled';
import LeftBackgroundFlower from '../assets/cover/Left Petals.svg';
export default function BackgroundPetals () {
    return (
        <Flower src={LeftBackgroundFlower} role="presentation"/>
    );
}

const Flower = styled.img`
    position: absolute;
    right:25%;
    top: 300px;
    scale: 0.8;
`;