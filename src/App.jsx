import { useState } from "react";
import "./App.css";
import { AutoRefreshingClock } from "./components/AutoRefreshingClock/AutoRefreshingClock";
import { CounterPreview } from "./components/CounterPreview/CounterPreview";
import { WelcomeMessage } from "./components/WelcomeMessage/WelcomeMessage";
import { ResponsiveLabel } from "./components/ResponsiveLabel/ResponsiveLabel";
import { ProductsOnMount } from "./components/ProductsOnMount/ProductsOnMount";

export const App = () => {
	const [showClock, setShowClock] = useState(true);
	const [showProducts, setShowProducts] = useState(false);

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

				<div className="producst-container">
					{showProducts && <ProductsOnMount />}
					<button onClick={() => setShowProducts((prev) => !prev)}>
						{showProducts ? "Ocultar" : "Mostrar"} Productos
					</button>
				</div>
			</div>
		</>
	);
};

export default App;
