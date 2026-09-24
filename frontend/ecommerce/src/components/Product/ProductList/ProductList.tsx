import styles from './ProductList.module.css'
import Product from "../ProductItem"

type ProductListProps = {
    products: {
        id: number;
        name: string;
        price: number;
        image: string;
        description: string;

    }[];
};

function ProductList({products}: ProductListProps) {
    return (
        <ul className={styles.productList}>
                    {products?.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
                </ul>
    )
}

export default ProductList
