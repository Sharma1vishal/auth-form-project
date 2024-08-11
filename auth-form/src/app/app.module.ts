// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { SuccessComponent } from './components/success/success.component'; // Assuming you have a success component

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    StepperComponent,
    SuccessComponent // Declare all components
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
