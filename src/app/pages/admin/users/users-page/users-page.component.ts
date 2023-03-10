import {Component} from '@angular/core';
import {DisplayErrorComponent} from "../../../../components/util/display-error";
import {ErrorMessage} from "../../../../errors";
import {IUserService} from "../../../../services/i-user.service";
import {IGroupService} from "../../../../services/i-group.service";
import {Account} from "../../../../models/account";
import {Group} from "../../../../models/group";
import {Teacher} from "../../../../models/teacher";
import {ITeacherService} from "../../../../services/i-teacher.service";

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent extends DisplayErrorComponent {

  /**
   * Список аккаунтов с сервера.
   * Если undefined, значит список ещё не загружен с сервера
   */
  accounts: Account[] | undefined

  /**
   * Список групп с сервера.
   * Если undefined, значит список ещё не загружен с сервера
   */
  groups: Group[] | undefined

  /**
   * Список преподавателей с сервера.
   * Если undefined, значит список ещё не загружен с сервера
   */
  teachers: Teacher[] | undefined

  /**
   * Объект для передачи данных в модальное окно
   */
  modal = new Modal()

  /**
   * Объект для поиска списка
   */
  searchUserInput = ''

  constructor(
    private userService: IUserService,
    private groupService: IGroupService,
    private teacherService: ITeacherService
  ) {
    super();
  }

  ngOnInit() {
    this.refresh()
  }

  refresh() {
    document.getElementById("confirmation-modal-btn-close")?.click()
    document.getElementById("user-modal-btn-close")?.click()
    this.userService.fetchAccounts().subscribe({
      next: accounts => this.accounts = accounts,
      error: err => this.handleHttpError(err)
    })
    this.groupService.fetchGroups().subscribe({
      next: groups => this.groups = groups,
      error: err => this.handleHttpError(err)
    })
    this.teacherService.fetchTeachers().subscribe({
      next: teachers => this.teachers = teachers,
      error: err => this.handleHttpError(err)
    })
  }

  requestCreateAccount() {
    this.selectAccount(null)
  }

  /**
   * @deprecated устарело по причине того,
   * что бекенд не реализовал возможность редактировать аккаунт
   * TODO возможно убрать
   */
  requestEditAccount(account: Account) {
    this.selectAccount(account)
  }

  requestDeleteAccount(account: Account) {
    this.modal.error = null
    this.selectAccount(account)
  }

  createAccount(form: {
    firstName: string,
    lastName: string,
    patronymicName: string,
    role: string,
    groupId: string | null,
    teacherId: string | null,
    email: string,
    password: string
  }) {
    if (!this.validateAccount(form)) return

    this.userService.createAccount({
      firstName: form.firstName,
      lastName: form.lastName,
      patronymicName: form.patronymicName,
      role: form.role,
      groupId: form.groupId,
      teacherId: form.teacherId,
      email: form.email,
      password: form.password
    }).subscribe({
      next: () => this.refresh(),
      error: err => this.handleHttpError(err)
    })
  }

  /**
   * @deprecated устарело по причине того,
   * что бекенд не реализовал возможность редактировать аккаунт
   * TODO возможно убрать
   */
  modifyAccount(form: {
    id: string,
    firstName: string,
    lastName: string,
    patronymicName: string,
    role: string,
    groupId: string | null,
    teacherId: string | null,
    email: string,
    password: string
  }) {
    if (!this.validateAccount(form)) return

    this.userService.modifyAccount(form.id, {
      firstName: form.firstName,
      lastName: form.lastName,
      patronymicName: form.patronymicName,
      role: form.role,
      groupId: form.groupId,
      teacherId: form.teacherId,
      email: form.email,
      password: form.password
    }).subscribe({
      next: () => this.refresh(),
      error: err => this.handleHttpError(err)
    })
  }

  deleteAccount() {
    this.userService.deleteAccount(this.modal.selected!.id).subscribe({
      next: () => this.refresh(),
      error: err => this.modal.error = this.httpErrorMessageOf(err)
    })
  }

  private validateAccount(form: {firstName: string, lastName: string, patronymicName: string}): boolean {
    if (form.firstName.length === 0) {
      this.modal.error = ErrorMessage.VALIDATION_USER_FIRST_NAME_EMPTY
      return false
    }
    if (form.lastName.length === 0) {
      this.modal.error = ErrorMessage.VALIDATION_USER_LAST_NAME_EMPTY
      return false
    }
    if (form.patronymicName.length === 0) {
      this.modal.error = ErrorMessage.VALIDATION_USER_PATRONYMIC_NAME_EMPTY
      return false
    }
    return true
  }

  private selectAccount(account: Account | null) {
    this.modal.error = null
    this.modal.selected = account
  }
}

class Modal {
  selected: Account | null = null
  error: string | null = null
}
