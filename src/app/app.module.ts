
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { ListComponent } from './list.component';
import { MoviesService } from './services/movies.service';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'list', component: ListComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes) // Importando RouterModule com as rotas definidas
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
