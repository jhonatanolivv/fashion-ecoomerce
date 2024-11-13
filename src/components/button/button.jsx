import './button.scss'

const BUTTON_TYPE_CLASS = {
    google: 'google-sing-in',
    inverted: 'inverted'
}

export function Button( {children, typeButton, ...otherProps} ) {
    return (
        <button 
        {...otherProps}
        className={`${BUTTON_TYPE_CLASS[typeButton]}`}>
            {children}
        </button>
    )
}