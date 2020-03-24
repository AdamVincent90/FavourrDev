<script>
export let message;
import { onMount } from "svelte";


onMount(async() => {


})

</script>



<ul class="pagination">
    <li class="disabled">
      <a href="#!">
        <i class="material-icons">chevron_left</i>
      </a>
    </li>
  {#if message}
  {#each message.studentsLinked as {email, _id}}
    <li class="waves-effect">
      <a href="profile/{_id}"><img src="https://api.adorable.io/avatars/40/{email}" alt="Profile of user"></a>
    </li>
    {/each}
    {/if}
    <li class="waves-effect">
      <a href="#!">
        <i class="material-icons">chevron_right</i>
      </a>
    </li>
  </ul>