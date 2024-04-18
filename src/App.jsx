import Header from './components/Header.jsx';
import { calculateInvestmentResults } from './util/investment.js';
import UserInput from './components/UserInput.jsx';
import { useState } from 'react';
import Results from './components/Results.jsx';

const initialInvestmentInfo = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [investmentInfo, setInvestmentInfo] = useState({ ...initialInvestmentInfo });

  const isInvestmentInfoValid = investmentInfo.duration >= 1;

  function handleInvestmentInfoChange(inputIdentifier, newValue) {
    setInvestmentInfo(prevInfo => {
      return {
        ...prevInfo,
        [inputIdentifier]: parseInt(newValue),
      };
    });
  }

  const investmentResults = calculateInvestmentResults(investmentInfo);

  return (
    <>
      <Header />
      <UserInput investmentInfo={investmentInfo} onInvestmentInfoChange={handleInvestmentInfoChange} />
      {!isInvestmentInfoValid && <p className="center">Please enter a duration greater than zero.</p>}
      {isInvestmentInfoValid && <Results investmentResults={investmentResults} />}
    </>
  );
}

export default App;
