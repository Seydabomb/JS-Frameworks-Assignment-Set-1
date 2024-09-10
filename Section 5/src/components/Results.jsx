import { calculateInvestmentResults, formatter } from "../util/investment";

const Results = ({ input }) => {
	// Our input variable has the same properties as calculateInvestmentResults. That's why we can just put it in directly
	// Otherwise create a new variable with the same look as the calculateInvestmentResults and pass that in.
	const resultsData = calculateInvestmentResults(input);
	const initialInvestment =
		resultsData[0].valueEndOfYear -
		resultsData[0].interest -
		resultsData[0].annualInvestment;

	return (
		<table id="result">
			<thead>
				{/* Title of each column */}
				<tr>
					<th>Year</th>
					<th>Investment Value</th>
					<th>Interest (Year)</th>
					<th>Total Interest</th>
					<th>Invested Capital</th>
				</tr>
			</thead>
			{/* The actual data that will be outputted */}
			<tbody>
				{resultsData.map((yearData) => {
					const totalInterest =
						yearData.valueEndOfYear -
						yearData.annualInvestment * yearData.year -
						initialInvestment;
					const totalAmountInvested = yearData.valueEndOfYear - totalInterest;

					return (
						// good to use as the key since yearData.year is a unique value for every line
						<tr key={yearData.year}>
							<td>{yearData.year}</td>
							{/* Makes the output look pretty */}
							<td>{formatter.format(yearData.valueEndOfYear)}</td>
							<td>{formatter.format(yearData.interest)}</td>
							<td>{formatter.format(totalInterest)}</td>
							<td>{formatter.format(totalAmountInvested)}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default Results;
