import React, { useState } from "react";
import PropTypes from "prop-types";

// Creating the Traffic Light component
export const TrafficLight = () => {
	const [color, setColor] = useState("red");

	return (
		<>
			{/* Main div for the traffic light */}
			<div className="trafficlight">
				{/* Div's for the individual traffic lights */}
				<div
					className={
						color == "red"
							? "circle red highlight"
							: "circle red black"
					}
					onClick={() => setColor("red")}></div>
				<div
					className={
						color == "yellow"
							? "circle yellow highlight"
							: "circle yellow black"
					}
					onClick={() => setColor("yellow")}></div>
				<div
					className={
						color == "green"
							? "circle green highlight"
							: "circle green black"
					}
					onClick={() => setColor("green")}></div>
			</div>

			{/* Creating bottom pole of traffic light */}
			<div className="stick" onClick={() => setColor("")}></div>
		</>
	);
};
