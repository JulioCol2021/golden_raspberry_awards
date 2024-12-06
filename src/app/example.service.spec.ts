import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ExampleService } from './example.service';
import { of } from 'rxjs';

describe('ExampleService', () => {
  let service: ExampleService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ExampleService],
    });
    service = TestBed.inject(ExampleService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make a GET request to fetch data', () => {
    const dummyData = [{ id: 1, name: 'Test Data' }];

    // Simula o retorno de um Observable
    spyOn(service, 'getData').and.returnValue(of(dummyData));

    service.getData().subscribe((data) => {
      expect(data).toEqual(dummyData);
    });
  });
});
