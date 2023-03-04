import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Subject} from "../../../../models/subject";
import {DisplayErrorComponent} from "../../../../components/util/display-error";

@Component({
  selector: 'app-subject-modal',
  templateUrl: './subject-modal.component.html',
  styleUrls: ['./subject-modal.component.css', '../../css/admin-modal.css']
})
export class SubjectModalComponent extends DisplayErrorComponent {

  private id: string | undefined

  name: string = ""

  @Input()
  set form(form: Subject | null) {
    if (form != null) {
      this.id = form.id
      this.name = form.name
    }
    else {
      this.id = undefined
      this.name = ""
    }
  }

  get edit(): boolean {
    return this.id != undefined
  }

  @Output()
  create = new EventEmitter<{name: string}>()

  @Output()
  modify = new EventEmitter<{id: string, name: string}>()

  onSubmit() {
    if (this.id == undefined) {
      this.create.emit({
        name: this.name
      })
    }
    else {
      this.modify.emit({
        id: this.id,
        name: this.name
      })
    }
  }
}
