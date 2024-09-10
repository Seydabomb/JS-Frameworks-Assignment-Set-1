import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
	// defined userInput here
	const [userInput, setUserInput] = useState({
		initialInvestment: 10000,
		annualInvestment: 1200,
		expectedReturn: 6,
		duration: 10,
	});

	const inputIsValid = userInput.duration >= 1;

	function handleChange(inputIdentifier, newValue) {
		setUserInput((prevUserInput) => {
			return {
				...prevUserInput,
				// turns the newValue into a number
				[inputIdentifier]: +newValue,
			};
		});
	}

	return (
		<>
			<Header></Header>
			{/* The attributes here are the arguments/properties in the UserInput component */}
			<UserInput userInput={userInput} onChangeInput={handleChange}></UserInput>
			{/* Outputs the message if the input isn't valid */}
			{!inputIsValid && (
				<p className="center">Please enter a duration greater than zero. </p>
			)}
			{/* Outputs the Results if the input is valid from the user */}
			{inputIsValid && <Results input={userInput}></Results>}
		</>
	);
}

export default App;
