<script>
  import { onMount } from "svelte";
  export let option;

  onMount(() => {
    let elemSelect = document.querySelectorAll("select");
    let instancesSelect = M.FormSelect.init(elemSelect);

    elemSelect = document.querySelectorAll("select");
    instancesSelect = M.FormSelect.init(elemSelect);
  });

  export let value;
</script>

<style>
  option {
    color: #e2be28 !important;
    padding: 10px 10px 10px 10px;
  }
</style>

<div class="row">
  <div class="input-field">
    <select bind:value>
      <option value="" disabled selected>Choose your option</option>
      <option value="Digital Design">Digital Design</option>
      <option value="Computing">Computing</option>
      <option value="Art & Photography">Art & Photography</option>
      <option value="Business">Business</option>
      <option value="Law">Law</option>
      <option value="Other">Other</option>
    </select>
  </div>
</div>
