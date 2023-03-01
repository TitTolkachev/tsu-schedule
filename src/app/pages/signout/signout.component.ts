import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html'
})
export class SignoutComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.signOut().subscribe(() => {
      this.router.navigateByUrl("/").then()
    })
  }

}
