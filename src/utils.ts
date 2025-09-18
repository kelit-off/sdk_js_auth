import { AuthResponse, NxAuthError } from "./type";

export async function request(
    url: string,
    method: string = "GET",
    apiKey: string,
    body?: Record<string, any>
): Promise<AuthResponse> {
    let fetchUrl = "http://127.0.0.1:3000" + url;
    let fetchOptions: RequestInit = {
        method,
        headers: {
            "Content-Type": `application/json`,
            Authorization: `Bearer ${apiKey}`,
        },
    };

    if (method === "POST") {
        fetchOptions.body = JSON.stringify(body); // <-- envoie JSON
    }

    if (method === "GET" && body) {
        const params = new URLSearchParams();
        for (const key in body) {
            if (body[key] !== undefined) {
                params.append(key, String(body[key]));
            }
        }
        fetchUrl += `?${params.toString()}`;
    }

    const res = await fetch(fetchUrl, fetchOptions);
    
    return res.json();
}
