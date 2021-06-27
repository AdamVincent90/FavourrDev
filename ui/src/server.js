import sirv from "sirv";
import polka from "polka";
import compression from "compression";
import * as sapper from "@sapper/server";
import proxy from "http-proxy-middleware";
import dotenv from "dotenv";

export const bcrypt = require("bcrypt");

dotenv.config();

const GRAPHQL_URI = process.env.GRAPHQL_URI;
const apiProxy = proxy(GRAPHQL_URI);

<<<<<<< HEAD
//FUCK YOU CUNT

=======
>>>>>>> 38bd1c825ad71bf9e3bd64757d80911ec722dab6
const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

const server = polka();

server.use("/graphql", apiProxy);

server
  .use(
    compression({ threshold: 0 }),
    sirv("static", { dev }),
    sapper.middleware()
  )
  .listen(PORT, err => {
    if (err) console.log("error", err);
  });

// Used for deployment via vercel
// export default server;
