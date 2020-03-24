<script>
import { onMount } from "svelte";
import Divider from "../components/Divider.svelte";

export let head;

onMount(async () => {
    var elems = document.querySelectorAll(".collapsible");
    var instances = M.Collapsible.init(elems);

    elems = document.querySelectorAll(".collapsible");
    instances = M.Collapsible.init(elems, {
      inDuration: 600
    });
  });


</script>

<ul class="collapsible" data-collapsible="expandable">
  <li class="z-depth-1">
    <div class="collapsible-header">
      <i class="material-icons">chevron_right</i>
      {head}
    </div>
     <div class="collapsible-body">
     <span>
     Something here
     </span>
     </div>
    <Divider/>
  </li>
</ul>