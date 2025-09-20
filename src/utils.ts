import { AuthResponse} from "./type";
import { NxAuthError } from "./error";
import { api } from "./lib/api";

export async function request(
    url: string,
    method: "GET" | "POST" = "GET",
    apiKey: string,
    body?: Record<string, any>
): Promise<AuthResponse> {
    try {
        const headers = {
            Authorization: `Bearer ${apiKey}`,
        };

        let response;

        if (method === "GET") {
            response = await api().get(url, {
                headers,
                params: body, // axios gère automatiquement la query string
            });
        } else if (method === "POST") {
            response = await api().post(url, body, {
                headers,
            });
        } else {
            throw new NxAuthError(`Méthode HTTP non supportée: ${method}`);
        }

        return response.data as AuthResponse;
    } catch (err: any) {
        // Tu peux customiser l'erreur selon ta structure NxAuthError
        throw new NxAuthError(err.response?.data?.message || err.message);
    }
}

