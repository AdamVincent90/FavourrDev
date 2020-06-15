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
</style>

<div class="carousel carousel-slider z-depth-0" data-indicators="true">
  <div
    class="carousel-item blue lighten-2 white-text valign-wrapper"
    href="#one!">
    <div class="container">
      <h2>Improve your skills</h2>
      <p class="white-text">Work with others while improving your expertise</p>
    </div>
  </div>
  <div
    class="carousel-item blue darken-2 white-text valign-wrapper"
    href="#two!">
    <div class="container">
      <h2>Develop your soft skills</h2>
      <p class="white-text">
        collaborating with other students will help you develop you as a person.
      </p>
    </div>
  </div>
  <div class="carousel-item blue white-text valign-wrapper" href="#three!">
    <div class="container">
      <h2>No expert competition</h2>
      <p class="white-text">
        This app is catered for students, and only students.
      </p>
    </div>
  </div>
  <div class="carousel-item blue white-text valign-wrapper" href="#four!">
    <div class="container">
      <h2>Let your course profession be your unique skill</h2>
      <p class="white-text">
        Create projects with other students, and use your combined expertise to
        create something special!
      </p>
    </div>
  </div>
</div>
