import { login } from "./modules/auth";
import { AuthResponse, LoginBody, RegisterBody } from "./type";
import { request } from "./utils";

interface NxAuthConfig {
    apiKey: string
}

export class NxAuthClient {
    private apiKey: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey
    }

    async login(params: LoginBody): Promise<AuthResponse> {
        return request("/auth/login", "POST", this.apiKey, params)
    }

    async register(params: RegisterBody): Promise<AuthResponse> {
        return request("/auth/register", "POST", this.apiKey, params)
    }
}