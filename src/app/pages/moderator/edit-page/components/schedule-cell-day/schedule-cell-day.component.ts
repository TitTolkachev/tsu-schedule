import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-schedule-cell-day',
  templateUrl: './schedule-cell-day.component.html',
  styleUrls: ['./schedule-cell-day.component.css']
})
export class ScheduleCellDayComponent {

  @Input()
  BorderBottom = true

  @Input()
  IsCellEmpty = true
}
