<script>
  import { onMount } from "svelte";
  import { quartInOut, quadInOut, sineIn, sineInOut } from "svelte/easing";
  import { fade, fly } from "svelte/transition";
  import { fadeAndSlide } from "./helpers/animations.svelte";
  import { setupIO } from "./helpers/observer.svelte";
  import { intersectingID } from "./stores.js";
  import Home from "./home.svelte";
  export let name;

  let linkedinIcon = "./images/linkedin.png";

  // const slides = [
  //   {
  //     id: "s-01",
  //     active: false,
  //     content: "fooo",
  //     backgroundColor: "limegreen"
  //   }
  // ];

  // const observer = setupIO(slides);

  // const unSubscribe = intersectingID.subscribe(id => (slides = slides));
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
  .content-box {
    flex: 1;
    width: 70%;
  }
  .box {
    flex: 1;
  }
  video {
    width: 100%;
    height: 50%;
  }

  .content-1 {
    box-sizing: border-box;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    height: 100%;
  }
</style>

<div>
  <Home />
</div>

<!-- {#each slides as { active, id, backgroundColor }} -->
<!-- <Slide {id} isInView={active} {backgroundColor} {observer} type="slider">
      {#if active}
        <div class="content-box">

        <div class="box">
       
        </div>
        <div class="box white">
          <div class="test-img" />
          <video src="./videos/pmb.mp4" autoplay loop />
          <h2>
            When your building amazing products, you need more than just
            standard engineering
          </h2>
        </div>
      {/if}
    </Slide> -->
<!-- {/each} -->
