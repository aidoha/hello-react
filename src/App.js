import { useState } from "react";
import Dalida from "./dalida";
import cat from "./img/cat.jpeg";
import "./App.css";

function App() {
	const [counter, setCounter] = useState(0);
	const increaseCounter = () => {
		setCounter(counter + 1);
	};

	const decreaseCounter = () => {
		setCounter(counter - 1);
	};

	const resetCounter = () => {
		setCounter(0);
	};
	const helloWorld = <h1>Hello world</h1>;
	const helloWorldString = "Hello world";

	const math = 2 + 2;

	const user = {
		firstName: "Joe",
		lastName: "Biden",
	};

	const getUsername = ({ firstName, lastName }) => {
		return `Current president of US is ${firstName} ${lastName}`;
	};

	const age = 16;

	const condRendering =
		age >= 18 ? <div>You're an adult</div> : <div>Come later sweetie</div>;

	const divStyle = {
		backgroundColor: "green",
		color: "white",
	};

	return (
		<div>
			{helloWorld}
			<h1
				style={{
					color: "red",
					fontSize: "30px",
				}}
			>
				{helloWorldString}
			</h1>
			<div style={divStyle}>{math}</div>
			<div>{getUsername(user)}</div>
			<img src={cat} />
			{condRendering}

			<div className="hello-world"></div>
			<Dalida />
			<div className="counter-wrapper">
				<div className="counter">{counter}</div>
				<div className="actions">
					<button className="increase" onClick={increaseCounter}>
						Increase
					</button>
					<button className="decrease" onClick={decreaseCounter}>
						Decrease
					</button>
				</div>
				<div className="reset">
					<button onClick={resetCounter}>reset</button>
				</div>
			</div>
		</div>
	);
}

export default App;
