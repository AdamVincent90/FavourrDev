<script context="module">
  import client from "../apollo.js";
  import { gql } from "apollo-boost";

  const GET_CATEGORY = gql`
    query getCategories {
      Category {
        name
        icon
      }
    }
  `;

  export async function preload() {
    return {
      cache: await client.query({
        query: GET_CATEGORY
      })
    };
  }
</script>

<script>
  import CategoryCard from "../components/CategoryCard.svelte";
  import Favourr from "../components/Favourr.svelte";
  import Divider from "../components/Divider.svelte";
  import { fade, fly, slide } from "svelte/transition";
  import { setClient, restore, query } from "svelte-apollo";

  export let cache;

  console.log(cache);

  restore(client, GET_CATEGORY, cache.data);
  setClient(client);

  const categories = query(client, { query: GET_CATEGORY });
  console.log(categories);
</script>

<style>
  h5 {
    color: #212121;
    margin-top: 0;
    text-shadow: 0 1px 1px #212121;
  }

  .row {
    margin-bottom: 0;
  }
</style>

<svelte:head>
  <title>Favourr Home</title>
</svelte:head>

<div in:fade={{ y: 100, duration: 800 }} out:slide>
  <h5>Select a Category</h5>
  <Divider />
  <div class="row">
{#await $categories}
loading....
{:then result}
    {#each result.data.Category as { name, icon }}
      <CategoryCard categoryName={name} {icon} />
    {/each}
  {/await}
  </div>
</div>
