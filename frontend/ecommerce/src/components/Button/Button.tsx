import styles from './Button.module.css'

function Button({type, onClick}) {
    return (
        <button onClick={onClick} className={`${styles.button} ${styles[type]}`}>
            Log In
        </button>
    )
}

export default Button
