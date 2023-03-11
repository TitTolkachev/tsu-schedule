export class GroupInput {
  constructor(input: HTMLElement | null, datalist: HTMLElement | null, arrow: HTMLElement | null) {
    this.init(input, datalist, arrow)
  }

  SelectedGroupsList = []

  init(input: HTMLElement | null, datalist: HTMLElement | null, arrow: HTMLElement | null) {

    if (input != null && datalist != null) {
      input.onfocus = () => {

        if (arrow != null)
          arrow.classList.add('flip');

        if (input != null && datalist != null) {
          datalist.style.display = 'block'
          input.style.borderRadius = "5px 5px 0 0"

          // @ts-ignore
          for (let option of datalist.options)
            option.style.display = "block"
        }
      }
      // @ts-ignore
      for (let option of datalist.options) {
        option.onclick = function () {
          if (input != null && datalist != null) {

            // @ts-ignore
            if (this.SelectedGroupsList.includes(option.value)) {
              // @ts-ignore
              this.SelectedGroupsList.splice(this.SelectedGroupsList.indexOf(option.value), 1)
              option.classList.remove('selected-group-option')
            } else {
              // @ts-ignore
              this.SelectedGroupsList.push(option.value)
              option.classList.add('selected-group-option')
            }

            // @ts-ignore
            this.SelectedGroupsList.sort()

            // @ts-ignore
            if (this.SelectedGroupsList.length > 0) {
              // @ts-ignore
              input.value = this.SelectedGroupsList[0]
              // @ts-ignore
              for (let i = 1; i < this.SelectedGroupsList.length; i++) {
                // @ts-ignore
                input.value = input.value + ', ' + this.SelectedGroupsList[i]
              }
            } else
              // @ts-ignore
              input.value = ''
          }
        }.bind(this)
      }
    }

    // Закрытие при клике вне элемента
    document.addEventListener('click', (e) => {
      if (datalist != null && input != null && arrow != null) {
        const withinBoundaries1 = e.composedPath().includes(datalist);
        const withinBoundaries2 = e.composedPath().includes(input);
        if (!withinBoundaries1 && !withinBoundaries2) {
          if (arrow.classList.contains("flip")) {
            let event = new Event('change', {
              bubbles: true,
              cancelable: true,
            });
            input.dispatchEvent(event);
          }
          datalist.style.display = 'none'
          input.style.borderRadius = "5px"
          arrow.classList.remove('flip');
        }
      }
    })
  }
}
