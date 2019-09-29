<script>
  import { onMount } from "svelte";
  import { quartInOut, quadInOut } from "svelte/easing";
  import { fade, fly } from "svelte/transition";
  import Slide from "./slide.svelte";
  import { typewriter } from "./helpers/animations.svelte";

  export let name;
  let visible = false;
  let header1visible = false;
  let header2visible = false;
  let header3visible = false;

  onMount(() => {
    visible = true;
    console.log("what ->", document.getElementById("slide-2"));
    const observer = new IntersectionObserver(
      changes => {
        for (const change of changes) {
          if (change.isIntersecting) {
            if (change.target.id === "slide-1") {
              header1visible = true;
            } else if (change.target.id === "slide-2") {
              header2visible = true;
            } else if (change.target.id === "slide-3") {
              header3visible = true;
            }
          }
        }
      },
      {
        rootMargin: "-30%"
      }
    );

    observer.observe(document.getElementById("slide-1"));
    observer.observe(document.getElementById("slide-2"));
    observer.observe(document.getElementById("slide-3"));
  });
</script>

<style type="text/scss">
  h1 {
    font-size: 2.5em;
    @media screen and (min-width: 1200px) {
      font-size: 3em;
    }
  }
</style>

<div>
  {#if visible}
    <Slide type="fixed">
      <h1 in:fly={{ x: -50, duration: 400, easing: quadInOut }}>
        “Design is not how it looks like and feels like. Design is how it
        works.”
      </h1>
      <p in:fly={{ x: -50, duration: 400, delay: 150, easing: quadInOut }}>
        This quote from the legendary Steve Jobs sums up what i do, building
        things that work. I focus on creating systems
      </p>
    </Slide>
  {/if}
  <Slide id="slide-1">
    {#if header1visible}
      <h1 in:typewriter>001</h1>
    {/if}
  </Slide>
  <Slide id="slide-2">
    {#if header2visible}
      <h1 in:typewriter>002</h1>
    {/if}
  </Slide>
  <Slide id="slide-3">
    {#if header3visible}
      <h1 in:typewriter>003</h1>
    {/if}
  </Slide>
</div>
