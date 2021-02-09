<script>
  export let type;
</script>

<style>
  div {
    display: inline-block;
    margin: 0 0 0 20px;
  }
  p {
    text-align: center;
    font-size: 12px;
  }

  .material-icons:hover {
    background-color: #1976d2;
  }

  .round {
    border-radius: 40%;
    background-color: #1976d2;
  }
</style>

<div>
  <a class="btn round">
    <i class="material-icons">add</i>
  </a>
  <p>{type}</p>
</div>
