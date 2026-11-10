// Busca o botão usado para iniciar os cálculos.
const botao = document.getElementById("btnCalcular");

// Executa a função quando o usuário clica no botão.
botao.addEventListener("click", function () {
    // Busca os campos dos números e a área de exibição dos resultados.
    const campo1 = document.getElementById("numero1");
    const campo2 = document.getElementById("numero2");
    const resultado = document.getElementById("resultado");

    // Verifica se os dois campos foram preenchidos.
    if (campo1.value === "" || campo2.value === "") {
        resultado.textContent = "Preencha os dois números.";
        return;
    }

    // Converte os valores digitados de texto para números.
    const numero1 = Number(campo1.value);
    const numero2 = Number(campo2.value);

    // Calcula a soma, a subtração e a multiplicação.
    const soma = numero1 + numero2;
    const subtracao = numero1 - numero2;
    const multiplicacao = numero1 * numero2;

    // Evita a divisão por zero; caso contrário, calcula a divisão.
    const divisao = numero2 === 0
        ? "Não é possível dividir por zero."
        : numero1 / numero2;

    // Exibe os quatro resultados na página.
    resultado.innerHTML = `
        <p>Soma: ${soma}</p>
        <p>Subtração: ${subtracao}</p>
        <p>Multiplicação: ${multiplicacao}</p>
        <p>Divisão: ${divisao}</p>
    `;
});