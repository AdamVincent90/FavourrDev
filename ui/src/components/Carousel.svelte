<script>
  import { onMount } from "svelte";

  onMount(async () => {
   autoplay();
    function autoplay() {
      window.$(".carousel").carousel("next");
      setTimeout(autoplay, 4500);
    }
  });
</script>

<style>
  .carousel {
    border-bottom: 2px solid #e2be28;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    z-index: -1;
    height: 250px;
  }

  @media only screen and (max-width: 600px) {
    .carousel {
      height: 200px;
    }
  }

  .btn-floating,
  .btn-large {
    background-color: #e2be28;
  }
</style>


<div class="carousel carousel-slider z-depth-0" data-indicators="true">
  <div
    class="carousel-item blue lighten-2 white-text valign-wrapper"
    href="#one!">
    <div class="container">
      <h2>First Slide</h2>
      <p class="white-text">Etiam porta sem malesuada magna mollis euismod.</p>
    </div>
  </div>
  <div
    class="carousel-item blue darken-2 white-text valign-wrapper"
    href="#two!">
    <div class="container">
      <h2>Second Slide</h2>
      <p class="white-text">Etiam porta sem malesuada magna mollis euismod.</p>
    </div>
  </div>
  <div class="carousel-item blue white-text valign-wrapper" href="#three!">
    <div class="container">
      <h2>Third Slide</h2>
      <p class="white-text">Etiam porta sem malesuada magna mollis euismod.</p>
    </div>
  </div>
  <div class="carousel-item blue white-text valign-wrapper" href="#four!">
    <div class="container">
      <h2>Fourth Slide</h2>
      <p class="white-text">Etiam porta sem malesuada magna mollis euismod.</p>
    </div>
  </div>
</div>

<!-- Gitter Chat Link -->
<div class="fixed-action-btn">
  <a class="btn-floating btn-large pulse" href="messages">
    <i class="large material-icons">chat</i>
  </a>
</div>
