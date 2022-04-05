import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminLoginService } from './admin-login.service';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  loginUserData = <any>{};
 obj = []
  constructor(private _auth: AdminLoginService,private _router:Router) {}

  ngOnInit(): void {}
  loginUser() {
    console.log(this.loginUserData);
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      {next:(res) =>{console.log(res)
        localStorage.setItem('token', res.token)
        this._router.navigate(['/admin-view'])
      },
      error:(err) => console.log(err)}
    );
  }
}

