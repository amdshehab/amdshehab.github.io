<script>
  import FixedSide from "./fixed-side.svelte";
  import Slide from "./slide.svelte";
  export let name;
</script>

<style>
  div {
    display: flex;
    flex-flow: row wrap;
  }
</style>

<div>
  <FixedSide />
  <Slide />
</div>
