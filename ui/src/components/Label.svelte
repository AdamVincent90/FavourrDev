<script>
  export let value;
</script>

<style>
  label {
    color: #212121;
    font-size: 20px;
    margin: 10px 0 10px 0;
  }

  @media only screen and (max-width: 600px) {
    label {
      font-size: 14px;
    }
  }
</style>

<div class="center" style="margin-bottom: 50px;">
  <label>{value}</label>
</div>
