export type WorkQueueRequest = {
  FilingExpiryStartDate: string,
  FilingExpiryEndDate: string,
  Fields: string[]
}

export type WorkQueueResponse = {
  Data: Record<string, any>[]
}
