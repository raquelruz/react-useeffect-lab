import { useEffect, useState } from "react";
import "./AutoRefreshingClock.css";

export const AutoRefreshingClock = () => {
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			// console.log("Incrementando segundos");

			setSeconds((prev) => {
				const newValue = prev + 1;
				// console.log(newValue);

				return newValue;
			});
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<div>
			<h2>{seconds} segundos han pasado</h2>
		</div>
	);
};
