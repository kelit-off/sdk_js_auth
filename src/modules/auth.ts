import { LoginBody, AuthResponse } from "../type";
import { request } from "../utils";

export async function login(params: LoginBody = {}): Promise<AuthResponse> {
    // attendre la réponse de l'API
    // const res = await request("/auth/login", "POST", params);

    // retourner directement la réponse
    // return res;
    return {}
}
