import client from "../../apollo.js";
import { gql } from "apollo-boost";
import { bcrypt } from "../../server.js";

const GET_STUDENT_DATA = gql`
  query getStudentData($email: String) {
    studentByEmail(email: $email) {
      _id
      firstname
      lastname
      email
      password
    }
  }
`;

export async function get(req, res, next) {
  let studentData = JSON.parse(req.params.signin);

  const student = await client.query({
    query: GET_STUDENT_DATA,
    variables: {
      email: studentData.email
    }
  });
  if (student !== null) {
    let hashcode = student.data.studentByEmail[0].password;

    delete student.data.studentByEmail[0].password;

    bcrypt.compare(
      studentData.password,
      hashcode, //this may return undefined
      function(err, result) {
        if (result === true) {
          console.log("matched!");
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify(student.data));
        }
        if (err) {
          throw err;
        }
      }
    );
  } else {
    next();
  }
}
