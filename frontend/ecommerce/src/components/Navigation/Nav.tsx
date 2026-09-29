import { Link, NavLink } from 'react-router'
import styles from './Nav.module.css'
import Button from '../Button/Navigational/Button'

type Category = {
    categories: {
        id: number;
        name: string;
        slug: string;
    }[];
};


function Nav({categories}: Category) {
    return (
      <div>
        <ul className={styles.navList}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {categories?.map((category) => (
            <div className={styles.dropDown} key={category.id} category={category}>
              <NavLink to="">{category.name}</NavLink>
              <div className={styles.dropDownContent}>
                <div className={styles.dropDownHeader}>
                    <h2>Shop Trendy {category.name}'s Fashion</h2>
                </div>
                <div className={styles.row}>
                    <div className={styles.column}>
                        <h3>test</h3>
                        <NavLink to="">test</NavLink>
                        <NavLink to="">test</NavLink>
                        <NavLink to="">test</NavLink>
                    </div>
                    <div className={styles.column}>
                        <h3>test</h3>
                        <NavLink to="">test</NavLink>
                        <NavLink to="">test</NavLink>
                        <NavLink to="">test</NavLink>
                    </div>
                    <div className={styles.column}>
                        <h3>test</h3>
                        <NavLink to="">test</NavLink>
                        <NavLink to="">test</NavLink>
                        <NavLink to="">test</NavLink>
                    </div>
                </div>
              </div>
            </div>
          ))}
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <Link to="/login">
            <Button>Login</Button>
          </Link>
        </ul>
      </div>
    );
}

export default Nav
