import { useEffect, useState } from "react";
import './home.css'
import api from "../../services/api"

export default function Home() {
    const [products, setProducts] = useState([]);

    async function loadProducts() {
        const response = await api.get('/products')
        setProducts(response.data);
    }

    useEffect(() => {
        loadProducts();
    }, []);

    return (
        <div className="container">
            <div className="lista-produtos">
                {products.map((product) => {
                    return (
                        <article key={product._id}>
                            <strong>{product.name}</strong>
                            <img src={product.product_image} />
                            <p>{product.description}</p>
                            <strong>R$ {product.price}</strong>
                        </article>
                    )
                })}
            </div>
        </div>
    )
}