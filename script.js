let firstOptions = document.querySelectorAll(".first-options");
let secondOptions = document.querySelectorAll(".second-options");
let buttons = document.querySelectorAll("button");

let result = document.querySelector("#result");

buttons.forEach((option) => {
  option.addEventListener("click", () => {
    if (option.classList.contains("first-options")) {
      console.log("first options");
      firstOptions.forEach((option) => {
        option.classList.add("d-none");
        console.log("first options");
      });
      secondOptions.forEach((option) => {
        option.classList.remove("d-none");
        console.log("first options", option);
      });
    } else if (option.classList.contains("second-options")) {
      firstOptions.forEach((option) => {
        option.classList.remove("d-none");
      });
      secondOptions.forEach((option) => {
        option.classList.add("d-none");
      });
    }

    result.innerHTML += option.innerHTML;
  });
});
