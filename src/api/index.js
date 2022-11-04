import axios from 'axios';

export const BASE_URL = 'https://localhost:7213/';
export const ENDPOINTS =
{
    register: 'register/',
    login: 'login/'
}

export const createAPIEndpoint = endpoint => {
    let url = BASE_URL + 'api/' + 'auth/' + endpoint;
    return {
        fetch: () => axios.get(url),
        fetchById: id => axios.get(url + id),
        post: newRecord => axios.post(url, newRecord),
        put: (id, updatedRecord) => axios.put(url, id, updatedRecord),
        delete: id => axios.delete(url, id),

    }
}