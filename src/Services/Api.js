import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://www.thecocktaildb.com/api/json/v1/1',
})

export default Api;