let options = document.querySelectorAll(".option");
let result = document.querySelector(".result");

options.forEach((option) => {
  option.addEventListener("click", () => {
    result.innerHTML = option.innerHTML;
  });
});
