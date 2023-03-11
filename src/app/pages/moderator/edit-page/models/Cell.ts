import {Pair} from "./Pair";

export class Cell {

  BorderBottom = true

  Pairs: Array<Pair> = []

  PageState: number | undefined

  openModalPair: Function | undefined

  addPair: Function | undefined

  IsAdding: boolean | undefined

}
