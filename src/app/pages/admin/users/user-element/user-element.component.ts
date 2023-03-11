import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Account} from "../../../../models/account";

@Component({
  selector: 'app-user-element',
  templateUrl: './user-element.component.html',
  styleUrls: ['./user-element.component.css']
})
export class UserElementComponent {
  /*@Input()
  public role: string = ""
  @Input()
  public name: string = ""

  @Input()
  public email: string = ""

  @Input()
  public group: number | undefined*/

  @Input()
  account: Account | undefined

  @Output()
  onEdit: EventEmitter<Account> = new EventEmitter<Account>()

  @Output()
  onDelete: EventEmitter<Account> = new EventEmitter<Account>()

  editClick() {
    this.onEdit.emit(this.account)
  }

  deleteClick() {
    this.onDelete.emit(this.account)
  }
}
