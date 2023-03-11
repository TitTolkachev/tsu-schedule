import {HttpErrorResponse} from "@angular/common/http";
import {ErrorMessage} from "../../errors";
import {Directive, Input} from "@angular/core";

@Directive()
export abstract class DisplayErrorComponent {

  @Input()
  error: string | null = null

  protected handleHttpError(err: Error) {
    this.error = this.httpErrorMessageOf(err)
  }

  protected httpErrorMessageOf(err: Error): string {
    if (err instanceof HttpErrorResponse) {
      if (err.status === 0) {
        return ErrorMessage.CONNECTION_REFUSED
      }
      if (err.status === 500) {
        return ErrorMessage.INTERNAL_SERVER_ERROR
      }
      return ErrorMessage.UNKNOWN_ERROR
    }
    return err.message
  }

  hasError() {
    return this.error != null
  }
}
