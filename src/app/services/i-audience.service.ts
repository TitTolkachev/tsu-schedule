import {Observable} from "rxjs";
import {Audience} from "../models/audience";

export abstract class IAudienceService {

  abstract fetchAudiences(): Observable<Audience[]>

  abstract createAudience(
    frame: number,
    floor: number,
    name: string,
    number: string
  ): Observable<any>

  abstract modifyAudience(audience: Audience): Observable<any>

  abstract deleteAudience(id: string): Observable<any>

}
