import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"

type Product = {
    product_name: string
    description: string
    price: string
    quantity: number
    image: string
    delivery_info: string
    notes: string
}

function ProductDetailPage() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [product, setProduct] = useState<Product | null>(null)
    const [error, setError] = useState("")

    useEffect(() => {
        async function fetchProduct() {
            try {
                const res = await fetch(`http://127.0.0.1:8000/api/products/${id}/`)
                if (!res.ok) {
                    throw new Error("Product not found")
                }

                setProduct(await res.json())
            } catch (err) {
                setError(err instanceof Error ? err.message : "Unable to fetch product")
            }
        }

        if (id) {
            fetchProduct()
        }
    }, [id])

    if (error) {
        return <p>{error}</p>
    }

    if (!product) {
        return <p>Seems the product you are looking for is no longer here...</p>
    }

    return (
        <div>
            <a onClick={() => navigate(-1)}>Back to products</a>
            <img src={product.image} alt={product.product_name} />
            <h1>{product.product_name}</h1>
            <p>£{product.price}</p>
            <p>{product.description}</p>
            <p>Quantity available: {product.quantity}</p>
            <p>{product.delivery_info}</p>
            <p>{product.notes}</p>
        </div>
    )
}

export default ProductDetailPage
