<script>
import { onMount } from "svelte";
import Label from "../components/Label.svelte";
import ComposeMessage from "../components/ComposeMessage.svelte";
export let modal;
export let email;
export let name;
export let sid;

</script>

  <div id="{sid}" class="modal">
  <h5 class="center">Great Choice, Please fill the form below!</h5>
  <div class="modal-content z-depth-1">
  <a href="profile/{sid}"><Label value="View {name}'s profile"/></a>
  <a href="#{email}1" class="modal-trigger modal-close"><Label value="Send {name} a message"/></a>
  </div>
  <div class="modal-footer">
  <p class="right">Close</p>
  </div>
  </div>

<ComposeMessage email={email} name={name} sid={sid}/>