import Axios from 'axios';

const baseApi = Axios.create({
    baseURL: 'https://amiiboapi.com',
});

export const Api = {
    getPersonajes: () => {
        return baseApi({
            method: 'GET',
            url: '/api/amiibo/'
        })
    },

    getGameSeries: () => {
        return baseApi({
            method: 'GET',
            url: '/api/gameseries/'
        })
    } 
}