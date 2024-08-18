import styled from '@emotion/styled';
import Petal from '../assets/cover/Petal.svg';
export default function BackgroundPetals () {
    return (
        <>
            <FlowerPetalOne src={Petal}/>
            <FlowerPetalTwo src={Petal}/>
            <FlowerPetalThree src={Petal}/>
            <FlowerPetalFour src={Petal}/>
            <SmallPetalOne src={Petal}/>
            <SmallPetalTwo src={Petal}/>
            <SmallPetalThree src={Petal}/>
        </>
    );
}

const FlowerPetalOne = styled.img`
    position: absolute;
    right: 24%;
    height: 300px;
    transform: rotateZ(110deg);
    margin-top: 30px;
`;

const FlowerPetalTwo = styled.img`
    position: absolute;
    right: -5px;
    height: 300px;
    transform: rotateZ(240deg);
    margin-top: 30px;
`;

const FlowerPetalThree = styled.img`
    position: absolute;
    right: 11%;
    height: 300px;
    transform: rotateZ(180deg);
    margin-top: -70px;
`;

const FlowerPetalFour = styled.img`
    position: absolute;
    right: 0;
    height: 300px;
    transform: rotateZ(120deg);
    margin-top: 220px;
    object-fit: cover;
`;

const SmallPetalOne = styled.img`
    position: absolute;
    right: 21.5%;
    height: 150px;
    transform: rotateZ(140deg);
    margin-top: 10px;
`;

const SmallPetalTwo = styled.img`
    position: absolute;
    right: 5%;
    height: 150px;
    transform: rotateZ(210deg);
    margin-top: 5px;
`;

const SmallPetalThree = styled.img`
    position: absolute;
    right: -3%;
    height: 150px;
    transform: rotateZ(270deg);
    margin-top: 200px;
`;