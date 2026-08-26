import styles from './ProductItem.module.css'

function ProductItem({ product }) {
    return (
        <li className={styles.productItem}>
            <h3>{product.product_name}</h3>
            <p>{product.description}</p>
            <p>£{product.price}</p>
            <img src={product.image} alt={product.product_name}/>
        </li>
    )
}

export default ProductItem
