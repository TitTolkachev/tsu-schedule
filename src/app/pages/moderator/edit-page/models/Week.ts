import {State} from "./State";
import {WeekTimeLine} from "./WeekTimeLine";

export class Week {
  WeekDate: string = '30 января 2023 - 4 февраля 2023 • 23 неделя'
  WeekDays: Array<number> = [1, 2, 3, 4, 5, 6]
  PageState: number = State.base
  openModalPair: Function | undefined
  addPair: Function | undefined
  WeekTimeLines: Array<WeekTimeLine> = []
}
