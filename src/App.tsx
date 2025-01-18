
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ConfigForm from './components/ConfigForm';
import ContractPreview from './components/ContractPreview';
import DeployButton from './components/DeployButton';
import DynamicStableToken from './components/DynamicStableToken';
import Metrics from './components/metrics/Metrics';

// Defina o tipo para as configurações
interface Config {
  name: string;
  symbol: string;
  totalSupply: string;
  feePercentage: string;
  feeRecipient: string;
}

function App() {
  const [config, setConfig] = useState<Config>({
    name: '',
    symbol: '',
    totalSupply: '',
    feePercentage: '',
    feeRecipient: '',
  });

  const handleConfigChange = (newConfig: Config) => {
    setConfig(newConfig);
  };

  const handleDeploy = () => {
    alert('Contract Deployed! ');
  };

  return (
    <div className="App">
      <Header />
      <DynamicStableToken />
      <div className="form-container">
        <ConfigForm onConfigChange={handleConfigChange} />
      </div>
      <div className="contract-preview">
        <ContractPreview config={config} />
        <DeployButton config={config} onDeploy={handleDeploy}/>
        
      </div>
      <div className="form-container">
      <Metrics />
      </div>
      
      <footer>
        © 2025 Token Creator. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
