export const closureUrlBuilder = (scheme = "") => {
  return (domain = "", port = "") => {
    return `${scheme}://${domain}:${port}`;
  };
};
