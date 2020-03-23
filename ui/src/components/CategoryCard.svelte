<script>
  export let categoryName;
  export let icon;
  export let segment;
</script>

<style>
  .card {
    text-align: center;
    text-decoration: none;
    background-color: #f4f3f3;
    border-radius: 2%;
  }

  i {
    font-size: 90px;
    color: #b1b1b1;
  }
  
  h1 {
    font-size: 1rem;
    font-weight: bold;
    color: #212121;
    padding-bottom: 10px;
  }

  .card:hover {
    background-color: rgb(230, 230, 230);
  }

  a {
    color: inherit;
  }

  @media only screen and (max-width: 600px) {
    h1 {
      font-size: 0.8rem;
    }
  }
</style>

<div class="col l4 m4 s6">
  <a sapper-noscroll rel=prefetch href="favourrs/{categoryName}">
    <div class="card hoverable z-depth-2">
      <i class="material-icons">{icon}</i>
      <h1>{categoryName}</h1>
    </div>
  </a>
</div>
