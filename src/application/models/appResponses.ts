
export class Response <T> {
  public response?: T
  public message = 'success'
  public statusCode = 200
}

export class AppResponse<T> {
  public response: Response<T>

  constructor (init?: Partial<AppResponse<T>>) {
    Object.assign(this, init)
    this.response = new Response()
  }
}

export class AppDataTableResponse<T> extends AppResponse<T> {
  public totalRecords = 0
  public filteredRecords = 0

  constructor (init?: Partial<AppDataTableResponse<T>>) {
    super()

    Object.assign(this, init)
  }
}
