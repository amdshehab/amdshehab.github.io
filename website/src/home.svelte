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

  .parallax-container {
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: scroll;
    perspective: 1px;
    perspective-origin: 0 0;
    @media (min-width: 1000px) {
      margin-left: 30vw;
      width: 70vw;
    }
  }

  .flex-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 50px;
    flex-direction: column;
    &.fixed {
      align-items: flex-start;
      justify-content: space-evenly;
      @media (min-width: 1000px) {
        position: fixed;
        width: 30vw;
      }
    }
    &.parallax-group {
      transform-style: preserve-3d;
    }
    &.first-scroll-group {
      align-items: center;
      justify-content: center;
      background-image: url("./images/the-times-logo.png");
      background-repeat: no-repeat;
      background-size: 30%;
      background-position: bottom right;
      height: 80vh;
      // background-color: cornflowerblue;
      transform-origin: 0 0;
    }
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
    object-fit: contain;
    width: 50%;
    height: 80%;
    &.icon {
      width: 50px;
      height: 50px;
      margin: 10px;
    }
  }

  p {
    font-family: Anodina-Bold;
    font-size: 1.3em;
  }

  .zero-opacity {
    opacity: 0;
  }

  .parallax-fast {
    transform: translate3d(-28%, -20%, 0.5px) scale(0.8) skew(-6deg, -2deg);
  }
</style>

<div class="flex-container fixed">
  <h1 class="zero-opacity" bind:this={node1}>I build amazing software</h1>
  <p class="zero-opacity" bind:this={node2}>
    I build e2e applications using JavaScript, Currently engineering awesome
    things @The Times
  </p>
  <div>
    <a href="linkedin.com/in/ahmedshehab3">
      <img
        class="zero-opacity icon"
        bind:this={node3}
        src="./images/linkedin.png"
        alt="" />
    </a>
    <a href="linkedin.com/in/ahmedshehab3">
      <img
        class="zero-opacity icon"
        bind:this={node4}
        src="./images/github-logo.png"
        alt="" />
    </a>
    <a href="linkedin.com/in/ahmedshehab3">
      <img
        class="zero-opacity icon"
        bind:this={node5}
        src="./images/gmail.png"
        alt="" />
    </a>
  </div>
</div>

<div class="parallax-container">
  <div class="flex-container first-scroll-group parallax-group">
    <img class="parallax-fast" src="./images/the-times-mobile.png" alt="" />
    <!-- <h2 class="test-fast">HELLO FOO</h2> -->
  </div>
  <div class="flex-container standard">
    <img src="./images/the-times-mobile.png" alt="" />
  </div>
  <div class="flex-container standard">
    <img src="./images/the-times-mobile.png" alt="" />
  </div>
</div>
