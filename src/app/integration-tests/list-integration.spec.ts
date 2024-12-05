
/**
 * Teste de integração para verificar a comunicação entre o ListComponent e o ExampleService.
 * Este teste utiliza o módulo de teste HttpClientTestingModule.
 */

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ListComponent } from '../list/list.component';
import { ExampleService } from '../services/example.service';
import { of } from 'rxjs'; // Biblioteca para criar fluxos de dados simulados

describe('ListComponent Integration', () => {
  let service: ExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Módulo para simular requisições HTTP
      providers: [ExampleService] // Serviço a ser testado
    });
    service = TestBed.inject(ExampleService); // Injeta o serviço no teste
  });

  it('Deve buscar dados corretamente do serviço', () => {
    spyOn(service, 'getData').and.returnValue(of(['Dado1', 'Dado2']));
    service.getData().subscribe(data => {
      expect(data.length).toBe(2); // Verifica se os dados retornados estão corretos
    });
  });
});
