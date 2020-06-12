<script context="module">
  import client from "../../apollo.js";
  import { gql } from "apollo-boost";
  

let GET_FAVOURR_BY_CAT = gql`
  query getFavourrs($catname: String!) {
    favourrByCat(catname: $catname) {
      _id
      UserId
      byUser
      description
      title
      pre1
      pre2
      pre3
      pre4
    }
  }
`;

export async function preload({params}) {
   let category = params.favourr;
    return {
      cache: await client.query({
        query: GET_FAVOURR_BY_CAT,
        variables: {
          catname: category
        }
      })
    };
  }

</script>

<script>
  import Favourr from "../../components/Favourr.svelte";
  import FilterButton from "../../components/FilterButton.svelte";
  import Divider from "../../components/Divider.svelte";
  import Loader from "../../components/Loader.svelte";
  import { slide, fade } from "svelte/transition";
  import { onMount } from "svelte";
  import { stores } from "@sapper/app";
  import { setClient, restore, query } from "svelte-apollo";

  const {page} = stores();
  const cat = $page.params;

  export let cache;
  export let category;
  export let studentId;

  restore(client, GET_FAVOURR_BY_CAT, cache.data);
  setClient(client);

  

  const favourrs = query(client, { query: GET_FAVOURR_BY_CAT });
  
  onMount(async () => {
    category = cat.favourr;
    let temp = JSON.parse(sessionStorage.getItem('student'));
    studentId = temp.studentByEmail[0]._id;
  })

 
</script>

<style>
  h5 {
    font-size: 32px;
    width: 100%;
    text-shadow: 0 1px 1px #212121;
  }
</style>

<div in:fade={{ y: 100, duration: 800 }} out:slide>
  <h5>List of all available {category} Favourrs!</h5>
  <Divider />
  <div class="row pageLayout">
    {#await $favourrs}
    <Loader/>
    {:then result}
      {#each result.data.favourrByCat as { title, description, pre1, pre2, pre3, pre4, byUser, _id, UserId }}
        {#if UserId !== studentId}
      <div in:fade={{y:200, duration: 400}}>
        <Favourr title={title} description={description} pre1={pre1} pre2={pre2} pre3={pre3} pre4={pre4} user={byUser} id={_id} />
        </div>
        {/if}
      {/each}
      {/await}
  </div>
</div>
