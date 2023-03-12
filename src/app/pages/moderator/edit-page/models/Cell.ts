import {Pair} from "./Pair";

export class Cell {

  BorderBottom = true

  Pairs: Array<Pair> = []

  PageState: number | undefined

  ShowPluses: boolean | undefined

  openModalPair: Function | undefined

  addPair: Function | undefined

  IsAdding: boolean | undefined

}
