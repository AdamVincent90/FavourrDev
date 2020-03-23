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

  .profile-container {
    background-color: #fffcfc;
    padding: 10px 10px 10px 10px;
    margin-bottom: 50px;
  }
</style>

<div class="profile-container">
  <div class="center">
    <img
      class="responsive-img z-depth-1"
      src="https://api.adorable.io/avatars/40/{email}"
      alt="profile of user" />
    <div class="row">
      <h5 class="profile-headers">{firstname} {lastname}</h5>
      <h5 class="profile-headers">{profession}</h5>
    </div>
  </div>
  <div class="center row socials">
    <i class="material-icons col l4 s4 m4">menu</i>
    <i class="material-icons col l4 s4 m4">menu</i>
    <i class="material-icons col l4 s4 m4">menu</i>
  </div>
  <div class="divider" />
  <p class="center">{bio}</p>
</div>
