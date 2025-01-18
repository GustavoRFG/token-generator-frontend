import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001'; // Verifique se o backend está rodando nesta URL

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000,
});

export const deployToken = async (config) => {
  try {
    const response = await apiClient.post('/deploy', config);
    return response.data;
  } catch (error) {
    console.error('Erro ao implantar o contrato:', error);
    throw error; // Propaga o erro para ser tratado no componente chamador
  }
};

