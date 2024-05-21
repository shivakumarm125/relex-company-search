import { Component, OnInit } from '@angular/core';
import { CompanySearchService } from '../company-search.service';

@Component({
  selector: 'app-company-officers-list',
  templateUrl: './company-officers-list.component.html',
  styleUrl: './company-officers-list.component.css'
})
export class CompanyOfficersListComponent implements OnInit{

  results: any;
  loading: boolean = false;
  error: string = '';
  companyDetails: any;

  constructor(private companySearchService: CompanySearchService) {}

  ngOnInit(): void {
    var details = sessionStorage.getItem("companyDetails")
   if(details){ 
    this.companyDetails = JSON.parse(details);
  }
    this.getOfficers();
  }  


  // API call to GET all the officers involved
  getOfficers() {
    this.loading = true;
    this.error = '';
    this.results = [];
    var companyNum = sessionStorage.getItem("companyNumber")
    if(companyNum){
    this.companySearchService.searchofficers(companyNum).subscribe(
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
  }

}
