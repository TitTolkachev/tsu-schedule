export class Jwt {

  readonly sub: string
  readonly exp: number
  readonly iat: number
  readonly role: string

  constructor(sub: string, exp: number, iat: number, role: string) {
    this.sub = sub;
    this.exp = exp;
    this.iat = iat;
    this.role = role;
  }
}
