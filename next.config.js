const isGithubPages = process.env.NODE_ENV === "production";

module.exports = {
  // For static export (next export)
  assetPrefix: isGithubPages ? "/MCPM/" : "",
  basePath: isGithubPages ? "/MCPM" : "",
};
