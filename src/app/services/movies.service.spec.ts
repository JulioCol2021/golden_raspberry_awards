import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MoviesService],
    });
    service = TestBed.inject(MoviesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Garante que não há requisições pendentes
  });

  /**
   * Testa a obtenção de anos com múltiplos vencedores.
   */
  it('Deve buscar anos com múltiplos vencedores', () => {
    const mockResponse = { years: [{ year: 2020, winnerCount: 3 }] };

    service.getYearsWithMultipleWinners().subscribe((data) => {
      expect(data.years.length).toBe(1);
      expect(data.years[0].year).toBe(2020);
    });

    const req = httpMock.expectOne(
      'https://challenge.outsera.tech/api/movies?projection=years-with-multiple-winners'
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse); // Retorna a resposta mockada
  });

  /**
   * Testa o tratamento de erros ao buscar anos com múltiplos vencedores.
   */
  it('Deve tratar erro ao buscar anos com múltiplos vencedores', () => {
    service.getYearsWithMultipleWinners().subscribe(
      () => fail('Erro esperado, mas não ocorreu'),
      (error) => {
        expect(error).toBeTruthy();
      }
    );

    const req = httpMock.expectOne(
      'https://challenge.outsera.tech/api/movies?projection=years-with-multiple-winners'
    );
    req.error(new ErrorEvent('Erro na API')); // Simula um erro de API
  });

  /**
   * Testa a obtenção de filmes com base em filtros de página e tamanho.
   */
  it('Deve buscar filmes com base na página e tamanho', () => {
    const mockResponse = { content: [{ id: 1, title: 'Movie Test' }] };

    service.getMovies(0, 10).subscribe((data) => {
      expect(data.content.length).toBe(1);
      expect(data.content[0].title).toBe('Movie Test');
    });

    const req = httpMock.expectOne('https://challenge.outsera.tech/api/movies?page=0&size=10');
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
