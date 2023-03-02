import { Component } from '@angular/core';
import {Group} from "../../../../models/group";
import {GroupService} from "../../../../services/group.service";
import {GroupMockService} from "../../../../services/mock/group-mock.service";

@Component({
  selector: 'app-groups-page',
  templateUrl: './groups-page.component.html',
  styleUrls: ['./groups-page.component.css', '../../css/admin-modal.css']
})
export class GroupsPageComponent {

  /**
   * Допустимые состояния:
   */
  state: any

  /**
   * Список групп с сервера.
   * Если undefined, значит список ещё не загружен с сервера
   */
  groups: Group[] | undefined

  modalEdit: boolean = false
  modalGroup: Group = Group.empty()

  constructor(
    private groupService: GroupMockService
  ) {}

  ngOnInit() {
    this.refresh()
  }

  refresh() {
    this.groupService.fetchGroup().subscribe(groups => {
      this.groups = groups
    })
  }

  createClick() {
    this.modalEdit = false
    this.modalGroup = Group.empty()
  }

  editClick(group: Group) {
    this.modalEdit = true
    this.modalGroup = group.clone()
  }

  deleteClick(group: Group) {
    this.groupService.deleteGroup(group.id).subscribe({
      next: () => {
        this.refresh()
      },
      error: () => {}
    })
  }

  submitModal() {
    // TODO validation
    let observable
    if (this.modalEdit) {
      observable = this.groupService.modifyGroup(this.modalGroup)
    }
    else {
      observable = this.groupService.createGroup(this.modalGroup.number)
    }
    observable.subscribe({
      next: () => {
        this.refresh()
      },
      error: () => {}
    })
  }
}
