function rowTask() {
  selectContentShow();
  row.classList.toggle("hide");
  rowTitle.addEventListener("click", takePhrase);
  rowResoult.addEventListener("click", resetContentRow);
}