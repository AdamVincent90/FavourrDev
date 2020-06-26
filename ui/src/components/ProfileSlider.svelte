<script>
  export let message;
  import { onMount } from "svelte";
  import UserModal from "../components/UserModal.svelte";
  import Loader from "../components/Loader.svelte";

  onMount(async () => {});
</script>

<style>
 .pagination {
   z-index: -1;
 }
</style>

{#if !message}
  <Loader />
{/if}
{#if message}
<p>
      These students are currently collaborating with you! Send them a message!
    </p>
  <ul class="pagination">
    {#each message.studentsLinked as { email, _id, firstname }}
      <li class="waves-effect">
        <a href="#{_id}" class="modal-trigger">
          <img
            src="https://api.adorable.io/avatars/40/{email}"
            alt="Profile of user"
            class="responsive-img circle" />
        </a>
        <UserModal name={firstname} {email} sid={_id} />
      </li>
    {/each}
  </ul>
{/if}
