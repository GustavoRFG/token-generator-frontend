declare module './components/DynamicStableToken' {
    const DynamicStableToken: React.FC;
    export default DynamicStableToken;
  }
  
  declare module './components/Header' {
    const Header: React.FC;
    export default Header;
  }
  
  declare module './components/ConfigForm' {
    interface Config {
      name: string;
      symbol: string;
      totalSupply: string;
      feePercentage: string;
      feeRecipient: string;
    }
    const ConfigForm: React.FC<{ onConfigChange: (newConfig: Config) => void }>;
    export default ConfigForm;
  }
  
  declare module './components/ContractPreview' {
    interface Config {
      name: string;
      symbol: string;
      totalSupply: string;
      feePercentage: string;
      feeRecipient: string;
    }
    const ContractPreview: React.FC<{ config: Config }>;
    export default ContractPreview;
  }
  
  declare module './components/DeployButton' {
    interface Config {
      name: string;
      symbol: string;
      totalSupply: string;
      feePercentage: string;
      feeRecipient: string;
    }
    const DeployButton: React.FC<{ config: Config; onDeploy: () => void }>;
    export default DeployButton;
  }
  
  declare module './components/metrics/Metrics' {
    const Metrics: React.FC;
    export default Metrics;
  }
  