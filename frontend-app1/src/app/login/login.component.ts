import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
  }

// Model to bind form values
  loginData = {
    email: '',
    password: ''
  };
  error: any = null;
  constructor(private authService: AuthService, 
    private router: Router) {}

   // Method to accept form values
  onLogin(): void {
    const { email, password } = this.loginData;

    // For now, just log them
    console.log('Username:', email);
    console.log('Password:', password);
    console.log(this.loginData);
    this.authService.loginUser(this.loginData).subscribe({
      next: (res:any) => {
        if (res.status === 200) {
          this.authService.storeToken('token', res.token);
          this.authService.storeToken('role', res.role);
          this.authService.storeToken('userName', res.userName);
          if(this.authService.isAdmin()){
              this.router.navigate(['/admindashboard']);
          }else if(this.authService.isCustomer()){
              this.router.navigate(['/customeradmin'])
          }else if(this.authService.isManager()){
              this.router.navigate(['/admindashboard'])
          }
          
        }
      },
      error: (err: any) => {
        this.showError(err?.error?.message || err.message || 'Unable To Login: ' + err)
      }
    });
  }
    showError(msg: string){
    this.error = msg;
    setTimeout(()=> {
      this.error = null
    }, 4000);
  }
}
