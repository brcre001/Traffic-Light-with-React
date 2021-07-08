import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// Creating the Traffic Light component
export const TrafficLight = () => {
	const [color, setColor] = useState("");

	let circle = <h1 className="fas fa-circle"></h1>;

	return (
		<>
			<div className="trafficlight bg-dark text-center p-2 align-middle rounded justify-content-center">
				<div
					className={
						color == "red" ? "text-danger highlight" : "text-danger"
					}
					onClick={() => setColor("red")}>
					{circle}
				</div>
				<div
					className={
						color == "yellow"
							? "text-warning highlight"
							: "text-warning"
					}
					onClick={() => setColor("yellow")}>
					{circle}
				</div>
				<div
					className={
						color == "green"
							? "text-success highlight"
							: "text-success"
					}
					onClick={() => setColor("green")}>
					{circle}
				</div>
			</div>
			<div className="stick bg-dark"></div>
		</>
	);
};
