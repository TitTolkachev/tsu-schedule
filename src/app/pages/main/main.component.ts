import {Component} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  template: '',
})
export class MainComponent {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    let role = this.authService.accessToken?.role
    if (role == null) {
      throw Error("User isn't authorized")
    }
    switch (role) {
      case "Admin":
        this.router.navigateByUrl("/admin/main").then()
        break
      case "ScheduleWriter":
        this.router.navigateByUrl("/moderator/edit").then()
        break
      default:
        throw Error("User has invalid role")
    }
  }


}
