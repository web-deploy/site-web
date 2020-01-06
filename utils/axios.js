import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:7001/api/v1'

let options = {
    timeout: 5000
}

export default axios.create(options)
