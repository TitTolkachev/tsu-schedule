import {Component, Input} from '@angular/core';
import {Pair} from "../../models/Pair";

@Component({
  selector: 'app-schedule-cell-day',
  templateUrl: './schedule-cell-day.component.html',
  styleUrls: ['./schedule-cell-day.component.css']
})
export class ScheduleCellDayComponent {

  @Input()
  BorderBottom = true

  @Input()
  Pairs: Array<Pair> = []

  @Input()
  openModalPair: Function | undefined

  IsExpanded = false

  ExpandArrowId = Math.random().toString()

  expandArrow() {
    let arrow = document.getElementById(this.ExpandArrowId)
    if (arrow != null) {
      if (arrow.classList.contains("flip")) {
        arrow.classList.remove("flip")
        this.IsExpanded = false
      } else{
        arrow.classList.add("flip")
        this.IsExpanded = true
      }
    }
  }
}
