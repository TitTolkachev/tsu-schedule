import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DisplayErrorComponent} from "../../../../components/util/display-error";
import {Account} from "../../../../models/account";
import {Group} from "../../../../models/group";
import {Teacher} from "../../../../models/teacher";

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
  groupId: string | null = null
  teacherId: string | null = null
  email: string = ""
  password: string = ""

  @Input()
  groups: Group[] | undefined

  @Input()
  teachers: Teacher[] | undefined

  @Input()
  set form(form: Account | null) {
    if (form != null) {
      this.id = form.id
      this.firstName = form.firstName
      this.lastName = form.lastName
      this.patronymicName = form.patronymicName
      this.role = form.role
      this.groupId = form.group ? form.group.number : null
      this.teacherId = form.teacherId
      this.email = form.email
    } else {
      this.id = undefined
      this.firstName = ""
      this.lastName = ""
      this.patronymicName = ""
      this.role = "Student"
      this.groupId = null
      this.teacherId = null
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
    groupId: string | null,
    teacherId: string | null,
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
    groupId: string | null,
    teacherId: string | null,
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
        groupId: this.groupId,
        teacherId: this.teacherId,
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
        groupId: this.groupId,
        teacherId: this.teacherId,
        email: this.email,
        password: this.password
      })
    }
  }

  onRoleChange(role: string) {
    this.role = role
  }

  onGroupChange(groupId: string) {
    this.groupId = groupId
  }

  onTeacherChange(teacherId: string) {
    this.teacherId = teacherId
  }

  generatePassword() {
    this.password = (Math.random() + 1).toString(36).substring(6);
  }
}
