<script>
  export let content;
  export let type;
  export let id;
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
  <div {id} class={type === 'fixed' ? 'fixed' : 'slider'}>
    <slot />
  </div>
</section>
