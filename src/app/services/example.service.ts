import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExampleService {
  private readonly apiUrl = '/api/example-endpoint';

  constructor(private http: HttpClient) {}

  /**
   * Retorna dados reais da API como um Observable.
   * @returns Observable com os dados recebidos.
   */
  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  /**
   * Retorna dados simulados.
   * @returns Observable com os dados simulados.
   */
  getExampleData(): Observable<any[]> {
    return of([{ id: 1, name: 'Example Data' }]);
  }
}
