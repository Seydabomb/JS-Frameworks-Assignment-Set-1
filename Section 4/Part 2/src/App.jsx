import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS } from "./components/winning-combinations";

const PLAYERS = {
	X: "Player 1",
	O: "Player 2",
};

const INITIAL_GAME_BOARD = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

// Deriving the currently active player symbol from the gameTurns
function deriveActivePlayer(gameTurns) {
	let currentPlayer = "X";

	if (gameTurns.length > 0 && gameTurns[0].player === "X") {
		currentPlayer = "O";
	}

	return currentPlayer;
}

function deriveGameBoard(gameTurns) {
	// Creates a copy of the INITIAL_GAME_BOARD and makes sure it copies everything from the lower levels into a new array
	let gameBoard = [...INITIAL_GAME_BOARD.map((array) => [...array])];

	for (const turn of gameTurns) {
		const { square, player } = turn;
		const { row, col } = square;

		gameBoard[row][col] = player;
	}
	return gameBoard;
}

function deriveWinner(gameBoard, players) {
	let winner;

	for (const combination of WINNING_COMBINATIONS) {
		console.log("Checking for winner");
		const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
		const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
		const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

		// if firstSquareSymbol is not null (truthy)
		if (
			firstSquareSymbol &&
			firstSquareSymbol === secondSquareSymbol &&
			firstSquareSymbol === thirdSquareSymbol
		) {
			winner = players[firstSquareSymbol];
		}
	}

	return winner;
}

// It is updating the UI with very turn because of the useState()
function App() {
	const [players, setPlayers] = useState(PLAYERS);
	// Our entire game is derived from the gameTurns state, so if we want everything to reset then we only have to manipulate that one variable
	const [gameTurns, setGameTurns] = useState([]);

	const activePlayer = deriveActivePlayer(gameTurns);
	const gameBoard = deriveGameBoard(gameTurns);
	const winner = deriveWinner(gameBoard, players);

	// hasDraw is true when all 9 squares have been filled (9 turns have passed) and there was no winner
	const hasDraw = gameTurns.length === 9 && !winner;

	function handleSelectSquare(rowIndex, colIndex) {
		// setActivePlayer((currentActivePlayer) => (currentActivePlayer === "X" ? "O" : "X"));

		// Deriving the active player based on the previous turn
		setGameTurns((prevTurns) => {
			const currentPlayer = deriveActivePlayer(prevTurns);

			const updatedTurns = [
				{ square: { row: rowIndex, col: colIndex }, player: currentPlayer },
				...prevTurns,
			];

			return updatedTurns;
		});
	}

	function handleRestart() {
		setGameTurns([]);
	}

	function handlePlayerNameChange(symbol, newName) {
		setPlayers((prevPlayers) => {
			return {
				...prevPlayers,
				[symbol]: newName,
			};
		});
	}

	return (
		<main>
			<div id="game-container">
				<ol id="players" className="highlight-player">
					<Player
						initialName={PLAYERS.X}
						symbol="X"
						isActive={activePlayer === "X"}
						onChangeName={handlePlayerNameChange}
					></Player>
					<Player
						initialName={PLAYERS.O}
						symbol="O"
						isActive={activePlayer === "0"}
						onChangeName={handlePlayerNameChange}
					></Player>
				</ol>
				{/* If winner is truthy then it outputs the paragraph */}
				{(winner || hasDraw) && (
					<GameOver winner={winner} onRestart={handleRestart}></GameOver>
				)}
				<GameBoard onSelectSquare={handleSelectSquare} board={gameBoard}></GameBoard>
			</div>
			<Log turns={gameTurns}></Log>
		</main>
	);
}

export default App;
