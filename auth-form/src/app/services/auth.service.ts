import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users'; // Path to your db.json file

  constructor(private http: HttpClient) {}

  // Method to validate user credentials
  validateCredentials(email: string, password: string): Observable<boolean> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(data => {
        // Check if the credentials are valid
        const user = data.find((user: any) => user.email === email && user.createPassword === password);
        return !!user;
      }),
      catchError(() => of(false)) // Return false if there's an error
    );
  }
}
