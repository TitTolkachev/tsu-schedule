import {HttpErrorResponse} from "@angular/common/http";
import {ErrorMessage} from "../../errors";
import {Input} from "@angular/core";

export abstract class DisplayErrorComponent {

  @Input()
  error: string | undefined

  protected handleHttpError(err: HttpErrorResponse) {
    this.error = this.httpErrorMessageOf(err)
  }

  protected httpErrorMessageOf(err: HttpErrorResponse): string {
    if (err.status === 0) {
      return ErrorMessage.CONNECTION_REFUSED
    }
    if (err.error.status === 500) {
      return ErrorMessage.INTERNAL_SERVER_ERROR
    }
    return  ErrorMessage.UNKNOWN_ERROR
  }

  hasError() {
    return this.error != undefined
  }
}
