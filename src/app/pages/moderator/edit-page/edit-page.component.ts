import {AfterContentInit, Component} from '@angular/core';
import {DropDownInput} from "./drop-down-input";

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})

export class EditPageComponent implements AfterContentInit {
  private hintTimer: number | undefined;

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

  setDisplayBlock(id: string) {
    let el = document.getElementById(id)
    if (el != null) {
      if (el.classList.contains('d-none'))
        el.classList.remove('d-none')
      if (this.hintTimer != undefined)
        clearTimeout(this.hintTimer)
      el.classList.add('fade-in-anim')
      el.classList.add('d-block')
    }
  }

  delayDisplayNone(id: string, delay: number) {
    let el = document.getElementById(id)
    if (el != null) {
      if (el.classList.contains('fade-in-anim'))
        el.classList.remove('fade-in-anim')
      this.hintTimer = setTimeout((el: HTMLElement) => {
        if (el.classList.contains('d-block'))
          el.classList.remove('d-block')
        el.classList.add('d-none')
      }, delay, el)
    }
  }
}
