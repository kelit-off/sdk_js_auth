// type.ts (ou un fichier séparé pour les types/erreurs)
export class NxAuthError extends Error {
    public code?: number; // optionnel : code HTTP ou interne
    public details?: any; // optionnel : données supplémentaires

    constructor(message: string, code?: number, details?: any) {
        super(message);
        this.name = "NxAuthError";
        this.code = code;
        this.details = details;

        // Pour corriger le prototype dans TypeScript
        Object.setPrototypeOf(this, NxAuthError.prototype);
    }
}

export class ValidationError extends Error {}
