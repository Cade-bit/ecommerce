import styles from './Button.module.css'

function Button({type}) {
    return (
        <button className={`${styles.button} ${styles[type]}`}>
            Log In
        </button>
    )
}

export default Button
