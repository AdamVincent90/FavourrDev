<script>
export let title;
export let desc;
export let id;
export let divert;

import {onMount, beforeUpdate} from 'svelte';
import Loader from "../components/Loader.svelte";

console.log(divert);

onMount(() => {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
    elems = document.querySelectorAll('.modal');
    instances = M.Modal.init(elems);
})

beforeUpdate(() => {
  divert = divert;
})


</script>

<div id={id} class="modal">
    <div class="modal-content">
      {#if title === undefined}
      <Loader/>
      {/if}
      {#if title !== undefined}
      <h4>{title}</h4>
       {/if}
    </div>
    <div class="modal-footer">
      <a href={divert} class="modal-close waves-effect waves-green btn-flat">OK!</a>
    </div>
  </div>