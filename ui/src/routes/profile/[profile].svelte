<script context="module">
  import client from "../../apollo.js";
  import { gql } from "apollo-boost";

  let GET_STUDENT_DATA = gql`
    query getStudent($sid: Int!) {
      studentById(sid: $sid) {
        _id
        firstname
        lastname
        bio
        profession
        email
        facebook
        linkedin
        twitter
      }
      getReviews(sid: $sid) {
        byUser
        title
        description
        name
      }
    }
  `;

  export async function preload({ params }) {
    let sid = parseInt(params.profile);
    console.log(sid);

    return {
      cache: await client.query({
        query: GET_STUDENT_DATA,
        variables: {
          sid: sid
        }
      })
    };
  }
</script>

<script>
  import Divider from "../../components/Divider.svelte";
  import Profile from "../../components/Profile.svelte";
  import ProfileBanner from "../../components/ProfileBanner.svelte";
  import Loader from "../../components/Loader.svelte";
  import { slide, fade } from "svelte/transition";
  import { setClient, restore, query } from "svelte-apollo";
  import WriteReview from "../../components/WriteReview.svelte";

  export let cache;

  restore(client, GET_STUDENT_DATA, cache.data);
  setClient(client);

  const student = query(client, { query: GET_STUDENT_DATA });
  console.log(student);
</script>

<style>

</style>

<div in:fade={{ y: 100, duration: 800 }} out:slide>

  {#await $student}
    <Loader />
  {:then result}
    {#each result.data.studentById as { _id, firstname, lastname, bio, profession, email, twitter, facebook, linkedin }}
      <Profile {firstname} {lastname} {bio} {profession} {email} {linkedin} {facebook} {twitter} />
    {/each}
  {/await}

  <div class="divider" />
  {#await $student}
    <Loader />
  {:then result}
    <h5 class="center">Reviews</h5>
    {#each result.data.getReviews as { name, byUser, title, description }}
      <ProfileBanner {name} user={byUser} {title} {description} />
    {/each}
  {/await}
</div>
