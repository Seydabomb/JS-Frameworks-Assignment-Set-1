const UserInput = ({ onChangeInput, userInput }) => {
	return (
		<section id="user-input">
			<div className="input-group">
				<p>
					<label htmlFor="">Initial Investment</label>
					<input
						type="number"
						required
						value={userInput.initialInvestment}
						// adds the second parameter to onChangeInput when the user types the input
						onChange={(event) => onChangeInput("initialInvestment", event.target.value)}
					/>
				</p>
				<p>
					<label htmlFor="">Annual Investment</label>
					<input
						type="number"
						required
						value={userInput.annualInvestment}
						// adds the second parameter to onChangeInput when the user types the input
						onChange={(event) => onChangeInput("annualInvestment", event.target.value)}
					/>
				</p>
			</div>
			<div className="input-group">
				<p>
					<label htmlFor="">Expected Return</label>
					<input
						type="number"
						required
						value={userInput.expectedReturn}
						// adds the second parameter to onChangeInput when the user types the input
						onChange={(event) => onChangeInput("expectedReturn", event.target.value)}
					/>
				</p>
				<p>
					<label htmlFor="">Duration</label>
					<input
						type="number"
						required
						value={userInput.duration}
						// adds the second parameter to onChangeInput when the user types the input
						onChange={(event) => onChangeInput("duration", event.target.value)}
					/>
				</p>
			</div>
		</section>
	);
};

export default UserInput;
