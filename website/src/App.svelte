<script>
  import { onMount } from "svelte";
  import { quartInOut, quadInOut, sineIn, sineInOut } from "svelte/easing";
  import { fade, fly } from "svelte/transition";
  import Slide from "./slide.svelte";
  import { fadeAndSlide } from "./helpers/animations.svelte";
  import { setupIO } from "./helpers/observer.svelte";
  import { intersectingID } from "./stores.js";
  export let name;

  let linkedinIcon = "./images/linkedin.png";

  let node1, node2, node3, node4, node5;

  const slides = [
    { id: "s-01", active: false, content: "fooo" },
    { id: "s-02", active: false, content: "bar" },
    { id: "s-03", active: false, content: "baz" }
  ];

  const observer = setupIO(slides);

  const unSubscribe = intersectingID.subscribe(id => (slides = slides));

  onMount(() => {
    fadeAndSlide(node1, 300);
    fadeAndSlide(node2, 500);
    fadeAndSlide(node3, 1000);
    fadeAndSlide(node4, 850);
    fadeAndSlide(node5, 700);
  });
</script>

<style type="text/scss">
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
</style>

<div>
  <Slide type="fixed">
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
  </Slide>

  {#each slides as { active, id }}
    <Slide {id} isInView={active} {observer}>
      {#if active}
        <h1>Projects</h1>
      {/if}
    </Slide>
  {/each}
</div>
