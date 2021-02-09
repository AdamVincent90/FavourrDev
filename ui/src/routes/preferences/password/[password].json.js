import { gql } from "apollo-boost";
import { bcrypt } from "../../../server.js";
import client from "../../../apollo.js";

const CHANGE_PASSWORD = gql`
  mutation changeStudentPassword($email: String, $pwd: String) {
    changePassword(email: $email, pwd: $pwd) {
      _id
      email
      firstname
      lastname
      password
    }
  }
`;

export async function get(req, res, next) {
  let details = JSON.parse(req.params.password);
  let saltrounds = details.newpwd.length + 5;
  console.log("I am in password");

  bcrypt.hash(details.newpwd, saltrounds, async function(err, hash) {
    const edited = await client.mutate({
      mutation: CHANGE_PASSWORD,
      variables: {
        email: details.email,
        pwd: hash
      }
    });
    if (edited !== null) {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(edited.data));
    } else {
      next();
    }
    if (err) {
      throw err.message;
    }
  });
}
