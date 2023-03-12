import {AfterContentInit, Component, Input} from '@angular/core';
import {Pair} from "../../models/Pair";

@Component({
  selector: 'app-schedule-pair-modal',
  templateUrl: './schedule-pair-modal.component.html',
  styleUrls: ['./schedule-pair-modal.component.css']
})
export class SchedulePairModalComponent implements AfterContentInit {

  @Input()
  Pair: Pair | undefined = new Pair('', '', '', '', '', '', '')

  @Input()
  PageState: number | undefined

  @Input()
  ShowChangeBtn: boolean | undefined

  @Input()
  initSetOpenModalPairFunction: Function | undefined

  @Input()
  editPair: Function | undefined

  openModalPair = function (pair: Pair) {
    // @ts-ignore
    this.Pair = pair
    let modalWindow = document.getElementById('pairModal')
    if (modalWindow) {
      // @ts-ignore
      let btn = document.getElementById('pairModalOpenBtn')
      if (btn)
        btn.click()
    }
  }.bind(this)

  ngAfterContentInit() {
    if (this.initSetOpenModalPairFunction)
      this.initSetOpenModalPairFunction(this.openModalPair)
  }
}
