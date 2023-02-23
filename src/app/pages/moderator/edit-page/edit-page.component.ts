import {AfterContentInit, Component} from '@angular/core';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})

export class EditPageComponent implements AfterContentInit {

  ngAfterContentInit() {
    let input = document.getElementById('input')
    let browsers = document.getElementById('browsers')

    if (input != null && browsers != null) {
      input.onfocus = () => {

        document.getElementsByClassName('expand-arrow')[0].classList.add('flip');

        if (input != null && browsers != null) {
          browsers.style.display = 'block'
          input.style.borderRadius = "5px 5px 0 0"

          // @ts-ignore
          for (let option of browsers.options)
            option.style.display = "block"
        }
      }
      input.onblur = () => {
        document.getElementsByClassName('expand-arrow')[0].classList.remove('flip');
      }
      // @ts-ignore
      for (let option of browsers.options) {
        option.onclick = function () {
          if (input != null && browsers != null) {
            // @ts-ignore
            input.value = option.value
            browsers.style.display = 'none'
            input.style.borderRadius = "5px"
          }
        }
      }

      input.oninput = function () {
        if (input != null && browsers != null) {
          currentFocus = -1;
          // @ts-ignore
          let text = input.value.toUpperCase();
          let counter = 0
          // @ts-ignore
          for (let option of browsers.options) {
            if (option.value.toUpperCase().indexOf(text) > -1) {
              option.style.display = "block"
              counter++
            } else {
              option.style.display = "none"
            }
          }
          if (counter == 0) {
            browsers.style.display = 'none'
            input.style.borderRadius = "5px"
          } else {
            browsers.style.display = 'block'
            input.style.borderRadius = "5px 5px 0 0"
          }
        }
      }
      let currentFocus = -1;
      input.onkeydown = function (e) {
        if (e.keyCode == 40) {
          currentFocus++
          // @ts-ignore
          addActive(browsers.options)
        } else if (e.keyCode == 38) {
          currentFocus--
          // @ts-ignore
          addActive(browsers.options)
        } else if (e.keyCode == 13) {
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            // @ts-ignore
            if (browsers.options) browsers.options[currentFocus].click()
          }
        }
      }

      // @ts-ignore
      function addActive(x) {
        if (!x) return false;
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0
        if (currentFocus < 0) currentFocus = (x.length - 1)
        x[currentFocus].classList.add("active")
      }

      // @ts-ignore
      function removeActive(x) {
        for (let i = 0; i < x.length; i++) {
          x[i].classList.remove("active")
        }
      }
    }


    // Закрытие при клике вне элемента
    document.addEventListener('click', (e) => {
      if (browsers != null && input != null) {
        const withinBoundaries1 = e.composedPath().includes(browsers);
        const withinBoundaries2 = e.composedPath().includes(input);
        if (!withinBoundaries1 && !withinBoundaries2) {
          browsers.style.display = 'none'
          input.style.borderRadius = "5px"
        }
      }
    })
  }
}
