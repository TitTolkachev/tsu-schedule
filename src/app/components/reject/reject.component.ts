import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DisplayErrorComponent} from "../util/display-error";

@Component({
  selector: 'app-reject',
  templateUrl: './reject.component.html',
  styleUrls: ['./reject.component.css']
})
export class RejectComponent extends DisplayErrorComponent {

  @Input()
  message: string = ""

  @Output()
  confirm = new EventEmitter

  @Output()
  cancel = new EventEmitter
}
