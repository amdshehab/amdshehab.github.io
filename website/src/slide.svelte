<script>
  import { typewriter } from "./helpers/animations.svelte";
  import { onMount } from "svelte";

  export let content;
  export let type = "slider";
  export let headerId;
  export let isInView;
  export let observer;

  let node;
  if (type !== "fixed") {
    onMount(() => {
      observer.observe(node);
    });
  }
</script>

<style type="text/scss">
  $color: pink;

  div {
    box-sizing: border-box;
    padding: 100px;
  }

  .fixed {
    min-height: 100vh;
    @media screen and (min-width: 1200px) {
      position: fixed;
      width: 40vw;
    }
  }

  .slider {
    min-height: 80vh;
    background-color: $color;
    @media screen and (min-width: 1200px) {
      margin-left: 40vw;
    }
  }
</style>

<section>
  <div
    id="slide-{headerId}"
    bind:this={node}
    class={type === 'fixed' ? 'fixed' : 'slider'}>
    {#if isInView && type !== 'fixed'}
      <h1 in:typewriter>{headerId}</h1>
    {/if}
    <slot />
  </div>
</section>
