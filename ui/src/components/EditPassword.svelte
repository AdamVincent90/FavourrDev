<script>
import Passwordfield from "../components/Passwordfield.svelte";
import Button from "../components/Button.svelte";
import { tick } from "svelte";
export let current;
export let newpwd;
export let match;
export let email;

async function validate() {

    await tick();

    if (newpwd === match) {

        let dataSet = {
            email: email,
            newpwd: newpwd
        }
       
       const res = await fetch(`../../preferences/password/${JSON.stringify(dataSet)}.json`)
       if (res.status === 200) {
           console.log("changed!");
       } 
    }
    else {
        console.log("passwords do no match");
    }
}
</script>

<div class="center">
<Passwordfield topic="New password" bind:value={newpwd}/>
<Passwordfield topic="Confirm New password" bind:value={match}/>
<a on:click={validate}><Button condition="Change Password"/></a>
<div class="divider"/>
</div>
