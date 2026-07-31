// src/services/api.js
const API_BASE_URL = 'http://localhost:5000/api';

// Get token from localStorage
const getToken = () => localStorage.getItem('access_token');

// Helper function for API calls
export const apiCall = async (endpoint, options = {}) => {
  const token = getToken();
  
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const config = {
    ...options,
    headers,
  };

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'API request failed');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Auth API calls
export const authAPI = {
  register: (userData) => 
    apiCall('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    }),
  
  login: (credentials) => 
    apiCall('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    }),
  
  getCurrentUser: () => 
    apiCall('/auth/me', {
      method: 'GET',
    }),
};

// Appointment API calls
export const appointmentAPI = {
  getAll: () => 
    apiCall('/appointments', {
      method: 'GET',
    }),
  
  create: (appointmentData) => 
    apiCall('/appointments', {
      method: 'POST',
      body: JSON.stringify(appointmentData),
    }),
  
  updateStatus: (id, status) => 
    apiCall(`/appointments/${id}/status`, {
      method: 'PUT',
      body: JSON.stringify({ status }),
    }),
  
  getAvailableCounsellors: () => 
    apiCall('/appointments/available-counsellors', {
      method: 'GET',
    }),
};

// Feedback API calls
export const feedbackAPI = {
  create: (feedbackData) => 
    apiCall('/feedback', {
      method: 'POST',
      body: JSON.stringify(feedbackData),
    }),
  
  getAll: () => 
    apiCall('/feedback', {
      method: 'GET',
    }),
  
  getStats: () => 
    apiCall('/feedback/stats', {
      method: 'GET',
    }),
};

export default apiCall;