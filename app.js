function calcular(event) {
  event.preventDefault();

  let inputPeso = parseFloat(document.getElementById("inputPeso").value);
  let inputAltura = parseFloat(document.getElementById("inputAltura").value);
  let total = inputPeso / (inputAltura * inputAltura);
  document.getElementById("divImagen").style.visibility = "visible";
  document.getElementById("divImagen").style.margin = "14px";
  document.getElementById("divImagen").style.width = "260px";
  document.getElementById("divImagen").style.height = "378px";
  document.getElementById("container").style.width = "580px";
  document.getElementById("container").style.height = "452px";

  if (total < 18.5) {
    document.getElementById(
      "resultado"
    ).textContent = 'Es importante que consultes con un profesional de la salud.';
    document.getElementById("resultado2").textContent = ` Tu IMC es: ${total.toFixed(2)}`;
    document.getElementById("divImagen").classList.remove("peso4");
    document.getElementById("divImagen").classList.remove("peso3");
    document.getElementById("divImagen").classList.remove("peso2");
    document.getElementById("divImagen").classList.add("peso1");
  } else if (total >= 18.5 && total <= 24.9) {
    document.getElementById(
      "resultado"
    ).textContent = '¡Sigue manteniedo un estilo de vida saludable!';
    document.getElementById("resultado2").textContent = ` Tu IMC es: ${total.toFixed(2)}`;
    document.getElementById("divImagen").classList.remove("peso1");
    document.getElementById("divImagen").classList.remove("peso3");
    document.getElementById("divImagen").classList.remove("peso4");
    document.getElementById("divImagen").classList.add("peso2");
  } else if (total >= 25.0 && total <= 29.9) {
    document.getElementById(
      "resultado"
    ).textContent = 'Considera hacer ajustes en tu vida alimenticia';
    document.getElementById("resultado2").textContent = ` Tu IMC es: ${total.toFixed(2)}`;
    document.getElementById("divImagen").classList.remove("peso1");
    document.getElementById("divImagen").classList.remove("peso2");
    document.getElementById("divImagen").classList.remove("peso4");
    document.getElementById("divImagen").classList.add("peso3");
  } else if (total >= 30.0) {
    document.getElementById("resultado").textContent = 'Es recomendable que busques asesoramiento para tu salud.';
    document.getElementById("resultado2").textContent = ` Tu IMC es: ${total.toFixed(2)}`;
    document.getElementById("divImagen").classList.remove("peso3");
    document.getElementById("divImagen").classList.remove("peso2");
    document.getElementById("divImagen").classList.remove("peso1");
    document.getElementById("divImagen").classList.add("peso4");
  }
}