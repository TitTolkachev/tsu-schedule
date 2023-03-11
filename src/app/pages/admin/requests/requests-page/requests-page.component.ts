import {Component} from '@angular/core';
import {DisplayErrorComponent} from "../../../../components/util/display-error";
import {IRequestService} from "../../../../services/i-request.service";
import {RegistrationRequest} from "../../../../models/registration-request";
import {GroupRequest} from "../../../../models/group-request";

@Component({
  selector: 'app-requests-page',
  templateUrl: './requests-page.component.html',
  styleUrls: ['./requests-page.component.css']
})

export class RequestsPageComponent  extends DisplayErrorComponent {

  /**
   * Список запросов на регистрацию с сервера.
   * Если undefined, значит список ещё не загружен с сервера
   */
  registrationRequests: RegistrationRequest[] | undefined

  /**
   * Список запросов на смену группы с сервера.
   * Если undefined, значит список ещё не загружен с сервера
   */
  groupRequests: GroupRequest[] | undefined

  /**
   * Объект для передачи данных в модальное окно
   */
  modal = new Modal()

  /**
   * Объекты для поиска по списку
   */
  searchRequestChangeGroup = ''
  searchRequestRegistration = ''

  constructor(
    private requestService: IRequestService
  ) {
    super();
  }

  ngOnInit() {
    this.refresh()
  }

  refresh() {
    document.getElementById("confirmation-modal-btn-close")?.click()
    document.getElementById("reject-modal-btn-close")?.click()
    this.requestService.fetchRegistrationRequest().subscribe({
      next: registrationRequests => this.registrationRequests = registrationRequests,
      error: err => this.handleHttpError(err)
    })
    this.requestService.fetchGroupRequest().subscribe({
      next: groupRequests => this.groupRequests = groupRequests,
      error: err => this.handleHttpError(err)
    })
  }

  resolveRequest(accept: boolean) {
    if (this.modal.selected instanceof RegistrationRequest) {
      this.requestService.resolveRegistrationRequest(this.modal.selected.id, accept).subscribe({
        next: () => this.refresh(),
        error: err => this.modal.error = this.httpErrorMessageOf(err)
      })
      return
    }
    if (this.modal.selected instanceof GroupRequest) {
      this.requestService.resolveGroupRequest(this.modal.selected.id, accept).subscribe({
        next: () => this.refresh(),
        error: err => this.modal.error = this.httpErrorMessageOf(err)
      })
      return
    }
    throw Error("invalid selected request")
  }

  selectRequest(subject: RegistrationRequest | GroupRequest | null) {
    this.modal.error = null
    this.modal.selected = subject
  }
}

class Modal {
  selected: RegistrationRequest | GroupRequest | null = null
  error: string | null = null
}
