<script context="module">
import {gql} from "apollo-boost";
import client from "../apollo.js";

const DELETE_FAVOURR = gql`
  mutation deleteAFavourr($fid: Int) {
    deleteFavourr(fid: $fid) {
        _id
    }
  }`;
</script>

<style>
  p {
    text-align: center;
    padding-bottom: 10px;
  }

  .card {
    border-radius: 2%;
  }
  
  .card-action { color: #e2be28}

  span {
    padding-bottom: 10px;
  }
</style>

<script>
import Button from "../components/Button.svelte";
  import AlertBox from "../components/AlertBox.svelte";
  import { slide } from "svelte/transition";
  import { onMount, tick } from "svelte";
  export let title;
  export let id;
  export let description;
  export let sessionEmail;
  export let user;
  export let pre1;
  export let pre2;
  export let pre3;
  export let pre4;
  export let cache;


async function deleteFavourr() {
  let identifer = parseInt(id);
  console.log(identifer);
await tick();

    return {
        cache: await client.mutate({
            mutation: DELETE_FAVOURR,
            variables: {
                fid: identifer
            }
        }).catch(e => {
          console.log(e);
    }).then(setTimeout(() => {
        window.location.replace('preferences');
    }, 1000))}
}

</script>

<div in:slide>
    <div class="col l4 m6 s12">
      <div class="card hoverable z-depth-1">
        <div class="card-image">
          <img src="https://api.adorable.io/avatars/150/{user}" alt="user" class="responsive-img circle">
          <span class="card-title">{title}</span>
        </div>
        <div class="card-reveal">
          <p>{description}</p>
        <p style="font-weight: bold;">This user requires to be:</p>
        <p>{pre1}, {pre2}, {pre3}, {pre4}</p>
        <div class="divider"/>
        <div class="card-action">
        <a on:click={() => deleteFavourr()} href="#{id}" class="modal-trigger" > <Button condition="Delete Favourr" /></a>
        <i class="material-icons right activator">close</i>
        </div>
        </div>
        <div class="card-action">
          <i class="material-icons right activator">more_vert</i>
          </div>
      </div>
    </div>
  </div>

  <AlertBox id="{id}" title="Favourr Deleted!" divert="preferences"/>