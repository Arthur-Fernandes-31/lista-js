function calcularIMC() {
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);
    
    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        document.getElementById('resultado').innerText = "Por favor, insira valores válidos.";
        return;
    }
    
    let imc = peso / (altura * altura);
    let categoria = "";
    
    if (imc < 18.5) {
        categoria = "Abaixo do peso";
    } else if (imc < 24.9) {
        categoria = "Peso normal";
    } else if (imc < 29.9) {
        categoria = "Sobrepeso";
    } else {
        categoria = "Obesidade";
    }
    
    document.getElementById('resultado').innerText = `Seu IMC é ${imc.toFixed(2)} - ${categoria}`;
}