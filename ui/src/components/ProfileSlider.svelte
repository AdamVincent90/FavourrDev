<script>
  export let message;
  import { onMount } from "svelte";
  import UserModal from "../components/UserModal.svelte";
  import Loader from "../components/Loader.svelte";

  onMount(async () => {});
</script>

<style>
</style>

{#if !message}
  <Loader />
{/if}
{#if message}
<p>
      These students are currently collaborating with you! Send them a message!
    </p>
  <ul class="tabs" style="z-index: 1">
    {#each message.studentsLinked as { email, _id, firstname }}
      <li class="tab">
        <a href="#{_id}" class="modal-trigger">
          <img
            src="https://api.adorable.io/avatars/40/{email}"
            alt="Profile of user"
            class="responsive-img circle hoverable" />
        </a>
      </li>
       <UserModal name={firstname} {email} sid={_id} />
    {/each}
  </ul>
{/if}
