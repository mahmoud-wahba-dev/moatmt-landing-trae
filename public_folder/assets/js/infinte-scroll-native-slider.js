document.addEventListener("DOMContentLoaded", function () {
  const track = document.getElementById("tickerTrack");
  if (track.classList.contains("duplicated")) return;
  track.classList.add("duplicated");
  const logos = Array.from(track.children);
  const containerWidth =
    document.querySelector(".ticker-container").offsetWidth;
  console.log(containerWidth, "dd");
  while (
    track.scrollWidth < containerWidth * 2 &&
    track.children.length < 100
  ) {
    logos.forEach((logo) => {
      track.appendChild(logo.cloneNode(true));
    });
  }
});
