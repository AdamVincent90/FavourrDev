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

  li {
    margin-top: 10px;
  }

  ol {
    font-size: 12px;
    font-weight: bold;
  }

  span {
    padding-bottom: 10px;
  }
</style>

<div in:slide>
  <div class="col l4 m6 s12">
    <div class="card hoverable z-depth-2">
      <div class="card-image waves-effect waves-block waves-light" />
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">
          {title}
          <i class="material-icons right">more_vert</i>
        </span>
        <p>Requirements:</p>
        <ol class="row left">
          <li class="col s12 m12 l12">{pre1}</li>
          <li class="col s12 m12 l12">{pre2}</li>
          <li class="col s12 m12 l12">{pre3}</li>
          <li class="col s12 m12 l12">{pre4}</li>
        </ol>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">
          <img src="https://api.adorable.io/avatars/80/{user}" alt="amazing" />
          <i class="material-icons right">close</i>
        </span>
        <p>{description}</p>
        <Button on:click={sendRequest} condition="Apply" />
        <button on:click={sendRequest}>hit</button>
      </div>
      <Button on:click={sendRequest} condition="Apply" />
    </div>
  </div>
</div>
