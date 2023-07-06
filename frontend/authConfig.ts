export const authConfig = {
  authority: 'http://localhost:8080', //Replace with your issuer URL
  client_id: '221722104758861827@pix-frontend', //Replace with your client id
  redirect_uri: 'http://localhost:5173/api/auth/callback/zitadel',
  response_type: 'code',
  scope: 'openid profile email',
  post_logout_redirect_uri: 'http://localhost:5173/',
  userinfo_endpoint: 'http://localhost:8080/oidc/v1/userinfo', //Replace with your user-info endpoint
  response_mode: 'query',
  code_challenge_method: 'S256',
};

export const storageconfig = "oidc.user:http://localhost:8080:221722104758861827@pix-frontend"

