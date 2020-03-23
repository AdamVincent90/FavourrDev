<script>

export let value = "";
export let topic;

</script>

<style>

.input-field textarea:focus + label {
  color: #f5c44a !important;
  font-weight: bold;
}

.row .input-field textarea:focus {
  border-bottom: 2px solid #f5c44a !important;
  box-shadow: 0 1px 0 0 #f5c44a !important
}

</style>


    
      <div class="row col sl12 s12 m12 center">
        <div class="input-field">
          <textarea bind:value={value} class="materialize-textarea" data-length="12"></textarea>
          <label for="textarea1">{topic}</label>
        </div>
      </div>
    
  