<script>
  import Divider from "../components/Divider.svelte";
  import WriteReview from "../components/WriteReview.svelte";
  import { onMount } from "svelte";
  export let bio;
  export let profession;
  export let firstname;
  export let lastname;
  export let email;
  export let twitter;
  export let facebook;
  export let linkedin;
  export let sessionEmail;

  onMount(async () => {
    let temp = JSON.parse(sessionStorage.getItem("student"));
    sessionEmail = temp.studentByEmail[0].email;
    console.log(sessionEmail);
  });
</script>

<style>
  .socials {
    margin: 10px 5% 10px 5%;
    height: 40px;
    width: 40px;
  }

  .profile-headers {
    font-size: 20px;
    color: #212121;
  }

  h5 {
    font-size: 18px;
    margin-top: 10px;
  }

  .profile-container {
    background-color: #fffcfc;
    padding: 10px 10px 10px 10px;
  }
  .likes {
    margin-top: 10px;
  }
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
  {#if facebook != ""}
    <a href="{facebook}">
      <img class="socials" src="facebook.png" alt="facebook" />
    </a>
    {/if}
    {#if linkedin != ""}
    <a href="{linkedin}">
      <img class="socials" src="linkedin.png" alt="linkedin" />
    </a>
    {/if}
    {#if twitter != ""}
    <a href="{twitter}">
      <img class="socials" src="twitter.png" alt="twitter" />
    </a>
    {/if}
  </div>
  <h5 class="center">{bio}</h5>
  <div class="divider" />
  <div class="center likes">
    <i class="material-icons">thumb_up</i>
    {#if sessionEmail !== email}
      <p>
        Find {firstname} helpful? write a
        <a href="#review" class="modal-trigger">review</a>
        !
      </p>
    {/if}
  </div>
</div>

<WriteReview {email} name={firstname} />
