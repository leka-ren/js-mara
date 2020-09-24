function numTask() {
    selectContentShow();
    num.classList.toggle("hide");
    numTitle.addEventListener("click", getNumber);
    numContent.addEventListener("click", resetNumContent);
  }