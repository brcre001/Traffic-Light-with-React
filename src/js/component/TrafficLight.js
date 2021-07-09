import React, { useState } from "react";
import PropTypes from "prop-types";

// Creating the Traffic Light component
export const TrafficLight = () => {
	const [color, setColor] = useState("");

	return (
		<>
			<div className="trafficlight">
				<div
					className={
						color == "red" ? "circle red highlight" : "circle red"
					}
					onClick={() => setColor("red")}></div>
				<div
					className={
						color == "yellow"
							? "circle yellow highlight"
							: "circle yellow"
					}
					onClick={() => setColor("yellow")}></div>
				<div
					className={
						color == "green"
							? "circle green highlight"
							: "circle green"
					}
					onClick={() => setColor("green")}></div>
			</div>
			<div className="stick"></div>
		</>
	);
};
