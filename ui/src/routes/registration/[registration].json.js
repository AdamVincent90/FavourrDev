import { bcrypt } from "../../server";
import client from "../../apollo.js";
import { gql } from "apollo-boost";



const CREATE_STUDENT = gql`
  mutation addStudent(
    $profession: String
    $firstname: String
    $lastname: String
    $email: String
    $bio: String
    $password: String
  ) {
    createStudent(
      profession: $profession
      firstname: $firstname
      lastname: $lastname
      email: $email
      bio: $bio
      password: $password
    ) {
      firstname
      lastname
      bio
      profession
      email
    }
  }
`;

export async function get(req, res, next) {
  let studentData = JSON.parse(req.params.registration);
  let salts = studentData.password.length + 5;

  bcrypt.hash(studentData.password, salts, async function(err, hash) {
    const newStudent = await client.mutate({
      mutation: CREATE_STUDENT,
      variables: {
        profession: "Computing",
        firstname: studentData.firstname,
        lastname: studentData.lastname,
        bio: studentData.bio,
        email: studentData.email,
        password: hash
      }
    });
    if (newStudent !== null) {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(newStudent.data));
    } else {
      next();
    }
    if (err) {
      throw(err.message);
    }
  });
}
