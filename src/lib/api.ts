import axios from "axios";

export function api() {
    const api = axios.create({
        baseURL: 'https://api.nxauth.fr',
        timeout: 10000,
        headers: { 'Content-Type': 'application/json' }
    });

    return api;
}