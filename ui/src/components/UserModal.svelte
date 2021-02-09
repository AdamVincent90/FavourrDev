<script>
  import { onMount } from "svelte";
  import Label from "../components/Label.svelte";
  import ComposeMessage from "../components/ComposeMessage.svelte";
  export let modal;
  export let email;
  export let name;
  export let sid;
</script>

<style>
  .modal {
    width: 30% !important ;
    height: 15% !important ;
  }

  p {
    margin-bottom: 20px;
  }

  @media only screen and (max-width: 600px) {
    .modal {
      width: 80% !important;
      height: 15% !important;
    }
  }
</style>

<ComposeMessage {email} {name} {sid} />

<div id={sid} class="modal" style="z-index: 1">
    <a href="profile/{sid}" class="modal-close">
      <p>View {name}'s profile</p>
      <a href="#{email}1" class="modal-trigger modal-close">
        <p>Send {name} a message</p>
      </a>
    </a>
</div>

