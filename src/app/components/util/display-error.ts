import {HttpErrorResponse} from "@angular/common/http";
import {ErrorMessage} from "../../errors";
import {Directive, Input} from "@angular/core";

@Directive()
export abstract class DisplayErrorComponent {

  @Input()
  error: string | null = null

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
    return this.error != null
  }
}
