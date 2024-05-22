import { StyledH2 } from "./Styles/Typography";

interface ILogoSubtitleProps {
    variant: 'heading' | 'footer';
}
function LogoSubtitle({ variant }: ILogoSubtitleProps) {
    const text = 'Let\'s take charge of our lives!';
    return (variant === 'heading' ? <StyledH2> {text}</StyledH2> : <h4> {text}</h4>)
}

export default LogoSubtitle;