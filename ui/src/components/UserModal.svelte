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

.modal { width: 30% !important ; height: 30% !important ; }

@media only screen and (max-width: 600px) {
.modal { width: 80% !important; height: 30% !important;}
}
</style>

  <div id="{sid}" class="modal">
  <div class="modal-content z-depth-1">
  <a href="profile/{sid}" class="modal-close"><p>View {name}'s profile</p>
  <a href="#{email}1" class="modal-trigger modal-close"><p>Send {name} a message</p>
  </div>
  </div>

<ComposeMessage email={email} name={name} sid={sid}/>