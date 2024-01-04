// import { SerializedError } from '@reduxjs/toolkit'
// import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

// type ResponseError = {
//   status: number
//   data: {
//     statusCode: number
//     message: string
//     timestamp: string
//     path: string
//   }
// }
//
// type ResponseFetchError = {
//   status: string
//   error: string
// }

export type ReturnedErrorType = {
  status: 'FETCH_ERROR' | number
  message: string
}

export const ErrorUtils = (response: FetchBaseQueryError): ReturnedErrorType => {
  if (response.status === 'FETCH_ERROR') {
    return { status: 'FETCH_ERROR', message: 'No internet connection' }
  } else if (response.status === 401) {
    return { status: 401, message: 'Invalid credentials' }
  }

  return { status: 400, message: 'Something went wrong' }
}
