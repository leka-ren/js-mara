function takePhrase() {
    const firstRow = prompt("введите первую фразу:");
    const secondRow = prompt("введите вторую фразу:");
    const WhatCharFound = prompt("введите букву которую искать:");
  
    getRow(firstRow, secondRow, WhatCharFound);
  }