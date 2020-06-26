import client from "../../apollo.js";
import { gql } from "apollo-boost";

const GET_MESSAGES_BY_USER = gql`
  query getMessages($email: String!) {
    messagesToUser(email: $email) {
      header
      body
      sender
      senderName
      date
      _id
    }
    messagesFromUser(email: $email) {
      header
      body
      sender
      senderName
      date
      _id
    }
    favourrNotifications(email: $email) {
      userRequested
      status
      favourrId
      _id
      senderName
      senderId
    }
    studentsLinked(email: $email) {
      firstname
      lastname
      email
      _id
    }
  }
`;

export async function get(req, res, next) {
  let sessionEmail = req.params.message;

  let messages = await client.query({
    query: GET_MESSAGES_BY_USER,
    variables: {
      email: sessionEmail
    }
  });
  if (messages !== null) {
    res.setHeader("Content-Type", "application/json");
    let json = JSON.stringify(messages.data);
    res.end(json);
  } else {
    next();
  }
}
