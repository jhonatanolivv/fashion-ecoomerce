import './form-input.scss'

export function FormInput( {label, ...otherProps} ) {
    return (
        <div>
            <label>{label}</label>
            <input {...otherProps} className='form-input' />
        </div>
    )
}