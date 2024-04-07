import { KeycloakService } from 'keycloak-angular';

export function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080',
        realm: 'avaliador-credito',
        clientId: 'avaliador-credito',
      },
      initOptions: {
        onLoad: 'login-required',
        flow: 'standard',
      },
    });
}
