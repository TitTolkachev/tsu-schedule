export class GroupInput {
  constructor(input: HTMLElement | null, datalist: HTMLElement | null, arrow: HTMLElement | null) {
    this.init(input, datalist, arrow)
  }

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
