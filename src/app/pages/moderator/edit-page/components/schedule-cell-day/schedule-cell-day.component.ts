import {Component, Input} from '@angular/core';
import {Cell} from "../../models/Cell";

@Component({
  selector: 'app-schedule-cell-day',
  templateUrl: './schedule-cell-day.component.html',
  styleUrls: ['./schedule-cell-day.component.css']
})
export class ScheduleCellDayComponent {

  @Input()
  Cell: Cell | undefined

  IsExpanded = false

  ExpandArrowId = Date.now().toString(36) + Math.random().toString(36).substring(2);

  expandArrow() {
    let arrow = document.getElementById(this.ExpandArrowId)
    if (arrow != null) {
      if (arrow.classList.contains("flip")) {
        arrow.classList.remove("flip")
        this.IsExpanded = false
      } else {
        arrow.classList.add("flip")
        this.IsExpanded = true
      }
    }
  }

  onPlusBtnClick() {
    if (this.Cell?.IsAdding == false && this.Cell.addPair) {
      this.Cell.IsAdding = true
      this.Cell.addPair(this.Cell)
    }
  }
}
