document.getElementById("increment")?.addEventListener("click", () => {
  const counterElement = document.getElementById("cnt");
  if (counterElement) {
    let count = parseInt(counterElement.textContent || "0", 10);
    count++;
    counterElement.textContent = count.toString();
  }
});

document.getElementById("decrement")?.addEventListener("click", () => {
  const counterElement = document.getElementById("cnt");
  if (counterElement) {
    let count = parseInt(counterElement.textContent || "0", 10);
    count--;
    counterElement.textContent = count.toString();
  }
});
