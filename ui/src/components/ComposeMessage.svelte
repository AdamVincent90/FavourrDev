<script context="module">
  import { gql } from "apollo-boost";
  import client from "../apollo.js";

  const SEND_MESSAGE = gql`
    mutation addMessage(
      $emailSend: String
      $emailReceive: String
      $header: String
      $date: String
      $body: String
      $senderName: String
    ) {
      sendMessage(
        emailSend: $emailSend
        emailReceive: $emailReceive
        header: $header
        date: $date
        body: $body
        senderName: $senderName
      ) {
        header
        body
        sender
        receiver
        senderName
        date
      }
    }
  `;
</script>

<script>
  import { onMount, tick } from "svelte";
  import TextField from "../components/Textfield.svelte";
  import TextArea from "../components/Textarea.svelte";
  import Button from "../components/Button.svelte";
  import Divider from "../components/Divider.svelte";
  import AlertBox from "../components/AlertBox.svelte";
  import { fade } from "svelte/transition";

  export let email;
  export let name;
  export let sid;

  export let header;
  export let body;

  export let sessionData;
  export let temp;

  onMount(async () => {
    
    let session = JSON.parse(sessionStorage.getItem("student"));
    temp = session.studentByEmail[0];
    console.log(temp);
  });

  export let cache;

  async function validate() {
    await tick();

    let fullname = temp.firstname + " " + temp.lastname;
    let date = new Date();

    return {
      cache: await client
        .mutate({
          mutation: SEND_MESSAGE,
          variables: {
            emailSend: temp.email,
            emailReceive: email,
            date: date,
            header: header,
            body: body,
            senderName: fullname
          }
        })
        .catch(e => {
          console.log(e);
        })
    };
  }
</script>

<div id="{email}1" class="modal" style="z-index: -1">
  <div class="modal-content z-depth-4">
    <div class="center">
      <img
        class="z-depth-1"
        src="https://api.adorable.io/avatars/50/{email}"
        alt="send {name} a message" />
      <p>Send {name} a message!</p>
    </div>
    <Divider />
    <div class="center">
      <TextArea topic="Enter title of message" bind:value={header} />
      <TextArea topic="What are you asking?" } bind:value={body} />
      <a href="#sent" class="modal-trigger modal-close" on:click={validate}>
        <Button condition="Send Message" />
      </a>
    </div>
  </div>
  <div class="modal-footer">
    <div class="divider" />
    <a  class="modal-close waves-effect waves-green btn-flat">Close</a>
  </div>
</div>

<AlertBox id="sent" title="Message Sent!"/>