<script>
  import ComposeMessage from "../components/ComposeMessage.svelte";
  import Divider from "../components/Divider.svelte";
  import { slide } from "svelte/transition";

  import { onMount } from "svelte";

  onMount(async () => {
    var elems = document.querySelectorAll(".collapsible .collapsible");
    var instances = M.Collapsible.init(elems);

    elems = document.querySelectorAll(".collapsible .collapsible");
    instances = M.Collapsible.init(elems, {
      inDuration: 600
    });
  });

  export let user;
  export let header;
  export let body;
  export let avatar;
  export let name;
  export let use;
  export let date;
</script>

<style>
  h5 {
    font-size: 20px;
  }
  .material-icons {
    color: #e2be28;
  }
  .collapsible-header {
    background-color: #fffcfc;
  }
  .collapsible-body {
    background-color: #fffcfc;
  }
  li {
    width: 100%;
    margin-bottom: 20px;
  }
</style>

<ul class="collapsible popout" data-collapsible="expandable">
  <li class="z-depth-0">
    <div class="collapsible-header valign-wrapper">
      <i class="material-icons read">chevron_right</i>
      <p class="right">By {name}</p>
    </div>
    <div class="collapsible-body hoverable">
      <span>
        <ul class="collection">
          <li class="collection-item">
            <img
              src="https://api.adorable.io/avatars/50/{avatar}"
              alt="from user" />
            {#if use == 'Inbox'}
              <a class="modal-trigger" href="#{avatar}1">
                <i class="material-icons secondary-content hoverable">reply</i>
              </a>
              <ComposeMessage email={avatar} {name} />
            {/if}
            <div class="center valign-wrapper">
              <p style="font-style: italic;">{date}</p>
            </div>
          </li>
          <h5 class="title">{header}</h5>
          <p style="font-style: italic;" class="message-body">{body}</p>

          <Divider />
        </ul>
      </span>
    </div>
  </li>
</ul>
