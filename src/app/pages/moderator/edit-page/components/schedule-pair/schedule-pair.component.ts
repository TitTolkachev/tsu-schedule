import {Component, Input} from '@angular/core';
import {Pair} from "../../models/Pair";

@Component({
  selector: 'app-schedule-pair',
  templateUrl: './schedule-pair.component.html',
  styleUrls: ['./schedule-pair.component.css']
})
export class SchedulePairComponent {

  @Input()
  Pair: Pair | undefined

  @Input()
  openModalPair: Function | undefined
}
