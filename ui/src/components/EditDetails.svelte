<script context="module">
import {gql} from "apollo-boost";
import client from "../apollo.js";

const EDIT_STUDENT = gql`
    mutation editStudent($email: String, $firstname: String, $lastname: String, $bio: String, $profession: String, $linkedin: String, $twitter: String, $facebook: String) {
        editDetails(email: $email, firstname: $firstname, lastname: $lastname, bio: $bio, profession: $profession, linkedin: $linkedin, twitter: $twitter, facebook: $facebook) {
            firstname
            lastname
            email
            bio
            profession
            twitter
            facebook
            linkedin
        }
    }
`;
</script>

<script>
import Textfield from "../components/Textfield.svelte";
import Button from "../components/Button.svelte";
import AlertBox from "../components/AlertBox.svelte";
import DropDown from "../components/DropDown.svelte";
import { tick } from "svelte";

export let firstname;
export let lastname;
export let bio;
export let profession;
export let twitter;
export let linkedin;
export let facebook;
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
                profession: profession,
                twitter: twitter,
                facebook: facebook,
                linkedin: linkedin
            }
        }).catch(e => {
          console.log(e);
    }).then(setTimeout(() => {
        window.location.replace('preferences');
    }, 1000))}

}

</script>


<div class="center">
    <DropDown bind:value={profession}/>
    <Textfield topic="firstname" bind:value={firstname}/>
    <Textfield topic="lastname" bind:value={lastname}/>
    <Textfield topic="bio" bind:value={bio}/>
    <Textfield topic="facebook link" bind:value={facebook}/>
    <Textfield topic="twitter link" bind:value={twitter}/>
    <Textfield topic="linkedin link" bind:value={linkedin}/>
    <a href="#details" class="modal-trigger" on:click={submitDetails}><Button condition="Edit details"/></a>
    <div class="divider"/>
</div>
<AlertBox id="details" title="Details changed!" divert="preferences"/>