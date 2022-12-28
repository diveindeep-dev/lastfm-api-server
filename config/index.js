const CLIENT_URL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : process.env.PRODUCT_URL;

export { CLIENT_URL };
