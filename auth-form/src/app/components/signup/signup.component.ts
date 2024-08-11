import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  step1Form: FormGroup;
  step2Form: FormGroup;
  currentStep = 1;
  errorMessage: string | null = null;
  pincodeError: string | null = null;
  designations: string[] = [];
  allowedOrganizations: string[] = [];

  constructor(
    private fb: FormBuilder,
    private signupService: SignupService,
    private router: Router
  ) {
    this.step1Form = this.fb.group({
      name: [''],
      email: [''],
      createPassword: ['']
    });

    this.step2Form = this.fb.group({
      organization: [''],
      designation: [''],
      birthdate: [''],
      city: [''],
      pincode: ['']
    });
  }

  ngOnInit(): void {
    // Load step 2 data
    this.loadStep2Data();
    // Restore form data if any
    this.restoreFormData();
  }

  loadStep2Data() {
    this.signupService.getDesignations().subscribe(
      data => this.designations = data,
      error => console.error('Error loading designations', error)
    );

    this.signupService.getAllowedOrganizations().subscribe(
      data => this.allowedOrganizations = data,
      error => console.error('Error loading allowed organizations', error)
    );
  }

  restoreFormData() {
    const storedData = JSON.parse(localStorage.getItem('signupFormData') || '{}');
    if (storedData.step1) {
      this.step1Form.patchValue(storedData.step1);
    }
    if (storedData.step2) {
      this.step2Form.patchValue(storedData.step2);
    }
  }

  saveFormData() {
    const formData = {
      step1: this.step1Form.value,
      step2: this.step2Form.value
    };
    localStorage.setItem('signupFormData', JSON.stringify(formData));
  }

  onContinue() {
    if (this.step1Form.valid) {
      this.saveFormData();
      this.currentStep = 2;
    }
  }

  onBack() {
    this.saveFormData();
    this.currentStep = 1;
  }

  onSubmit() {
    if (this.step2Form.valid) {
      const { organization, pincode } = this.step2Form.value;

      if (!this.allowedOrganizations.includes(organization)) {
        this.errorMessage = 'Unknown organization-id';
        return;
      }

      if (pincode.length !== 6 || isNaN(Number(pincode))) {
        this.pincodeError = 'Pincode must be exactly 6 digits';
        return;
      }

      // Data submission to db.json
      this.signupService.submitForm({
        ...this.step1Form.value,
        ...this.step2Form.value
      }).subscribe((response:any) => {
        console.log('Form submitted successfully');
        localStorage.removeItem('signupFormData');
        this.router.navigate(['/success']);
      });
    }
  }
}
