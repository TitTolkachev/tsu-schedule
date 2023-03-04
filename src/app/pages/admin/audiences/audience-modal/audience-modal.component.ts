import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ErrorMessage} from "../../../../errors";
import {DisplayErrorComponent} from "../../../../components/util/display-error";
import {Audience} from "../../../../models/audience";
import {AudienceMockService} from "../../../../services/mock/audience-mock.service";

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
  set form(form: Audience | undefined) {
    if (form != undefined) {
      this.id = form.id
      this.name = form.name
      this.frame = form.frame
      this.floor = form.floor.toString()
      this.number = form.number
    }
  }

  @Input()
  edit: boolean = false

  @Output()
  submit = new EventEmitter()

  constructor(
    private audienceService: AudienceMockService
  ) {
    super();
  }

  onSubmit() {
    if (this.name.length === 0) {
      this.error = ErrorMessage.VALIDATION_AUDIENCE_NAME_EMPTY
      return;
    }
    if (this.frame.length === 0) {
      this.error = ErrorMessage.VALIDATION_AUDIENCE_FRAME_EMPTY
      return;
    }
    if (this.floor.length === 0) {
      this.error = ErrorMessage.VALIDATION_AUDIENCE_FLOOR_EMPTY
      return;
    }
    if (this.number.length === 0) {
      this.error = ErrorMessage.VALIDATION_AUDIENCE_NUMBER_EMPTY
      return;
    }

    let observable
    if (this.edit) {
      observable = this.audienceService.modifyAudience(new Audience(
        this.id!,
        this.name,
        this.frame,
        +this.floor,
        this.number
      ))
    }
    else {
      observable = this.audienceService.createAudience(
        +this.frame,
        +this.floor,
        this.name,
        +this.number
      )
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
