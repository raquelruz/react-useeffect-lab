import { useState } from "react";
import "./CartSummary.css";

const initialCart = [
	{ id: "a1", name: "Mouse", price: 15, qty: 2 },
	{ id: "b2", name: "Keyboard", price: 35, qty: 1 },
	{ id: "c3", name: "Headphones", price: 40, qty: 1 },
	{ id: "d4", name: "Speaker", price: 55, qty: 2 },
];

export const CartSummary = () => {
	const [cart, setCart] = useState(initialCart);

	const subtotal = cart.reduce((account, item) => account + item.price * item.qty, 0);
	const tax = subtotal * 0.21;
	const total = subtotal + tax;

	const handleQtyChange = (id, newQty) => {
		setCart((prevCart) => prevCart.map((item) => (item.id === id ? { ...item, qty: Number(newQty) } : item)));
	};

	return (
		<div>
			<h2>Carrito</h2>

			{cart.map((item) => (
				<div key={item.id}>
					<span>{item.name}</span>
					<input
						type="number"
						min="0"
						value={item.qty}
						onChange={(e) => handleQtyChange(item.id, e.target.value)}
						className="w-16 border rounded text-center"
					/>
					<span>{item.price * item.qty} €</span>
				</div>
			))}

			<hr/>

			<div>
				<p>Subtotal:</p>
				<span>{subtotal.toFixed(2)} €</span>
			</div>
			<div>
				<p>IVA (21%):</p>
				<span>{tax.toFixed(2)} €</span>
			</div>
			<div>
				<p>Total:</p>
				<span>{total.toFixed(2)} €</span>
			</div>
		</div>
	);
};
