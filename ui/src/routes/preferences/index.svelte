<script>

//import Collapse from '../../components/Collapse.svelte';
import Divider from '../../components/Divider.svelte';

import { slide, fade } from "svelte/transition";

</script>



<div in:fade="{{ y: 100, duration: 800 }}" out:slide>
<h5 class="center">Settings</h5>
    <Divider/>
<!-- <Collapse header="Edit Details"/>
    <Collapse header="Notification Settings"/>
        <Collapse header="Privacy"/> -->
</div>