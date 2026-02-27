// Mock Google Fonts responses for offline builds
module.exports = new Proxy(
  {},
  {
    get(_, url) {
      return `
        /* fallback font mock for ${url} */
        @font-face {
          font-family: 'mock';
          src: local('Arial');
        }
      `;
    },
  }
);
