<script>
  import Divider from "../../components/Divider.svelte";
  import { slide, fade } from "svelte/transition";
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<div in:fade={{ y: 100, duration: 800 }} out:slide>
  <h3>About Favourr</h3>

  <Divider />

  <p>
    Ever felt like you have no experience? Ever felt like nobody is giving you a
    chance? Well at the University of Northampton, you came to the right place!
  </p>

  <img class="responsive-img" src="workplace.jpg" alt="open source" />

  <h3>Work together</h3>

  <Divider />
  <p>
    Favourr encourages you to work with other students within your university,
    using your own expertise to help a fellow student out! Because you did them
    a favourr, believe it or not, you just taken your first steps into having
    commercial experience!
  </p>
  <Divider/>
<h6>Learn More about the University of Northampton</h6>
  <div class="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Qk0WqxEeo6w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <Divider/>
</div>
