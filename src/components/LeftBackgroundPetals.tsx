import styled from '@emotion/styled';
import LeftBackgroundFlower from '../assets/cover/Petals.png';
export default function LeftBackgroundPetals () {
    return (
        <Flower src={LeftBackgroundFlower} role="presentation"/>
    );
}

const Flower = styled.img`
    position: absolute;
    right:25%;
    top: 70%;
    scale: 0.8;
    transform: rotateZ(-120deg);
`;