import { Link } from 'react-router'
import styles from './ProductItem.module.css'

function ProductItem({ product }) {
    return (
        <li className={styles.productItem}>
            <Link to={`/products/${product.id}`}>
                <img src={product.image} alt={product.product_name}/>
            </Link>
                <h3>{product.product_name}</h3>
                <p>£{product.price}</p>
                <p>{product.description}</p>
                <p>{product.delivery_info} delivery</p>
        </li>
    )
}

export default ProductItem
