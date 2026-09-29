import Logo from '../Logo/Logo'
import Nav from './Nav'
import styles from './NavigationLayout.module.css'


function NavigationLayout({categories, catError}) {
    return (
        <nav className={styles.navLayout}>
                <Logo />
                <Nav categories={categories} catError={catError} />
        </nav>
    )
}

export default NavigationLayout
