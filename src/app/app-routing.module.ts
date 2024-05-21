import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanySearchComponent } from './company-search/company-search.component';
import { CompanyResultsComponent } from './company-results/company-results.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { CompanyOfficersListComponent } from './company-officers-list/company-officers-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: CompanySearchComponent },
  { path: 'results', component: CompanyResultsComponent },
  { path: 'company/:id', component: CompanyDetailsComponent},
  { path: 'company/:id/list', component: CompanyOfficersListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
