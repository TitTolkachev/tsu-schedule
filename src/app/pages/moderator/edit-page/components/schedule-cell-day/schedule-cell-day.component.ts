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
  Pairs: Array<Pair> = []

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

export class Pair {
  constructor(name: string, placement: string, groups: string, teacher?: string, date?: string, time?: string) {
    this.Name = name
    this.Placement = placement
    this.Groups = groups
    this.Teacher = teacher
    this.Date = date
    this.Time = time
  }

  Name = ''

  Placement = ''

  Groups = ''

  Teacher: string | undefined = ''

  Date: string | undefined = ''

  Time: string | undefined = ''
}
