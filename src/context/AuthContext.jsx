import { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check localStorage for saved user
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password, role) => {
    // Mock login - In real app, this would be an API call
    const mockUsers = {
      student: { id: 1, name: 'John Student', email, role: 'student' },
      counsellor: { id: 2, name: 'Dr. Smith', email, role: 'counsellor' },
      admin: { id: 3, name: 'Admin User', email, role: 'admin' }
    };

    const userData = mockUsers[role];
    if (userData) {
      setUser(userData);
      localStorage.setItem('user', JSON.stringify(userData));
      return { success: true, user: userData };
    }
    return { success: false, error: 'Invalid credentials' };
  };

  const signup = async (userData) => {
    // Mock signup
    const newUser = {
      id: Date.now(),
      ...userData,
      role: 'student'
    };
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    return { success: true, user: newUser };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/');
  };

  const value = {
    user,
    login,
    signup,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};