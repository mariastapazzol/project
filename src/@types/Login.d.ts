export interface SignInProps {
  email: string;
  password: string;
}

export interface IAuthContextData {
  signIn: ({ email, password }: SignInProps) => Promise<void>;
}

export interface AuthProviderProps {
  children: ReactNode;
}
