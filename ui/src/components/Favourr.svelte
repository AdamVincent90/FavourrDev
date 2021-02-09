<script context="module">
  import { gql } from "apollo-boost";
  import client from "../apollo.js";

  const SEND_REQUEST = gql`
    mutation addRequest(
      $sender: String
      $receiver: String
      $fid: Int
      $status: String
      $senderName: String
      $senderId: Int
    ) {
      sendNotification(
        sender: $sender
        receiver: $receiver
        fid: $fid
        status: $status
        senderName: $senderName
        senderId: $senderId
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
  export let sessionId;
  export let sessionName;

  onMount(async () => {
    await tick();
    let temp = JSON.parse(sessionStorage.getItem("student"));
    sessionEmail = temp.studentByEmail[0].email;
    sessionId = parseInt(temp.studentByEmail[0]._id);
    sessionName = `${temp.studentByEmail[0].firstname} ${temp.studentByEmail[0].lastname}`;
  });

  export let cache;

  
  async function sendRequest() {
    await tick();

    let status = "pending";

    return {
      cache: await client
        .mutate({
          mutation: SEND_REQUEST,
          variables: {
            sender: sessionEmail,
            receiver: user,
            fid: parseInt(id),
            status: status,
            senderName: sessionName,
            senderId: sessionId
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

  .apply {
    color: #e2be28 !important;
  }

  .card-action {
    color: #e2be28;
  }
</style>

<div in:slide>
  <div class="col l4 m6 s12">
    <div class="card hoverable z-depth-1">
      <div class="card-image">
        <img
          src="https://api.adorable.io/avatars/150/{user}"
          alt="user"
          class="responsive-img circle" />
        <h6 class="card-title">{title}</h6>
      </div>
      <div class="card-reveal">
        <p>{description}</p>
        <p style="font-weight: bold;">This user requires to be:</p>
        <p>{#if pre1}{pre1}{/if}
           {#if pre2 !== ""}, {pre2}{/if}
           {#if pre3 !== ""}, {pre3}{/if} 
           {#if pre4 !== ""}, {pre4}{/if}</p>
        <div class="divider" />
        <div class="card-action center">
          <a href="#{id}" class="apply modal-trigger" on:click={sendRequest}>
            Apply
          </a>
          <span class="card-title">
          <i class="material-icons right activator">close</i>
          </span>
          </div>
      </div>
      <div class="card-action">
        <a href="#{id}" class="apply modal-trigger" on:click={sendRequest}>
          Apply
        </a>
        <i class="material-icons right activator">more_vert</i>
      </div>
    </div>
  </div>
</div>

<AlertBox
  title="You have applied for this Favourr, now sit back and relax!"
  {id} />
