import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-users-modal',
  templateUrl: './users-modal.component.html',
  styleUrls: ['./users-modal.component.css']
})
export class UsersModalComponent {
  @Input()
  public id: string | undefined

  @Input()
  public role: string = "student"
  @Input()
  public name: string = ""

  @Input()
  public email: string = ""

  @Input()
  public group: number | undefined

  public groups = ["972101", "972101", "972101", "972101", "972101", "972101", "972101", "972101" ]

  get edit(): boolean {
    return this.id != undefined
  }
}
