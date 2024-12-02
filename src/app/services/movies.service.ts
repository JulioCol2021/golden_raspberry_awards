import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Serviço responsável por realizar chamadas para a API de filmes.
 * Este serviço contém métodos específicos para acessar diferentes endpoints da API.
 */
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  /**
   * URL base da API de filmes.
   */
  private readonly apiUrl = 'https://challenge.outsera.tech/api/movies';

  /**
   * Construtor do serviço.
   * @param http Cliente HTTP para realizar requisições.
   */
  constructor(private readonly http: HttpClient) {}

  /**
   * Obtém a lista de filmes com base na página e no tamanho especificados.
   * @param page Número da página (iniciando em 0).
   * @param size Número de itens por página.
   * @param winner Filtra apenas os filmes vencedores se definido como true.
   * @param year Ano pelo qual os filmes devem ser filtrados (opcional).
   * @returns Observable com os dados dos filmes.
   */
  getMovies(page: number, size: number, winner?: boolean, year?: number): Observable<any> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    if (winner !== undefined) {
      params = params.set('winner', winner.toString());
    }
    if (year !== undefined) {
      params = params.set('year', year.toString());
    }

    return this.http.get<any>(this.apiUrl, { params });
  }

  /**
   * Obtém os anos com múltiplos vencedores.
   * @returns Observable com os dados de anos e contagem de vencedores.
   */
  getYearsWithMultipleWinners(): Observable<any> {
    const params = new HttpParams().set('projection', 'years-with-multiple-winners');
    return this.http.get<any>(this.apiUrl, { params });
  }

  /**
   * Obtém os estúdios com a contagem de vitórias.
   * @returns Observable com os dados de estúdios e suas contagens de vitórias.
   */
  getStudiosWithWinCount(): Observable<any> {
    const params = new HttpParams().set('projection', 'studios-with-win-count');
    return this.http.get<any>(this.apiUrl, { params });
  }

  /**
   * Obtém os intervalos máximos e mínimos de vitórias para produtores.
   * @returns Observable com os dados de produtores e seus intervalos de vitórias.
   */
  getMaxMinWinIntervalForProducers(): Observable<any> {
    const params = new HttpParams().set('projection', 'max-min-win-interval-for-producers');
    return this.http.get<any>(this.apiUrl, { params });
  }

  /**
   * Obtém os filmes vencedores com base no ano especificado.
   * @param year Ano pelo qual os filmes devem ser filtrados.
   * @returns Observable com os dados dos filmes vencedores filtrados por ano.
   */
  getMoviesByYear(year: number): Observable<any> {
    const params = new HttpParams()
      .set('winner', 'true')
      .set('year', year.toString());
    return this.http.get<any>(this.apiUrl, { params });
  }
}
