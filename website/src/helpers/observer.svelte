<script context="module">
  import { intersectingID } from "../stores.js";

  export const setupIO = targets => {
    return new IntersectionObserver(
      changes => {
        for (const change of changes) {
          if (change.isIntersecting) {
            const intersectedID = change.target.id;
            const intersectedTarget = targets.find(x => x.id === intersectedID);
            intersectedTarget.active = true;
            intersectingID.set(intersectedID);
          }
        }
      },
      {
        rootMargin: "-30%"
      }
    );
  };
</script>
