export class DBError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "DBError"
  }
}

export function returnOneOrThrow<T>(data: T[]): T {
  if (data.length === 0) {
    throw new DBError("No data found")
  }
  return data[0]
}