import React from 'react';
import { deployToken } from '../app/api/apiClient';
import { ethers } from 'ethers';
console.log("Ethers:", ethers); // Adicione esta linha para verificar



const DeployButton = ({ config }) => {
  const handleDeploy = async () => {
    try {
      const formattedConfig = {
        ...config,
        totalSupply: ethers.utils.parseUnits(config.totalSupply || "0", 18).toString(),
        feePercentage: config.feePercentage || 1, // Valor padrão para 1%
        feeRecipient: config.feeRecipient || "0xF7800D3cae5Db40e084f5deD7013c0E6D1bc76E5", // Substitua pelo endereço padrão correto
      };
      console.log("Config being sent:", formattedConfig );
      const response = await deployToken(formattedConfig);
      alert(`Contract deployed! Address: ${response.address}`);
    } catch (error) {
      console.error("Error during deployment:", error);
      alert(`Erro: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <button onClick={handleDeploy} style={{ padding: "10px 20px", backgroundColor: "#4CAF50", color: "white", border: "none", cursor: "pointer" }}>
      Deploy Contract
    </button>
  );
};

export default DeployButton;

