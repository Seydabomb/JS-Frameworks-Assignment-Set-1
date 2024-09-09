import { useState, Fragment } from "react";

import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

function App() {
	return (
		// JSX elements must have at least 1 parent, hence why we have the outer div
		<>
			<Header />
			<main>
				<CoreConcepts></CoreConcepts>
				<Examples></Examples>
			</main>
		</>
	);
}

export default App;
