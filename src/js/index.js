//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let timerSec = { dig1: "0", dig2: "0", dig3: "0", dig4: "0", dig5: "0", dig6: "0" };

	let timeCounter = function (counter) {
		let counterStr = counter.toString().padStart(6, '0'); // Convert counter to a 6 digit string
		for (let i = 0; i < 6; i++) {
			timerSec[`dig${i + 1}`] = counterStr[i]; // Update each digit of the timer
		}
	};

	let counter = 1;
	setInterval(() => {
		timeCounter(counter); // Call timer function with current counter
		counter++; // Increase counter
	}, 1000);

//render your react application
function renderEachSecond() {
    ReactDOM.render(<Home timer={timerSec} />, document.querySelector("#app"));
  }
  
  // Call the function initially to render for the first time
  renderEachSecond();
  
  // Call the function every second
  setInterval(renderEachSecond, 1000);
