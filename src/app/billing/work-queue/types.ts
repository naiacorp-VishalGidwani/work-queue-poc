export type WorkQueueRequest = {
  ExpiryEndDate: string,
  Fields: string[]
}

export type WorkQueueResponse = {
  Data: Record<string, any>[]
}
