<script>
export let title;
export let desc;
export let id;

import {onMount} from 'svelte';

onMount(() => {

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
  });

})

</script>

<div id={id} class="modal">
    <div class="modal-content">
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">OK!</a>
    </div>
  </div>