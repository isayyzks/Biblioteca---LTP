const Livro = require('./Livro');
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

  }
}