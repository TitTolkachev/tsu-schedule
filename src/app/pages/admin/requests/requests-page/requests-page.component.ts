import {Component} from '@angular/core';

@Component({
  selector: 'app-requests-page',
  templateUrl: './requests-page.component.html',
  styleUrls: ['./requests-page.component.css']
})

export class RequestsPageComponent {
  requestsReqistration = [
    {name: "Иноземцева Татьяна Андреевна", email: "sd@mail.com", group: undefined},
    {name: "Даммер Диана Дамировна", email: "dam@gmail.com", group: undefined},
    {name: "Феофилов Алексей Дмитриевич", email: "fil-master@vk.com", group: 972101},
  ]

  requestsChangeGroup = [
    {name: "Аникушин Роман Евгеньевич", email: "romAN@gmail.com", oldGroup: 972101, newGroup: 972103},
    {name: "Блаблашкин Игорь Семенович", email: "nani@bla.com", oldGroup: 972002, newGroup: 972101}
  ]
}
