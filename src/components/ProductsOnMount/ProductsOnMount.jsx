import { useEffect, useState } from "react";
import './ProductsOnMount.css'

export const ProductsOnMount = () => {
	const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

	useEffect(() => {
        
		fetch("https://fakestoreapi.com/products")
			.then((response) => response.json())
			.then((data) => {
				console.log("Productos obtenidos:", data);
				setProducts(data);
			})
			.catch((error) => {
				setError(error.message);
			})
            .finally(() => {
                setLoading(false);
            });
	}, []);

    if (loading) {
        return <p>Loading...</p>
    }

    if (error) {
		return <p>{error}</p>;
	}

	return (
		<div>
			<h2>Productos</h2>
			<div>
				{products.map((product) => (
					<div key={product.id}>
						<p>{product.title}</p>
						<p>{product.price} €</p>
					</div>
				))}
			</div>
		</div>
	);
};
