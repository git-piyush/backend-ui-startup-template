import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private authService:AuthService) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      role: ['User', Validators.required],
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirm = form.get('confirmPassword')?.value;
    return password === confirm ? null : { mismatch: true };
  }

  onRegister(): void {    
    if (this.registerForm.valid) {
          console.log('Registering user: ' + JSON.stringify(this.registerForm.value));
          const userData = this.registerForm.value;      
          this.authService.registerUser(this.registerForm).subscribe({
            next: (res:any) => {
              if (res.status === 200) {
                  this.router.navigate(['/login']);                
              }
            },
            error: (err: any) => {
              this.showError(err.error.message);
            }
          });
    }
  }
  
  showError(msg: string){
        alert(msg);
  }
}

