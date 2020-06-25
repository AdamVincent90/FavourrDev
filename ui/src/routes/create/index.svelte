<script context="module">
  import client from "../../apollo.js";
  import { gql } from "apollo-boost";

  const CREATE_FAVOURR = gql`
    mutation addFavourr(
      $catname: String
      $UserId: String
      $email: String
      $title: String
      $description: String
      $pre1: String
      $pre2: String
      $pre3: String
      $pre4: String
    ) {
      createFavourr(
        catname: $catname
        email: $email
        UserId: $UserId
        title: $title
        description: $description
        pre1: $pre1
        pre2: $pre2
        pre3: $pre3
        pre4: $pre4
      ) {
        title
        description
        UserId
        pre1
        pre2
        pre3
        pre4
      }
    }
  `;
</script>

<script>
  import Dropdown from "../../components/Dropdown.svelte";
  import Divider from "../../components/Divider.svelte";
  import Label from "../../components/Label.svelte";
  import Textfield from "../../components/Textfield.svelte";
  import Textarea from "../../components/Textarea.svelte";
  import Button from "../../components/Button.svelte";
  import { slide, fade } from "svelte/transition";
  import Loader from "../../components/Loader.svelte";
  import AlertBox from "../../components/AlertBox.svelte";

  export let title;
  export let description;
  export let catname;
  export let pre1 = "";
  export let pre2 = "";
  export let pre3 = "";
  export let pre4 = "";
  export let studentEmail;
  export let studentId;
  export let dataSet;

  export let instance;

  import { onMount, tick } from "svelte";

  export let cache;

  async function preload() {
    await tick();
    return {
      cache: await client
        .mutate({
          mutation: CREATE_FAVOURR,
          variables: {
            catname: catname,
            email: studentEmail,
            UserId: studentId,
            title: title,
            description: description,
            pre1: pre1,
            pre2: pre2,
            pre3: pre3,
            pre4: pre4
          }
        })
        .then(
          setTimeout(() => {
            window.location.replace("");
          }, 1000)
        )
    };
  }

  onMount(() => {
    let element = document.getElementById("modal1");
    instance = M.Modal.init(element, {
      dismissible: true
    });

    let temp = JSON.parse(sessionStorage.getItem("student"));
    studentEmail = temp.studentByEmail[0].email;
    studentId = temp.studentByEmail[0]._id;
  });

  let pop = { displayed: false, displayLoader: false };

  function popUp() {
    return (pop.displayed = !pop.displayed);
  }
</script>

<style>
  .row {
    margin-bottom: 20px;
  }
  label {
    font-size: 16px;
    color: #212121;
    padding: 10px 10px 10px 10px;
    font-weight: bold;
  }

  .btn {
    background-color: #e2be28;
  }

  @media only screen and (max-width: 600px) {
    label {
      font-size: 14px;
      padding: 10px 0 10px 0;
    }
  }
</style>

<div in:fade={{ y: 100, duration: 800 }} out:slide>
  <h5>Create your Favourr</h5>
  <p>Creating your Favourr is as easy as 1 2 3.. 4, and 5! Oh! And 6!</p>
  <Divider />
  <label>Choose a profession required</label>
  <Dropdown bind:value={catname} />
  <label>Enter the title of your Favourr</label>
  <Textfield topic="Enter Here.." bind:value={title} />
  <label>Enter the description of your Favourr</label>
  <Textfield topic="Enter Here.." bind:value={description} />
  <label>Enter upto 4 requirements for your Favourr</label>
  <Textfield topic="Enter Here.." bind:value={pre1} />
  {#if pre1}
  <Textfield  topic="Optional Requirement" bind:value={pre2} />
  {/if}
  {#if pre2}
  <Textfield topic="Optional Requirement" bind:value={pre3} />
  {/if}
  {#if pre3}
  <Textfield topic="Optional Requirement" bind:value={pre4} />
  {/if}
  <div class="divider" />
  <div class="row">
    <Label value="All good?" />
    {#if pop.displayed == false}
      <div in:fade={{ y: 40, duration: 400 }} out:slide>
        <a on:click={popUp}>
          <Button condition="Create your Favourr" />
        </a>
      </div>
    {/if}

    <div id="modal1" class="modal">
      <div class="modal-content">
        <h4>Favourr added</h4>
        <p>
          Your Favourr has been added, now all you need to do is wait for
          someone to accept!
        </p>
      </div>
      <div class="modal-footer">
        <a href="." class="modal-close waves-effect waves-green btn-flat">
          Thanks!
        </a>
      </div>
    </div>

    {#if pop.displayed == true}
      <div in:fade={{ y: 50, duration: 400 }} out:slide class="row center">
        <p class="col l12 m12 s12">
          Are you sure you want to submit this Favourr?
        </p>
        <button
          href="#create"
          class="btn l6 m6 s6 modal-trigger"
          on:click={preload}>
          Yes Submit Favourr!
        </button>
        <button class="btn l6 m6 s6" on:click={popUp}>No, let me check</button>
      </div>
    {/if}
  </div>
</div>

<AlertBox id="create" title="Favourr Created, now wait for them go getters!" />
