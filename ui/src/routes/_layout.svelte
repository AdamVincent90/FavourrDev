<script>
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";
  import Carousel from "../components/Carousel.svelte";

export let segment;

import { beforeUpdate } from "svelte";

beforeUpdate(async() => {

if (sessionStorage.getItem('student') === null && segment !== 'login') {
  window.location.replace('login');
}

})

</script>

<style>
.background {background-color: #FFFCFC; }
.container {margin-bottom: 10px; margin-top: 28px; overflow: hidden;}
</style>

<svelte:head>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</svelte:head>




<Nav {segment} />

<Carousel/>
<div class="background">
<main class="container background" >
  <slot />
</main>
</div>
<Footer />
