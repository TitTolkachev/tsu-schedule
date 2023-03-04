import {Component} from '@angular/core';
import {Group} from "../../../../models/group";
import {GroupMockService} from "../../../../services/mock/group-mock.service";
import {DisplayErrorComponent} from "../../../../components/util/display-error";

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

  constructor(
    private groupService: GroupMockService
  ) {
    super();
  }

  ngOnInit() {
    this.refresh()
  }

  refresh() {
    this.groupService.fetchGroup().subscribe({
      next: groups => {
        this.groups = groups
      },
      error: err => {
        this.handleHttpError(err)
      }
    })
  }

  requestCreateGroup() {
    this.modal.edit = false
    this.selectGroup(Group.empty())
  }

  requestEditGroup(group: Group) {
    this.modal.edit = true
    this.selectGroup(group)
  }

  requestDeleteGroup(group: Group) {
    this.selectGroup(group)
  }

  deleteGroup() {
    this.groupService.deleteGroup(this.modal.selected.id).subscribe({
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

  private selectGroup(group: Group) {
    this.modal.selected = group.clone()
  }
}

class Modal {
  edit: boolean = false
  selected: Group = Group.empty()
  error: string | null = null
}
