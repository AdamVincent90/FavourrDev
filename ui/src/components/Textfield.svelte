<script>
  import {slide, fade} from "svelte/transition";
  export let value;
  export let label;
  export let id;

  export let topic;
</script>

<style>
  .input-field input:focus + label {
    color: #e2be28 !important;
    font-weight: bold;
    margin: 10px 5px 10px 5px;
  }

  .input-field input:focus {
    border-bottom: 2px solid #e2be28 !important;
    box-shadow: 0 1px 0 0 #e2be28 !important;
  }

  .material-icons {
    color: #e2be28 !important;
  }

  @media only screen and (max-width: 600px) {
    .material-icons {
      font-size: 20px;
    }
    label {
      font-size: 12px;
    }
  }
</style>

<div in:slide out:slide id={value} class="input-field col s12 m12 l12">
  <i class="material-icons prefix">check_circle</i>
  <input type="text" bind:value />
  <label class="active" for="prefix">{topic}</label>
</div>
