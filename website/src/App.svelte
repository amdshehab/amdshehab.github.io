<script>
  import { onMount } from "svelte";
  import { quartInOut, quadInOut } from "svelte/easing";
  import { fade, fly } from "svelte/transition";
  import Slide from "./slide.svelte";
  import { typewriter } from "./helpers/animations.svelte";
  export let name;

  let linkedinIcon = "./images/linkedin.png";
  let visible = false;
  let header1visible = false;
  let header2visible = false;
  let header3visible = false;
  let observer = new IntersectionObserver(
    changes => {
      for (const change of changes) {
        if (change.isIntersecting) {
          if (change.target.id === "slide-001") {
            header1visible = true;
          } else if (change.target.id === "slide-002") {
            header2visible = true;
          } else if (change.target.id === "slide-003") {
            header3visible = true;
          }
        }
      }
    },
    {
      rootMargin: "-30%"
    }
  );

  onMount(() => {
    visible = true;
  });
</script>

<style>
  img {
    width: 50px;
    height: 50px;
    margin: 10px;
  }

  p {
    font-family: Moon-Regular;
    font-size: 30px;
  }
</style>

<div>
  {#if visible}
    <Slide type="fixed">
      <h1 in:fly={{ x: -50, duration: 200, easing: quadInOut }}>
        I build stuff that works.
      </h1>
      <p in:fly={{ x: -50, duration: 200, delay: 300, easing: quadInOut }}>
        Currently
        <strong>engineering</strong>
        awesome things at The Times
      </p>
      <div>
        <a href="linkedin.com/in/ahmedshehab3">
          <img
            in:fly={{ x: -100, duration: 300, delay: 700, easing: quartInOut }}
            src="./images/linkedin.png"
            alt="" />
        </a>
        <a href="linkedin.com/in/ahmedshehab3">
          <img
            in:fly={{ x: -100, duration: 300, delay: 600, easing: quartInOut }}
            src="./images/github-logo.png"
            alt="" />
        </a>
        <a href="linkedin.com/in/ahmedshehab3">
          <img
            in:fly={{ x: -100, duration: 300, delay: 500, easing: quartInOut }}
            src="./images/gmail.png"
            alt="" />
        </a>
      </div>
    </Slide>
  {/if}
  <Slide headerId="001" isInView={header1visible} {observer}>
    <h1>Projects</h1>
  </Slide>
  <Slide headerId="002" isInView={header2visible} {observer} />
  <Slide headerId="003" isInView={header3visible} {observer} />
</div>
