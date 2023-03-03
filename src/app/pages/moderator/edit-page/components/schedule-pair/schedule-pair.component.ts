import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-schedule-pair',
  templateUrl: './schedule-pair.component.html',
  styleUrls: ['./schedule-pair.component.css']
})
export class SchedulePairComponent {

  @Input()
  PairName = 'Математический анализ'

  @Input()
  PairPlacement = 'Онлайн'

  @Input()
  PairGroups = '972101'
}
