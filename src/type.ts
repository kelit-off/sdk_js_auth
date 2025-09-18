export interface User {
    id: string;
    email?: string;
    phone?: string;
    password?: string;
    metadata?: Record<string, any>;
    [key: string]: any;
}

export interface AuthResponse {
  // champs génériques possibles
  message?: string;
  error_code?: string;
  user?: User;

  // tokens éventuels
//   accessToken?: string;
//   refreshToken?: string;
//   expiresIn?: number;

  // permet de récupérer tout ce que l'API renvoie, même non prévu
  [key: string]: any;
}


export interface LoginBody {
    email?: string;
    phone?: string;
    password?: string;

    [key: string]: any;
}

export interface RegisterBody {
	email?: string;
	phone?: string;
	password?: string;
	mode?: "password" |"opt";
	metadata?: Record<string, any>
}

export interface NxAuthError {
  message: string;
  code?: string;
  original?: any;
}
