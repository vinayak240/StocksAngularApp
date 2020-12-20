import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { JwtService } from 'src/app/services/jwt.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username = '';
  password = '';
  email = '';
  constructor(
    private auth: AuthService,
    private ts: JwtService,
    private router: Router
  ) {}

  register() {
    this.auth.register(this.username, this.password, this.email).subscribe(
      res => {
        this.ts.saveToken(res);
        this.router.navigateByUrl('/user-home');
        // console.log(`Token ${res}`);
      },
      err => {
        console.log(err);
        if (err.status === 401) {
          alert('Invalid Creds');
        } else {
          alert('Error logging in');
        }
      }
    );
  }

  ngOnInit(): void {}
}
