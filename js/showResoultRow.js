function showResoultRow(data) {
    if (data.amount) {
      rowResoult.textContent = `Больше всего символов "${data.char}" в строке "${data.row}", кол-во символов: ${data.amount}`;
    } else {
      rowResoult.textContent = `Во фразах "${data.row}" нет буквы "${data.char}"`;
    }
    rowResoult.classList.toggle('hide');
    rowTitle.style.display = "none";
  }