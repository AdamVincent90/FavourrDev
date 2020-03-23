<script>
  import { onMount } from "svelte";

  onMount(() => {
    // let elemSelect = document.querySelectorAll("select");
    // let instancesSelect = M.FormSelect.init(elemSelect);

    // elemSelect = document.querySelectorAll("select");
    // instancesSelect = M.FormSelect.init(elemSelect, options);
  });

  export let title;
</script>

<style>
  .input-field {
    color: #212121;
    padding: 10px 10px 10px 10px;
  }

  .material-icons {
    font-size: 30px;
    color: #212121;
    padding-right: 10px;
  }

  select option {
    color: #212121;
  }
</style>

<div class="row">
  <div class="input-field">
    <select>
      <option value="" disabled selected>Choose your option</option>
      <option value="1">
        <i class="material-icons">face</i>
        Digital Design
      </option>
      <option value="2">
        <i class="material-icons">computer</i>
        Computing
      </option>
      <option value="3">
        <i class="material-icons">photo_camera</i>
        Art & Photography
      </option>
      <option value="4">
        <i class="material-icons">insert_chart</i>
        Business
      </option>
      <option value="5">
        <i class="material-icons">apartment</i>
        Law
      </option>
      <option value="6">
        <i class="material-icons">emoji_symbols</i>
        Other
      </option>
    </select>
  </div>
</div>
