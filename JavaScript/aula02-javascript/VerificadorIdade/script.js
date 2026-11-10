const campoIdade = document.getElementById("idade"); 
const botao = document.getElementById("verificar"); 
const resultado = document.getElementById("resultado"); 
botao.addEventListener("click", function () {  
    const texto = campoIdade.value.trim();  
    if (texto === "") {    
        resultado.textContent = "Informe a idade.";    
        return;  
    }  const idade = Number(texto);  
    if (!Number.isInteger(idade) || idade < 0 || idade > 120) {    
        resultado.textContent = "Idade inválida.";    
        return;  }  if (idade >= 18) {    
            resultado.textContent = "Maior de idade.";  
        } else {    
            resultado.textContent = "Menor de idade.";  
        } 
    });