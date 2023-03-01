import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import jwtDecode from "jwt-decode";
import {Jwt} from "../../models/jwt";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  state: any
  login: string = ""
  password: string = ""

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    this.state = 'loading'
    if (this.password.length == 0) {
      this.state = 'password_empty'
      return
    }
    if (this.login.length == 0) {
      this.state = 'login_empty'
      return
    }
    this.authService.signIn(this.login, this.password)
      .subscribe({
        next: e => {
          let role = jwtDecode<Jwt>(e.token).role
          if (role == 'Admin') {
            this.router.navigateByUrl("/admin/main").then()
            return;
          }
          if (role == 'ScheduleWriter') {
            this.router.navigateByUrl("/moderator/edit").then()
            return;
          }
          this.state = 'forbidden'
        },
        error: err => {
          if (err.status === 0) {
            this.state = 'connection_refused'
            return
          }
          if (err.error.status === 500) {
            this.state = 'internal_server_error'
            return
          }
          if (err.error.status === 400) {
            this.state = 'bad_request'
            return
          }
          this.state = 'unknown_error'
        }
      })
  }

}
