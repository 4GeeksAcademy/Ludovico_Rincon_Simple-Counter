import React from "react";
import SecondsCounter from "./SecondsCounter.jsx";

//create your first component
const Home = (props) => {
	return (
		<div className="container rounded backgroundApp d-flex justify-content-center py-3">
			<SecondsCounter seconds={<i className="fas fa-clock"></i>} />
			<SecondsCounter seconds={props.timer.dig1} />
			<SecondsCounter seconds={props.timer.dig2} />
			<SecondsCounter seconds={props.timer.dig3} />
			<SecondsCounter seconds={props.timer.dig4} />
			<SecondsCounter seconds={props.timer.dig5} />
			<SecondsCounter seconds={props.timer.dig6} />
		</div>

	);
};

export default Home;
