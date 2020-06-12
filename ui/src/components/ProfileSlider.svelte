<script>
export let message;
import { onMount } from "svelte";
import UserModal from "../components/UserModal.svelte";
import Loader from "../components/Loader.svelte";

onMount(async() => {


})

</script>

<style>

</style>

{#if !message}
    <Loader/>
    {/if}
    {#if message}
<ul class="pagination">
    <li class="disabled">
      <a href="#!">
        <i class="material-icons">chevron_left</i>
      </a>
    </li>
  {#each message.studentsLinked as {email, _id, firstname}}
    <li class="waves-effect">
      <a href="#{_id}" class="modal-trigger"><img src="https://api.adorable.io/avatars/40/{email}" alt="Profile of user"></a>
      <UserModal name={firstname} email={email} sid={_id}/>
    </li>
    {/each}
    
    <li class="waves-effect">
      <a href="">
        <i class="material-icons">chevron_right</i>
      </a>
    </li>
  </ul>
  {/if}