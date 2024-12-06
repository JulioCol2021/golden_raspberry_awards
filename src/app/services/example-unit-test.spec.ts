import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ExampleService } from './example.service';

describe('ExampleService', () => {
  let service: ExampleService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Configura módulo HTTP para testes
      providers: [ExampleService],
    });
    service = TestBed.inject(ExampleService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Garante que todas as requisições foram atendidas
  });

  /**
   * Testa se o serviço foi criado corretamente.
   */
  it('Deve criar o serviço', () => {
    expect(service).toBeTruthy();
  });

  /**
   * Testa uma requisição GET para buscar dados.
   */
  it('Deve fazer uma requisição GET para buscar dados', () => {
    const dummyData = [{ id: 1, name: 'Test Data' }];

    service.getData().subscribe((data) => {
      expect(data).toEqual(dummyData);
    });

    const req = httpMock.expectOne('/api/example-endpoint');
    expect(req.request.method).toBe('GET');
    req.flush(dummyData); // Mock da resposta
  });
});
