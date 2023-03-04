import {Component} from '@angular/core';
import {DisplayErrorComponent} from "../../../../components/util/display-error";
import {Audience} from "../../../../models/audience";
import {IAudienceService} from "../../../../services/i-audience.service";

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
    this.modal.edit = false
    this.selectGroup(Audience.empty())
  }

  requestEditAudiences(audience: Audience) {
    this.modal.edit = true
    this.selectGroup(audience)
  }

  requestDeleteAudiences(audience: Audience) {
    this.selectGroup(audience)
  }

  deleteGroup() {
    this.audienceService.deleteAudience(this.modal.selected.id).subscribe({
      next: () => {
        this.refresh()
      },
      error: err => {
        this.modal.error = this.httpErrorMessageOf(err)
      }
    })
  }

  onSubmitModal() {
    this.refresh()
  }

  private selectGroup(audience: Audience) {
    this.modal.selected = audience.clone()
  }
}

class Modal {
  edit: boolean = false
  selected: Audience = Audience.empty()
  error: string | null = null
}
