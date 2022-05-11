window.onload = fn;
function fn() {
  const corom = document.getElementById("corom");
  // const proom = document.getElementById("proom");proom,
  const conom = document.getElementById("conom");
  const words = [corom, conom];
  corom.addEventListener("click", () => window.open("coursedas.html"));
  // proom.addEventListener("click", () => window.open("projectdas.html"));
  conom.addEventListener("click", () => window.open("contactdas.html"));

  function setcolor() {
    this.style.color = "green";
  }
  function returncolor() {
    this.style.color = "rgb(58, 21, 58)";
  }
  for (const word of words) {
    word.addEventListener("mouseover", setcolor);
    word.addEventListener("mouseout", returncolor);
  }
}
