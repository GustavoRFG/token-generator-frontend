import React, { useState } from 'react';

const ConfigForm = ({ onConfigChange }) => {
  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [totalSupply, setTotalSupply] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfigChange({ name, symbol, totalSupply });
  };

  return (
    <form onSubmit={handleSubmit} className="config-form-container">
      <h2>Configure Token</h2>
      <div>
        <label>Token Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="form-input"
        />
      </div>
      <div>
        <label>Symbol:</label>
        <input
          type="text"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          required
          className="form-input"
        />
      </div>
      <div>
        <label>Total Supply:</label>
        <input
          type="number"
          value={totalSupply}
          onChange={(e) => setTotalSupply(e.target.value)}
          required
          className="form-input"
        />
      </div>
      <button type="submit" className="form-button">
        Update Configuration
      </button>
    </form>
  );
};

export default ConfigForm;

