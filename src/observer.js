export const setupObserver = cb => {
  const observer = new IntersectionObserver(
    intersectionList => {
      for (let intersection of intersectionList) {
        if (intersection.isIntersecting) {
          intersection.target.style.visibility = "visible";
          console.log(intersection.target.id);
          cb(intersection.target.id);
        }
      }
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.7
    }
  );

  const container = document.getElementById("content");
  console.log(container.children);

  for (let childElem of container.children) {
    observer.observe(childElem);
  }
};
