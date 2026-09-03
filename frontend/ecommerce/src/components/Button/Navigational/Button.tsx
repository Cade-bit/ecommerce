import styles from './Button.module.css'

type ButtonProps = {
    type: "primary" | "secondary" | "tertiary" | "formButton";
    onClick?: () => void;
    children: React.ReactNode;
}

function Button({type, onClick, children} : ButtonProps) {
    return (
        <button onClick={onClick} className={`${styles.button} ${styles[type]}`}>
            {children}
        </button>
    )
}

export default Button
