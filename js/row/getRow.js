function getRow(firstRow, secondRow, char) {
  let firstCount = 0;
  let secondCount = 0;
  let dataRes = {};
  //вот цикл for :)
  if ((!firstRow || !secondRow || !char) || (firstRow.length === 0 || secondRow.length === 0 || char.length === 0 || char.length !== 1)) {
    result = confirm(
      "Вы ввели неверный формат данных, попробуете еще раз?"
    );
    if (result) {
      takePhrase();
    } else {
      window.location.reload();
    }
  }
  for (let i = 0; i < firstRow.length || i < secondRow.length; i++) {
    if (firstRow.charAt(i) === char) {
      firstCount++;
    }
    if (secondRow.charAt(i) === char) {
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
  if (typeof showResoultRow === "function") {
    showResoultRow(dataRes);
  }
  return dataRes.row;
}
