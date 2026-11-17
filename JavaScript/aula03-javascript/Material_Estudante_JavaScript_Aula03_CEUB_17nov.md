# MATERIAL DIDÁTICO DO ESTUDANTE
## Desenvolvimento de Interface — Módulo JavaScript | Aula 3
### DOM, eventos e projeto integrador: calculadora de média
**Profa. Kadidja Valéria | ADS | CEUB**  
**Modalidade:** laboratório prático | **Duração:** 2h30 | **Nível:** iniciante

## 1. Apresentação
Nesta aula, você reunirá os conteúdos das três aulas do módulo para construir uma aplicação web que recebe o nome de um estudante e três notas, verifica os dados, calcula a média e apresenta a situação acadêmica na própria página. O projeto utiliza HTML (estrutura), CSS (apresentação) e JavaScript (comportamento).

**Objetivos:** selecionar elementos do DOM; capturar eventos de clique; ler e converter dados de formulários; validar campos e notas; organizar cálculos em funções; apresentar mensagens na interface; testar e documentar a solução.

**Resultado final:** uma calculadora que classifica a média: **Aprovado** (média ≥ 7), **Recuperação** (5 ≤ média < 7) ou **Reprovado** (média < 5). Esses limites são as regras didáticas do projeto.

## 2. Organização do laboratório
**Etapa 1 (15 min):** revisar HTML, CSS e JavaScript e abrir o projeto.  
**Etapa 2 (25 min):** compreender DOM, `querySelector` e `textContent`.  
**Etapa 3 (25 min):** implementar campos e eventos.  
**Etapa 4 (25 min):** ler valores, validar e criar funções.  
**Etapa 5 (40 min):** integrar, testar e corrigir.  
**Etapa 6 (20 min):** registrar testes e entregar.

## 3. Preparação do ambiente — passo a passo
1. Abra o Visual Studio Code e crie a pasta `aula03-calculadora-media`.
2. Crie os arquivos `index.html`, `estilo.css`, `script.js` e `registro-de-testes.md`.
3. Mantenha os quatro arquivos na mesma pasta. Abra `index.html` no navegador (ou use Live Server).
4. Pressione **F12** e abra a aba **Console** para acompanhar erros.
5. Salve os arquivos sempre que alterar o código e atualize a página.

```text
 aula03-calculadora-media/
 ├── index.html
 ├── estilo.css
 ├── script.js
 └── registro-de-testes.md
```

## 4. Entendendo o DOM
O **Document Object Model (DOM)** é a representação da página HTML como objetos manipuláveis por JavaScript. O navegador interpreta o HTML e disponibiliza os elementos para consulta e alteração.

### Passo 1 — Identificar os elementos
```html
<h1 id="titulo">Calculadora</h1>
<p id="resultado">Aguardando...</p>
```
**Explicação:** `id` identifica um elemento. O parágrafo é a região em que a aplicação apresentará mensagens.

### Passo 2 — Selecionar pelo identificador
```javascript
const titulo = document.querySelector('#titulo');
const resultado = document.querySelector('#resultado');
console.log(titulo.textContent);
```
**Explicação:** `document.querySelector('#titulo')` procura o elemento cujo `id` é `titulo`. O símbolo `#` é usado para selecionar um ID. O resultado da busca é guardado em uma variável `const`.

**Resultado esperado no console:** `Calculadora`. Se o seletor não encontrar um elemento, retorna `null`; confira se o ID foi digitado corretamente e se o script executa após o HTML estar disponível.

### Passo 3 — Alterar o texto visível
```javascript
resultado.textContent = 'Cálculo concluído!';
```
**Explicação:** `textContent` modifica o texto exibido sem alterar o arquivo HTML original. Prefira `textContent` para mensagens geradas a partir de dados do usuário.

## 5. Eventos: reagindo ao clique
Um evento representa uma ação, como clicar em um botão. O método `addEventListener` associa uma função à ação.

### Passo 4 — Criar botão e área de resposta
```html
<button id="calcular" type="button">Calcular</button>
<p id="resultado"></p>
<script src="script.js"></script>
```
**Explicação:** `type="button"` evita o envio automático de formulários. O script, quando carregado ao final do `body`, encontra os elementos já criados.

### Passo 5 — Programar o clique
```javascript
const botao = document.querySelector('#calcular');
const resultado = document.querySelector('#resultado');

botao.addEventListener('click', function () {
  resultado.textContent = 'Botão acionado!';
});
```
**Explicação:** a função é executada a cada clique. Teste pressionando o botão várias vezes. Depois substituiremos essa função pelo cálculo completo.

## 6. Construindo o projeto integrador
### Passo 6 — Escrever o HTML completo (`index.html`)
Copie o código a seguir. Ele fornece os campos, os rótulos, o botão, a área de resposta e a ligação com CSS e JavaScript.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Calculadora de Média</title>
  <link rel="stylesheet" href="estilo.css">
</head>
<body>
  <main class="container">
    <h1 id="titulo">Calculadora de Média</h1>
    <p>Informe o nome e as três notas do estudante.</p>

    <label for="nome">Nome do estudante</label>
    <input id="nome" type="text" autocomplete="name">

    <label for="nota1">Nota 1</label>
    <input id="nota1" type="number" min="0" max="10" step="0.1">

    <label for="nota2">Nota 2</label>
    <input id="nota2" type="number" min="0" max="10" step="0.1">

    <label for="nota3">Nota 3</label>
    <input id="nota3" type="number" min="0" max="10" step="0.1">

    <button id="calcular" type="button">Calcular média</button>
    <p id="resultado" aria-live="polite">Aguardando dados...</p>
  </main>
  <script src="script.js"></script>
</body>
</html>
```
**Entenda:** `label` associa o texto ao campo; `type="number"` facilita a digitação numérica; `min`, `max` e `step` orientam o preenchimento, mas **não substituem a validação JavaScript**. `aria-live="polite"` permite que tecnologias assistivas anunciem a atualização do resultado.

### Passo 7 — Aplicar o CSS (`estilo.css`)
```css
* { box-sizing: border-box; }
body {
  margin: 0; padding: 24px;
  background: #f7f5f9;
  font-family: Arial, sans-serif;
  color: #25202b;
}
.container {
  max-width: 540px; margin: 24px auto;
  background: #fff; padding: 28px;
  border-radius: 12px;
  box-shadow: 0 3px 14px #00000018;
}
h1 { color: #43054e; }
label { display: block; margin-top: 16px; font-weight: bold; }
input {
  width: 100%; padding: 11px; margin-top: 6px;
  border: 1px solid #999; border-radius: 6px;
}
button {
  margin-top: 22px; padding: 12px 18px;
  width: 100%; border: 0; border-radius: 6px;
  background: #662c92; color: white;
  font-size: 16px; cursor: pointer;
}
button:hover { background: #43054e; }
button:focus-visible, input:focus-visible {
  outline: 3px solid #ec0089; outline-offset: 2px;
}
#resultado {
  margin-top: 18px; padding: 14px;
  background: #f5eff9; border-radius: 6px;
}
```
**Explicação:** o CSS organiza a interface sem modificar os cálculos. O estilo de foco ajuda na navegação pelo teclado.

### Passo 8 — Entender a leitura e conversão dos valores
```javascript
const estudante = nome.value.trim();
const n1 = Number(nota1.value);
const n2 = Number(nota2.value);
const n3 = Number(nota3.value);
```
**Explicação:** `.value` devolve texto mesmo em um campo numérico. `trim()` remove espaços no começo e no fim do nome. `Number()` converte o conteúdo das notas. Faça essa leitura **dentro do evento de clique**, para obter os dados atuais.

**Atenção:** `Number('')` resulta em `0`. Por isso, **verifique os campos vazios antes da conversão**. Se um valor não puder ser convertido, o resultado poderá ser `NaN`.

### Passo 9 — Validar campos obrigatórios
```javascript
if (!estudante || nota1.value === '' ||
    nota2.value === '' || nota3.value === '') {
  resultado.textContent = 'Preencha todos os campos.';
  return;
}
```
**Explicação:** `||` significa **OU**; basta uma condição verdadeira para interromper o cálculo. `return` encerra a execução da função do evento.

### Passo 10 — Validar o intervalo de notas
```javascript
const valores = [n1, n2, n3];
const invalida = valores.some(nota =>
  Number.isNaN(nota) || nota < 0 || nota > 10
);

if (invalida) {
  resultado.textContent = 'Use notas entre 0 e 10.';
  return;
}
```
**Explicação:** o array reúne as notas; `some()` verifica se **alguma** atende à condição de erro. Uma nota negativa, acima de 10 ou inválida impede o cálculo.

### Passo 11 — Criar funções independentes
```javascript
function calcularMedia(a, b, c) {
  return (a + b + c) / 3;
}

function classificar(media) {
  if (media >= 7) return 'Aprovado';
  if (media >= 5) return 'Recuperação';
  return 'Reprovado';
}
```
**Explicação:** `calcularMedia` recebe três números e devolve a média. `classificar` devolve uma string. A ordem das condições é importante: primeiro a maior faixa, depois a intermediária.

**Teste no console:** `calcularMedia(8, 7, 9)` deve retornar `8`; `classificar(8)` deve retornar `Aprovado`.

### Passo 12 — Integrar o JavaScript completo (`script.js`)
Substitua os testes anteriores pelo código funcional abaixo. **Não cole um segundo listener sobre o primeiro:** mantenha apenas esta versão final.

```javascript
const nome = document.querySelector('#nome');
const nota1 = document.querySelector('#nota1');
const nota2 = document.querySelector('#nota2');
const nota3 = document.querySelector('#nota3');
const botao = document.querySelector('#calcular');
const resultado = document.querySelector('#resultado');

function calcularMedia(a, b, c) {
  return (a + b + c) / 3;
}

function classificar(media) {
  if (media >= 7) return 'Aprovado';
  if (media >= 5) return 'Recuperação';
  return 'Reprovado';
}

botao.addEventListener('click', () => {
  // 1. Ler o nome e verificar campos vazios.
  const estudante = nome.value.trim();
  if (!estudante || nota1.value === '' ||
      nota2.value === '' || nota3.value === '') {
    resultado.textContent = 'Preencha todos os campos.';
    return;
  }

  // 2. Converter os valores para números.
  const n1 = Number(nota1.value);
  const n2 = Number(nota2.value);
  const n3 = Number(nota3.value);

  // 3. Validar o intervalo de cada nota.
  const valores = [n1, n2, n3];
  const invalida = valores.some(nota =>
    Number.isNaN(nota) || nota < 0 || nota > 10
  );
  if (invalida) {
    resultado.textContent = 'Use notas entre 0 e 10.';
    return;
  }

  // 4. Calcular e classificar.
  const media = calcularMedia(n1, n2, n3);
  const situacao = classificar(media);

  // 5. Exibir o resultado na página.
  resultado.textContent =
    `${estudante}: média ${media.toFixed(1)}. ` +
    `Situação: ${situacao}.`;
});
```
**Entenda a integração:** primeiro são selecionados os elementos; o clique inicia a função; os campos são lidos e validados; as funções calculam e classificam; por fim, `textContent` apresenta a mensagem. `toFixed(1)` formata a média com uma casa decimal (ex.: `8.0`).

### Passo 13 — Executar o primeiro caso válido
1. Abra `index.html` no navegador.
2. Preencha o nome com `Mariana`.
3. Digite `8`, `7` e `9` nas notas.
4. Clique em **Calcular média**.
5. Confira o resultado: `Mariana: média 8.0. Situação: Aprovado.`
6. Altere os valores e clique novamente: o resultado deve mudar **sem recarregar a página**.

## 7. Plano de testes obrigatório
Registre cada caso com entrada, resultado esperado, resultado obtido e situação (passou/falhou). A apresentação original solicita cinco casos mínimos; o quadro abaixo acrescenta um sexto para verificar reprovação.

| Teste | Entrada | Resultado esperado |
|---|---|---|
| 1 | Nome vazio ou uma nota vazia | Preencha todos os campos. |
| 2 | Nota não numérica (quando possível inserir) | Use notas entre 0 e 10. |
| 3 | Nota -1 ou 11 | Use notas entre 0 e 10. |
| 4 | Notas 5, 5, 5 | Média 5.0; Recuperação |
| 5 | Notas 7, 7, 7 | Média 7.0; Aprovado |
| 6 | Notas 4, 4, 4 | Média 4.0; Reprovado |

**Nota de teste:** navegadores normalmente impedem letras em campos `type="number"`. Para testar texto inválido, use temporariamente `type="text"` em uma nota ou altere o valor no DevTools; depois restaure `type="number"`.

### Modelo para `registro-de-testes.md`
```markdown
# Registro de testes — Aula 3

| Caso | Dados de entrada | Esperado | Obtido | Status |
|---|---|---|---|---|
| 1 | Nome vazio; 8, 7, 9 | Preencha todos os campos. | | |
| 2 | Nota inválida | Use notas entre 0 e 10. | | |
| 3 | -1, 7, 9 | Use notas entre 0 e 10. | | |
| 4 | 5, 5, 5 | Recuperação | | |
| 5 | 7, 7, 7 | Aprovado | | |
```

## 8. Exercícios passo a passo
### Exercício 1 — Localização no DOM
1. No console, execute `document.querySelector('#titulo')`.
2. Execute `document.querySelector('#resultado')`.
3. Altere o texto do resultado para `Teste do DOM`.
4. Explique qual comando selecionou o elemento e qual alterou a página.

### Exercício 2 — Evento de clique
1. Crie temporariamente um botão com ID `teste` no HTML.
2. Selecione o botão no JavaScript.
3. Associe um `addEventListener('click', ...)`.
4. Mostre `Clique detectado!` no console a cada acionamento.
5. Remova o botão de teste após concluir.

### Exercício 3 — Conversão de tipos
1. No console, execute `typeof '8'`.
2. Execute `typeof Number('8')`.
3. Compare `'8' + '7'` com `Number('8') + Number('7')`.
4. Explique por que a conversão é necessária antes de calcular a média.

### Exercício 4 — Validação
1. Teste o formulário com a nota `11`.
2. Teste com a nota `-1`.
3. Deixe o nome vazio.
4. Registre as mensagens e identifique a condição `if` responsável por cada uma.

### Exercício 5 — Limites da classificação
1. Teste média exatamente `5`.
2. Teste média exatamente `7`.
3. Teste média inferior a `5`.
4. Explique por que a ordem das verificações na função `classificar()` importa.

### Exercício 6 — Melhoria da experiência
1. Acrescente uma instrução visível abaixo do título: `Digite notas entre 0 e 10`.
2. Altere a cor do botão no CSS, mantendo bom contraste.
3. Use Tab para navegar pelos campos e pelo botão.
4. Confira se a mensagem de resultado permanece legível.

## 9. Problemas comuns e como corrigir
**O botão não funciona:** confira o nome `script.js`, o ID `calcular`, a posição da tag `<script>` e os erros no Console.  
**Aparece `null` no seletor:** confira se o ID existe e se o código executa depois de o elemento ser criado.  
**A média fica incorreta:** verifique a conversão com `Number()` e o uso de parênteses na fórmula.  
**Campo vazio vira zero:** valide `.value === ''` antes de usar `Number()`.  
**O resultado não muda:** confirme que a leitura dos campos acontece dentro do evento e que a página foi atualizada após salvar.  
**O CSS não aparece:** confira se o arquivo se chama exatamente `estilo.css`.

## 10. Entrega da atividade avaliativa
Entregue a pasta com `index.html`, `estilo.css`, `script.js` e `registro-de-testes.md`. A aplicação deverá funcionar com HTML, CSS e JavaScript separados, validar entradas, calcular a média, classificar corretamente e mostrar mensagens na página.

**Checklist de entrega:**
- [ ] Os quatro arquivos estão na mesma pasta.
- [ ] Os campos têm rótulos e IDs corretos.
- [ ] O botão aciona o JavaScript.
- [ ] Campos vazios e notas inválidas são rejeitados.
- [ ] Média e situação são calculadas corretamente.
- [ ] O resultado aparece na própria página.
- [ ] Pelo menos cinco testes estão documentados.
- [ ] O console não apresenta erros na execução normal.

**Critérios sugeridos (10 pontos):** estrutura e organização (2); DOM e eventos (2); validação (2); cálculo e classificação (2); testes e registro (2).

## 11. Síntese do módulo
**Aula 1:** valores, tipos e expressões.  
**Aula 2:** entrada de dados e estruturas condicionais.  
**Aula 3:** DOM, eventos, validação e integração dos conhecimentos.

**Reflexão:** identifique no seu projeto uma linha responsável pela entrada, outra pela decisão e outra pela saída. Explique o papel de cada uma.

**Referência didática:** apresentação `Aula_3_JavaScript.pptx`, 16 slides, disponibilizada pela professora. O guia expande os exemplos dos slides em arquivos completos e passos executáveis para laboratório.
