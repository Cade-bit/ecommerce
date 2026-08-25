import { NavLink } from 'react-router'
import styles from './Nav.module.css'
import Button from '../Button/Button'

function Nav() {
    return (
        <div>
            <ul className={styles.navList}>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/products">Products</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
                <Button />
            </ul>
            
        </div>
    )
}

export default Nav
