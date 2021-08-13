const btn = document.querySelector("#btn-kick");

const character = {
  name: "Pikachu",
  defaultHP: 100,
  damageHP: 100,
  elHP: document.querySelector("#health-character"),
  elProBar: document.querySelector("#progressbar-character"),
};
const enemy = {
  name: "Charmander",
  defaultHP: 100,
  damageHP: 100,
  elHP: document.querySelector("#health-enemy"),
  elProBar: document.querySelector("#progressbar-enemy"),
};

function random(num) {
  return Math.floor(Math.random() * num);
}

function init() {
  changeHP(random(20), character);
  changeHP(random(20), enemy);
}

function renderHPLife(person) {
  person.elHP.textContent = person.damageHP + " / " + person.defaultHP;
}

function renderProgressbarHP(person) {
  person.elProBar.style.width = person.damageHP + "%";
}

function renderHP(person) {
  renderHPLife(person);
  renderProgressbarHP(person);
}

function changeHP(count, person) {
  if (person.damageHP < count) {
    person.damageHP = 0;
    alert(person.name + " " + "проиграл");
    btn.disabled = true
  } else {
    person.damageHP -= count;
  }
  renderHP(person);
}

btn.addEventListener("click", init);
