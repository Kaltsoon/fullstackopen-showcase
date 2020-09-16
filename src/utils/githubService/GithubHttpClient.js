class GithubHttpClient {
  constructor({ clientId, clientSecret, httpClient }) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.httpClient = httpClient;
  }

  getAuth() {
    return this.clientId && this.clientSecret
      ? {
          username: this.clientId,
          password: this.clientSecret,
        }
      : undefined;
  }

  getOptions(options) {
    return {
      ...options,
      auth: this.getAuth(),
    };
  }

  get(url, options) {
    return this.httpClient.get(url, this.getOptions(options));
  }
}

export default GithubHttpClient;
