import { useEffect, useState } from "react";
import "./LocalProductSearch.css";

export const LocalProductSearch = () => {
	const [products, setProducts] = useState([]);
	const [query, setQuery] = useState("");

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((response) => response.json())
			.then((data) => setProducts(data))
			.catch((error) => console.error("Error al obtener productos:", error));
	}, []);

	const filteredProducts =
		query.length > 2
			? products.filter((product) => product.title.toLowerCase().includes(query.toLowerCase()))
			: products;

	return (
		<div>
			<h2>Buscar productos</h2>
			<input
				type="text"
				placeholder="Escribe para buscar..."
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			<ul>
				{filteredProducts.map((product) => (
					<li key={product.id}>
						{product.title} - ${product.price}
					</li>
				))}
			</ul>
		</div>
	);
};
