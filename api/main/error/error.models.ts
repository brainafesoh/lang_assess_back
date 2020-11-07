export const enum ErrorCodes {}

export class ApiError {
  constructor(private code: ErrorCodes, private message: string) {}
}
