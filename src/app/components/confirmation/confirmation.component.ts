import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DisplayErrorComponent} from "../util/display-error";

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent extends DisplayErrorComponent {

  @Input()
  message: string = ""

  @Output()
  confirm = new EventEmitter

  @Output()
  cancel = new EventEmitter

}
