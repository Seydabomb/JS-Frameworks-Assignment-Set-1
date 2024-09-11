import { useState, useRef } from "react";

export default function Player() {
	// playerName is the value whe are getting from useRef()
	const playerName = useRef();

	const [enteredPlayerName, setEnteredPlayerName] = useState("");

	function handleClick() {
		setEnteredPlayerName(playerName.current.value);
		playerName.current.value = "";
	}

	return (
		<section id="player">
			<h2>Welcome {enteredPlayerName ? enteredPlayerName : "unknown entity"}</h2>
			<p>
				<input ref={playerName} type="text" />
				<button onClick={handleClick}>Set Name</button>
			</p>
		</section>
	);
}
