import './input.css'

export default function Input({ label, placeholder, value, disabled }) {
    return (
    <div className='input__div'>
        <label className="input__label">{label}</label>
        <input className="input" placeholder={placeholder} value={value} disabled={disabled} />
    </div>
    )
}