export default function UserInput({ investmentInfo, onInvestmentInfoChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>initial investment</label>
          <input
            type="number"
            value={investmentInfo.initialInvestment}
            required
            onChange={e => onInvestmentInfoChange('initialInvestment', e.target.value)}
          />
        </p>
        <p>
          <label>annual investment</label>
          <input
            type="number"
            value={investmentInfo.annualInvestment}
            required
            onChange={e => onInvestmentInfoChange('annualInvestment', e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>expected return</label>
          <input
            type="number"
            value={investmentInfo.expectedReturn}
            required
            onChange={e => onInvestmentInfoChange('expectedReturn', e.target.value)}
          />
        </p>
        <p>
          <label>duration</label>
          <input
            type="number"
            value={investmentInfo.duration}
            required
            onChange={e => onInvestmentInfoChange('duration', e.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
