import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-requests',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent {
  @Input()
  public name: string = ""

  @Input()
  public email: string = ""

  @Input()
  public group: number | undefined

  @Input()
  public oldGroup: number | undefined

  @Input()
  public newGroup: number | undefined
}
