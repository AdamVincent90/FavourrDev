<script>
export let title;
export let desc;
export let id;

import {onMount} from 'svelte';

onMount(() => {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
    elems = document.querySelectorAll('.modal');
    instances = M.Modal.init(elems);
})

</script>

<div id={id} class="modal">
    <div class="modal-content">
      <h4>{title}</h4>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">OK!</a>
    </div>
  </div>