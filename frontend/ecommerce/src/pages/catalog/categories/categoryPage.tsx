import { useParams } from 'react-router';
import type { CategoryItem } from '../../../components/Navigation/Nav';

type CategoryPageProps = {
    categories: CategoryItem[];
    catError?: string;
    categoriesLoading: boolean;
};

function CategoryPage({ categories, catError, categoriesLoading }: CategoryPageProps) {
    const { slug } = useParams();

    function findCategory(items: CategoryItem[], categorySlug: string | undefined): CategoryItem | undefined {
        for (const item of items) {
            if (item.slug === categorySlug) {
                return item;
            }
            const foundInChildren = findCategory(item.children, categorySlug);
            if (foundInChildren) {
                return foundInChildren;
            }
        }
    }

    const category = findCategory(categories, slug);

    if (catError) {
        return <p>{catError}</p>;
    }
    if (categoriesLoading) {
        return <p>Loading categories...</p>;
    }
    if (!category) {
        return <p>Category not found</p>;
    }

    return (
        <div>
            <p>{category.name}</p>
        </div>
    );
}

export default CategoryPage
