<script context="module">
  import { gql } from "apollo-boost";
  import client from "../apollo.js";

  const SEND_REQUEST = gql`
    mutation addRequest(
      $sender: String
      $receiver: String
      $fid: Int
      $status: String
    ) {
      sendNotification(
        sender: $sender
        receiver: $receiver
        fid: $fid
        status: $status
      ) {
        status
        userRequested
      }
    }
  `;
</script>

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

  onMount(async () => {
    let temp = JSON.parse(sessionStorage.getItem("student"));
    sessionEmail = temp.studentByEmail[0].email;

    console.log("mounted");
  });

  export let cache;

  async function sendRequest() {
    await tick();

    let status = "pending";

    console.log(sessionEmail);
    console.log(user);
    console.log(id);


    return {
      cache: await client
        .mutate({
          mutation: SEND_REQUEST,
          variables: {
            sender: sessionEmail,
            receiver: user,
            fid: parseInt(id),
            status: status
          }
        })
        .catch(e => {
          console.log(e);
        })
    };
  }
</script>

<style>
  p {
    text-align: center;
    padding-bottom: 10px;
  }

  .card {
    border-radius: 2%;
  }

  .apply {color: #e2be28!important;}
  
  .card-action { color: #e2be28}

  span {
    padding-bottom: 10px;
  }
</style>

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
        <a href="#{id}" class="apply modal-trigger" on:click={sendRequest}>Apply</a>
        <i class="material-icons right activator">close</i>
        </div>
        </div>
        <div class="card-action">
          <a href="#{id}" class="apply modal-trigger" on:click={sendRequest}>Apply</a>
          <i class="material-icons right activator">more_vert</i>
          </div>
      </div>
    </div>
  </div>

  <AlertBox title="You have applied for this Favourr, now sit back and relax!" id={id}/>