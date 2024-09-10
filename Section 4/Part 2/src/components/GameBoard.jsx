const GameBoard = ({ onSelectSquare, board }) => {
	// const [gameBoard, setGameBoard] = useState(initialGameBoard);

	// function handleSelectSquare(rowIndex, colIndex) {
	// 	setGameBoard((prevGameBoard) => {
	// 		const updatedBoard = [...prevGameBoard.map((innerArray) => [...innerArray])];
	// 		updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
	// 		return updatedBoard;
	// 		// Create a new variable with the new array instead of this:
	// 		// prevGameBoard[rowIndex][colIndex] = 'X';
	// 		// return prevGameBoard;
	// 	});

	// 	onSelectSquare();
	// }
	return (
		<ol id="game-board">
			{board.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol>
						{row.map((playerSymbol, colIndex) => (
							<li key={colIndex}>
								{/* disabled=true when playerSymbol isn't null, false when there is a symbol present so it won't be disabled */}
								{/* So every button in the grid can only be clicked once */}
								<button
									onClick={() => onSelectSquare(rowIndex, colIndex)}
									disabled={playerSymbol !== null}
								>
									{playerSymbol}
								</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
};

export default GameBoard;
