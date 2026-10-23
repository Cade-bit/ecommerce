import styles from "./categoryPage.module.css";
import { useParams } from "react-router";
import type { CategoryItem } from "../../../components/Navigation/Nav";
import ProductList from "../../../components/Product/ProductList/ProductList";

type CategoryPageProps = {
  categories: CategoryItem[];
  catError?: string;
  categoriesLoading: boolean;
  products: [];
  error?: string;
};

function CategoryPage({
  categories,
  catError,
  categoriesLoading,
  products,
  error,
}: CategoryPageProps) {

  const { slug } = useParams();

  function findCategory(
    items: CategoryItem[],
    categorySlug: string | undefined,
  ): CategoryItem | undefined {
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

  const categoryProducts = products.filter(
    (product) => product.category === category.id,
  );

  if (categoryProducts.length === 0) {
    return <p>No products found for this category</p>;
  }

  console.log(categoryProducts);
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <p>Context about category</p>
        <h2>Explore the [category] collection</h2>
      </div>
      <div className={styles.productsList}>
        <div className={styles.listCount}>
          <h3>Available products: {categoryProducts.length}</h3>
        </div>
        {error ? (
          <p>{error}</p>
        ) : categoryProducts.length === 0 ? (
          <p>No products found :(</p>
        ) : (
          <div>
            <ProductList products={products} categoryProducts={categoryProducts}/>
          </div>
        )}
      </div>
    </main>
  );
}

export default CategoryPage;
