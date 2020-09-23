const title = document.querySelector("h1");
const resoult = document.querySelector("h2");

resoult.style.display = "none";

function showResoult(data) {
  if (data.amount) {
    resoult.textContent = `Больше всего символов "${data.char}" в строке "${data.row}", кол-во символов: ${data.amount}`;
  } else {
    resoult.textContent = `Во фразах "${data.row}" нет буквы "${data.char}"`;
  }
  resoult.style.display = "flex";
  title.style.display = "none";
}

function findCharAmount(firstRow, secondRow, char) {
  let firstCount = 0;
  let secondCount = 0;
  let dataRes = {};
  for (let i = 0; i < firstRow.length; i++) { //вот цикл for :)
    if (firstRow[i] === char) {
      firstCount++;
    }
    if (secondRow[i] === char) {
      secondCount++;
    }
  }
  if (firstCount === 0 && secondCount === 0) {
    dataRes = {
      row: `${firstRow} и ${secondRow}`,
      char,
    };
  } else {
    dataRes = {
      row: firstCount > secondCount ? firstRow : secondRow,
      amount: firstCount > secondCount ? firstCount : secondCount,
      char,
    };
  }
  showResoult(dataRes);
}

function takePhrase() {
  const firstRow = prompt("введите первую фразу:");
  const secondRow = prompt("введите вторую фразу:");
  const WhatCharFound = prompt("введите букву которую искать:");

  findCharAmount(firstRow, secondRow, WhatCharFound);
}

function resetContent() {
  resoult.textContent = "";
  resoult.style.display = "none";
  title.style.display = "flex";
}

title.addEventListener("click", takePhrase);
resoult.addEventListener("click", resetContent);
