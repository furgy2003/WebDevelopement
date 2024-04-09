/** @type {import('next').NextConfig} */
const PHASE_DEVELOPMENT_SERVER = require("next/constants");

module.exports = (phase) => {
  // if the website is in development stage, i.e. run using "npm run dev" then will connect
  // to the database with the following credentials
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        NEXTAUTH_SECRET: "5m9WDTdIGl1F6hCt6pT1fGBgfCh8+IolsNGd3Dsr2vQ=",
      },
      env: {
        mongodb_username: "furgy2003",
        mongodb_password: "Furgy2003",
        mongodb_cluster: "cluster0",
      },
    };
  }

  // if not in development stage then connect to the following database
  return {
    reactStrictMode: true,
    env: {
      NEXTAUTH_SECRET: "5m9WDTdIGl1F6hCt6pT1fGBgfCh8+IolsNGd3Dsr2vQ=",
    },
    env: {
      mongodb_username: "furgy2003",
      mongodb_password: "Furgy2003",
      mongodb_cluster: "cluster0",
    },
  };
};
