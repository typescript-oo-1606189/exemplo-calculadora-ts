import { calcular, TipoOperacao } from "./calculadora.js";

function mostrarResultado() {
  const input1 = document.getElementById("num1") as HTMLInputElement;
  const input2 = document.getElementById("num2") as HTMLInputElement;
  const selectOp = document.getElementById("op") as HTMLInputElement;
  const resultadoInput = document.getElementById("resultado") as HTMLInputElement;

  const num1 = Number(input1.value);
  const num2 = Number(input2.value);
  const op = selectOp.value as TipoOperacao;
  const resultado = calcular(num1, op, num2);

  resultadoInput.value = String(resultado);
}

function registrarEventos() {
  const buttonCalcular = document.getElementById("calcular") as HTMLInputElement;

  buttonCalcular.addEventListener("click", mostrarResultado);
}

registrarEventos();