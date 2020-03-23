<script context="module">
import {gql} from "apollo-boost";
import client from "../apollo.js";

const SEND_REPLY = gql`
    mutation replyToStudent($yourEmail: String, $theirEmail: String, $status: String, $nid: Int!, $fid: Int!) {
        respondNotification(yourEmail: $yourEmail, theirEmail: $theirEmail, status: $status, nid: $nid, fid: $fid) {
            _id
            userRequested
            status
            favourrId
        }
    }
`;

const LINK_STUDENTS = gql `
    mutation linkStudents($yourEmail: String, $theirEmail: String) {
        linkStudent(yourEmail: $yourEmail, theirEmail: $theirEmail) {
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

import Button from "../components/Button.svelte";
import { onMount } from "svelte";

onMount(async() => {
    let sessionBody = JSON.parse(sessionStorage.getItem('student'));
    sessionEmail = sessionBody.studentByEmail[0].email;
    
})

async function sendReq() {

return {
      cache: await client
        .mutate({
          mutation: SEND_REPLY,
          variables: {
              yourEmail: sessionEmail,
              theirEmail: user,
              status: "accepted",
              nid: parseInt(nid),
              fid: parseInt(fid)
          }
        })
        .catch(e => {
          console.log(e);
        })
    };
  }

async function link() {

return {
      cache: await client
        .mutate({
          mutation: LINK_STUDENTS,
          variables: {
              yourEmail: sessionEmail,
              theirEmail: user
          }
        })
        .catch(e => {
          console.log(e);
        })
    };
  }


</script>


<div class="collection">
<img src="https://api.adorable.io/avatars/40/{user}" alt="by user: {user}"/>
{#if status == "pending"}
<p>Status: {status}</p>
<p>Note ID: {nid} Favourr ID: {fid}</p>
<div class="row center col l6 m6 s6">
<a on:click={sendReq}> <Button condition="Accept Request"/></a>
<Button condition="Reject Request"/>
</div>
{:else if status == "accepted"}
<p>{user} has accepted your request, confirm below!</p>
<a on:click={link}><Button condition="Confirm"/> </a>
{/if}
</div>