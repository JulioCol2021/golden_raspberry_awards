
import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { DashboardComponent } from './dashboard.component';
import { MoviesService } from './services/movies.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let moviesService: MoviesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [FormsModule, HttpClientModule],
      providers: [MoviesService],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    moviesService = TestBed.inject(MoviesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load years with multiple winners', () => {
    const mockData = { years: [{ year: 2020, winnerCount: 3 }] };
    spyOn(moviesService, 'getYearsWithMultipleWinners').and.returnValue(of(mockData));

    component.ngOnInit();
    expect(moviesService.getYearsWithMultipleWinners).toHaveBeenCalled();
    expect(component.yearsWithMultipleWinners.length).toBe(1);
    expect(component.yearsWithMultipleWinners[0].year).toBe(2020);
  });

  it('should handle errors when loading years with multiple winners', () => {
    spyOn(moviesService, 'getYearsWithMultipleWinners').and.returnValue(throwError('API Error'));

    component.ngOnInit();
    expect(component.yearsWithMultipleWinners).toEqual([]);
  });
});
