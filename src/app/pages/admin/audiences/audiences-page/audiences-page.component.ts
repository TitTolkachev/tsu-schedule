import {Component} from '@angular/core';
import {DisplayErrorComponent} from "../../../../components/util/display-error";
import {Audience} from "../../../../models/audience";
import {IAudienceService} from "../../../../services/i-audience.service";
import {ErrorMessage} from "../../../../errors";

@Component({
  selector: 'app-audiences-page',
  templateUrl: './audiences-page.component.html',
  styleUrls: ['./audiences-page.component.css', '../../css/admin-modal.css']
})
export class AudiencesPageComponent extends DisplayErrorComponent {

  /**
   * Список аудиторий с сервера.
   * Если undefined, значит список ещё не загружен с сервера
   */
  audiences: Audience[] | undefined

  /**
   * Объект для передачи данных в модальное окно
   */
  modal = new Modal()

  constructor(
    private audienceService: IAudienceService
  ) {
    super();
  }

  ngOnInit() {
    this.refresh()
  }

  refresh() {
    document.getElementById("confirmation-modal-btn-close")?.click()
    document.getElementById("audience-modal-btn-close")?.click()
    this.audienceService.fetchAudiences().subscribe({
      next: audiences => {
        this.audiences = audiences
      },
      error: err => {
        this.handleHttpError(err)
      }
    })
  }

  requestCreateAudiences() {
    this.selectAudience(null)
  }

  requestEditAudiences(audience: Audience) {
    this.selectAudience(audience)
  }

  requestDeleteAudiences(audience: Audience) {
    this.selectAudience(audience)
  }

  createAudience(form: {name: string, frame: string, floor: string, number: string}) {
    if (!this.validateAudience(form)) return

    this.audienceService.createAudience(
      +form.frame,
      +form.floor,
      form.name,
      form.number
    ).subscribe({
      next: () => {
        this.refresh()
      },
      error: err => {
        this.handleHttpError(err)
      }
    })
  }

  modifyAudience(form: {id: string, name: string, frame: string, floor: string, number: string}) {
    if (!this.validateAudience(form)) return

    this.audienceService.modifyAudience(new Audience(
      form.id,
      form.name,
      +form.frame,
      +form.floor,
      form.number
    )).subscribe({
      next: () => {
        this.refresh()
      },
      error: err => {
        this.handleHttpError(err)
      }
    })
  }

  deleteGroup() {
    this.audienceService.deleteAudience(this.modal.selected!.id).subscribe({
      next: () => {
        this.refresh()
      },
      error: err => {
        this.modal.error = this.httpErrorMessageOf(err)
      }
    })
  }

  private validateAudience(form: {name: string, frame: string, floor: string, number: string}): boolean {
    if (form.name.length === 0) {
      this.modal.error = ErrorMessage.VALIDATION_AUDIENCE_NAME_EMPTY
      return false
    }
    if (form.frame.length === 0) {
      this.modal.error = ErrorMessage.VALIDATION_AUDIENCE_FRAME_EMPTY
      return false
    }
    if (!/^\d+$/g.test(form.frame)) {
      this.modal.error = ErrorMessage.VALIDATION_AUDIENCE_FRAME_NOT_NUMBER
      return false
    }
    if (form.floor.length === 0) {
      this.modal.error = ErrorMessage.VALIDATION_AUDIENCE_FLOOR_EMPTY
      return false
    }
    if (!/^\d+$/g.test(form.floor)) {
      this.modal.error = ErrorMessage.VALIDATION_AUDIENCE_FLOOR_NOT_NUMBER
      return false
    }
    if (form.number.length === 0) {
      this.modal.error = ErrorMessage.VALIDATION_AUDIENCE_NUMBER_EMPTY
      return false
    }
    return true
  }

  private selectAudience(audience: Audience | null) {
    this.modal.error = null
    this.modal.selected = (audience == null) ? null : audience.clone()
  }
}

class Modal {
  selected: Audience | null = null
  error: string | null = null
}
