import { useState, useEffect } from "react";
import "./MousePositionTracker.css"

export default function MousePositionTracker() {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const onMouseMove = (e) => {
			setPosition({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener("mousemove", onMouseMove);

		return () => window.removeEventListener("mousemove", onMouseMove);
	}, []);

	return (
		<div>
			<h2>Mouse Position Tracker</h2>
			<p className="coordinates">
				X: {position.x} px, Y: {position.y} px
			</p>
		</div>
	);
}
