import styles from './SubButton.module.css'

type SubButtonPops = {
    type: "primary" | "secondary" | "tertiary" | "formButton";
    children: React.ReactNode;
}

function SubButton({children, type, onClick} : SubButtonPops) {
    return (
        <button type="submit" onClick={onClick} className={`${styles.button} ${styles[type]}`}>
            {children}
        </button>
    )
}

export default SubButton
