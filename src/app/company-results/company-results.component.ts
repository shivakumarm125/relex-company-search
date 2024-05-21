import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanySearchService } from '../company-search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-results',
  templateUrl: './company-results.component.html',
  styleUrls: ['./company-results.component.css']
})
export class CompanyResultsComponent implements OnInit {
  query: string = '';
  results: any;
  loading: boolean = false;
  error: string = '';

  constructor(
    private route: ActivatedRoute,
    private companySearchService: CompanySearchService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.query = params['query'] || '';
      if (this.query) {
        this.searchCompanies();
      }
    });
  }


  // used to GET all the company details
  searchCompanies(): void {
    this.loading = true;
    this.error = '';
    this.results = [];
    this.companySearchService.searchCompanies(this.query).subscribe(
      results => {
        this.results = results?.items;
        this.loading = false;
      },
      error => {
        this.error = 'Error fetching company details';
        this.loading = false;
      }
    );
  }

  // The below code will set session storage for company to stop multiple API calls in details screen
  showCompanies(value: string, company: object): void {
    sessionStorage.setItem("companyDetails", JSON.stringify(company));
      this.router.navigate(['/'+value]);
  }
}
