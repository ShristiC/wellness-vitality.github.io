import LogoImage from "../assets/logo/full-logo-color.svg";
import LogoIconImage from "../assets/logo/logo_icon_transparent.png";
import LogoWhiteIcon from "../assets/logo/logo-white.png";

const description = 'A tree whose roots are shaped out of a spiral, and the leaves are getting larger in size as they emerge outside the circle. Next to it, the words Wellnes n Vitality.';

interface ILogoProps {
    size?: number;
    margin?: string;
}

function Logo({size = 100, margin}: ILogoProps) {
    return (
        <img src={LogoImage} alt={description} height={size} style={{margin: `${margin}`}}/>
    );
}

export function LogoIcon() {
    return (
        <img src={LogoIconImage} alt={description} width={100} />
    );
}

export function WhiteLogoIcon({size = 100, margin = '0'}: ILogoProps) {
    return (
        <img src={LogoWhiteIcon} alt={description} height={size} style={{margin: `${margin}`}} />
    );
}

export default Logo;
