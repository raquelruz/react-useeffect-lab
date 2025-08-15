import "./App.css";
import { WelcomeMessage } from "./components/WelcomeMessage/WelcomeMessage";

export const App = () => {
	return (
		<>
			<div className="app-container">

				<WelcomeMessage />
        
			</div>
		</>
	);
};

export default App;
