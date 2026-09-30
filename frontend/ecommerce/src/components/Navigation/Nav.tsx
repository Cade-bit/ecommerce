import { Link, NavLink } from 'react-router'
import styles from './Nav.module.css'
import Button from '../Button/Navigational/Button'
import { useState } from 'react';

type Category = {
    categories: {
        id: number;
        name: string;
        slug: string;
    }[];
};



function Nav({categories}: Category) {
  const [selectedId, setSelectedId] = useState(null);

  const isSelected = categories.map((category) => category.id).includes(selectedId);

  function handleClicked(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id))
  }
    return (
      <div>
        <ul className={styles.navList}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          {categories?.map((category) => (
            <div className={styles.dropDown} key={category.id} category={category}>
              <li onClick={handleClicked}>{category.name}</li>
              <div className={`styles.dropDownContent ${isSelected} ? "dropDownClicked" : "" `}> {/*{styles.dropDownContent}*/}
                <div className={styles.dropDownHeader}>
                    <h2>Shop Trendy {category.name}'s Fashion</h2>
                </div>
                {category.children.length > 0 && (
                  <div className={styles.row}>
                    {category.children.map((child) => (
                      <div className={styles.column}>
                        <NavLink to=""><h3 key={child.id}>{child.name}</h3></NavLink>
                        <NavLink to="">{child.name}</NavLink>
                    </div>
                    ))}
                </div>
                )}
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
