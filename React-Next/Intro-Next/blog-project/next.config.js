const PHASE_DEVELOPMENT_SERVER = require("next/constants");

// allow dynamic value for database access
module.exports = (phase) => {
  // if the website is in development stage, i.e. run using "npm run dev" then will connect
  // to the database with the following credentials
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "furgy2003",
        mongodb_password: "Furgy2003",
        mongodb_cluster: "cluster0",
      },
    };
  }

  // if not in development stage then connect to the following database
  return {
    env: {
      mongodb_username: "furgy2003",
      mongodb_password: "Furgy2003",
      mongodb_cluster: "cluster0",
    },
  };
};
