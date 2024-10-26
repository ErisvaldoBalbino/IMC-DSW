function calcularImc() {
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    
    if (!isNaN(peso) && !isNaN(altura) && peso > 0 && altura > 0) {
      const imc = peso/(altura**2)
      document.getElementById("resultado").innerText = `Seu IMC é: ${imc.toFixed(2)}`;
      if (imc < 18.5) {
        document.getElementById("classificacao").innerText = "Abaixo do peso";
      } else if ( imc > 18.6 && imc < 24.9) {
        document.getElementById("classificacao").innerText = "Peso ideal";
      } else if ( imc > 25 && imc < 29.9) {
        document.getElementById("classificacao").innerText = "Sobrepeso";
      } else if ( imc > 30 && imc < 34.9) {
        document.getElementById("classificacao").innerText = "Obesidade grau 1";
      } else if ( imc > 35 && imc < 39.9) {
        document.getElementById("classificacao").innerText = "Obesidade grau 2";
      } else if ( imc > 40) {
        document.getElementById("classificacao").innerText = "Obesidade grau 3";
      }
    } else {
      document.getElementById("resultado").innerText = "Insira um número válido.";
    }
}
