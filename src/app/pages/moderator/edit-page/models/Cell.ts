import {Pair} from "./Pair";
import {LessonTime} from "../../../../models/lesson-time";

export class Cell {

  BorderBottom = true

  Pairs: Array<Pair> = []

  PageState: number | undefined

  ShowPluses: boolean | undefined

  openModalPair: Function | undefined

  addPair: Function | undefined

  IsAdding: boolean | undefined

  /**
   * От 0 до 5
   */
  DayOfWeek: number | undefined;

  CellTime: LessonTime | undefined;

  CellDate: Date | undefined
}
