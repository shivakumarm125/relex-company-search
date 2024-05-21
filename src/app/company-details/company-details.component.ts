import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrl: './company-details.component.css'
})
export class CompanyDetailsComponent implements OnInit {

  constructor(private router: Router){}

  companyDetails: any;

  ngOnInit(): void {
   var details = sessionStorage.getItem("companyDetails")
   if(details){ 
    this.companyDetails = JSON.parse(details);
  }
}

// Saving company number for smooth transition also routing
showoffice(companyNumber: string){
  sessionStorage.setItem("companyNumber", companyNumber);
  const currentUrl = this.router.url; 
  const listUrl = `${currentUrl}/list`;
  this.router.navigate([listUrl]);
}

}
