<script context="module">
  import { gql } from "apollo-boost";
  import client from "../apollo.js";

  const SEND_MESSAGE = gql`
    mutation addMessage(
      $emailSend: String
      $emailReceive: String
      $header: String
      $body: String
      $senderName: String
    ) {
      sendMessage(
        emailSend: $emailSend
        emailReceive: $emailReceive
        header: $header
        body: $body
        senderName: $senderName
      ) {
        header
        body
        sender
        receiver
        senderName
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
  import { fade } from "svelte/transition";

  export let email;
  export let name;

  export let header;
  export let body;

  export let sessionData;
  export let temp;

  onMount(async () => {
    (function($) {
      $(function() {
        //initialize all modals
        $(".modal").modal();
        //now you can open modal from code
        $("#modal1").modal("open");
      }); // end of document ready
    })(jQuery); // end of jQuery name space

    let session = JSON.parse(sessionStorage.getItem("student"));
    temp = session.studentByEmail[0];
    console.log(temp);
  });

  export let cache;

  async function validate() {
    await tick();

    let fullname = temp.firstname + " " + temp.lastname;

    return {
      cache: await client
        .mutate({
          mutation: SEND_MESSAGE,
          variables: {
            emailSend: temp.email,
            emailReceive: email,
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

<div id="modal1" class="modal">
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
      <a on:click={validate}>
        <Button condition="Send Message" />
      </a>
    </div>
  </div>
  <div class="modal-footer">
    <div class="divider" />
    <a href="#!" class="modal-close waves-effect waves-green btn-flat">Close</a>
  </div>
</div>
