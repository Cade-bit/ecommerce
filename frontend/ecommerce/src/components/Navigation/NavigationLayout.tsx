import Logo from '../Logo/Logo'
import Nav, { type CategoryItem } from './Nav'
import styles from './NavigationLayout.module.css'
import { NavLink } from 'react-router'
import { useState } from 'react'

type NavigationLayoutProps = {
    categories: CategoryItem[];
    catError?: string;
};

function NavigationLayout({ categories }: NavigationLayoutProps) {
    const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null)
    const selectedCategory = categories.find((category) => category.id === selectedCategoryId)

    function handleCategoryClick(id: number) {
        setSelectedCategoryId((currentId) => currentId === id ? null : id)
    }

    return (
        <>
            <nav className={styles.navLayout}>
                <Logo />
                <Nav
                    categories={categories}
                    selectedCategoryId={selectedCategoryId}
                    onCategoryClick={handleCategoryClick}
                />
            </nav>
            {/* Displaying mega menu */}
            {selectedCategory && (
                <div id="category-mega-menu" className={styles.dropDownContent}>
                    <div className={styles.dropDownHeader}>
                        <h2>Shop Trendy {selectedCategory.name}'s Fashion</h2>
                    </div>
                    {/* Displaying child categories of the top level parent categories */}
                    {selectedCategory.children.length > 0 && (
                        <div className={styles.row}>
                            {selectedCategory.children.map((child) => (
                                <div className={styles.column} key={child.id}>
                                    <NavLink to=""><h3>{child.name}</h3></NavLink>
                                    {child.children.map((grandChild) => (
                                        <div className={styles.grandChild} key={grandChild.id}>
                                        <NavLink to="">
                                            {grandChild.name}
                                        </NavLink>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </>
    )
}

export default NavigationLayout
