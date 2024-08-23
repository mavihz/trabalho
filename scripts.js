function mostrarTexto() {
    const textoNorma = document.getElementById('textoNorma');
    textoNorma.style.display = textoNorma.style.display === 'none' ? 'block' : 'none';
}

function calcularInsalubridade() {
    const salarioBase = parseFloat(document.getElementById('salarioBase').value);
    const grauInsalubridade = parseFloat(document.getElementById('grauInsalubridade').value);
    const resultadoElemento = document.getElementById('resultadoInsalubridade');

    if (!salarioBase || !grauInsalubridade) {
        resultadoElemento.textContent = "Por favor, preencha todos os campos.";
        resultadoElemento.className = 'resultado erro';
        return;
    }

    const adicional = salarioBase * (grauInsalubridade / 100);
    resultadoElemento.textContent = "Acréscimo salarial: R$ " + adicional.toFixed(2);
    resultadoElemento.className = 'resultado';
}

function calcularRuido() {
    const tempoExposicao = parseFloat(document.getElementById('tempoExposicao').value);
    const decibeis = parseFloat(document.getElementById('decibeis').value);
    const resultadoElemento = document.getElementById('resultadoRuido');

    if (!tempoExposicao || !decibeis) {
        resultadoElemento.textContent = "Por favor, preencha todos os campos.";
        resultadoElemento.className = 'resultado erro';
        return;
    }

    const exposicaoMaxima = tempoExposicao * Math.pow(2, (decibeis - 85) / 3);

    if (exposicaoMaxima <= tempoExposicao) {
        resultadoElemento.textContent = "Exposição adequada.";
        resultadoElemento.className = 'resultado';
    } else {
        resultadoElemento.textContent = "Exposição prejudicial.";
        resultadoElemento.className = 'resultado erro';
    }
}

