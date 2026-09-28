import { Link, NavLink } from 'react-router'
import styles from './Nav.module.css'
import Button from '../Button/Navigational/Button'


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
                    <NavLink to="/products/category/women">Women</NavLink>
                </li>
                <li>
                    <NavLink to="/products/category/women">Men</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
                <Link to="/login">
                <Button>Login</Button>
                </Link>
            </ul>
            
        </div>
    )
}

export default Nav
