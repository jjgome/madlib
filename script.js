document.getElementById("btn").addEventListener("click", getOrder);

function getOrder() {
  let adj = document.getElementById("adjective").value;
  let clr = document.getElementById("Color").value;
  let nnn = document.getElementById("noun").value;
  let plrNnn = document.getElementById("plural").value;

  let output = `One ${adj} day, I was walking my ${clr} pet ${nnn} when ${plrNnn} started flying`;

  document.getElementById("container").innerHTML = output;
}

document.getElementById("btn2").addEventListener("click", getAnswer);

function getAnswer() {
  let adj2 = document.getElementById("adjective").value;
  let clr2 = document.getElementById("Color").value;
  let nnn2 = document.getElementById("noun").value;
  let plrNnn2 = document.getElementById("plural").value;

  let output = `Once upon a time there was a ${adj2} unicorn with ${clr2} fur. This unicorn loved to eat ${plrNnn2} and gallop through ${nnn2} `;

  document.getElementById("container").innerHTML = output;
}
