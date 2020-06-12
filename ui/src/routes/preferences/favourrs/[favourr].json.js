import client from "../../../apollo.js";
import { gql } from "apollo-boost";

const DELETE_FAVOURR = gql`
  query deleteAFavourr($fid: Int!) {
    deleteFavourr(fid: $fid) {
    _id
    }
  }`;

  export async function get(req, res, next) {
  
    let fid =   parseInt(req.params.favourr);
  
    let favourr = await client.mutate({
      mutation: DELETE_FAVOURR,
      variables: {
        fid: fid,
      }
    });
    if (favourr == null) {
      res.setHeader("Content-Type", "application/json");
      let json = JSON.stringify(favourr.data);
      res.end(json);
    } else {
      next();
    }
  }