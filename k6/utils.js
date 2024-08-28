export const parseEnvInt = (envVar, defaultValue) => {
  const value = __ENV[envVar];
  return /^\d+$/.test(value) ? parseInt(value, 10) : defaultValue;
};

export const logContentType = (response) => {
  const contentType = response.headers['Content-Type'] || response.headers['content-type'];
  console.log('Received Content-Type:', contentType);
};