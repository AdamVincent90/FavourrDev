<script context="module">
  import client from "../../apollo.js";
  import { gql } from "apollo-boost";

  const CREATE_FAVOURR = gql`
    mutation addFavourr(
      $catname: String
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
        title: $title
        description: $description
        pre1: $pre1
        pre2: $pre2
        pre3: $pre3
        pre4: $pre4
      ) {
        title
        description
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

  export let title;
  export let description;
  export let pre1;
  export let pre2;
  export let pre3;
  export let pre4;
  export let studentEmail;
  export let dataSet;

  export let instance;

  import { onMount } from "svelte";

  export let cache;

  async function preload() {
    let cat = "Digital Design";
    console.log(studentEmail);
    return {
      cache: await client.mutate({
        mutation: CREATE_FAVOURR,
        variables: {
          catname: cat,
          email: studentEmail,
          title: title,
          description: description,
          pre1: pre1,
          pre2: pre2,
          pre3: pre3,
          pre4: pre4
        }
      })
    };
    instance.open();
  }



  onMount(() => {
    let element = document.getElementById("modal1");
    instance = M.Modal.init(element, {
      dismissible: true
    });

    let temp = JSON.parse(sessionStorage.getItem('student'));
    studentEmail = temp.studentByEmail[0].email;

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
  .divider {width: 25%;}
label {font-size: 15px; color: #212121;}

@media only screen and (max-width: 600px) {
    .divider{width: 50%;}
    label {font-size: 12px;}
}
</style>

<div in:fade={{ y: 100, duration: 800 }} out:slide>
  <h5>Create your Favourr</h5>
     <p>Creating your Favourr is as easy as 1 2 3.. 4, and 5! Oh! And 6!</p>
     <Divider/>
     <label>Enter the title of your Favourr</label>
     <div class="divider"/>
      <Textfield topic="Enter Here.." bind:value={title}/>
      <label>Enter the description of your Favourr</label>
      <div class="divider"/>
      <Textfield topic="Enter Here.." bind:value={description}/>
      <label>Enter the requirements of your Favourr</label>
      <div class="divider"/>
      <Textfield topic="Enter Here.." bind:value={pre1}/>
      <Textfield topic="Enter Here.." bind:value={pre2}/>
      <Textfield topic="Enter Here.." bind:value={pre3}/>
      <Textfield topic="Enter Here.." bind:value={pre4}/>
      <Divider/>
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
        <button class="btn l6 m6 s6" on:click={preload}>
          Yes Submit Favourr!
        </button>
        <button class="btn l6 m6 s6 modal-trigger" on:click={popUp}>
          No, let me check
        </button>
      </div>
    {/if}
  </div>
</div>
