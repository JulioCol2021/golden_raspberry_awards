import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  /**
   * Lista completa de filmes recebida da fonte de dados.
   */
  movies: any[] = [];

  /**
   * Lista de filmes filtrada para exibição no componente.
   */
  filteredMovies: any[] = [];

  /**
   * Número da página atual para navegação de páginas.
   */
  currentPage: number = 1;

  /**
   * Total de páginas baseado no número de itens por página.
   */
  totalPages: number = 1;

  /**
   * Número de itens exibidos por página.
   */
  itemsPerPage: number = 15;

  /**
   * Filtro aplicado ao campo de ano.
   */
  yearFilter: string = '';

  /**
   * Filtro aplicado ao campo de status de vencedor.
   */
  winnerFilter: string = '';

  constructor() {}

  ngOnInit(): void {
    this.loadMovies();
    this.updatePagination();
  }

  /**
   * Carrega a lista de filmes com dados simulados.
   * Em um cenário real, aqui seria feita uma requisição para uma API.
   */
  loadMovies(): void {
    this.movies = Array.from({ length: 1000 }, (_, i) => ({
      id: i + 1,
      year: 1980 + (i % 10), // Gera anos alternados para simular dados reais
      title: `Filme ${i + 1}`,
      winner: i % 2 === 0 ? 'Sim' : 'Não', // Alterna entre "Sim" e "Não"
    }));

    // Inicializa a lista filtrada com todos os filmes carregados
    this.filteredMovies = [...this.movies];
  }

  /**
   * Atualiza o número total de páginas baseado nos itens filtrados.
   */
  updatePagination(): void {
    this.totalPages = Math.ceil(this.filteredMovies.length / this.itemsPerPage);
  }

  /**
   * Filtra a lista de filmes com base nos filtros de ano e vencedor.
   */
  filterMovies(): void {
    this.filteredMovies = this.movies.filter((movie) => {
      const matchesYear = this.yearFilter
        ? movie.year.toString().includes(this.yearFilter)
        : true;
      const matchesWinner = this.winnerFilter
        ? movie.winner === this.winnerFilter
        : true;

      return matchesYear && matchesWinner;
    });

    // Reinicia para a primeira página após aplicar os filtros
    this.currentPage = 1;
    this.updatePagination();
  }

  /**
   * Obtém os filmes para a página atual.
   * @returns Subconjunto da lista de filmes da página atual.
   */
  getMoviesForCurrentPage(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredMovies.slice(startIndex, endIndex);
  }

  /**
   * Navega para a primeira página.
   */
  goToFirstPage(): void {
    this.currentPage = 1;
  }

  /**
   * Navega para a página anterior.
   */
  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  /**
   * Navega para a próxima página.
   */
  goToNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  /**
   * Navega para a última página.
   */
  goToLastPage(): void {
    this.currentPage = this.totalPages;
  }
}
