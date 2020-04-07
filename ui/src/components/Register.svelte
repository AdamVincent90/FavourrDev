<script>
  import Divider from "../components/Divider.svelte";
  import Dropdown from "../components/Dropdown.svelte";
  import Textfield from "../components/Textfield.svelte";
  import AlertBox from "../components/AlertBox.svelte";

  import { slide, fade } from "svelte/transition";

  import Button from "../components/Button.svelte";

  export let fname;
  export let lname;
  export let desc;
  export let password;
  export let email;
  export let match;
  export let success = false;
  export let dataSet;

  export async function preload() {
    dataSet = {
      firstname: fname,
      lastname: lname,
      bio: desc,
      password: password,
      email: email
    };

    const res = await fetch(`../../registration/${JSON.stringify(dataSet)}.json`);

    if (res.status === 200) {
      console.log("Succesfull student added");
      success = true;
    }
  }

  function validate() {

    switch (true) {
      case (email.includes("@my.northampton.ac.uk") && password === match): preload();
        break;
      case (!email.includes("@my.northampton.ac.uk") && password === match): console.log("Invalid Email");
      break;
      case (email.includes("@my.northampton.ac.uk") && password !== match): console.log("Password does not match!");
      break;
      default: console.log("Both password and email do not match!");
        break;
    }
  }

  export let modalName;
</script>

<style>

</style>

<div in:fade={{ y: 100, duration: 800 }} out:slide>
  <div id="{modalName}" class="modal">
  <h5 class="center">Great Choice, Please fill the form below!</h5>
  <div class="modal-content z-depth-1">
<Textfield topic="First Name" bind:value={fname}/>
<Textfield topic="Last Name" bind:value={lname}/>
<Textfield topic="Summary about you" bind:value={desc}/>
<Textfield topic="UoN Email" bind:value={email}/>
<Textfield topic="Password" bind:value={password}/>
<Textfield topic="Confirm password" bind:value={match}/>
</div>
    <div class="modal-footer center">
      <h5 class="center">All good?</h5>
      <a href="#registered" on:click={validate} class="modal-close">
        <Button condition="Register" />
      </a>
    </div>
  </div>
</div>
{#if success == true}
<AlertBox id="registered" title="You have registered, now please login and get going!"/>
{/if}