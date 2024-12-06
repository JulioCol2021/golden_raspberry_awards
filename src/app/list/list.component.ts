import { Component } from '@angular/core';

/**
 * Componente que exibe uma lista de filmes com opções de filtragem e paginação.
 */
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  currentPage: number = 0; // Página atual
  totalPages: number = 10; // Total de páginas disponíveis (valor fictício para exemplo)
  searchYear: string = ''; // Ano para filtro de busca
  filterWinner: string = ''; // Status de vencedor para filtro
  filteredMovies: any[] = []; // Lista filtrada de filmes

  /**
   * Carrega os filmes para a página atual.
   */
  loadMovies(): void {
    console.log('Carregando filmes para a página:', this.currentPage);
    // Simulação de carregamento de filmes
  }

  /**
   * Navega para a primeira página.
   */
  goToFirstPage(): void {
    this.currentPage = 0;
    this.loadMovies();
  }

  /**
   * Navega para a última página.
   */
  goToLastPage(): void {
    this.currentPage = this.totalPages - 1;
    this.loadMovies();
  }

  /**
   * Aplica o filtro de filmes com base nos critérios selecionados.
   */
  filterMovies(): void {
    console.log('Filtrando filmes com critérios: ', this.searchYear, this.filterWinner);
    // Lógica de filtragem simulada
  }
}
