<script>
  import Divider from "../components/Divider.svelte";
  import Dropdown from "../components/Dropdown.svelte";
  import Textfield from "../components/Textfield.svelte";
  import AlertBox from "../components/AlertBox.svelte";
  import PasswordField from "../components/PasswordField.svelte";

  import { slide, fade } from "svelte/transition";

  import Button from "../components/Button.svelte";

  export let fname;
  export let lname;
  export let desc;
  export let password;
  export let email;
  export let match;
  export let success = false;
  export let catname;
  export let dataSet;
  export let validationMessage;
  export let link;

  export async function preload() {
    dataSet = {
      firstname: fname,
      lastname: lname,
      bio: desc,
      password: password,
      email: email,
      catname: catname,
      default: ""
    };

    const res = await fetch(
      `../../registration/${JSON.stringify(dataSet)}.json`
    );

    if (res.status === 200) {
      validationMessage =
        "You have registered, now please login and get going!";
      setTimeout(function() {
        window.location.replace("login");
      }, 3000);
    }
  }

  function validate() {
    switch (true) {
      case email.includes("@my.northampton.ac.uk") && password === match:
        preload();
        break;
      case !email.includes("@my.northampton.ac.uk") && password === match:
        validationMessage = "Invalid Email";
        break;
      case email.includes("@my.northampton.ac.uk") && password !== match:
        validationMessage = "Password does not match!";
        break;
      default:
        validationMessage = "Both password and email do not match!";
        break;
    }
  }

  export let modalName;
</script>

<div in:fade={{ y: 100, duration: 800 }} out:slide>
  <div id={modalName} class="modal">
    <h5 class="center">Great Choice, Please fill the form below!</h5>
    <div class="modal-content z-depth-1">
      <label>Choose your University Profession</label>
      <Dropdown bind:value={catname} />
      <Textfield topic="First Name" bind:value={fname} />
      <Textfield topic="Last Name" bind:value={lname} />
      <Textfield topic="Summary about you" bind:value={desc} />
      <Textfield topic="UoN Email" bind:value={email} />
      <PasswordField topic="Password" bind:value={password} />
      <PasswordField topic="Confirm password" bind:value={match} />
    </div>
    <div class="modal-footer center">

      {#if (catname, fname, lname, desc, email, password, match)}
        <div in:fade={{ y: 100, duration: 300 }}>
          <h6 class="center">All good?</h6>
          <a href="#registered" on:click={validate} class="modal-trigger">
            <Button condition="Register" />
          </a>
        </div>
      {/if}
    </div>
  </div>
</div>

<AlertBox id="registered" bind:title={validationMessage} bind:divert={link} />
