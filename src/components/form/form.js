import './form.css'
import Input from '../input/input'

export default function Form({ children, readOnly }) {
    return (
        <form className="form" readOnly={readOnly}>
            {children}
        </form>
    )
}