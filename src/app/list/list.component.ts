
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

/**
 * Componente responsável por exibir e gerenciar a lista de filmes.
 * Implementa funcionalidades de filtragem por ano e status de vencedor,
 * além de paginação.
 */
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  /**
   * Lista completa de filmes carregada do serviço.
   */
  movies: any[] = [];

  /**
   * Lista de filmes filtrada para exibição.
   */
  filteredMovies: any[] = [];

  /**
   * Filtro de busca pelo ano do filme.
   */
  searchYear: string = '';

  /**
   * Filtro pelo status de vencedor (Yes/No).
   */
  filterWinner: string = '';

  /**
   * Página atual na paginação.
   */
  currentPage: number = 0;

  /**
   * Número de itens exibidos por página.
   */
  itemsPerPage: number = 15;

  /**
   * Total de páginas disponíveis.
   */
  totalPages: number = 0;

  /**
   * Construtor do componente.
   * @param moviesService Serviço responsável por obter os dados dos filmes.
   */
  constructor(private moviesService: MoviesService) {}

  /**
   * Método de inicialização do componente.
   * Carrega a lista inicial de filmes.
   */
  ngOnInit(): void {
    this.loadMovies();
  }

  /**
   * Carrega a lista de filmes do serviço e atualiza as variáveis de controle.
   */
  loadMovies(): void {
    this.moviesService.getMovies(this.currentPage, this.itemsPerPage).subscribe(data => {
      this.movies = data.content.map(movie => ({
        id: movie.id,
        year: movie.year,
        title: movie.title,
        winner: movie.winner,
      }));
      this.filteredMovies = [...this.movies];
      this.totalPages = data.totalPages;
    });
  }

  /**
   * Filtra os filmes com base nos critérios definidos (ano e status de vencedor).
   */
  filterMovies(): void {
    this.filteredMovies = this.movies.filter(movie => {
      const matchesYear = this.searchYear ? movie.year.toString().includes(this.searchYear) : true;
      const matchesWinner = this.filterWinner ? movie.winner === this.filterWinner : true;
      return matchesYear && matchesWinner;
    });
  }
}
