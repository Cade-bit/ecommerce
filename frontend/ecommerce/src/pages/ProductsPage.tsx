import { useEffect, useState } from "react"
import Product from "../components/Product/ProductItem"
import styles from './ProductsPage.module.css'

function Products() {
    const [products, setProducts] = useState([])
    const [error, setError] = useState("");

    useEffect(function() {
        async function fetchProducts() {
            try {
                const res = await fetch('http://127.0.0.1:8000/api/products/');

                if (!res.ok)
                throw new Error("Something went wrong with fetching the products");
            const data = await res.json();
            setProducts(data);
            setError("");
            console.log(data);
            } catch (err) {
                if (!(err instanceof DOMException && err.name === "AbortError")) {
                    const message = err instanceof Error ? err.message : "Unable to fetch products"
                    setError(message)
                    console.error(message)
                }
            }
        } fetchProducts();
    }, [])

    return (
        <div className={styles.test}>
            <h2> Available products {products.length}</h2>
            {error ? (
                <p>{error}</p>
            ) : products.length === 0 ? (
                <p>No products found :(</p>
            ) : (
                <ul>
                    {products?.map((product) => (
                        <Product key={product.id} product={product} />
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Products
