import ProductList from "../components/Product/ProductList/ProductList"
import styles from './ProductsPage.module.css'

function Products({products, error}) {

    return (
        <main className={styles.main}>
            <div className={styles.listTitle}>
            <h2> Available products: {products.length}</h2>
            </div>
            {error ? (
                <p>{error}</p>
            ) : products.length === 0 ? (
                <p>No products found :(</p>
            ) : (
                <div>
                <ProductList products={products}/>
                </div>
            )}
        </main>
    )
}

export default Products
