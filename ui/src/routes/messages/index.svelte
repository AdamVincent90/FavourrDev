<script>
  import MessageCollapse from "../../components/MessageCollapse.svelte";
  import Divider from "../../components/Divider.svelte";
  import ProfileSlider from "../../components/ProfileSlider.svelte";

  import { slide, fade } from "svelte/transition";
  import { onMount, afterUpdate } from "svelte";

  export let message;
  export let sessionEmail;

  onMount(async () => {
    let sessionData = JSON.parse(sessionStorage.getItem("student"));
    sessionEmail = sessionData.studentByEmail[0].email;

    message = await fetch(`messages/${sessionEmail}.json`)
      .then(res => res.json())
      .then(data => (message = data));
  });


</script>

<div in:fade={{ y: 100, duration: 800 }} out:slide>
  <h5>Message Centre</h5>
  <div class="divider" />
  <div class="center">
    <ProfileSlider {message} />
  </div>
  <Divider />
  <MessageCollapse name="Inbox" {message} />
  <MessageCollapse name="Sent Messages" {message} />
  <MessageCollapse name="Notifications" {message} />
</div>
