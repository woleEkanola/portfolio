module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    {resolve: 'gatsby-source-contentful',
    options: {
      spaceId: 'mu0ve1mpza7k',
      accessToken: 'b8a9ca89aecb31ec139288d02875fc7e4342cb4f05cc3a0f2ec40e66b81db21d',
    }
  },
    'gatsby-plugin-react-helmet'],
};
