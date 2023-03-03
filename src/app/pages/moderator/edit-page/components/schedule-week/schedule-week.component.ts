import {AfterContentInit, Component} from '@angular/core';
import {Pair} from "../schedule-cell-day/schedule-cell-day.component";

@Component({
  selector: 'app-schedule-week',
  templateUrl: './schedule-week.component.html',
  styleUrls: ['./schedule-week.component.css']
})
export class ScheduleWeekComponent implements AfterContentInit {

  Pairs: Array<Pair> = []

  addPair(name: string, placement: string, groups: string, teacher?: string, date?: string, time?: string) {
    this.Pairs.push(new Pair(name, placement, groups, teacher, date, time))
  }

  ngAfterContentInit() {
    this.addPair('Матанализ', 'Онлайн', '972101')
    this.addPair('Матанализ', 'Онлайн', '972102')
    this.addPair('Матанализ', 'Онлайн', '972101, 972102')
    this.addPair('Машинное обучение', '302 аудитория', '972101, 972102, 972103')
    this.addPair('Разработка и анализ требований', 'Онлайн', '972101')
    this.addPair('Разработка и анализ требований', 'Онлайн', '972102')
  }
}
