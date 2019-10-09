<script>
  import { onMount } from "svelte";
  import { fadeAndSlide } from "./helpers/animations.svelte";

  let node1, node2, node3, node4, node5;

  onMount(() => {
    fadeAndSlide(node1, 300);
    fadeAndSlide(node2, 500);
    fadeAndSlide(node3, 1000);
    fadeAndSlide(node4, 850);
    fadeAndSlide(node5, 700);
  });
</script>

<style type="text/scss">
  @keyframes swerve {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(-20px);
    }
  }

  .container {
    display: flex;
    flex-direction: row;
    height: 100vh;
  }
  .item {
    flex: 1;
  }

  a {
    display: inline-block;
    transition: all 0.5s;
    &:hover {
      transform: translateY(-10px);
      filter: invert(0.4) sepia(1) saturate(2.8) hue-rotate(360deg)
        brightness(1.2);
    }
  }

  img {
    width: 50px;
    height: 50px;
    margin: 10px;
  }

  p {
    font-family: Anodina-Bold;
    font-size: 1.3em;
  }

  .zero-opacity {
    opacity: 0;
  }

  .content {
    box-sizing: border-box;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    height: 100%;
  }
  .test-img {
    background-image: url("./images/the_times_devices.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
    opacity: 0;
    flex: 1;
    width: 100%;
    animation: swerve 0.5s ease-out forwards 1100ms;
  }
</style>

<div class="container">
  <div class="item content">
    <h1 class="zero-opacity" bind:this={node1}>I build stuff that works.</h1>
    <p class="zero-opacity" bind:this={node2}>
      I build e2e applications using JavaScript, Currently engineering awesome
      things @The Times
    </p>
    <div>
      <a href="linkedin.com/in/ahmedshehab3">
        <img
          class="zero-opacity"
          bind:this={node3}
          src="./images/linkedin.png"
          alt="" />
      </a>
      <a href="linkedin.com/in/ahmedshehab3">
        <img
          class="zero-opacity"
          bind:this={node4}
          src="./images/github-logo.png"
          alt="" />
      </a>
      <a href="linkedin.com/in/ahmedshehab3">
        <img
          class="zero-opacity"
          bind:this={node5}
          src="./images/gmail.png"
          alt="" />
      </a>
    </div>
  </div>

  <div class="item content">
    <div class="test-img" />
    <h2>
      When your building amazing products, you need more than just standard
      engineering
    </h2>
  </div>
  <div class="item">
    <slot name="col-3" />
  </div>
</div>
