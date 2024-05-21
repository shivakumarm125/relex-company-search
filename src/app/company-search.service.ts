import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { map } from 'rxjs/operators';

interface Company {
  name: string;
  number: string;
}

@Injectable({
  providedIn: 'root'
})
export class CompanySearchService {

  private apiUrl = 'https://angular-exercise.trunarrative.cloud/TruProxyAPI/rest/Companies/v1/Search?Query=';
  private searchOfficers = 'https://angular-exercise.trunarrative.cloud/TruProxyAPI/rest/Companies/v1/Officers?CompanyNumber=';

  constructor(private http: HttpClient) { }

  searchCompanies(query: string): Observable<any> {

    const headers = new HttpHeaders({
      'x-api-key': 'PwewCEztSW7XlaAKqkg4IaOsPelGynw6SN9WsbNf'
    });
      return this.http.get<any>(this.apiUrl+query, { headers });
  }

  searchofficers(companyNumber: string): Observable<any> {

    const headers = new HttpHeaders({
      'x-api-key': 'PwewCEztSW7XlaAKqkg4IaOsPelGynw6SN9WsbNf'
    });
      return this.http.get<any>(this.searchOfficers+companyNumber, { headers });
  }
}
