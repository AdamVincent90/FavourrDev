<script>
  import SettingsCollapse from "../../components/SettingsCollapse.svelte";
  import Divider from "../../components/Divider.svelte";
  import { slide, fade } from "svelte/transition";
  import { onMount, beforeUpdate } from "svelte";

  export let student;
  
onMount(async () => {

  let sessionData = JSON.parse(sessionStorage.getItem('student'));
  let sessionEmail = sessionData.studentByEmail[0].email;

    student = await fetch(`preferences/${sessionEmail}.json`)
      .then(res => res.json())
      .then(data => (student = data));

      
  });
</script>
<h5>Preferences</h5>
<Divider/>
<SettingsCollapse head="Edit your details" student={student}/>
<SettingsCollapse head="Change your password" student={student}/>
<SettingsCollapse head="Manage Favourrs" student={student}/>
