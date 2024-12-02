import { Component, OnInit } from '@angular/core';
import { MoviesService } from './services/movies.service';

/**
 * Componente responsável por exibir o dashboard com informações relacionadas aos filmes vencedores.
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  /**
   * Lista de anos com múltiplos vencedores.
   */
  yearsWithMultipleWinners: { year: number; winnerCount: number }[] = [];

  /**
   * Lista dos três principais estúdios com vencedores.
   */
  topStudios: { name: string; winCount: number }[] = [];

  /**
   * Produtores com o maior intervalo entre vitórias.
   */
  maxIntervalProducers: { producer: string; interval: number; previousWin: number; followingWin: number }[] = [];

  /**
   * Produtores com o menor intervalo entre vitórias.
   */
  minIntervalProducers: { producer: string; interval: number; previousWin: number; followingWin: number }[] = [];

  /**
   * Lista de filmes filtrados com base na busca.
   */
  filteredMovies: { id: number; year: number; title: string; studio: string; producers: string }[] = [];

  /**
   * Ano usado para busca de filmes vencedores.
   */
  searchYear: number | null = null;

  /**
   * Construtor do componente que injeta o serviço responsável pelas requisições à API.
   * @param moviesService Serviço que acessa a API de filmes.
   */
  constructor(private readonly moviesService: MoviesService) {}

  /**
   * Método executado ao inicializar o componente.
   * Carrega os dados necessários para o dashboard.
   */
  ngOnInit(): void {
    this.loadDashboardData();
  }

  /**
   * Carrega os dados principais para o dashboard.
   */
  private loadDashboardData(): void {
    this.loadYearsWithMultipleWinners();
    this.loadTopStudios();
    this.loadMaxMinWinIntervals();
  }

  /**
   * Carrega os anos com múltiplos vencedores da API.
   */
  private loadYearsWithMultipleWinners(): void {
    this.moviesService.getYearsWithMultipleWinners().subscribe(
      (data) => {
        this.yearsWithMultipleWinners = data.years.map((yearData: any) => ({
          year: yearData.year,
          winnerCount: yearData.winnerCount
        }));
      },
      (error) => {
        console.error('Erro ao carregar anos com múltiplos vencedores:', error);
      }
    );
  }

  /**
   * Carrega os estúdios com o maior número de vitórias da API.
   */
  private loadTopStudios(): void {
    this.moviesService.getStudiosWithWinCount().subscribe(
      (data) => {
        // Ordena os estúdios pela contagem de vitórias (maior para menor)
        this.topStudios = data.studios
          .map((studio: any) => ({
            name: studio.name,
            winCount: studio.winCount
          }))
          .sort((a: any, b: any) => b.winCount - a.winCount) // Ordenar pela contagem de vitórias
          .slice(0, 3); // Pega apenas os 3 primeiros
      },
      (error) => {
        console.error('Erro ao carregar estúdios:', error);
      }
    );
  }

  /**
   * Carrega os produtores com intervalos máximos e mínimos entre vitórias da API.
   */
  private loadMaxMinWinIntervals(): void {
    this.moviesService.getMaxMinWinIntervalForProducers().subscribe(
      (data) => {
        this.maxIntervalProducers = data.max.map((producer: any) => ({
          producer: producer.producer,
          interval: producer.interval,
          previousWin: producer.previousWin,
          followingWin: producer.followingWin
        }));
        this.minIntervalProducers = data.min.map((producer: any) => ({
          producer: producer.producer,
          interval: producer.interval,
          previousWin: producer.previousWin,
          followingWin: producer.followingWin
        }));
      },
      (error) => {
        console.error('Erro ao carregar intervalos de vitórias:', error);
      }
    );
  }

  /**
   * Filtra os filmes vencedores com base no ano fornecido.
   */
  filterMovies(): void {
    if (this.searchYear !== null && !isNaN(this.searchYear)) {
      this.moviesService.getMoviesByYear(this.searchYear).subscribe(
        (data) => {
          if (data && Array.isArray(data)) {
            this.filteredMovies = data.map((movie: any) => ({
              id: movie.id,
              year: movie.year,
              title: movie.title,
              studio: movie.studios?.join(', ') || '',
              producers: movie.producers?.join(', ') || ''
            }));
          } else {
            this.filteredMovies = [];
            console.warn('Nenhum dado retornado para o ano fornecido.');
          }
        },
        (error) => {
          console.error('Erro ao filtrar filmes por ano:', error);
          this.filteredMovies = [];
        }
      );
    } else {
      console.warn('Ano inválido fornecido para a busca.');
      this.filteredMovies = [];
    }
  }
}  