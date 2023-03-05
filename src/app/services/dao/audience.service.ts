import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SERVER_URL} from "../../constants";
import {Audience} from "../../models/audience";
import {IAudienceService} from "../i-audience.service";

@Injectable({
  providedIn: 'root'
})
export class AudienceService implements IAudienceService {

  constructor(
    private httpClient: HttpClient
  ) { }

  fetchAudiences(): Observable<Audience[]> {
    return this.httpClient.get<Audience[]>(
      `${SERVER_URL}/study-room`
    )
  }

  createAudience(
    frame: number,
    floor: number,
    name: string,
    number: string
  ): Observable<any> {
    return this.httpClient.post(
      `${SERVER_URL}/study-room`,
      {
        buildingNumber: frame,
        floor: floor,
        name: name,
        number: number
      }
    )
  }

  modifyAudience(audience: Audience): Observable<any> {
    return this.httpClient.put(
      `${SERVER_URL}/study-room`,
      {
        id: audience.id,
        buildingNumber: audience.frame,
        floor: audience.floor,
        name: audience.name,
        number: audience.number
      }
    )
  }

  deleteAudience(id: string): Observable<any> {
    return this.httpClient.delete(
      `${SERVER_URL}/study-room/${id}`
    )
  }
}
