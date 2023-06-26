const axios = require('axios');

const apiClient = axios.create({
  baseURL: 'https://coterranea.nocrm.io', // URL de la API
  headers: {
    'X-API-KEY': '021c22690d44a4c08868dfaaf514305c1b0742f9637603a2',
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

module.exports = {
  getMovies: async () => {
    try {
      const response = await apiClient.get('/api/v2/steps');
      return response.data;
    } catch (error) {
      throw new Error('Error al cargar los datos');
    }
  },
};
