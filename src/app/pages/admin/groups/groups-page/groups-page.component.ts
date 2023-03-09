import {Component} from '@angular/core';
import {Group} from "../../../../models/group";
import {DisplayErrorComponent} from "../../../../components/util/display-error";
import {ErrorMessage} from "../../../../errors";
import {IGroupService} from "../../../../services/i-group.service";

@Component({
  selector: 'app-groups-page',
  templateUrl: './groups-page.component.html',
  styleUrls: ['./groups-page.component.css', '../../css/admin-modal.css']
})
export class GroupsPageComponent extends DisplayErrorComponent {

  /**
   * Список групп с сервера.
   * Если undefined, значит список ещё не загружен с сервера
   */
  groups: Group[] | undefined

  /**
   * Объект для передачи данных в модальное окно
   */
  modal = new Modal()

  /**
   * Объект для поиска по списку
   */
  searchGroupInput = ''

  constructor(
    private groupService: IGroupService
  ) {
    super();
  }

  ngOnInit() {
    this.refresh()
  }

  refresh() {
    document.getElementById("confirmation-modal-btn-close")?.click()
    document.getElementById("group-modal-btn-close")?.click()
    this.groupService.fetchGroups().subscribe({
      next: groups => {
        this.groups = groups
      },
      error: err => {
        this.handleHttpError(err)
      }
    })
  }

  requestCreateGroup() {
    this.selectGroup(null)
  }

  requestEditGroup(group: Group) {
    this.selectGroup(group)
  }

  requestDeleteGroup(group: Group) {
    this.selectGroup(group)
  }

  createGroup(form: {number: string}) {
    if (!this.validateGroup(form)) return

    this.groupService.createGroup(form.number).subscribe({
      next: () => {
        this.refresh()
      },
      error: err => {
        this.handleHttpError(err)
      }
    })
  }

  modifyGroup(form: {id: string, number: string}) {
    if (!this.validateGroup(form)) return

    this.groupService.modifyGroup(new Group(
      form.id,
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
    this.groupService.deleteGroup(this.modal.selected!.id).subscribe({
      next: () => {
        this.refresh()
      },
      error: err => {
        this.modal.error = this.httpErrorMessageOf(err)
      }
    })
  }

  private validateGroup(form: {number: string}): boolean {
    if (form.number.length === 0) {
      this.modal.error = ErrorMessage.VALIDATION_GROUP_NUMBER_EMPTY
      return false
    }
    return true
  }

  private selectGroup(group: Group | null) {
    this.modal.error = null
    this.modal.selected = (group == null) ? null : group.clone()
  }
}

class Modal {
  selected: Group | null = null
  error: string | null = null
}
