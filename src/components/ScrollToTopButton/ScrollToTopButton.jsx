import { useEffect, useState } from "react";
import "./ScrollToTopButton.css";

export const ScrollToTopButton = () => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => setVisible(window.scrollY > 200);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		visible && (
			<button className="scrolltop-btn" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
			Volver arriba
			</button>
		)
	);
};
