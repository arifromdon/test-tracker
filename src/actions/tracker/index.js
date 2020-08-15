import API from 'utils/API'
// import {
//   LIST_ABSENT_REQUEST,
//   LIST_ABSENT_SUCCESS,
//   LIST_ABSENT_FAILURE,
//   CREATE_ABSENT_REQUEST,
//   CREATE_ABSENT_SUCCESS,
//   CREATE_ABSENT_FAILURE,
// } from 'constants/ActionTypes'

// // Action get data absent
// export const listAbsentRequest = () => ({
//   type: LIST_ABSENT_REQUEST,
// })

// export const listAbsentSuccess = data => ({
//   type: LIST_ABSENT_SUCCESS,
//   data: data,
// })

// export const listAbsentFailure = errorMessage => ({
//   type: LIST_ABSENT_FAILURE,
//   errorMessage,
// })

// export const fetchAbsent = (params) => (
//   (dispatch) => {
//     dispatch(listAbsentRequest())
//     const url = `/api/v1/absent${params}`

//     return API.get(url)
//     .then((response) => {
//       if (response.data.meta.status) {
//         dispatch(listAbsentSuccess(response.data))
//       } else {
//         dispatch(listAbsentFailure())
//       }
//     }).catch((err) => {
//       dispatch(listAbsentFailure()) // eslint-disable-line no-console
//     })
//   }
// )