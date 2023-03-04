import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Group} from "../../../../models/group";
import {GroupMockService} from "../../../../services/mock/group-mock.service";
import {ErrorMessage} from "../../../../errors";
import {DisplayErrorComponent} from "../../../../components/util/display-error";

@Component({
  selector: 'app-group-modal',
  templateUrl: './group-modal.component.html',
  styleUrls: ['./group-modal.component.css', '../../css/admin-modal.css']
})
export class GroupModalComponent extends DisplayErrorComponent {

  @Input()
  form: Group = Group.empty()

  @Input()
  edit: boolean = false

  @Output()
  submit = new EventEmitter()

  constructor(
    private groupService: GroupMockService
  ) {
    super();
  }

  onSubmit() {
    if (this.form.number.length === 0) {
      this.error = ErrorMessage.VALIDATION_GROUP_NUMBER_EMPTY
      return;
    }

    let observable
    if (this.edit) {
      observable = this.groupService.modifyGroup(this.form)
    }
    else {
      observable = this.groupService.createGroup(this.form.number)
    }
    observable.subscribe({
      next: () => {
        this.submit.emit()
      },
      error: err => {
        this.handleHttpError(err)
      }
    })
  }
}
