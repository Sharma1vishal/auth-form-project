import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getDesignations(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/designations`);
  }

  getAllowedOrganizations(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/allowedOrganizations`);
  }

  submitForm(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`, data);
  }
}
