function myFunction(x) {
  x.classList.toggle("change");
  setTimeout(() => {
    x.classList.toggle("change");
  }, 2000);
}
