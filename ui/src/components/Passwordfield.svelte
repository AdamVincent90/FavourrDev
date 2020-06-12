<script>
  export let value;
  export let label;
  export let id;

  export let topic;
</script>

<style>

.input-field input:focus + label {
  color: #e2be28 !important;
  font-weight: bold;
}

.input-field input:focus {
  border-bottom: 2px solid #e2be28 !important;
  box-shadow: 0 1px 0 0 #e2be28 !important
}

.material-icons {
  color: #e2be28 !important;
}

@media only screen and (max-width: 600px) {

  .material-icons {font-size: 20px;}
  label {font-size: 12px;}
}

</style>


<div class="input-field col s12 m12 l12">
  <i class="material-icons prefix">check_circle</i>
  <input type="password" bind:value={value} />
  <label>{topic}</label>
</div>