const Livro = require('./livro');
const prompt = require('prompt-sync')();

const livros = [];

let opcao = -1;

while (opcao !== 0) {

  console.log('\n--- BIBLIOTECA ---');
  console.log('1 - Cadastrar livro');
  console.log('2 - Listar livros');
  console.log('3 - Alterar livro');
  console.log('4 - Estatísticas');
  console.log('0 - Sair');

  const entrada = prompt('Opção: ');
  opcao = parseInt(entrada);

  if (isNaN(opcao)) {
    console.log('Opção inválida! Digite um número.');
    continue;
  }

  switch (opcao) {

    case 1: {

      const titulo = prompt('Título: ').trim();
      const autor = prompt('Autor: ').trim();
      const genero = prompt('Gênero: ').trim();
      const anoPub = parseInt(prompt('Ano de publicação: '));
      const numPaginas = parseInt(prompt('Número de páginas: '));

      const novoLivro = new Livro(
        titulo,
        autor,
        genero,
        anoPub,
        numPaginas
      );

      livros.push(novoLivro);

      console.log('Livro cadastrado!');
      break;
    }

    case 2: {

      if (livros.length === 0) {
        console.log('Nenhum livro cadastrado.');
      } else {
        livros.forEach((livro, index) => {
          console.log(`[${index}] ${livro.getInfo()}`);
        });
      }

      break;
    }

    case 3: {

      if (livros.length === 0) {
        console.log('Nenhum livro cadastrado.');
        break;
      }

      livros.forEach((livro, index) => {
        console.log(`[${index}] ${livro.getInfo()}`);
      });

      const entradaIndice = prompt('Digite o índice do livro a alterar: ');
      const indice = parseInt(entradaIndice);

      if (isNaN(indice) || indice < 0 || indice >= livros.length) {
        console.log('Índice inválido!');
        break;
      }

      console.log(
        'Digite os novos valores (pressione Enter para manter o valor atual):'
      );

      const novoTitulo = prompt(
        `Título [${livros[indice].titulo}]: `
      ).trim();

      const novoAutor = prompt(
        `Autor [${livros[indice].autor}]: `
      ).trim();

      const novoGenero = prompt(
        `Gênero [${livros[indice].genero}]: `
      ).trim();

      const novoAnoPubStr = prompt(
        `Ano de publicação [${livros[indice].anoPub}]: `
      ).trim();

      const novoNumPaginasStr = prompt(
        `Número de páginas [${livros[indice].numPaginas}]: `
      ).trim();

      if (novoTitulo !== '') livros[indice].titulo = novoTitulo;
      if (novoAutor !== '') livros[indice].autor = novoAutor;
      if (novoGenero !== '') livros[indice].genero = novoGenero;

      if (novoAnoPubStr !== '') {
        const novoAnoPub = parseInt(novoAnoPubStr);

        if (!isNaN(novoAnoPub)) {
          livros[indice].anoPub = novoAnoPub;
        }
      }

      if (novoNumPaginasStr !== '') {
        const novoNumPaginas = parseInt(novoNumPaginasStr);

        if (!isNaN(novoNumPaginas)) {
          livros[indice].numPaginas = novoNumPaginas;
        }
      }

      console.log('Livro alterado com sucesso!');
      break;
    }

  }
}