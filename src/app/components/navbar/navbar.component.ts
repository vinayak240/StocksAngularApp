import { Component, OnInit } from '@angular/core';
import { JwtService } from 'src/app/services/jwt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(public token: JwtService, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.token.resetToken();
    this.router.navigateByUrl('/login');
  }
}
