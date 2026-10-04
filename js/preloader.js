
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("preloader").classList.add("fade-out");
    document.getElementById("content").style.display = "block";
  }, 2000);
});