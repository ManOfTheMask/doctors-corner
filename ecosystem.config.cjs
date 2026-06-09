module.exports = {
  apps: [
    {
      name: 'svelte-site',
      script: 'build/index.js',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,          // Change if you want it on a different port
        HOST: '127.0.0.1'    // Or '0.0.0.0' to expose directly to the web
      }
    }
  ]
};
