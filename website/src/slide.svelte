<script>
  export let content;
  export let type;
</script>

<style type="text/scss">
  $color: pink;

  div {
    box-sizing: border-box;
    padding: 100px;
  }

  h1 {
    font-size: 3em;
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
  <div class={type === 'fixed' ? 'fixed' : 'slider'}>
    <!-- <div class="content"> -->
    <h1>
      “Design is not how it looks like and feels like. Design is how it works”
    </h1>
    <p>
      This quote from the legendary Steve Jobs sums up what i do, building
      things that work. I focus on creating systems
    </p>
    <!-- </div> -->
  </div>
</section>
