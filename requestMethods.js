import axios from 'axios'

export default axios.create(
    {
        baseURL: 'https://thedm-api.herokuapp.com'
    }
)