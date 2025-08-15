import "./App.css";
import { CounterPreview } from "./components/CounterPreview/CounterPreview";
import { WelcomeMessage } from "./components/WelcomeMessage/WelcomeMessage";

export const App = () => {
	return (
		<>
			<div className="app-container">

				<WelcomeMessage />

        <CounterPreview />

			</div>
		</>
	);
};

export default App;
