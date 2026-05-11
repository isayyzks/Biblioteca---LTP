class Livro {
  constructor(titulo, autor, genero, anoPub, numPaginas) {
    this.titulo = titulo;
    this.autor = autor;
    this.genero = genero;
    this.anoPub = anoPub;
    this.numPaginas = numPaginas;
  }

  contarPorGenero(livros) {
    let contagem = {};
    for (let livro of livros) {
      if (contagem[livro.genero]) {
        contagem[livro.genero]++;
      } else {
        contagem[livro.genero] = 1;
      }
    }
    return contagem;
  }

  mediaNumPaginas(livros) {
    if (livros.length === 0) return 0;
    let total = 0;
    for (let livro of livros) {
      total += livro.numPaginas;
    }
    return (total / livros.length).toFixed(1);
  }

  getInfo() {
    return `"${this.titulo}" — ${this.autor} | ${this.genero} | ${this.anoPub} | ${this.numPaginas} págs.`;
  }
}

module.exports = Livro;