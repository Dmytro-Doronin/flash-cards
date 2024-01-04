// import { SerializedError } from '@reduxjs/toolkit'
// import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

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
  errorMessage: string
}

export const ErrorUtils = (response: FetchBaseQueryError): ReturnedErrorType => {
  console.log(response)
  if (response.status === 'FETCH_ERROR') {
    return { status: 'FETCH_ERROR', errorMessage: 'No internet connection' }
  } else if (response.status === 401) {
    return { status: 401, errorMessage: 'Invalid credentials' }
  }

  return { status: 400, errorMessage: 'Something went wrong' }
}
