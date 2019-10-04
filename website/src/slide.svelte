<script>
  import { onMount } from "svelte";
  export let content;
  export let type = "slider";
  export let id;
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 140px;
  }

  .fixed {
    min-height: 100vh;
    @media screen and (min-width: 1000px) {
      position: fixed;
      width: 40vw;
    }
  }

  .slider {
    min-height: 80vh;
    background-color: $color;
    @media screen and (min-width: 1000px) {
      margin-left: 40vw;
    }
  }
</style>

<section>
  <div {id} bind:this={node} class={type === 'fixed' ? 'fixed' : 'slider'}>
    <slot />
  </div>
</section>
