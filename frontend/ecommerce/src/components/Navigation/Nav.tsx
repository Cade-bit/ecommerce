import { Link, NavLink } from 'react-router'
import styles from './Nav.module.css'
import Button from '../Button/Navigational/Button'

export type CategoryItem = {
  id: number;
  name: string;
  slug: string;
  children: CategoryItem[];
};

type NavProps = {
  categories: CategoryItem[];
  selectedCategoryId: number | null;
  onCategoryClick: (id: number) => void;
};

function Nav({ categories, selectedCategoryId, onCategoryClick }: NavProps) {
    return (
      <div>
        <ul className={styles.navList}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {/* Displaying top level categories */}
          {categories?.map((category) => (
            <li key={category.id}>
              <p
                // type="button" used to be a button
                className={styles.categoryTrigger}
                aria-expanded={selectedCategoryId === category.id}
                aria-controls="category-mega-menu"
                onClick={() => onCategoryClick(category.id)}
              >
                {category.name}
              </p>
            </li>
          ))}
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <Link to="/login">
            <Button type="primary">Login</Button>
          </Link>
        </ul>
      </div>
    );
}

export default Nav
