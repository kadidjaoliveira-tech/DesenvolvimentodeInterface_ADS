# Prática Guiada — Criando a Primeira Página HTML5

**Curso:** Análise e Desenvolvimento de Sistemas (ADS)  
**Disciplina:** Desenvolvimento Web  
**Aula:** 22/09  
**Tema:** Introdução ao HTML5  
**Docente:** Profª Kadidja Valéria  

---

## 1. Objetivo da prática

Criar, organizar, executar e testar uma página HTML5 simples, reconhecendo a estrutura básica do documento e a função de seus principais elementos.

Ao concluir a atividade, você deverá ser capaz de:

- criar uma pasta para um projeto web;
- criar e editar o arquivo `index.html`;
- reconhecer as seções `<head>` e `<body>`;
- utilizar títulos, parágrafos, listas e links;
- abrir e testar uma página no navegador;
- verificar e corrigir erros básicos no código.

## 2. Recursos necessários

- computador com acesso a um navegador moderno;
- editor de código, preferencialmente Visual Studio Code;
- pasta para armazenar os projetos da disciplina;
- extensão Live Server, opcional.

## 3. Resultado esperado

Ao final, você terá uma página de apresentação acadêmica contendo:

- seu nome;
- uma breve apresentação;
- três objetivos de aprendizagem;
- uma lista de tecnologias de interesse;
- um link para o portal do CEUB;
- cabeçalho, conteúdo principal e rodapé.

---

## 4. Passo a passo

### Passo 1 — Criar a pasta geral dos projetos

1. Abra o gerenciador de arquivos do computador.
2. Escolha um local de fácil acesso, como **Documentos**.
3. Crie uma pasta chamada:

```text
projetos-web
```

> Use letras minúsculas, evite espaços e não utilize acentos ou caracteres especiais.

### Passo 2 — Criar a pasta da atividade

Dentro de `projetos-web`, crie uma pasta específica para esta prática:

```text
primeira-pagina-html5
```

A estrutura inicial deverá ficar assim:

```text
projetos-web/
└── primeira-pagina-html5/
```

### Passo 3 — Abrir o projeto no Visual Studio Code

1. Abra o **Visual Studio Code**.
2. Selecione **Arquivo > Abrir Pasta** ou **File > Open Folder**.
3. Localize e selecione a pasta `primeira-pagina-html5`.
4. Confirme a abertura da pasta.

No painel **Explorer**, o nome da pasta deverá aparecer como raiz do projeto.

### Passo 4 — Criar o arquivo HTML

1. No painel **Explorer**, clique no botão **Novo Arquivo**.
2. Digite o nome:

```text
index.html
```

3. Pressione **Enter**.

A estrutura deverá ficar assim:

```text
primeira-pagina-html5/
└── index.html
```

> O nome `index.html` é utilizado com frequência como página inicial de um site.

### Passo 5 — Inserir a estrutura básica

Abra o arquivo `index.html` e digite:

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Minha primeira página</title>
</head>
<body>

    <h1>Olá, Web!</h1>
    <p>Esta é minha primeira página HTML5.</p>

</body>
</html>
```

Salve o arquivo usando `Ctrl + S` no Windows/Linux ou `Command + S` no macOS.

### Passo 6 — Compreender a estrutura

Observe a função de cada parte:

| Elemento | Função |
|---|---|
| `<!DOCTYPE html>` | Indica que o documento utiliza o padrão HTML moderno. |
| `<html lang="pt-BR">` | Define o elemento raiz e o idioma principal. |
| `<head>` | Contém informações e configurações do documento. |
| `<meta charset="UTF-8">` | Permite exibir corretamente acentos e caracteres especiais. |
| `<meta name="viewport">` | Ajuda a adaptar a página a diferentes telas. |
| `<title>` | Define o texto exibido na aba do navegador. |
| `<body>` | Contém o conteúdo visível da página. |
| `<h1>` | Representa o título principal. |
| `<p>` | Representa um parágrafo. |

### Passo 7 — Abrir a página no navegador

#### Opção A — Abrir diretamente

1. Localize o arquivo `index.html` no gerenciador de arquivos.
2. Clique duas vezes sobre ele.
3. Caso necessário, selecione **Abrir com** e escolha um navegador.

#### Opção B — Utilizar o Live Server

1. No Visual Studio Code, abra a área **Extensões**.
2. Pesquise por **Live Server**.
3. Instale a extensão, caso ainda não esteja instalada.
4. Clique com o botão direito em `index.html`.
5. Selecione **Open with Live Server**.

O navegador deverá apresentar o título **Olá, Web!** e o parágrafo criado.

### Passo 8 — Personalizar a página

Substitua o conteúdo de `<body>` pelo exemplo abaixo e complete as informações:

```html
<body>
    <header>
        <h1>Nome completo do estudante</h1>
        <p>Estudante de Análise e Desenvolvimento de Sistemas.</p>
    </header>

    <main>
        <section>
            <h2>Sobre mim</h2>
            <p>
                Escreva uma breve apresentação e explique seu interesse
                pela área de tecnologia.
            </p>
        </section>

        <section>
            <h2>Meus objetivos</h2>
            <ol>
                <li>Objetivo de aprendizagem 1</li>
                <li>Objetivo de aprendizagem 2</li>
                <li>Objetivo de aprendizagem 3</li>
            </ol>
        </section>

        <section>
            <h2>Tecnologias que desejo aprender</h2>
            <ul>
                <li>HTML5</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </ul>
        </section>

        <section>
            <h2>Link institucional</h2>
            <p>
                Acesse o
                <a href="https://www.uniceub.br/" target="_blank"
                   rel="noopener noreferrer">portal do CEUB</a>.
            </p>
        </section>
    </main>

    <footer>
        <p>Desenvolvido na aula de Desenvolvimento Web — 22/09.</p>
    </footer>
</body>
```

> Preserve as tags `<html>`, `<head>` e as demais configurações já criadas. Substitua somente o conteúdo localizado entre `<body>` e `</body>`.

### Passo 9 — Salvar e observar as alterações

1. Salve novamente o arquivo.
2. Retorne ao navegador.
3. Caso a página não seja atualizada automaticamente, pressione `F5` ou clique em **Atualizar**.
4. Confira se todos os conteúdos aparecem corretamente.

### Passo 10 — Realizar pequenos experimentos

Faça uma alteração por vez, salve o arquivo e observe o resultado:

1. Troque o texto de `<title>` e observe a aba do navegador.
2. Altere o conteúdo de `<h1>` e observe a página.
3. Adicione um novo item à lista de tecnologias.
4. Acrescente outro parágrafo à seção **Sobre mim**.
5. Retire temporariamente a tag `</p>` de um parágrafo e observe o comportamento.
6. Recoloque a tag removida e salve o documento.

> Depois dos testes, mantenha o código completo e corretamente fechado.

### Passo 11 — Verificar o código

Confira os seguintes itens:

- as tags foram escritas em letras minúsculas;
- os elementos foram fechados corretamente;
- o aninhamento está organizado;
- o código possui indentação consistente;
- o arquivo foi salvo como `index.html`;
- o atributo `lang` possui o valor `pt-BR`;
- os textos foram personalizados;
- o link do CEUB funciona;
- a página abre sem erros no navegador.

### Passo 12 — Registrar o resultado

1. Abra a versão final da página no navegador.
2. Faça uma captura de tela mostrando o conteúdo produzido.
3. Salve a imagem dentro da pasta do projeto com o nome:

```text
captura-pagina.png
```

A estrutura final deverá ser semelhante a:

```text
primeira-pagina-html5/
├── index.html
└── captura-pagina.png
```

---

## 5. Questões de reflexão

Registre respostas breves para as questões abaixo:

1. Qual é a diferença entre o conteúdo de `<title>` e o de `<h1>`?
2. Por que o atributo `lang="pt-BR"` é importante?
3. Qual é a função das seções `<head>` e `<body>`?
4. O que acontece quando uma tag não é fechada corretamente?
5. Qual é a vantagem de utilizar elementos como `<header>`, `<main>`, `<section>` e `<footer>`?

## 6. Entrega da atividade

Envie a pasta `primeira-pagina-html5` compactada no formato `.zip`, contendo:

- `index.html`;
- `captura-pagina.png`;
- arquivo de texto ou documento com as respostas das questões de reflexão, caso solicitado pela docente.

Nomeie o arquivo compactado usando o padrão:

```text
nome-sobrenome-primeira-pagina-html5.zip
```

## 7. Checklist final

- [ ] Criei a pasta do projeto.
- [ ] Criei o arquivo `index.html`.
- [ ] Utilizei a estrutura básica do HTML5.
- [ ] Personalizei o conteúdo da página.
- [ ] Incluí títulos, parágrafos, listas e link.
- [ ] Utilizei elementos semânticos.
- [ ] Testei a página no navegador.
- [ ] Corrigi tags e indentação.
- [ ] Registrei uma captura de tela.
- [ ] Organizei os arquivos para entrega.

---

**Prática Guiada — Desenvolvimento Web / ADS — Profª Kadidja Valéria — CEUB**
