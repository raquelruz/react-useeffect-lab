import { useEffect, useState } from "react";
import "./WindowFocusStatus.css";

export const WindowFocusStatus = () => {
	const [isActive, setIsActive] = useState(true);

	useEffect(() => {
		const handleFocus = () => {
			setIsActive(true);
		};

		const handleBlur = () => {
			setIsActive(false);
		};

		window.addEventListener("focus", handleFocus);
		window.addEventListener("blur", handleBlur);

		return () => {
			window.removeEventListener("focus", handleFocus);
			window.removeEventListener("blur", handleBlur);
		};
	}, []);

	return (
			<div className={`status-box ${isActive ? "active" : "inactive"}`}>
				<p className="status-text">{isActive ? "App is Active" : "App is Inactive"}</p>
			</div>
	);
};
