# DESENVOLVIMENTO DE INTERFACE

![Logomarca CEUB](logo-ceub-colorida(10).png)

# Módulo JavaScript — Aula 2
## Entrada de dados, manipulação do DOM e estruturas condicionais

**Material do estudante | ADS | Profa. Kadidja Valéria | CEUB**

**Modalidade:** laboratório prático · **Duração:** 2h30 · **Pré-requisitos:** Aula 1 (variáveis, tipos e operadores).

## 1. Objetivos

Ao final da aula, você deverá ler valores digitados em uma interface HTML, converter dados, capturar cliques, validar campos, usar `if`, `else if` e `else` e apresentar mensagens ao usuário.

## 2. Roteiro de estudo (150 minutos)

| Etapa | Tempo |
|---|---:|
| Revisão e preparação | 15 min |
| Entrada de dados e DOM | 25 min |
| Eventos e conversão | 25 min |
| Condicionais e validação | 30 min |
| Laboratórios | 40 min |
| Testes e entrega | 15 min |

## 3. Conceitos essenciais

**DOM (Document Object Model)** é a representação da página que JavaScript consegue acessar e modificar. `document.getElementById("nome")` localiza um elemento pelo seu ID. `.value` lê o valor atual de um campo, que normalmente é uma string, mesmo quando o input tem `type="number"`. `Number()` converte a entrada para número. `addEventListener("click", ...)` executa uma função quando o botão é clicado. `textContent` apresenta mensagens de texto na página.

```javascript
const texto = document.getElementById("idade").value;
const idade = Number(texto);
console.log(typeof texto); // string
console.log(typeof idade); // number
```

### Condicionais

```javascript
const nota = 7;
if (nota >= 9) {
  console.log("Excelente");
} else if (nota >= 6) {
  console.log("Satisfatório");
} else {
  console.log("Precisa revisar");
}
```

O operador `&&` exige duas condições verdadeiras; `||` exige pelo menos uma; `!` inverte um valor lógico.

## 4. Preparação do laboratório

1. Crie uma pasta `aula02-javascript`.
2. Abra a pasta no VS Code.
3. Crie `index.html` e `script.js`.
4. Abra `index.html` no navegador (ou com Live Server).
5. Abra as Ferramentas do Desenvolvedor (`F12`) e selecione **Console** para identificar erros.

## 5. Laboratório 1 — Verificador de idade (prática guiada)

**Problema:** construir uma interface que receba a idade, valide o valor e informe se a pessoa é maior ou menor de idade.

### Passo 1 — Escreva o HTML em `index.html`

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Verificador de idade</title>
  <script src="script.js" defer></script>
</head>
<body>
  <main>
    <h1>Verificador de idade</h1>
    <label for="idade">Informe sua idade:</label>
    <input id="idade" type="number" min="0" max="120" step="1">
    <button id="verificar" type="button">Verificar</button>
    <p id="resultado" role="status" aria-live="polite"></p>
  </main>
</body>
</html>
```

**Observe:** o atributo `for` do `label` corresponde ao `id` do campo; `defer` carrega o script sem tentar acessar elementos antes de existirem.

### Passo 2 — Localize os elementos em `script.js`

```javascript
const campoIdade = document.getElementById("idade");
const botao = document.getElementById("verificar");
const resultado = document.getElementById("resultado");
```

### Passo 3 — Capture o clique e leia a entrada

```javascript
botao.addEventListener("click", function () {
  const texto = campoIdade.value.trim();
  console.log("Entrada:", texto);
});
```

Salve, recarregue a página e clique no botão. Confira o console.

### Passo 4 — Substitua o código do evento pela versão completa

```javascript
const campoIdade = document.getElementById("idade");
const botao = document.getElementById("verificar");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", function () {
  const texto = campoIdade.value.trim();

  if (texto === "") {
    resultado.textContent = "Informe a idade.";
    return;
  }

  const idade = Number(texto);
  if (!Number.isInteger(idade) || idade < 0 || idade > 120) {
    resultado.textContent = "Idade inválida.";
    return;
  }

  if (idade >= 18) {
    resultado.textContent = "Maior de idade.";
  } else {
    resultado.textContent = "Menor de idade.";
  }
});
```

**Entenda:** `return` encerra a execução do evento após uma entrada inválida. Validamos o texto vazio **antes** de `Number()`, pois `Number("")` resulta em `0`. `Number.isInteger()` impede idades fracionárias.

### Passo 5 — Teste e registre

| Entrada | Saída esperada |
|---|---|
| 17 | Menor de idade. |
| 18 | Maior de idade. |
| 0 | Menor de idade. |
| -2 | Idade inválida. |
| 18.5 | Idade inválida. |
| campo vazio | Informe a idade. |

**Desafio extra:** exiba também a frase `Faltam X anos para completar 18` quando a idade for inferior a 18.

## 6. Laboratório 2 — Calculadora de média e situação (desafio guiado)

**Problema:** uma instituição precisa informar a média de três notas e a situação do estudante. Nesta atividade, média igual ou superior a 6 significa **Aprovado**; caso contrário, **Recuperação**. Esta regra é apenas para o exercício.

### Passo 1 — Crie uma nova pasta `laboratorio-media` com `index.html` e `script.js`

### Passo 2 — Construa a interface

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Calculadora de média</title>
  <script src="script.js" defer></script>
</head>
<body>
  <h1>Calculadora de média</h1>
  <label for="n1">Nota 1</label><input id="n1" type="number" min="0" max="10" step="0.1">
  <label for="n2">Nota 2</label><input id="n2" type="number" min="0" max="10" step="0.1">
  <label for="n3">Nota 3</label><input id="n3" type="number" min="0" max="10" step="0.1">
  <button id="calcular" type="button">Calcular</button>
  <p id="resultado" role="status" aria-live="polite"></p>
</body>
</html>
```

### Passo 3 — Escreva o algoritmo antes de programar

1. Ler os três textos dos campos.
2. Se algum texto estiver vazio, apresentar uma mensagem e encerrar.
3. Converter os textos para números.
4. Verificar se os valores são finitos e estão entre 0 e 10.
5. Calcular `(n1 + n2 + n3) / 3`.
6. Se a média for maior ou igual a 6, exibir `Aprovado`; senão, `Recuperação`.
7. Exibir a média com duas casas decimais usando `toFixed(2)`.

### Passo 4 — Complete o código inicial

```javascript
const botao = document.getElementById("calcular");
const saida = document.getElementById("resultado");

botao.addEventListener("click", function () {
  const t1 = document.getElementById("n1").value.trim();
  const t2 = document.getElementById("n2").value.trim();
  const t3 = document.getElementById("n3").value.trim();

  // TODO 1: verifique se algum campo está vazio.
  // TODO 2: converta t1, t2 e t3 com Number().
  // TODO 3: valide as notas entre 0 e 10.
  // TODO 4: calcule a média.
  // TODO 5: use if/else para definir a situação.
  // TODO 6: mostre média e situação em saida.textContent.
});
```

**Dica de validação:** `!Number.isFinite(nota) || nota < 0 || nota > 10`. Use essa condição para cada nota e combine as verificações com `||`.

### Passo 5 — Casos de teste

| Notas | Resultado esperado |
|---|---|
| 8, 7, 9 | Média 8.00 — Aprovado |
| 6, 6, 6 | Média 6.00 — Aprovado |
| 5, 5, 5 | Média 5.00 — Recuperação |
| 0, 0, 0 | Média 0.00 — Recuperação |
| 12, 8, 9 | Erro: nota fora da faixa |
| 8, vazio, 9 | Erro: campo vazio |

### Passo 6 — Melhoria opcional

Adicione CSS para organizar os campos e melhorar contraste, espaçamento e legibilidade. Não utilize apenas cor para indicar aprovação ou recuperação: mantenha o texto da situação.

## 7. Exercícios de fixação (sem gabarito)

**Exercício 1 — Par ou ímpar.** No console, declare um número inteiro e use `%` e `if/else` para exibir se é par ou ímpar. Teste com 8 e 11.

**Exercício 2 — Desconto.** Uma compra de R$ 200 ou mais recebe desconto de 10%. Declare o valor da compra e use uma condição para calcular o total. Teste com 199 e 200.

**Exercício 3 — Acesso.** Uma pessoa só acessa o sistema se tiver 18 anos ou mais **e** cadastro ativo. Use `&&` e apresente uma mensagem. Teste com diferentes combinações.

**Exercício 4 — Saudação no DOM.** Crie um campo para nome, um botão e uma área de saída. Ao clicar, mostre `Olá, NOME!`; se o campo estiver vazio, solicite preenchimento.

**Exercício 5 — Classificação de temperatura.** Receba uma temperatura e exiba: abaixo de 18, `Frio`; de 18 até menos de 28, `Agradável`; 28 ou mais, `Quente`. Use `if/else if/else`.

**Exercício 6 — Desafio de validação.** Modifique o laboratório de média para informar qual campo contém uma nota inválida.

## 8. Depuração e boas práticas

- Verifique se o `id` do HTML coincide com o usado no JavaScript.
- Abra o console para localizar erros e acompanhar valores com `console.log()`.
- Não some strings quando deseja somar números: converta antes.
- Verifique campos vazios antes da conversão numérica.
- Prefira `textContent` para mensagens textuais.
- Teste limites: 17/18 anos e média 5.99/6.00.

## 9. Entrega e avaliação

**Entregar:** pastas dos dois laboratórios, arquivos HTML e JS, capturas de tela dos testes e respostas dos seis exercícios. Organize os arquivos e inclua comentários breves explicando as validações.

| Critério | Pontos |
|---|---:|
| Estrutura HTML e IDs corretos | 1,5 |
| Leitura, conversão e eventos | 2,0 |
| Condicionais e operadores lógicos | 2,0 |
| Validação e testes de fronteira | 2,0 |
| Laboratórios e exercícios completos | 2,0 |
| Organização e legibilidade | 0,5 |
| **Total** | **10,0** |

## 10. Autoavaliação

- [ ] Consigo localizar elementos HTML pelo ID.
- [ ] Sei obter e converter dados de um input.
- [ ] Sei executar código quando um botão é clicado.
- [ ] Consigo escrever condições com if, else if e else.
- [ ] Sei validar dados antes de calcular.
- [ ] Consigo atualizar mensagens na página com textContent.

**Próxima aula:** funções e organização do código JavaScript.
