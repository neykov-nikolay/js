export const closureUrlBuilder = (scheme = "") => {
  const innerFunction = (domain, port) => {
    const url = `${scheme}://${domain}:${port}`;
    return url;
  };

  return innerFunction;
};
