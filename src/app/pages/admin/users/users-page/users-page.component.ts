import {Component} from '@angular/core';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent {
  data = [
    {name:"Иноземцева Татьяна Андреевна", email:"bla@bla.bla", role: 'teacher'},
    {name:"Даммер Диана Дамировна", email:"dam@gmail.com", role: 'teacher'},
    {name:"Феофилов Алексей Дмитриевич", email:"fil-master@mail.ru", group: 972101, role: 'student'},
    {name:"Аникушин Роман Евгеньевич", email:"romAN@vk.com", group: 972101, role: 'student'},
    {name:"Иноземцева Татьяна Андреевна", email:"bla@bla.bla", role: 'teacher'},
    {name:"Даммер Диана Дамировна", email:"dam@gmail.com", role: 'teacher'},
    {name:"Феофилов Алексей Дмитриевич", email:"fil-master@mail.ru", group: 972101, role: 'student'},
    {name:"Аникушин Роман Евгеньевич", email:"romAN@vk.com", group: 972101, role: 'student'},
  ]

  searchUserInput = '';
}
