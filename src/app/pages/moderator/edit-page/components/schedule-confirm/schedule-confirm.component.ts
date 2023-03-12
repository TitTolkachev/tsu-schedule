import {Component, Input} from '@angular/core';
import {ConfirmMode} from "../../models/ConfirmMode";

@Component({
  selector: 'app-schedule-confirm',
  templateUrl: './schedule-confirm.component.html',
  styleUrls: ['./schedule-confirm.component.css']
})
export class ScheduleConfirmComponent {

  @Input()
  ConfirmFunctions: Function[] = []

  @Input()
  ConfirmMode = ConfirmMode.none
}
