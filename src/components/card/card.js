import './card.css';
import Image from 'next/image';

// Reusable card component
export default function Card({ url, src, width, height, title, address, phone }) {
    return (
        <a className="Card" href={url}>
            <div className='Card__image' style={{width: width, height: height}}>
                <Image src={src} alt={title} sizes='100vw' objectFit='cover' fill />
            </div>
            <div className="Card__content">
                <span className="Card__title">{title}</span>
                <span className="Card__address">{address}</span>
                <span className="Card__phone">{phone}</span>
            </div>
        </a>
    )
}