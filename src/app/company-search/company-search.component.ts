import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-search',
  templateUrl: './company-search.component.html',
  styleUrls: ['./company-search.component.css']
})
export class CompanySearchComponent {
  query: string = '';

  constructor(private router: Router) {}

  search(): void {
    if (this.query) {
      this.router.navigate(['/results']
      , { queryParams: { query: this.query } }
    );
    }
  }
}
