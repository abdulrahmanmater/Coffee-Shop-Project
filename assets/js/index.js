document.addEventListener("DOMContentLoaded", function () {
  const train = document.getElementById("productTrain");
  const wrapper = document.getElementById("trainWrapper");

  let isPermanentlyStopped = false;
  let isHovered = false;
  let scrollSpeed = 0.5;

  train.innerHTML += train.innerHTML + train.innerHTML;

  function startTrain() {
    if (!isPermanentlyStopped && !isHovered) {
      wrapper.scrollLeft += scrollSpeed;
      const singleSetWidth = train.scrollWidth / 3;
    }

    animationId = requestAnimationFrame(startTrain);
  }

  startTrain();

  const cards = train.querySelectorAll(".product-card-item");
  cards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      isHovered = true;
    });
    card.addEventListener("mouseleave", function () {
      if (!isPermanentlyStopped) {
        isHovered = false;
      }
    });
  });
});
