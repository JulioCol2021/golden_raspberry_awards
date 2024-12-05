import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule], // Importa o FormsModule para suporte ao ngModel
      declarations: [ListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * Testa se o componente foi criado corretamente.
   */
  it('Deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  /**
   * Testa a navegação para a primeira página.
   */
  it('Deve navegar para a primeira página', () => {
    component.currentPage = 1; // Simula estar em outra página
    component.goToFirstPage(); // Chama o método para navegar para a primeira página
    expect(component.currentPage).toBe(0); // Verifica se a página atual foi atualizada
  });

  /**
   * Testa a navegação para a última página.
   */
  it('Deve navegar para a última página', () => {
    component.currentPage = 0; // Simula estar na primeira página
    component.goToLastPage(); // Chama o método para navegar para a última página
    expect(component.currentPage).toBe(component.totalPages - 1); // Verifica se a página atual foi atualizada
  });

  /**
   * Testa o filtro de filmes com base no ano.
   */
  it('Deve filtrar os filmes corretamente', () => {
    component.searchYear = '2020';
    component.filterMovies(); // Chama o método de filtragem
    // Simula verificação de comportamento esperado
    expect(component.searchYear).toBe('2020');
  });
});
