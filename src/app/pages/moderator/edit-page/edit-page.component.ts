import {AfterContentInit, Component} from '@angular/core';
import {DropDownInput} from "./drop-down-input";

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})

export class EditPageComponent implements AfterContentInit {

  ngAfterContentInit() {
    let input1 = document.getElementById('input1')
    let datalist1 = document.getElementById('datalist1')
    let arrow1 = document.getElementById('arrow1')
    let ddi1 = new DropDownInput(input1, datalist1, arrow1)

    let input2 = document.getElementById('input2')
    let datalist2 = document.getElementById('datalist2')
    let arrow2 = document.getElementById('arrow2')
    let ddi2 = new DropDownInput(input2, datalist2, arrow2)

    let input3 = document.getElementById('input3')
    let datalist3 = document.getElementById('datalist3')
    let arrow3 = document.getElementById('arrow3')
    let ddi3 = new DropDownInput(input3, datalist3, arrow3)

    let input4 = document.getElementById('input4')
    let datalist4 = document.getElementById('datalist4')
    let arrow4 = document.getElementById('arrow4')
    let ddi4 = new DropDownInput(input4, datalist4, arrow4)
  }
}
