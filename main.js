buttonRow.addEventListener("click", rowTask);

document
  .querySelectorAll("#restart")
  .forEach((el) =>
    el.addEventListener("click", () => window.location.reload())
  );

buttonNum.addEventListener("click", numTask);
