import LogoImage from "../assets/logo_cover_transparent.png";
import LogoIconImage from "../assets/logo_icon_transparent.png";

function Logo() {
    return (
        <img src={LogoImage} alt='A tree whose roots are shaped out of a spiral, and the leaves are getting larger in size as they emerge outside the circle. Next to it, the words Wellnes n Vitality.' height={100} />
    );
}

export function LogoIcon() {
    return (
        <img src={LogoIconImage} alt='A tree whose roots are shaped out of a spiral, and the leaves are getting larger in size as they emerge outside the circle.' width={100} />
    );
}

export default Logo;
