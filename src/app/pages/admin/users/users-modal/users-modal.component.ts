import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DisplayErrorComponent} from "../../../../components/util/display-error";
import {Account} from "../../../../models/account";
import {Group} from "../../../../models/group";

@Component({
  selector: 'app-users-modal',
  templateUrl: './users-modal.component.html',
  styleUrls: ['./users-modal.component.css']
})
export class UsersModalComponent extends DisplayErrorComponent {

  private id: string | undefined

  firstName: string = ""
  lastName: string = ""
  patronymicName: string = ""
  role: string = ""
  group: Group | null = null
  email: string = ""
  password: string = ""

  @Input()
  set form(form: Account | null) {
    if (form != null) {
      this.id = form.id
      this.firstName = form.firstName
      this.lastName = form.lastName
      this.patronymicName = form.patronymicName
      this.role = form.role
      this.group = form.group
      this.email = form.email
    } else {
      this.id = undefined
      this.firstName = ""
      this.lastName = ""
      this.patronymicName = ""
      this.role = "Student"
      this.group = null
      this.email = ""
    }
    this.password = ""
  }

  get edit(): boolean {
    return this.id != undefined
  }

  @Output()
  create = new EventEmitter<{
    firstName: string,
    lastName: string,
    patronymicName: string,
    role: string,
    group: Group | null,
    email: string,
    password: string
  }>()

  @Output()
  modify = new EventEmitter<{
    id: string,
    firstName: string,
    lastName: string,
    patronymicName: string,
    role: string,
    group: Group | null,
    email: string,
    password: string
  }>()

  onSubmit() {
    if (this.id == undefined) {
      this.create.emit({
        firstName: this.firstName,
        lastName: this.lastName,
        patronymicName: this.patronymicName,
        role: this.role,
        group: this.group,
        email: this.email,
        password: this.password
      })
    } else {
      this.modify.emit({
        id: this.id,
        firstName: this.firstName,
        lastName: this.lastName,
        patronymicName: this.patronymicName,
        role: this.role,
        group: this.group,
        email: this.email,
        password: this.password
      })
    }
  }

  generatePassword() {
    this.password = (Math.random() + 1).toString(36).substring(6);
  }
}

/*{
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
}*/
