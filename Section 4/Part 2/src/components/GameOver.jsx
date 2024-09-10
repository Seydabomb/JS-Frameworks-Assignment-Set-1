const GameOver = ({ winner, onRestart }) => {
	return (
		<div id="game-over">
			<h2>Game Over!</h2>
			{/* Only outputs if winner is set */}
			{winner && <p>{winner} won!</p>}
			{/* Only outputs if draw is set */}
			{!winner && <p>It&apos;s a draw!</p>}
			<p>
				<button onClick={onRestart}>Rematch!</button>
			</p>
		</div>
	);
};

export default GameOver;
