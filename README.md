# Mon Awesome SDK

SDK JavaScript pour interagir avec l'API NxAuth.

## Installation

```bash
npm install nxauth
```

## Utilisation rapide

```javascript
import NxAuthClient from 'nxauth';

const sdk = new NxAuthClient('api_key');

// Connecter un utilisateur
const user = await login({});

// Créer un utilisateur
const newUser = await NxAuthClient.register({
  email: 'jean@example.com'
  password: "supersecret"
});
```

## Documentation API

### Configuration

- `apiKey` (string, requis): Votre clé API

### Méthodes

#### `login(params)`
Permet de connecter votre utilisateur et retourne les information sur cette utilisateur

#### `register(params)`
Crée un nouvel utilisateur.

<!-- ## Gestion d'erreurs

```javascript
try {
  const user = await sdk.getUser('invalid-id');
} catch (error) {
  if (error instanceof SDKError) {
    console.log('Erreur API:', error.message);
    console.log('Status:', error.status);
  }
}
``` -->

## Tests

```bash
npm test
```

## Licence

MIT