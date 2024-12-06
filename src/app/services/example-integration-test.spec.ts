/**
 * Integration Test Example
 * Teste de integração entre componentes e serviços
 */

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ExampleService } from './example.service';
import { ExampleComponent } from '../example.component';

describe('Integration Test: ExampleComponent and ExampleService', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ExampleComponent],
      providers: [ExampleService]
    }).compileComponents();
  });

  it('should integrate ExampleComponent with ExampleService successfully', () => {
    const fixture = TestBed.createComponent(ExampleComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
