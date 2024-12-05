// Corrigido: example.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExampleService {
  getData(): Observable<any> {
    return of([]);
  }
}