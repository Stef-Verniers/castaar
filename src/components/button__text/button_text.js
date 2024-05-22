'use client'
import './button_text.css';

// Reusable button with plain text
export default function Button__Text({ alt, color, width, height, content, onClick }) {
    return (
        <button className="Button__text" style={{ backgroundColor: color, width: width, height: height }} alt={alt} onClick={onClick}>
            {content}
        </button>
    )
}