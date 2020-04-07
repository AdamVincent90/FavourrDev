<script>
 import Button from "../../components/Button.svelte";
 import TextField from "../../components/Textfield.svelte";
 import Register from "../../components/Register.svelte";
 import Passwordfield from "../../components/Passwordfield.svelte";
 import { tick } from "svelte";

  export let email;
  export let password;
  export let sessionData;
  export let cache;

  export let loginData;

  async function validate() {

    await tick();

if(email && password) {

     loginData = {
      email: email,
      password: password
    };
    console.log("running...");
    sessionStorage.removeItem('student');
    const res = await fetch(`login/${JSON.stringify(loginData)}.json`);
    if (res.status === 200)
    {
      const studentSession =  await res.json();
      
      sessionStorage.setItem('student', JSON.stringify(studentSession));
      window.location.replace('');
      
    }
    else {
      console.log("Credentials Don't exist in Database: Error-Message: Undefined email or password");

    }
  }
  }
 
</script>

<style>

a {text-decoration: none;}


</style>


<h4>Login required</h4>
    <p>
      To use this Web Application, you must sign up or log in with a University
      of Northampton email address
    </p>
    <div class="row center">
      <h5 class="col l12 s12 m12">Login Below</h5>
      <TextField class="col l6 m6 s6" topic="Email" bind:value={email}/>
      <Passwordfield class="col l6 m6 s6" topic="Password" bind:value={password}/>
      <a on:click={validate}><Button condition="Login"/></a>
    </div>
  <div class="modal-footer">
    <p class="center">
      New User? Register
      <a href="#registration" class="modal-trigger">here</a>
    </p>
    </div>

    <Register modalName="registration"/>