import Logo from '../Logo/Logo'
import Nav from './Nav'
import styles from './NavigationLayout.module.css'

function NavigationLayout() {
    return (
        <nav className={styles.navLayout}>
                <Logo />
                <Nav />
        </nav>
    )
}

export default NavigationLayout
