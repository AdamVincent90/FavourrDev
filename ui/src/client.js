import * as sapper from "@sapper/app";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize";

M.AutoInit();

console.log(sessionStorage);

sapper.start({
  target: document.querySelector("#sapper")
});
