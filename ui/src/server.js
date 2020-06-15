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

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

// assign server variable
const server = polka();

// proxy to api
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
