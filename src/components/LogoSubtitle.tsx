interface ILogoSubtitleProps {
    variant: 'heading' | 'footer';
}
function LogoSubtitle({ variant }: ILogoSubtitleProps) {
    const text = 'Let\'s take charge of our lives!';
    return (variant === 'heading' ? <h2> {text}</h2> : <h4> {text}</h4>)
}

export default LogoSubtitle;