import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanySearchComponent } from './company-search/company-search.component';
import { FormsModule } from '@angular/forms';
import { CompanyResultsComponent } from './company-results/company-results.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { HttpClientModule } from '@angular/common/http';
import { CompanyOfficersListComponent } from './company-officers-list/company-officers-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanySearchComponent,
    CompanyResultsComponent,
    CompanyDetailsComponent,
    CompanyOfficersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
