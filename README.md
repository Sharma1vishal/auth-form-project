# Angular Signup and Login Application

## Overview

This project is an Angular-based application for user sign-up and login. It consists of a multi-step sign-up form and a login form, both integrated with a mock backend using `json-server` for data handling.

## Features

- **Sign-Up Form:**
  - Step 1: Name, email/phone number, and password fields.
  - Step 2: Organization name (validated against a mock list), designation (dropdown), birthdate (calendar), city, and pincode (6 digits).

- **Login Form:**
  - Email and password fields with validation against a mock backend.
  
- **Error Handling:**
  - Inline error messages for invalid inputs.
  
- **Navigation:**
  - Multi-step form navigation with data persistence between steps.

Future Improvements
Enhanced UI/UX:

*Implement additional UI/UX improvements based on user feedback.
Incorporate responsive design for mobile and tablet support.
Advanced Validation:

*Add more complex validation rules for form fields.
Implement real-time validation feedback.
Authentication and Authorization:

*Integrate a real authentication service (e.g., OAuth, Firebase Authentication).
Implement user roles and permissions.
Backend Integration:

*Replace the mock backend with a real backend service.
Implement additional API endpoints for user management.
Testing:

*Optimize performance and loading times.
Implement lazy loading for Angular modules.
Internationalization:

