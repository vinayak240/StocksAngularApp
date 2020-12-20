import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/services/jwt.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  userType = 'normal';
  constructor(
    private auth: AuthService,
    private ts: JwtService,
    private router: Router
  ) {}

  login() {
    this.auth
      .authenticate(this.username, this.password, this.userType)
      .subscribe(
        res => {
          this.ts.saveToken(res);
          this.router.navigateByUrl(
            this.userType === 'admin' ? '/admin-home' : '/user-home'
          );
          // console.log(`Response ${res}`);
        },
        err => {
          console.log(err);
          if (err.status === 401) {
            alert('Invalid username/password');
          } else {
            alert('Error logging in');
          }
        }
      );
  }

  TypeChange() {
    console.log(this.userType);
  }

  ngOnInit(): void {}
}
