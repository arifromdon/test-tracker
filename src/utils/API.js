import axios from 'axios'

export default class API {
  static get(path, options = {}) {
    return axios.get(
      path, { ...options },
    )
  }

  static post(path, data = {}, options = {}) {
    return axios.post(
      path, data, { ...options },
    )
  }

  static put(path, data = {}, options = {}) {
    return axios.put(
      path, data, { ...options },
    )
  }

  static patch(path, data = {}, options = {}) {
    return axios.patch(
      path, data, { ...options },
    )
  }

  static delete(path, options = {}) {
    return axios.delete(
      path, { ...options },
    )
  }
}