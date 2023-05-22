import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  ReactNode,
} from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AuthProviderProps,
  IAuthContextData,
  SignInProps,
} from '../@types/Login';
import api from '../services/api';

const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      // pegar o token do localStorage
      // se tiver o token ele vai para '/home' se nao tiver mandar para login '/'
    }
    loadUser();
  }, []);

  const signIn = useCallback(async ({ email, password }: SignInProps) => {
    try {
      // passar os dados do login para a api
      // salvar o token no localStorage
      // navegar o usuário para tela home 'navigate('/home')'
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): IAuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }

  return context;
}

export { AuthProvider, useAuth };
