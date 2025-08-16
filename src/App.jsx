import { useState } from "react";
import "./App.css";
import { AutoRefreshingClock } from "./components/AutoRefreshingClock/AutoRefreshingClock";
import { CounterPreview } from "./components/CounterPreview/CounterPreview";
import { WelcomeMessage } from "./components/WelcomeMessage/WelcomeMessage";
import { ResponsiveLabel } from "./components/ResponsiveLabel/ResponsiveLabel";
import { ProductsOnMount } from "./components/ProductsOnMount/ProductsOnMount";
import { LocalProductSearch } from "./components/LocalProductsSearch/LocalProductSearch";
import { CartSummary } from "./components/CartSummary/CartSummary";

export const App = () => {
	const [showClock, setShowClock] = useState(true);
	const [showProducts, setShowProducts] = useState(false);
	const [showLocalProducts, setShowLocalProducts] = useState(false);

	return (
		<>
			<div className="app-container">
				<WelcomeMessage />

				<CounterPreview />

				<div className="clock-container">
					{showClock && <AutoRefreshingClock />}
					<button onClick={() => setShowClock((prev) => !prev)}>
						{showClock ? "Ocultar" : "Mostrar"} Reloj
					</button>
				</div>

				<ResponsiveLabel />

				<div className="products-container">
					{showProducts && <ProductsOnMount />}
					<button onClick={() => setShowProducts((prev) => !prev)}>
						{showProducts ? "Ocultar" : "Mostrar"} Productos
					</button>
				</div>

				<div className="products-container">
					{showLocalProducts && <LocalProductSearch />}
					<button onClick={() => setShowLocalProducts((prev) => !prev)}>
						{showLocalProducts ? "Ocultar" : "Mostrar"} Productos
					</button>
				</div>

				<div className="cart-container">
					<CartSummary />
				</div>

				
			</div>
		</>
	);
};

export default App;
