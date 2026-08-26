import styles from './ProductList.module.css'
import Product from "../ProductItem"

function ProductList({products}) {
    return (
        <ul className={styles.productList}>
                    {products?.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
                </ul>
    )
}

export default ProductList
