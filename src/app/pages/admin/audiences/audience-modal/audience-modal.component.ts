import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DisplayErrorComponent} from "../../../../components/util/display-error";
import {Audience} from "../../../../models/audience";

@Component({
  selector: 'app-audience-modal',
  templateUrl: './audience-modal.component.html',
  styleUrls: ['./audience-modal.component.css', '../../css/admin-modal.css']
})
export class AudienceModalComponent extends DisplayErrorComponent {

  private id: string | undefined

  name: string = ""
  frame: string = ""
  floor: string = ""
  number: string = ""

  @Input()
  set form(form: Audience | null) {
    if (form != null) {
      this.id = form.id
      this.name = form.name ? form.name : ""
      this.frame = form.buildingNumber.toString()
      this.floor = form.floor.toString()
      this.number = form.number
    }
    else {
      this.id = undefined
      this.name = ""
      this.frame = ""
      this.floor = ""
      this.number = ""
    }
  }

  @Output()
  create = new EventEmitter<{name: string, frame: string, floor: string, number: string}>()

  @Output()
  modify = new EventEmitter<{id: string, name: string, frame: string, floor: string, number: string}>()

  get edit(): boolean {
    return this.id != undefined
  }

  onSubmit() {
    if (this.id == undefined) {
      this.create.emit({
        name: this.name,
        frame: this.frame,
        floor: this.floor,
        number: this.number
      })
    }
    else {
      this.modify.emit({
        id: this.id,
        name: this.name,
        frame: this.frame,
        floor: this.floor,
        number: this.number
      })
    }
  }
}
