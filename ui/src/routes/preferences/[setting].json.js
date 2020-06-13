import client from "../../apollo.js";
import { gql } from "apollo-boost";

const GET_STUDENT_DETAILS = gql`
  query getStudentToEdit($email: String!) {
    studentByEmail(email: $email) {
      _id
      firstname
      lastname
      profession
      bio
      email
      password
      twitter
      facebook
      linkedin
    }
    favourrByEmail(email: $email) {
      byUser
      title
      description
      _id
      pre1
      pre2
      pre3
      pre4
    }
  }`;

    export async function get(req, res, next) {
  
        let sessionEmail = req.params.setting;
      
        let student = await client.query({
          query: GET_STUDENT_DETAILS,
          variables: {
            email: sessionEmail,
          }
        });
        if (student !== null) {
          res.setHeader("Content-Type", "application/json");
          let json = JSON.stringify(student.data);
          res.end(json);
        } else {
          next();
        }
      }