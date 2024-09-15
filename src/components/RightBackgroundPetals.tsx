import styled from '@emotion/styled';
import LeftBackgroundFlower from '../assets/cover/Petals.png';
export default function RightBackgroundPetals () {
    return (
        <Flower src={LeftBackgroundFlower} role="presentation"/>
    );
}

const Flower = styled.img`
    position: absolute;
    right:-20%;
    top: 5%;
    scale: 0.8;
    transform: rotateZ(45deg);
`;