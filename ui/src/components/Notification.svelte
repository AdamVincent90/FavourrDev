<script context="module">
  import { gql } from "apollo-boost";
  import client from "../apollo.js";

  const SEND_REPLY = gql`
    mutation replyToStudent(
      $yourEmail: String
      $theirEmail: String
      $status: String
      $nid: Int!
      $fid: Int!
      $sessionName: String
      $senderId: Int
    ) {
      respondNotification(
        yourEmail: $yourEmail
        theirEmail: $theirEmail
        status: $status
        nid: $nid
        fid: $fid
        sessionName: $sessionName
        senderId: $senderId
      ) {
        _id
        userRequested
        status
        favourrId
        senderName
        senderId
      }
    }
  `;

  const LINK_STUDENTS = gql`
    mutation linkStudents($yourEmail: String, $theirEmail: String, $nid: Int!) {
      linkStudent(yourEmail: $yourEmail, theirEmail: $theirEmail, nid: $nid) {
        _id
        firstname
        lastname
        bio
        email
        profession
      }
    }
  `;
</script>

<script>
  export let user;
  export let status;
  export let sessionEmail;
  export let nid;
  export let fid;
  export let senderName;
  export let senderId;
  export let sessionName;

  import Button from "../components/Button.svelte";
  import AlertBox from "../components/AlertBox.svelte";
  import { onMount } from "svelte";

  onMount(async () => {
    let sessionBody = JSON.parse(sessionStorage.getItem("student"));
    sessionEmail = sessionBody.studentByEmail[0].email;
    sessionName = `${sessionBody.studentByEmail[0].firstname} ${sessionBody.studentByEmail[0].lastname}`;
    senderId = parseInt(sessionBody.studentByEmail[0]._id);
  });

  async function sendReq(decision) {
    return {
      cache: await client
        .mutate({
          mutation: SEND_REPLY,
          variables: {
            yourEmail: sessionEmail,
            senderId: senderId,
            theirEmail: user,
            status: decision,
            nid: parseInt(nid),
            fid: parseInt(fid),
            sessionName: sessionName,
          }
        })
        .catch(e => {
          console.log(e);
        })
        .then(
          setTimeout(() => {
            window.location.replace("messages");
          }, 1000)
        )
    };
  }

  async function link() {
    return {
      cache: await client
        .mutate({
          mutation: LINK_STUDENTS,
          variables: {
            yourEmail: sessionEmail,
            theirEmail: user,
            nid: parseInt(nid)
          }
        })
        .catch(e => {
          console.log(e);
        })
        .then(
          setTimeout(() => {
            window.location.replace("messages");
          }, 1000)
        )
    };
  }
</script>

<div class="collection">
  <a href="profile/{senderId}"><img src="https://api.adorable.io/avatars/40/{user}" alt="by user: {user}" /></a>
  {#if status == 'pending'}
    <p>Status: {status}</p>
    <p>User {senderName} has applied for your Favourr! Reference - Favourr ID: {fid}</p>
    <div class="row center col l6 m6 s6">
      <a
        href="#{nid}"
        on:click={async () => sendReq('accepted')}
        class="modal-trigger">
        <Button condition="Accept Request" />
      </a>
      <a
        href="#{nid}1"
        on:click={async () => sendReq('rejected')}
        class="modal-trigger">
        <Button condition="Reject Request" />
      </a>
      <AlertBox
        id={nid}
        title="You have accepted {user}'s request! Now just wait..." />
      <AlertBox id="{nid}1" title="You have rejected {user}'s request." />
    </div>
  {:else if status == 'accepted'}
    <p>{senderName} has accepted your request, confirm below!</p>
    <a href="#{user}" on:click={link} class="modal-trigger">
      <Button condition="Confirm" />
    </a>
    <AlertBox
      id={user}
      title="You have confirmed {user}'s request, now get collaborating!" />
  {:else if status == 'rejected'}
    <p>{senderName} has rejected your request, but keep applying for others!</p>
  {/if}
</div>
