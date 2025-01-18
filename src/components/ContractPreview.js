import React from 'react';

const ContractPreview = ({ config }) => {
  if (!config) return null;

  const { name, symbol, totalSupply } = config;

  return (
    <div style={{ padding: '20px', backgroundColor: '#020D3F', marginTop: '20px' }}>
      <h2>Contract Preview</h2>
      <pre>
{`pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ${name}Token is ERC20 {
    constructor() ERC20("${name}", "${symbol}") {
        _mint(msg.sender, ${totalSupply} * (10 ** decimals()));
    }
}`}
      </pre>
      <p><strong>Cost Estimate:</strong> Approximately 0.01 BNB</p>
    </div>
  );
};

export default ContractPreview;
