<script context="module">
  export const fadeAndSlide = (node, delay) => {
    const slideAndFade = [
      { transform: "translateX(-25px)", opacity: 0 },
      { transform: "translateY(0px)", opacity: 1 }
    ];

    const options = {
      duration: 500,
      fill: "forwards",
      easing: "ease-out",
      delay
    };

    node.animate(slideAndFade, options);
  };
</script>
