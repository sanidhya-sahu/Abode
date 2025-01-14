import { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser ] = useState(null);

  useEffect(() => {
    const userCookie = Cookies.get('user');
    if (userCookie) {
      setUser (JSON.parse(userCookie));
    }
  }, []);

  const login = async (email, password) => {
    try {
      const res = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      
      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message);
      }
      
      const userData = await res.json();
      setUser (userData);
      Cookies.set('user', JSON.stringify(userData._id), { expires: 7 });
      return userData;
    } catch (error) {
      throw error;
    }
  };

  const register = async (userData) => {
    try {
      const res = await fetch('http://localhost:5000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message);
      }

      const newUser  = await res.json();
      setUser (newUser );
      Cookies.set('user', JSON.stringify(newUser ), { expires: 7 });
      return newUser ;
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    setUser (null);
    Cookies.remove('user');
  };

  const isAuth = () =>{
    const token = Cookies.get('user');
    if (!token) return false;
    else return true
  }

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);