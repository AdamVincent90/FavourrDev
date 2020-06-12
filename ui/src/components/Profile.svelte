<script>
  import Divider from "../components/Divider.svelte";
  import WriteReview from "../components/WriteReview.svelte";
  export let bio;
  export let profession;
  export let firstname;
  export let lastname;
  export let email;
</script>

<style>
  
  .socials {
    margin: 10px 5% 10px 5%;
    height: 52px;
    width: 52px;
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
  <div class=" center">
    <img class="socials" src="facebook.png" alt="facebook"/>
    <img class="socials" src="linkedin.png" alt="linked"/>
    <img class="socials" src="twitter.png" alt="twitter"/>
  </div>
  <h5 class="center">{bio}</h5>
  <div class="divider" />
  <div class="center likes">
  <i class="material-icons">thumb_up</i>
  <p>Find {firstname} helpful? write a <a href="#review" class="modal-trigger">review</a>!</p>
  </div>
</div>

<WriteReview  email={email} name={firstname} />