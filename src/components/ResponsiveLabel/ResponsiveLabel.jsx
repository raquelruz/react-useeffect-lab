import { useState, useEffect } from "react";

export const ResponsiveLabel = () => {
	const [layout, setLayout] = useState(
		window.innerWidth < 768 ? "Mobile layout" : "Desktop layout"
	);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 768) {
				setLayout("Mobile layout");
			} else {
				setLayout("Desktop layout");
			}
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className="responsivelabel-container">
			<h2>{layout}</h2>
		</div>
	);
};