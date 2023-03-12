import {tr} from "date-fns/locale";

export class DropDownInput {
  constructor(input: HTMLElement | null, datalist: HTMLElement | null, arrow: HTMLElement | null, setIsEmpty?: Function) {
    this.init(input, datalist, arrow, setIsEmpty)
  }

  init(input: HTMLElement | null, datalist: HTMLElement | null, arrow: HTMLElement | null, setIsEmpty?: Function) {

    if (input != null && datalist != null) {
      input.onfocus = () => {

        if (arrow != null)
          arrow.classList.add('flip');

        if (datalist != null && datalist.children.length > 0) {

          if (input != null) {
            datalist.style.display = 'block'
            input.style.borderRadius = "5px 5px 0 0"

            // @ts-ignore
            for (let option of datalist.options)
              option.style.display = "block"
          }
        }
      }
      input.onblur = () => {
        if (arrow != null)
          arrow.classList.remove('flip');
      }

      // @ts-ignore
      for (let option of datalist.options) {
        option.onclick = function () {
          if (input != null && datalist != null) {
            // @ts-ignore
            input.value = option.value
            if (setIsEmpty != null)
              setIsEmpty(true)
            datalist.style.display = 'none'
            input.style.borderRadius = "5px"
          }
          let event = new Event('change', {
            bubbles: true,
            cancelable: true,
          });
          input.dispatchEvent(event);
        }
      }

      input.oninput = function () {
        if (input != null && datalist != null) {
          currentFocus = -1;
          // @ts-ignore
          let text = input.value.toUpperCase();
          let counter = 0
          // @ts-ignore
          for (let option of datalist.options) {
            if (option.value.toUpperCase().indexOf(text) > -1) {
              option.style.display = "block"
              counter++
            } else {
              option.style.display = "none"
            }
          }
          if (counter === 0) {
            datalist.style.display = 'none'
            input.style.borderRadius = "5px"
          } else {
            datalist.style.display = 'block'
            input.style.borderRadius = "5px 5px 0 0"
          }
        }
      }
      let currentFocus = -1;
      input.onkeydown = function (e) {
        if (e.keyCode === 40) {
          currentFocus++
          // @ts-ignore
          addActive(datalist.options)
        } else if (e.keyCode === 38) {
          currentFocus--
          // @ts-ignore
          addActive(datalist.options)
        } else if (e.keyCode === 13) {
          e.preventDefault();
          if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            // @ts-ignore
            if (datalist.options) {
              // @ts-ignore
              datalist.options[currentFocus].click()
              if (setIsEmpty != null)
                setIsEmpty(true)
              // @ts-ignore
              input.blur()
            }
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
      if (datalist != null && input != null) {
        const withinBoundaries1 = e.composedPath().includes(datalist);
        const withinBoundaries2 = e.composedPath().includes(input);
        if (!withinBoundaries1 && !withinBoundaries2) {
          datalist.style.display = 'none'
          input.style.borderRadius = "5px"
        }
        if (setIsEmpty != null)
          // @ts-ignore
          setIsEmpty(input.value != '')
      }
    })
  }
}
