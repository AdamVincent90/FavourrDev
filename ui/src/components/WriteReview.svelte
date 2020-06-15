<script context="module">
  import { gql } from "apollo-boost";
  import client from "../apollo.js";

  const WRITE_REVIEW = gql`
    mutation writeReview(
      $yourEmail: String
      $theirEmail: String
      $name: String
      $title: String
      $description: String
    ) {
      reviewStudent(
        yourEmail: $yourEmail
        theirEmail: $theirEmail
        title: $title
        description: $description
        name: $name
      ) {
        title
        description
        byUser
        name
      }
    }
  `;
</script>

<script>
  import { onMount, tick } from "svelte";
  import TextField from "../components/Textfield.svelte";
  import TextArea from "../components/Textarea.svelte";
  import Button from "../components/Button.svelte";
  import Divider from "../components/Divider.svelte";
  import AlertBox from "../components/AlertBox.svelte";
  import { fade } from "svelte/transition";

  export let email;
  export let name;
  export let sid;

  export let header;
  export let desc;
  export let title;
  export let sessionData;
  export let temp;
  export let review;

  onMount(async () => {
    let session = JSON.parse(sessionStorage.getItem("student"));
    temp = session.studentByEmail[0];
    console.log(temp);
  });

  export let cache;

  async function validate() {
    await tick();

    let fullname = temp.firstname + " " + temp.lastname;

    return {
      cache: await client
        .mutate({
          mutation: WRITE_REVIEW,
          variables: {
            yourEmail: temp.email,
            theirEmail: email,
            title: title,
            description: desc,
            name: fullname
          }
        })
        .catch(e => {
          console.log(e);
        })
        .then(
          setTimeout(() => {
            location.reload();
          }, 1000)
        )
    };
  }
</script>

<div id="review" class="modal" style="z-index: 1">
  <div class="modal-content z-depth-4">
    <div class="center">
      <img
        class="z-depth-1"
        src="https://api.adorable.io/avatars/50/{email}"
        alt="send {name} a message" />
      <p>Give {name} a review!</p>
    </div>
    <Divider />
    <div class="center">
      <TextArea topic="Review Title" bind:value={title} />
      <TextArea topic="Review {name} here!" } bind:value={desc} />
      <a
        href="#dispatched"
        class="modal-trigger modal-close"
        on:click={validate}>
        <Button condition="Write Review" />
      </a>
    </div>
  </div>
  <div class="modal-footer">
    <div class="divider" />
    <a class="modal-close waves-effect waves-green btn-flat">Close</a>
  </div>
</div>

<AlertBox id="dispatched" title="Review Added!" />
