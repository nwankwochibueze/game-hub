import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '85f0d55c7b614223b5430fc48adad934'
    }
})