let options = document.querySelectorAll("button");

let result = document.querySelector("#result");

options.forEach((option) => {
  option.addEventListener("click", () => {
    result.innerHTML = option.innerHTML;
  });
});
