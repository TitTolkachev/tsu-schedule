import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RegistrationRequest} from "../../../../models/registration-request";
import {GroupRequest} from "../../../../models/group-request";

@Component({
  selector: 'app-requests',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent {

  @Input()
  request: RegistrationRequest | GroupRequest | undefined

  @Output()
  onAccept: EventEmitter<RegistrationRequest | GroupRequest> = new EventEmitter<RegistrationRequest | GroupRequest>()

  @Output()
  onDecline: EventEmitter<RegistrationRequest | GroupRequest> = new EventEmitter<RegistrationRequest | GroupRequest>()

  get isRegistrationRequest(): boolean {
    // @ts-ignore
    return !('group' in this.request)
  }

  get isGroupRequest(): boolean {
    // @ts-ignore
    return 'group' in this.request
  }

  get registrationRequest(): RegistrationRequest {
    return <RegistrationRequest>this.request
  }

  get groupRequest(): GroupRequest {
    return <GroupRequest>this.request
  }

  get whoName(): string | undefined {
    if (!this.request) {
      return undefined
    }

    let acc = this.request.account

    return `${acc.lastName} ${acc.firstName} ${acc.patronymicName} `
  }

  acceptClick() {
    this.onAccept.emit(this.request)
  }

  declineClick() {
    this.onDecline.emit(this.request)
  }
}
