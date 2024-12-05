
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { ExampleService } from './example.service';

describe('ExampleService', () => {
  let service: ExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ExampleService],
    });
    service = TestBed.inject(ExampleService);
  });

  it('deve criar o serviço', () => {
    expect(service).toBeTruthy();
  });

  it('deve retornar um Observable simulando dados', () => {
    const mockData = [{ id: 1, name: 'Test Data' }];
    spyOn(service, 'getData').and.returnValue(of(mockData));

    service.getData().subscribe((data) => {
      expect(data).toEqual(mockData);
    });
  });
});
