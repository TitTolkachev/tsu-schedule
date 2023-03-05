import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  @Input()
  public role: string = ''
  @Input()
  public name: string = ""

  @Input()
  public email: string = ""

  @Input()
  public group: number | undefined
}
