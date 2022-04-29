const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
 if (phase === PHASE_DEVELOPMENT_SERVER) {
  return {
   env: {
    mongodb_username: "vjba",
    mongodb_password: "iOQNeVDNtv8ln5w8",
    mongodb_clustername: "cluster0",
    mongodb_database: "newsletter",
   },
  };
 }

 return {
  env: {
   mongodb_username: "vjba",
   mongodb_password: "iOQNeVDNtv8ln5w8",
   mongodb_clustername: "cluster0",
   mongodb_database: "newsletter-produc",
  },
 };
};
