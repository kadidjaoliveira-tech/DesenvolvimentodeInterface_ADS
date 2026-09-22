# Desenvolvimento Web — Análise e Desenvolvimento de Sistemas (ADS)

## Material de Estudo — Aula de 22/09

### Introdução ao HTML5 — História, evolução e principais características

**Docente:** Profª Kadidja Valéria  
**Instituição:** CEUB  
**Público:** estudantes de Análise e Desenvolvimento de Sistemas

---

## 1. Objetivos de aprendizagem

Ao final deste estudo, você deverá ser capaz de:

- explicar o papel do HTML no desenvolvimento web;
- reconhecer marcos da Internet, da Web e da evolução do HTML;
- diferenciar HTML, CSS e JavaScript;
- identificar elementos, tags, atributos e aninhamento;
- interpretar a estrutura básica de um documento HTML5;
- descrever o fluxo de requisição e resposta de uma página;
- organizar um projeto web local e testar sua primeira página no navegador.

## 2. Antes de começar

Pense em uma página que você acessou hoje. Ela possuía títulos, textos, imagens, links, menus ou formulários? Esses conteúdos precisam ser organizados para que o navegador reconheça a função de cada parte. Essa organização é uma das principais responsabilidades do HTML.

> **Questão inicial:** se o navegador recebesse apenas um bloco de texto, sem qualquer marcação, como saberia o que é título, parágrafo, link ou imagem?

## 3. Da Internet à World Wide Web

Internet e Web não são sinônimos. A **Internet** é a infraestrutura global que interliga redes e dispositivos. A **World Wide Web** é um serviço que funciona sobre essa infraestrutura e permite acessar documentos e recursos interligados.

### 3.1 Linha do tempo essencial

| Período | Marco | Importância |
|---|---|---|
| 1962 | Licklider descreve a ideia de uma “Rede Galáctica” | Antecipou uma rede global de computadores interconectados. |
| 1969 | Primeiros nós da ARPANET | Demonstraram a comunicação entre computadores em rede. |
| 1971 | Correio eletrônico | Tornou-se uma das primeiras aplicações de rede amplamente usadas. |
| 1983 | Adoção do TCP/IP pela ARPANET | Permitiu a comunicação entre redes heterogêneas. |
| 1984 | Criação do DNS | Associou nomes fáceis de lembrar a endereços numéricos. |
| 1989 | Tim Berners-Lee propõe a Web | Integra HTML, HTTP e URL para compartilhar documentos interligados. |
| Década de 1990 | Expansão comercial da Internet e da Web | Ampliou o acesso para empresas e usuários domésticos. |
| 2014 | HTML5 torna-se recomendação do W3C | Consolida recursos semânticos, multimídia e formulários modernos. |

No Brasil, a Rede Nacional de Ensino e Pesquisa (RNP) foi criada em 1989; a Internet comercial se expandiu durante a década de 1990; e o Comitê Gestor da Internet no Brasil (CGI.br) foi criado em 1995. Esses acontecimentos contribuíram para a consolidação da Internet no país.

## 4. O que é HTML?

HTML significa **HyperText Markup Language**, ou **Linguagem de Marcação de Hipertexto**. É a linguagem usada para estruturar e atribuir significado ao conteúdo de documentos da Web.

O HTML permite identificar:

- títulos e subtítulos;
- parágrafos;
- listas e tabelas;
- links;
- imagens;
- formulários;
- áudio e vídeo;
- regiões estruturais, como cabeçalho, navegação, conteúdo principal e rodapé.

HTML **não é uma linguagem de programação**: ele não descreve, por si só, algoritmos ou decisões. Trata-se de uma linguagem de marcação.

### 4.1 HTML, CSS e JavaScript

| Tecnologia | Função | Exemplos |
|---|---|---|
| HTML | Estrutura e significado | Títulos, parágrafos, imagens e formulários |
| CSS | Apresentação visual | Cores, fontes, margens, tamanhos e posicionamento |
| JavaScript | Comportamento e interatividade | Validação, menus, cálculos e atualização dinâmica |

Uma analogia útil é pensar em uma casa: **HTML é a estrutura**, **CSS é o acabamento** e **JavaScript representa mecanismos e ações**.

## 5. Evolução do HTML

O HTML surgiu no início da década de 1990 para compartilhar documentos científicos por hipertexto. À medida que a Web evoluiu, novas versões incorporaram recursos mais consistentes.

**HTML inicial → HTML 2.0 → HTML 3.2 → HTML 4.01 → XHTML → HTML5 → HTML Living Standard**

O HTML5 respondeu a necessidades como:

- melhor estrutura semântica;
- suporte nativo a áudio e vídeo;
- formulários mais expressivos;
- aplicações em computadores e dispositivos móveis;
- integração com CSS, JavaScript e APIs do navegador;
- redução da dependência de tecnologias externas para tarefas comuns.

Atualmente, o HTML é mantido como um padrão em evolução contínua, chamado **HTML Living Standard**, pelo WHATWG.

## 6. Elementos, tags e atributos

Considere o exemplo:

```html
<p>Este é um curso de HTML!</p>
```

Ele possui:

- **tag de abertura:** `<p>`;
- **conteúdo:** `Este é um curso de HTML!`;
- **tag de fechamento:** `</p>`;
- **elemento completo:** abertura, conteúdo e fechamento.

Alguns elementos não envolvem conteúdo textual e não utilizam tag de fechamento, como `<img>`, `<meta>` e `<br>`. No HTML5, é comum escrever `<br>`; a barra final de `<br />` é opcional.

### 6.1 Atributos

Atributos acrescentam informações a um elemento:

```html
<p class="destaque" lang="pt-BR">Conteúdo importante.</p>
```

Nesse exemplo, `class` e `lang` são nomes de atributos; `destaque` e `pt-BR` são seus valores.

Alguns atributos frequentes são:

- `id`: identificador único;
- `class`: associa uma ou mais classes ao elemento;
- `lang`: indica o idioma;
- `title`: apresenta informação complementar;
- `src`: indica a origem de uma mídia;
- `href`: indica o destino de um link;
- `alt`: fornece alternativa textual para imagens.

> **Boa prática:** escreva nomes de elementos e atributos em letras minúsculas e coloque os valores dos atributos entre aspas.

### 6.2 Aninhamento

Elementos podem ser inseridos dentro de outros elementos:

```html
<p>Este é um curso de <strong>HTML</strong>!</p>
```

O fechamento deve ocorrer na ordem inversa da abertura. Como `<strong>` foi aberto depois de `<p>`, ele deve ser fechado primeiro.

## 7. Principais características do HTML5

### 7.1 Semântica

Elementos semânticos comunicam a função de cada região:

```html
<header>...</header>
<nav>...</nav>
<main>...</main>
<section>...</section>
<article>...</article>
<aside>...</aside>
<footer>...</footer>
```

Uma marcação semântica favorece a manutenção, os mecanismos de busca e as tecnologias assistivas. Semântica, porém, não substitui uma hierarquia coerente de títulos nem boas práticas de acessibilidade.

### 7.2 Multimídia

HTML5 permite incorporar áudio e vídeo:

```html
<video controls>
  <source src="apresentacao.mp4" type="video/mp4">
  Seu navegador não reproduz este vídeo.
</video>
```

```html
<audio controls>
  <source src="podcast.mp3" type="audio/mpeg">
  Seu navegador não reproduz este áudio.
</audio>
```

### 7.3 Formulários aprimorados

Tipos de entrada ajudam o navegador a oferecer teclados adequados, validação básica e controles específicos:

```html
<input type="email" name="email">
<input type="date" name="data">
<input type="number" name="quantidade" min="1">
```

### 7.4 Canvas e integração com scripts

O elemento `<canvas>` disponibiliza uma área de desenho controlada por JavaScript. Pode apoiar gráficos, animações e visualizações, embora seu conteúdo exija cuidados adicionais de acessibilidade.

### 7.5 Compatibilidade e responsividade

HTML5 fornece uma base adequada a diferentes dispositivos. O comportamento responsivo depende principalmente do uso combinado de HTML bem estruturado, CSS e da configuração de viewport.

## 8. Estrutura básica de um documento HTML5

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Minha primeira página</title>
</head>
<body>
  <header>
    <h1>Olá, Web!</h1>
  </header>

  <main>
    <p>Esta é minha primeira página HTML5.</p>
  </main>

  <footer>
    <p>Desenvolvido na aula de Desenvolvimento Web.</p>
  </footer>
</body>
</html>
```

| Código | Função |
|---|---|
| `<!DOCTYPE html>` | Ativa o modo de padrões moderno do navegador. |
| `<html lang="pt-BR">` | Define o elemento raiz e o idioma principal. |
| `<head>` | Reúne metadados e configurações do documento. |
| `<meta charset="UTF-8">` | Define a codificação de caracteres. |
| `<meta name="viewport" ...>` | Ajuda a ajustar a página à largura do dispositivo. |
| `<title>` | Define o texto da aba do navegador. |
| `<body>` | Contém o conteúdo apresentado ao usuário. |

## 9. Como uma página chega ao navegador

Ao acessar uma página hospedada na Web, ocorre um fluxo simplificado:

1. o usuário informa uma URL ou seleciona um link;
2. o navegador identifica o servidor associado ao endereço;
3. o navegador envia uma **requisição HTTP**;
4. o servidor processa a solicitação e envia uma **resposta HTTP**;
5. o navegador interpreta HTML, CSS e JavaScript e renderiza a página.

Ao abrir um arquivo `.html` diretamente no computador, não há necessariamente uma requisição a um servidor remoto: o navegador lê o arquivo local. Esse método é suficiente para testes básicos, mas alguns recursos exigem um servidor local.

## 10. Preparação do ambiente

Para começar, você precisa de:

- um editor de código, como o Visual Studio Code;
- um navegador moderno, como Chrome, Edge ou Firefox;
- uma pasta organizada para o projeto;
- opcionalmente, uma extensão de servidor local, como Live Server.

### 10.1 Nomenclatura recomendada

- use letras minúsculas;
- evite espaços, acentos e caracteres especiais;
- use hífen para separar palavras;
- escolha nomes descritivos;
- mantenha o padrão em todo o projeto.

Exemplos: `index.html`, `sobre-nos.html`, `politica-privacidade.html`.

### 10.2 Estrutura de pastas

```text
meu-projeto-html/
├── index.html
├── imagens/
├── estilos/
│   └── estilo.css
└── scripts/
    └── principal.js
```

O arquivo inicial costuma se chamar `index.html`, pois muitos servidores procuram esse nome como página padrão de um diretório.

## 11. Prática guiada — sua primeira página

### Etapa 1 — Criar o projeto

1. Crie uma pasta chamada `projetos-web`.
2. Dentro dela, crie `primeira-pagina`.
3. Abra essa pasta no Visual Studio Code.
4. Crie o arquivo `index.html`.

### Etapa 2 — Inserir o código

Digite o exemplo da Seção 8 e personalize:

- o conteúdo de `<title>`;
- o título `<h1>`;
- o parágrafo principal;
- o texto do rodapé.

### Etapa 3 — Testar

Salve o arquivo e escolha uma opção:

- abra `index.html` diretamente no navegador; ou
- use **Open with Live Server**, caso a extensão esteja instalada.

### Etapa 4 — Investigar

Altere uma linha de cada vez, salve e observe o resultado. Depois, responda:

1. Qual texto aparece na aba do navegador?
2. Qual conteúdo aparece dentro da página?
3. O que acontece ao remover temporariamente a tag de fechamento `</p>`?
4. Qual é a diferença entre `<title>` e `<h1>`?

## 12. Desafio de aplicação

Crie uma página de apresentação acadêmica contendo:

- título principal com seu nome;
- um parágrafo sobre seu interesse em tecnologia;
- uma seção com três objetivos para o curso;
- uma lista com três tecnologias que deseja aprender;
- um link para o portal do CEUB;
- cabeçalho, conteúdo principal e rodapé semânticos;
- código indentado e nomes de arquivos conforme as boas práticas.

**Entregável:** pasta do projeto com o arquivo `index.html`, acompanhada de uma captura de tela da página aberta no navegador.

## 13. Verificação da aprendizagem

1. Por que HTML é classificado como linguagem de marcação?
2. Qual é a diferença entre Internet e World Wide Web?
3. Que funções HTML, CSS e JavaScript desempenham?
4. Quais partes compõem um elemento HTML típico?
5. Para que servem os atributos `lang` e `alt`?
6. O que significa aninhar elementos corretamente?
7. Cite três elementos semânticos do HTML5 e explique suas funções.
8. Qual é o papel de `<!DOCTYPE html>`?
9. O que ocorre entre o navegador e o servidor ao acessar uma página?
10. Quais práticas devem ser seguidas ao nomear arquivos web?

## 14. Checklist do estudante

- [ ] Compreendi a relação entre Internet, Web e HTML.
- [ ] Consigo diferenciar HTML, CSS e JavaScript.
- [ ] Reconheço tags, atributos e aninhamento.
- [ ] Consigo explicar a estrutura básica de um documento HTML5.
- [ ] Organizei a pasta do projeto corretamente.
- [ ] Criei e testei meu arquivo `index.html`.
- [ ] Revisei o código e concluí o desafio.

## 15. Referências

ALVES, W. P. *HTML & CSS: aprenda como construir páginas web*. São Paulo: Expressa, 2021.

BADALOTTI, Greisse Moser. *Introdução ao desenvolvimento de sistemas web*. Indaial: Uniasselvi, 2014.

MDN WEB DOCS. *Introdução à Web*. Disponível em: <https://developer.mozilla.org/pt-BR/docs/Learn/Getting_started_with_the_web>.

NETO, Otílio Paulo da Silva; SANTOS, Nádia Mendes dos; AGUIAR, Sandra Eliza Veloso. *Introdução à Programação para Web*. Teresina: Instituto Federal de Educação, Ciência e Tecnologia do Piauí, 2013.

TERUEL, E. C. *HTML 5: guia prático*. São Paulo: Érica, 2014.

WHATWG. *HTML Living Standard*. Disponível em: <https://html.spec.whatwg.org/>.

W3C. *HTML5: A vocabulary and associated APIs for HTML and XHTML*. Disponível em: <https://www.w3.org/TR/html5/>.

---

**Material preparado para a aula de 22/09 — Desenvolvimento Web / ADS — CEUB.**
