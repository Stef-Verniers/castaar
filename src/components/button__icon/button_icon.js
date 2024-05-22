import './button_icon.css';
import Image from 'next/image';

// Reusable button with an icon
export default function Button__Icon({ src, alt, color, width, height }) {
    return (
        <button className="Button__icon" style={{ borderColor: color, width: width, height: height }} alt={alt}>
            <Image src={src} alt={alt} sizes='100vw' objectFit='cover' fill />
        </button>
    )
}