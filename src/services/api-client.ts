import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key : 'bdeab90cf81043889dff4bf606656b84'
  }
})

