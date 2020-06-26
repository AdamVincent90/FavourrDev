<script>
  export let segment;
  import Divider from "../components/Divider.svelte";

  import { onMount } from "svelte";

  export let userAvatar;
  export let sid;

  onMount(() => {
    let elemNav = document.querySelector(".sidenav");
    let instanceNav = M.Sidenav.init(elemNav);

    elemNav = document.querySelector(".sidenav");
    instanceNav = M.Sidenav.init(elemNav, {
      edge: "right",
      draggable: false,
      inDuration: 400,
      scrollable: false
    });

    if (sessionStorage.getItem("student")) {
      let sessionBody = JSON.parse(sessionStorage.getItem("student"));
      userAvatar = sessionBody.studentByEmail[0].email;
      sid = sessionBody.studentByEmail[0]._id;
    }
  });

  async function removeSession() {
    await sessionStorage.removeItem("student");
    window.location.replace("login");
  }
</script>

<style>
  nav {
    background-color: #2196f3;
    border-top: 6px solid #1976d2;
    border-bottom: 2px solid #e2be28;
    overflow: hidden;
    position: fixed;
    z-index: 5;
  }

  .style-sidenav {
    width: 100%;
    background-color: #2196f3;
    height: 25%;
    position: absolute;
    bottom: 0;
  }
  .btn-floating,
  .btn-large {
    background-color: #e2be28;
  }

  a,
  li {
    color: #fffcfc;
    font-weight: bold;
  }

  .brand-logo {
    color: #fffcfc;
    padding-left: 50px;
    font-weight: bold;
    font-family: "Special Elite", cursive;
  }

  .brand-logo {
    letter-spacing: 4px;
  }

  img {
    height: 40px;
    width: 40px;
  }

  .style-sidenav-links {
    padding: 30px 0px 30px 0px;
  }
</style>

<nav class="z-depth-5">
  <div class="nav-wrapper">
    <a
      rel="prefetch"
      class="{segment === undefined ? 'selected' : ''} brand-logo left"
      href=".">
      Favourr
    </a>
    {#if userAvatar}
      <a href="#!" data-target="mobile-demo" class="right sidenav-trigger">
        <i class="material-icons" id="menu">menu</i>
      </a>

      <ul class="right hide-on-med-and-down valign-wrapper">
        <li>
          <a
            on:click={async () => removeSession()}
            rel="prefetch"
            class={segment === 'login' ? 'selected' : ''}
            href="">
            Log Out
          </a>
        </li>
        <li>
          <a href="profile/{sid}">
            <img
              class="responsive-img"
              src="https://api.adorable.io/avatars/40/{userAvatar}"
              alt="user" />
          </a>
        </li>
        <li>
          <a
            rel="prefetch"
            class={segment === 'about' ? 'selected' : ''}
            href="about">
            About
          </a>
        </li>
        <li>
          <a
            rel="prefetch"
            class={segment === 'create' ? 'selected' : ''}
            href="create">
            Create Favourr
          </a>
        </li>
         <li>
      <a
        rel="prefetch"
        class={segment === 'messages' ? 'selected' : ''}
        href="messages">
        Message Centre
      </a>
    </li>
        <li>
          <a
            rel="prefetch"
            class={segment === 'preferences' ? 'selected' : ''}
            href="preferences">
            Preferences
          </a>
        </li>
      </ul>
    {/if}
  </div>
</nav>

<div class="sidenav" id="mobile-demo">
  <ul class="center sidenav-close style-sidenav-links">

    <li>
      <a href="profile/{sid}">
        <img
          class="responsive-img circle"
          src="https://api.adorable.io/avatars/40/{userAvatar}"
          alt="user" />
      </a>
    </li>
    <li>
      <div class="divider" />
    </li>
    <li>
      <a
        rel="prefetch"
        class={segment === undefined ? 'selected' : ''}
        href=".">
        Home
      </a>
    </li>
    <div class="divider" />
    <li>
      <a
        rel="prefetch"
        class={segment === 'create' ? 'selected' : ''}
        href="create">
        Create Favourr
      </a>
    </li>
    <div class="divider" />
    <li>
      <a
        rel="prefetch"
        class={segment === 'messages' ? 'selected' : ''}
        href="messages">
        Message Centre
      </a>
    </li>
    <div class="divider" />
    <li>
      <a
        rel="prefetch"
        class={segment === 'about' ? 'selected' : ''}
        href="about">
        About
      </a>
    </li>
    <div class="divider" />
    <div class="style-sidenav center">
      <a
        rel="prefetch"
        class={segment === 'preferences' ? 'selected' : ''}
        href="preferences">
        <i style="margin-top: 20px; margin-bottom: 20px;" class="material-icons">settings</i>
      </a>
      <a
        on:click={async () => removeSession()}
        class={segment === 'login' ? 'selected' : ''}
        href="login">
        <p style="color: white">Log Out</p>
      </a>
    </div>
  </ul>
</div>

{#if sid}
  <div class="fixed-action-btn hide-on-large-only">
    <a class="btn-floating btn-large pulse" href="messages">
      <i class="large material-icons">chat</i>
    </a>
  </div>
{/if}
