# DESENVOLVIMENTO DE INTERFACE

## Módulo JavaScript — Aula 1

**Introdução, Variáveis e Operadores: o guia prático**  
**Profa. Kadidja Valéria | ADS**  
**Aula prática de laboratório | Material do estudante**

![Logomarca CEUB](logo-ceub-colorida(10).png)

---

## 1. Apresentação

Nesta aula, você começará a programar interfaces web interativas com JavaScript. O percurso combina conceitos, exemplos executáveis, experimentação no navegador e desenvolvimento de pequenas aplicações. O foco é compreender como a lógica de programação se conecta aos elementos HTML e à apresentação CSS.

**Metodologia:** compreender, observar, reproduzir, modificar, testar e resolver desafios.

## 2. Planejamento da aula

| Item | Descrição |
|---|---|
| Curso | Análise e Desenvolvimento de Sistemas (ADS) |
| Disciplina | Desenvolvimento de Interface |
| Módulo | JavaScript |
| Tema | Introdução, variáveis e operadores |
| Modalidade | Laboratório teórico-prático |
| Carga horária sugerida | 4 horas (240 minutos) |
| Pré-requisitos | HTML e CSS básicos |

| Etapa | Atividade | Duração |
|---|---|---|
| 1 | Introdução ao JavaScript | 25 min |
| 2 | Preparação do ambiente | 20 min |
| 3 | Variáveis e tipos de dados | 40 min |
| 4 | Operadores | 45 min |
| 5 | Prática orientada | 45 min |
| 6 | Projeto de laboratório | 45 min |
| 7 | Avaliação e encerramento | 20 min |

## 3. Objetivos de aprendizagem

Ao concluir esta aula, você deverá ser capaz de:

- Explicar o papel de HTML, CSS e JavaScript no desenvolvimento web.
- Criar arquivos HTML, CSS e JavaScript e executá-los no navegador.
- Declarar variáveis com `let` e `const` e reconhecer tipos de dados.
- Utilizar operadores aritméticos, de atribuição, comparação e lógicos.
- Capturar valores de campos HTML e apresentar resultados na página.
- Desenvolver e testar uma calculadora simples e uma calculadora de médias.

## 4. Introdução ao JavaScript

**HTML** define a estrutura da página (títulos, campos e botões). **CSS** controla a aparência (cores, tipografia e organização). **JavaScript** define o comportamento (cálculos, validações e respostas aos cliques).

Exemplos de uso: calcular o total de uma compra, validar um formulário, atualizar uma mensagem, mostrar uma média de notas e reagir a um botão.

### 4.1. Preparação do ambiente

Use um navegador moderno e um editor como o Visual Studio Code. Crie a pasta `aula01-javascript` com os arquivos:

```text
aula01-javascript/
├── index.html
├── style.css
└── script.js
```

No arquivo `index.html`:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Minha primeira aplicação</title>
</head>
<body>
  <h1>Minha primeira aplicação JavaScript</h1>
  <script src="script.js"></script>
</body>
</html>
```

No arquivo `script.js`:

```javascript
console.log("Olá, estudante de ADS!");
console.log("Minha primeira aplicação JavaScript.");
```

Abra o HTML no navegador, pressione `F12` e selecione a aba **Console**. Você verá as duas mensagens. `console.log()` ajuda a observar dados e depurar programas.

## 5. Variáveis e tipos de dados

Uma variável associa um nome a um valor. Em aplicações web, valores podem representar nomes, preços, quantidades, notas ou estados.

```javascript
let idade = 22;        // pode receber outro valor
idade = 23;
const curso = "ADS";   // não pode ser reatribuído
console.log(idade, curso);
```

**Boas práticas:** use `const` por padrão e `let` quando houver reatribuição. Evite `var` em novos projetos. Escolha nomes descritivos em `camelCase`, como `valorTotal` e `nomeAluno`. Uma declaração `const` impede reatribuição, mas não torna objetos automaticamente imutáveis.

### 5.1. Tipos fundamentais

| Tipo | Exemplo | Utilidade |
|---|---|---|
| String | `"Mariana"` | Texto |
| Number | `89.90` | Números inteiros ou decimais |
| Boolean | `true` | Verdadeiro ou falso |
| Undefined | `let telefone;` | Valor ainda não atribuído |
| Null | `let endereco = null;` | Ausência intencional de valor |

```javascript
let nome = "João";
let idade = 30;
let ativo = true;
console.log(typeof nome);  // string
console.log(typeof idade); // number
console.log(typeof ativo); // boolean
```

**Experimente:** declare uma variável de cada tipo e use `typeof` para verificar o resultado. Observe que `typeof null` retorna `"object"`, uma particularidade histórica da linguagem.

## 6. Operadores JavaScript

### 6.1. Aritméticos

| Operador | Significado | Exemplo |
|---|---|---|
| `+` | Adição | `10 + 5` |
| `-` | Subtração | `10 - 5` |
| `*` | Multiplicação | `10 * 5` |
| `/` | Divisão | `10 / 5` |
| `%` | Resto da divisão | `10 % 3` |
| `**` | Potenciação | `2 ** 3` |

```javascript
let numero1 = 20;
let numero2 = 5;
console.log("Soma:", numero1 + numero2);       // 25
console.log("Subtração:", numero1 - numero2); // 15
console.log("Produto:", numero1 * numero2);   // 100
console.log("Divisão:", numero1 / numero2);   // 4
console.log("Resto:", numero1 % numero2);     // 0
console.log("Potência:", numero1 ** 2);       // 400
```

### 6.2. Atribuição

```javascript
let saldo = 100;
saldo += 50; // 150
saldo -= 20; // 130
saldo *= 2;  // 260
saldo /= 4;  // 65
console.log(saldo);
```

### 6.3. Comparação

| Operador | Significado |
|---|---|
| `==` | Igualdade com conversão de tipo |
| `===` | Igualdade estrita (valor e tipo) |
| `!=` | Diferença com conversão de tipo |
| `!==` | Diferença estrita |
| `>` / `<` | Maior / menor |
| `>=` / `<=` | Maior ou igual / menor ou igual |

```javascript
console.log(10 == "10");  // true
console.log(10 === "10"); // false
console.log(20 >= 18);    // true
```

**Dica:** prefira `===` e `!==` para evitar conversões implícitas inesperadas.

### 6.4. Lógicos

`&&` significa **E**; `||` significa **OU**; `!` significa **NÃO**.

```javascript
const idade = 20;
const possuiCadastro = true;
const podeAcessar = idade >= 18 && possuiCadastro;
console.log(podeAcessar); // true
```

## 7. Laboratório 1 — Cadastro simples de usuário

**Situação-problema:** armazenar e exibir informações de um usuário.

```javascript
const nome = "Lucas Ferreira";
const email = "lucas@email.com";
let idade = 24;
let usuarioAtivo = true;

console.log("DADOS DO USUÁRIO");
console.log("Nome:", nome);
console.log("E-mail:", email);
console.log("Idade:", idade);
console.log("Usuário ativo:", usuarioAtivo);
```

**Tarefas:** (1) execute; (2) modifique nome, e-mail, idade e status; (3) registre o resultado; (4) crie `anoNascimento` e estime a idade usando 2026 como referência. A idade real pode depender de o aniversário já ter ocorrido.

## 8. Laboratório 2 — Calculadora de operações

**Objetivo:** criar uma interface com dois campos, um botão e resultados de soma, subtração, multiplicação e divisão.

### 8.1. HTML (`index.html`)

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculadora JavaScript</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <main class="container">
    <h1>Calculadora JavaScript</h1>
    <label for="numero1">Primeiro número:</label>
    <input type="number" id="numero1" placeholder="Digite um número">
    <label for="numero2">Segundo número:</label>
    <input type="number" id="numero2" placeholder="Digite um número">
    <button id="btnCalcular">Calcular</button>
    <section id="resultado" aria-live="polite">
      Os resultados aparecerão aqui.
    </section>
  </main>
  <script src="script.js"></script>
</body>
</html>
```

### 8.2. CSS (`style.css`)

```css
* { box-sizing: border-box; }
body {
  font-family: Arial, sans-serif;
  background: #f4f1f6;
  margin: 0;
  padding: 30px;
}
.container {
  max-width: 500px;
  margin: 40px auto;
  padding: 30px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,.10);
}
h1 { color: #43054e; text-align: center; }
label { display: block; margin-top: 15px; }
input {
  width: 100%; padding: 12px; margin-top: 8px;
  border: 1px solid #ccc; border-radius: 6px;
}
button {
  width: 100%; margin-top: 20px; padding: 12px;
  background: #662c92; color: white;
  border: 0; border-radius: 6px; cursor: pointer;
}
button:hover { background: #43054e; }
#resultado {
  margin-top: 20px; padding: 15px;
  background: #f3f4f6; border-radius: 6px;
}
```

### 8.3. JavaScript (`script.js`)

```javascript
const botao = document.getElementById("btnCalcular");

botao.addEventListener("click", function () {
  const campo1 = document.getElementById("numero1");
  const campo2 = document.getElementById("numero2");
  const resultado = document.getElementById("resultado");

  if (campo1.value === "" || campo2.value === "") {
    resultado.textContent = "Preencha os dois números.";
    return;
  }

  const numero1 = Number(campo1.value);
  const numero2 = Number(campo2.value);
  const soma = numero1 + numero2;
  const subtracao = numero1 - numero2;
  const multiplicacao = numero1 * numero2;
  const divisao = numero2 === 0
    ? "Não é possível dividir por zero."
    : numero1 / numero2;

  resultado.innerHTML = `
    <p>Soma: ${soma}</p>
    <p>Subtração: ${subtracao}</p>
    <p>Multiplicação: ${multiplicacao}</p>
    <p>Divisão: ${divisao}</p>
  `;
});
```

### 8.4. Testes e explicações

1. Abra `index.html` no navegador.
2. Informe dois números e clique em **Calcular**.
3. Teste `20` e `5`: soma 25, subtração 15, multiplicação 100 e divisão 4.
4. Teste um campo vazio: deve aparecer uma mensagem de preenchimento.
5. Teste o segundo número igual a zero: a divisão deve ser bloqueada.

`getElementById()` localiza elementos; `.value` lê campos; `Number()` converte a entrada para número; `addEventListener()` escuta o clique; `textContent` e `innerHTML` atualizam o conteúdo. O `if` e o operador ternário são apresentados aqui como antecipação de conteúdos da próxima aula.

## 9. Laboratório 3 — Desafio: calculadora de média

**Situação-problema:** uma instituição precisa permitir que estudantes calculem a média aritmética de três avaliações.

**Requisitos:** três campos numéricos; botão para calcular; média na tela; rejeição de campos vazios; notas somente entre 0 e 10.

**Fórmula:** média = (nota1 + nota2 + nota3) / 3.

### Estrutura HTML inicial

```html
<h1>Calculadora de Média</h1>
<label for="nota1">Nota 1:</label>
<input type="number" id="nota1" min="0" max="10" step="0.1">
<label for="nota2">Nota 2:</label>
<input type="number" id="nota2" min="0" max="10" step="0.1">
<label for="nota3">Nota 3:</label>
<input type="number" id="nota3" min="0" max="10" step="0.1">
<button id="calcular">Calcular Média</button>
<div id="resultado" aria-live="polite"></div>
```

**Sua missão:** escreva o JavaScript, aplique CSS e teste os casos. Não consulte uma solução pronta antes de tentar.

| Nota 1 | Nota 2 | Nota 3 | Resultado esperado |
|---|---|---|---|
| 8 | 7 | 9 | Média 8 |
| 10 | 10 | 10 | Média 10 |
| 5 | 5 | 5 | Média 5 |
| 0 | 0 | 0 | Média 0 |
| 12 | 8 | 9 | Mensagem de erro |
| 8 | -1 | 9 | Mensagem de erro |
| Vazio | 8 | 9 | Mensagem de erro |

## 10. Exercícios de fixação

1. **Cadastro de estudante:** crie variáveis para nome, matrícula, curso, período e situação acadêmica. Exiba no console.
2. **Compra:** considere um produto de R$ 150,00; crie preço, quantidade e valor total e realize o cálculo.
3. **Desconto:** um produto de R$ 200,00 tem 15% de desconto. Calcule o desconto e o preço final.
4. **Comparação:** crie uma variável `idade` e teste `> 18`, `< 18`, `=== 18` e `>= 18`.
5. **Operadores lógicos:** com `idade = 22`, `possuiCadastro = true` e `contaAtiva = true`, verifique idade mínima e cadastro, conta ativa ou cadastro e conta não ativa.
6. **Par ou ímpar:** use `%` para verificar se um número inteiro é divisível por 2.

## 11. Autoavaliação — Quiz sem gabarito

Marque uma alternativa para cada questão e discuta suas escolhas com a turma.

1. Qual tecnologia controla o comportamento de uma página? (A) HTML (B) CSS (C) JavaScript (D) SQL
2. Qual declaração permite reatribuir valores? (A) const (B) let (C) class (D) return
3. Qual o tipo de `"ADS"`? (A) Number (B) Boolean (C) String (D) Null
4. Quanto vale `10 % 3`? (A) 3 (B) 1 (C) 0 (D) 10
5. Qual operador compara valor e tipo? (A) = (B) == (C) === (D) !=
6. Qual método localiza um elemento HTML por ID? (A) console.log() (B) document.getElementById() (C) typeof (D) Number()
7. Qual operador lógico representa E? (A) || (B) ! (C) && (D) =
8. Qual função converte texto numérico em número? (A) String() (B) Number() (C) Boolean() (D) typeof

## 12. Entrega das atividades

Organize a pasta de entrega:

```text
Aula01-JavaScript/
├── index.html
├── style.css
├── script.js
└── evidencias/
    ├── calculadora.png
    └── media-estudante.png
```

**Checklist de entrega:**

- [ ] Arquivos HTML, CSS e JavaScript organizados.
- [ ] Laboratório 1: cadastro simples executado.
- [ ] Laboratório 2: calculadora funcional.
- [ ] Laboratório 3: calculadora de média validada.
- [ ] Exercícios de fixação realizados.
- [ ] Capturas de tela mostrando os testes.

## 13. Critérios de avaliação prática

| Critério | Pontuação |
|---|---|
| Organização dos arquivos e HTML | 1,0 |
| Variáveis e tipos de dados | 1,5 |
| Operadores | 1,5 |
| Integração HTML e JavaScript | 2,0 |
| Funcionamento dos cálculos | 2,0 |
| Validação de entradas | 1,0 |
| Apresentação da interface | 1,0 |
| **Total** | **10,0** |

## 14. Resumo e preparação para a próxima aula

**Revisão rápida:** `console.log()` exibe informações; `let` e `const` declaram variáveis; `typeof` verifica tipos; `Number()` converte valores; operadores realizam cálculos e comparações; `getElementById()` acessa elementos; `addEventListener()` trata eventos.

**Próxima aula:** entrada de dados, manipulação do DOM e estruturas condicionais (`if`, `else` e `else if`).

> Desenvolver interfaces é conectar lógica, tecnologia e experiência do usuário. Experimente, teste, identifique erros e melhore seu código.

**Profa. Kadidja Valéria | Desenvolvimento de Interface | ADS | CEUB**
