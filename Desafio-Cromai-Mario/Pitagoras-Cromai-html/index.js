let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let res = document.getElementById("res");

function calcular() {
  let catetoOp = Number(number1.value);
  let catetoAd = Number(number2.value);

  let hipotenusa = Math.hypot(catetoOp, catetoAd);
  res.innerHTML = `<strong>Cateto Opositor </strong> ${catetoOp}<br> <strong>Cateto Adjacente</strong> ${catetoAd}<br> <strong>Hipotenusa</strong> ${hipotenusa.toFixed(
    2
  )}`;
}
