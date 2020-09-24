function formattedPhone(num) {
  let numNew = "";
  let resoultFormattedNum = "";
  if (
    num &&
    ((num.length === 12 && num.charAt(0) === "+" && num.charAt(1) === "7") ||
      (num.length === 11 && num.charAt(0) === "8") ||
      num.length === 10)
  ) {
    for (let i = num.length - 1; i >= num.length - 4; i--) {
      numNew += num.charAt(i);
      if (i === num.length - 2 || i === num.length - 4) {
        numNew += "-";
      }
    }
    let count = 1;
    for (let i = num.length - 5; count !== 7; i--) {
      count++;
      if (count === 5) {
        numNew += " ";
      }
      if (count === 5) {
        numNew += ")";
      }
      numNew += num.charAt(i);
      if (count === 7) {
        numNew += "(";
      }
    }
    for (let i = numNew.length; i >= 0; i--) {
      if (i === numNew.length) {
        resoultFormattedNum += "+7 ";
      }
      resoultFormattedNum += numNew.charAt(i);
    }
    if (typeof showContentNum === "function") {
      showContentNum(resoultFormattedNum);
    }
    return resoultFormattedNum;
  } else {
    result = confirm(
      "Вы ввели неправильный формат телефона, попробуете еще раз?"
    );
    if (result) {
      getNumber();
    } else {
      window.location.reload();
    }
  }
}
