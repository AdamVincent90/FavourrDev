<script>
  import Divider from "../components/Divider.svelte";
  import Message from "../components/Message.svelte";
  import Loader from "../components/Loader.svelte";
  import Notification from "../components/Notification.svelte";
  import { onMount } from "svelte";

  export let name;

  export let user;
  export let header;
  export let body;
  export let avatar;

  export let message;

  if (message) {
    console.log(message);
  }

  //This for some reason is the only way to initialise materializecss without causing init overload..
  onMount(async () => {
    var elems = document.querySelectorAll(".collapsible");
    var instances = M.Collapsible.init(elems);

    elems = document.querySelectorAll(".collapsible");
    instances = M.Collapsible.init(elems, {
      inDuration: 600
    });
  });
</script>

<style>
  .collapsible-header {
    background-color: #fffcfc;
  }
  .collapsible-body {
    background-color: #fffcfc;
  }
  .material-icons {
    color: #e2be28;
  }
</style>

<ul class="collapsible" data-collapsible="expandable">
  <li class="z-depth-0">
    <div class="collapsible-header">
      <i class="material-icons">chevron_right</i>
      {name}
    </div>
    <div class="collapsible-body">
      {#if message}
        {#if name == 'Inbox'}
          {#each message.messagesToUser as { header, body, user, sender, senderName, date }}
            <span>
              <Message
                {user}
                {header}
                {body}
                use={name}
                avatar={sender}
                name={senderName}
                {date} />
            </span>
          {/each}
        {:else if name == 'Sent Messages'}
          {#each message.messagesFromUser as { header, body, user, sender, senderName, date }}
            <span>
              <Message
                {user}
                {header}
                {body}
                use={name}
                avatar={sender}
                name={senderName}
                {date} />
            </span>
          {/each}
        {:else if name == 'Notifications'}
          {#each message.favourrNotifications as { userRequested, status, _id, favourrId, senderName, senderId }}
            <span>
              <Notification
                user={userRequested}
                {status}
                nid={_id}
                fid={favourrId}
                senderName={senderName}
                senderId={senderId}
                />
            </span>
          {/each}
        {/if}
      {:else}
        <div class="center">
          <Loader />
        </div>
      {/if}
    </div>
    <Divider />
  </li>
</ul>
