<script>
  import TextField from "../components/Textfield.svelte";
  import TextArea from "../components/TextArea.svelte";
  import Button from "../components/Button.svelte";
  import Divider from "../components/Divider.svelte";
  import Label from "../components/Label.svelte";
</script>

<style>
  .divider {
    width: 25%;
  }
  label {
    font-size: 15px;
    color: #212121;
  }

  @media only screen and (max-width: 600px) {
    .divider {
      width: 50%;
    }
    label {
      font-size: 12px;
    }
  }
</style>

<!-- Use this page to create test pages  -->

<!-- <h5>Create your Favourr</h5>
     <p>Creating your Favourr is as easy as 1 2 3.. 4, and 5! Oh! And 6!</p>
     <Divider/>
     <label>Enter the title of your Favourr</label>
     <div class="divider"/>
      <TextField topic="Enter Here.."  bind:value={title}/>
      <label>Enter the description of your Favourr</label>
      <div class="divider"/>
      <TextField topic="Enter Here.." bind:value={desc}/>
      <label>Enter the requirements of your Favourr</label>
      <div class="divider"/>
      <TextField topic="Enter Here.." bind:value={pre1}/>
      <TextField topic="Enter Here.." bind:value={pre2}/>
      <TextField topic="Enter Here.." bind:value={pre3}/>
      <TextField topic="Enter Here.." bind:value={pre4}/>
      <Divider/>
      <Button condition="Submit Favourr"/> -->
