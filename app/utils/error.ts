export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
    public timestamp: string = new Date().toISOString()
  ) {
    super(message);
    this.name = "ApiError";
  }

  static fromResponse(response: Response): ApiError {
    return new ApiError(
      response.status,
      `API Error: ${response.status} - ${response.statusText}`
    );
  }
}
