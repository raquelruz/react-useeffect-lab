import { useState } from "react";
import "./App.css";
import { AutoRefreshingClock } from "./components/AutoRefreshingClock/AutoRefreshingClock";
import { CounterPreview } from "./components/CounterPreview/CounterPreview";
import { WelcomeMessage } from "./components/WelcomeMessage/WelcomeMessage";

export const App = () => {
	const [showClock, setShowClock] = useState(true);

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

			</div>
		</>
	);
};

export default App;
