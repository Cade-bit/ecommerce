import { Link } from "react-router"
import styles from './Logo.module.css'

function Logo() {
    return (
        <div className={styles.logo}>
            <Link to="/"><span><img src="https://thesvg.org/icons/ralph-lauren/light.svg"></img></span></Link>
        </div>
    )
}

export default Logo
