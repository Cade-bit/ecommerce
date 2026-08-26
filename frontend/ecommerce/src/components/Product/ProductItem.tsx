import { Link } from 'react-router'
import styles from './ProductItem.module.css'

function ProductItem({ product }) {
    return (
        <li className={styles.productCard}>
            <Link to={`/products/${product.id}`}>
                <img src={product.image} alt={product.product_name}/>
            </Link>
            <div className={styles.productInfo}>
                <div className={styles.productTitle}>
                <h3>{product.product_name}</h3>
                <p>{product.description}</p>
            </div>
            <div className={styles.price}>
                <p>£{product.price}</p>
            </div>
            </div>
            
        </li>
    )
}

export default ProductItem
