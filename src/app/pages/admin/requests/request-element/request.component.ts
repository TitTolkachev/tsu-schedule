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
    return this.request instanceof RegistrationRequest
  }

  get isGroupRequest(): boolean {
    return this.request instanceof GroupRequest
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

    return `${acc.lastName} ${acc.firstName} ${acc.patronymicName != 'null' ? acc.patronymicName : ''} `
  }

  acceptClick() {
    this.onAccept.emit(this.request)
  }

  declineClick() {
    this.onDecline.emit(this.request)
  }
}
