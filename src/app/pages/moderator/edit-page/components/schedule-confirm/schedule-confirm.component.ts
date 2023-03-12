import {Component, Input} from '@angular/core';
import {ConfirmMode} from "../../models/ConfirmMode";

@Component({
  selector: 'app-schedule-confirm',
  templateUrl: './schedule-confirm.component.html',
  styleUrls: ['./schedule-confirm.component.css']
})
export class ScheduleConfirmComponent {

  @Input()
  ConfirmFunctions: Function[] = []

  @Input()
  ConfirmMode = ConfirmMode.none

  onChangeOneClick(){
    this.ConfirmFunctions[1]()
    this.closeModal()
  }
  onChangeAllClick(){
    this.ConfirmFunctions[0]()
    this.closeModal()
  }
  onDeleteOneClick(){
    this.ConfirmFunctions[3]()
    this.closeModal()
  }
  onDeleteAllClick(){
    this.ConfirmFunctions[2]()
    this.closeModal()
  }

  closeModal(){
    document.getElementById('close-confirm-modal-btn')?.click()
  }
}
