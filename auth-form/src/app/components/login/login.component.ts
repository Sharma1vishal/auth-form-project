import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private authService: AuthService, private router:Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      this.authService.validateCredentials(email, password).subscribe(isValid => {
        if (isValid) {
          // Handle successful login (e.g., navigate to a different page)
          console.log('Login successful');
          this.router.navigate(['/signup'])
          this.errorMessage = null;
        } else {
          // Show an error message for invalid credentials
          this.errorMessage = 'Invalid email or password';
        }
      });
    }
  }
}
