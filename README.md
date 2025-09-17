# Mon Awesome SDK

SDK JavaScript pour interagir avec l'API Mon Service.

## Installation

```bash
npm install mon-awesome-sdk
```

## Utilisation rapide

```javascript
import MonSDK from 'mon-awesome-sdk';

const sdk = new MonSDK({
  apiKey: 'votre-api-key'
});

// Récupérer un utilisateur
const user = await sdk.getUser('123');

// Créer un utilisateur
const newUser = await sdk.createUser({
  name: 'Jean Dupont',
  email: 'jean@example.com'
});
```

## Documentation API

### Configuration

- `apiKey` (string, requis): Votre clé API
- `baseURL` (string, optionnel): URL de base de l'API
- `timeout` (number, optionnel): Timeout en millisecondes

### Méthodes

#### `getUser(id: string): Promise<User>`
Récupère un utilisateur par son ID.

#### `createUser(userData: CreateUserData): Promise<User>`
Crée un nouvel utilisateur.

#### `updateUser(id: string, userData: Partial<CreateUserData>): Promise<User>`
Met à jour un utilisateur existant.

#### `deleteUser(id: string): Promise<void>`
Supprime un utilisateur.

#### `listUsers(options?: ListOptions): Promise<UserList>`
Récupère la liste des utilisateurs avec pagination.

## Gestion d'erreurs

```javascript
try {
  const user = await sdk.getUser('invalid-id');
} catch (error) {
  if (error instanceof SDKError) {
    console.log('Erreur API:', error.message);
    console.log('Status:', error.status);
  }
}
```

## Tests

```bash
npm test
```

## Licence

MIT