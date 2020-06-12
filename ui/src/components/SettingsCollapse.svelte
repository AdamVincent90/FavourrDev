<script>
import { onMount } from "svelte";
import Divider from "../components/Divider.svelte";
import EditDetails from "../components/EditDetails.svelte";
import EditPassword from "../components/EditPassword.svelte";
import Favourr from "../components/Favourr.svelte";
import Button from "../components/Button.svelte";

export let head;
export let student;

onMount(async () => {
    var elems = document.querySelectorAll(".collapsible");
    var instances = M.Collapsible.init(elems);

    elems = document.querySelectorAll(".collapsible");
    instances = M.Collapsible.init(elems, {
      inDuration: 600
    });
  });

async function deleteFavourr(fid) {
  let identifer = fid;

  const res = await fetch(`../../preferences/favourrs/${identifer}.json`);
  if (res.status === 200) {
      console.log("Succesfull favourr deleted");
    }
}

</script>

<style>
  .material-icons {color: #e2be28;}
</style>

<ul class="collapsible" data-collapsible="expandable">
  <li class="z-depth-0">
    <div class="collapsible-header">
      <i class="material-icons">chevron_right</i>
      {head}
    </div>
     <div class="collapsible-body">
     {#if student}
     {#if head == "Edit your details"}
     <span>
      {#each student.studentByEmail as {firstname, lastname, bio, profession, email}}
      <EditDetails firstname={firstname} lastname={lastname} bio={bio} profession={profession} email={email}/>
      {/each}
      </span>
      {:else if head == "Change your password"}
      <span>
      {#each student.studentByEmail as {email}}
      <EditPassword {email} />
      {/each}
     </span>
     {:else if head == "Manage Favourrs"}
     <span>
     {#each student.favourrByEmail as {title, description, byUser, _id, pre1, pre2, pre3, pre4}}
     <Favourr title={title} description={description} user={byUser} pre1={pre1} pre2={pre2} pre3={pre3} pre4={pre4}/>
   <a on:click={() => deleteFavourr(_id)} href=""> <Button condition="Delete Favourr" /></a>
     {/each}
     </span>
     {/if}
     {/if}
     </div>
     <Divider/>
  </li>
</ul>