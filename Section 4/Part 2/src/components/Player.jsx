import { useState } from "react";

const Player = ({ initialName, symbol }) => {
	const [playerName, setPlayerName] = useState(initialName);
	const [isEditing, setIsEditing] = useState(false);

	function handleEditClick() {
		// don't use setIsEditing(!isEditing) because react schedules when to use the change.
		// To get it instantaneously, use the arrow function
		setIsEditing((editing) => !editing); // if true, sets to false. If false, sets to true.
	}

	function handleChange(event) {
		setPlayerName(event.target.value);
	}

	let editablePlayerName = <span className="player-name">{playerName}</span>;
	// let btnCaption = 'Edit';

	if (isEditing) {
		editablePlayerName = (
			<input type="text" required value={playerName} onChange={handleChange} />
		);
		// btnCaption = 'Save';
	}

	return (
		<li>
			<span className="player">
				{editablePlayerName}
				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
		</li>
	);
};

export default Player;
