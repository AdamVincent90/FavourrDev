<script context="module">
import {gql} from "apollo-boost";
import client from "../apollo.js";

const EDIT_STUDENT = gql`
    mutation editStudent($email: String, $firstname: String, $lastname: String, $bio: String, $profession: String) {
        editDetails(email: $email, firstname: $firstname, lastname: $lastname, bio: $bio, profession: $profession) {
            firstname
            lastname
            email
            bio
            profession
        }
    }
`;
</script>

<script>
import Textfield from "../components/Textfield.svelte";
import Button from "../components/Button.svelte";
import { tick } from "svelte";

export let firstname;
export let lastname;
export let bio;
export let profession;
export let email;
export let cache;

async function submitDetails() {

    await tick();
    console.log(firstname);
    console.log(lastname);
    console.log(bio);

    return {
        cache: await client.mutate({
            mutation: EDIT_STUDENT,
            variables: {
                email: email,
                firstname: firstname,
                lastname: lastname,
                bio: bio,
                profession: profession
            }
        }).catch(e => {
          console.log(e);
    }).then(console.log("edited"))}
}

</script>


<div class="center">
    <Textfield topic="firstname" bind:value={firstname}/>
    <Textfield topic="lastname" bind:value={lastname}/>
    <Textfield topic="bio" bind:value={bio}/>
    <Textfield topic="profession" bind:value={profession}/>
    <a on:click={submitDetails}><Button condition="Edit details"/></a>
    <div class="divider"/>
</div>