import {AfterContentInit, Component, Input} from '@angular/core';
import {Week} from "../../models/Week";

@Component({
  selector: 'app-schedule-week',
  templateUrl: './schedule-week.component.html',
  styleUrls: ['./schedule-week.component.css']
})
export class ScheduleWeekComponent /*implements AfterContentInit*/ {

  @Input()
  Week: Week | undefined

  // addPairToPairsArray(name: string, placement: string, groups: string, type?: string, teacher?: string, date?: string, time?: string) {
  //   this.Week?.Pairs.push(new Pair(name, placement, groups, type, teacher, date, time))
  // }
  //
  // ngAfterContentInit() {
  //   this.addPairToPairsArray('Матанализ', 'Онлайн', '972101', 'Лекция', 'Даммер Диана Дамировна', '', '8:45 - 10:20')
  //   this.addPairToPairsArray('Матанализ', 'Онлайн', '972102', 'Лекция', 'Даммер Диана Дамировна', '', '8:45 - 10:20')
  //   this.addPairToPairsArray('Матанализ', 'Онлайн', '972101, 972102', 'Лекция', 'Даммер Диана Дамировна', '', '8:45 - 10:20')
  //   this.addPairToPairsArray('Машинное обучение', '302 аудитория', '972101, 972102, 972103', 'Лекция', 'Даммер Диана Дамировна', '', '8:45 - 10:20')
  //   this.addPairToPairsArray('Разработка и анализ требований', 'Онлайн', '972101', 'Лекция', 'Даммер Диана Дамировна', '', '8:45 - 10:20')
  //   this.addPairToPairsArray('Разработка и анализ требований', 'Онлайн', '972102', 'Лекция', 'Даммер Диана Дамировна', '', '8:45 - 10:20')
  // }
}
