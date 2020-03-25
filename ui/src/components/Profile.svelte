<script>
  import Divider from "../components/Divider.svelte";

  export let bio;
  export let profession;
  export let firstname;
  export let lastname;
  export let email;
</script>

<style>
  .socials {
    margin-top: 30px;
    padding: 0;
  }

  .profile-headers {
    font-size: 20px;
    color: #212121;
  }

  h5 {font-size: 18px; margin-top: 10px;}

  .profile-container {
    background-color: #fffcfc;
    padding: 10px 10px 10px 10px;
  }
  .likes {margin-top: 10px;}
  
</style>

<div class="profile-container">
  <div class="center">
    <img
      class="responsive-img z-depth-1"
      src="https://api.adorable.io/avatars/100/{email}"
      alt="profile of user" />
    <div class="center">
      <p class="profile-headers">{firstname} {lastname}</p>
      <p class="profile-headers">{profession}</p>
    </div>
  </div>
  <div class="center row socials">
    <i class="material-icons col l4 s4 m4">face</i>
    <i class="material-icons col l4 s4 m4">face</i>
    <i class="material-icons col l4 s4 m4">face</i>
  </div>
  <h5 class="center">{bio}</h5>
  <div class="divider" />
  <div class="center likes">
  <i class="material-icons">thumb_up</i>
  <p>Find {firstname} helpful? Give a like!</p>
  </div>
</div>
