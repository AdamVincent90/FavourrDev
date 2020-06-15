<script>
  import { onMount, onDestroy } from "svelte";
  import Button from "../components/Button.svelte";
  import TextField from "../components/Textfield.svelte";

  export let passcode;
  export let email;

  onMount(() => {
    const element = document.getElementById("modal1");
    const instance = M.Modal.init(element, {
      dismissible: true
    });

    instance.open();
  });
</script>

<div id="modal1" class="modal">
  <div class="modal-content" />
</div>
