import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Audience} from "../../models/audience";
import {IAudienceService} from "../i-audience.service";

@Injectable({
  providedIn: 'root'
})
export class AudienceMockService implements IAudienceService {

  private audiences: Audience[] = [
    new Audience("0", "Математический анализ", "1", 1, "123"),
    new Audience("1", "Алгебра", "1", 1, "124"),
    new Audience("2", "Компьютерный класс", "1", 2, "231")
  ]
  private counter = 3

  constructor() { }

  fetchAudiences(): Observable<Audience[]> {
    return of(this.audiences)
  }

  createAudience(
    frame: number, // TODO string?
    floor: number,
    name: string,
    number: number // TODO string?
  ): Observable<any> {
    this.audiences.push(new Audience(
      (this.counter++).toString(),
      name,
      frame.toString(),
      floor,
      number.toString()
    ))
    return of(null)
  }

  modifyAudience(audience: Audience): Observable<any> {
    let index = this.audiences.findIndex(e => e.id == audience.id)
    if (index > -1) {
      this.audiences[index] = audience
    }
    return of(null)
  }

  deleteAudience(id: string): Observable<any> {
    let index = this.audiences.findIndex(e => e.id == id)
    if (index > -1) {
      this.audiences.splice(index, 1)
    }
    return of(null)
  }
}
