export const setupObserver = cb => {
  const observer = new IntersectionObserver(
    intersectionList => {
      // console.log("something special here", intersectionList);
      for (let intersection of intersectionList) {
        if (intersection.intersectionRatio === 1) {
          intersection.target.style.visibility = "visible";
          console.log(intersection.target.id);
          cb(intersection.target.id);
        }
      }
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 1
    }
  );

  const container = document.getElementById("content");

  for (let childElem of container.children) {
    observer.observe(childElem);
  }
};
