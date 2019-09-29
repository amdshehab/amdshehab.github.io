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
  <Slide headerId="001" isInView={header1visible} {observer} />
  <Slide headerId="002" isInView={header2visible} {observer} />
  <Slide headerId="003" isInView={header3visible} {observer} />
</div>
