import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Account} from "../../../../models/account";

@Component({
  selector: 'app-user-element',
  templateUrl: './user-element.component.html',
  styleUrls: ['./user-element.component.css']
})
export class UserElementComponent {

  @Input()
  account: Account | undefined

  /**
   * @deprecated устарело по причине того,
   * что бекенд не реализовал возможность редактировать аккаунт
   * TODO возможно убрать
   */
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
