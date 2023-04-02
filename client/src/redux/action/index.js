import axios from 'axios';
export const FETCH_COUNTRY = 'FETCH_COUNTRY';
export const SEARCH_COUNTRY = 'SEARCH_COUNTRY';
export const SORT = 'SORT';
export const FILTER_COUNTRY_BY_CONTINENT = 'FILTER_COUNTRY_BY_CONTINENT';
export const GET_ACTIVITY = 'GET_ACTIVITY';
export const POST_ACTIVITY = 'POST_ACTIVITY';
export const REMOVE_ACTIVITY = 'REMOVE_ACTIVITY';
export const FILTER_COUNTRY_BY_ACTIVITY = 'FILTER_COUNTRY_BY_ACTIVITY';
export const FETCH_ACTIVITY = 'FETCH_ACTIVITY';
export const FILTER_COUNTRY_BY_POPULATION = 'FILTER_COUNTRY_BY_POPULATION';

export const fetchCountry = () => //api-client conn
    async (dispatch) => {
        try {
            const response = await axios
                .get('/api/country');
            dispatch({
                type: FETCH_COUNTRY,
                payload: response.data
            });
        } catch (error) {
            console.log(error);
        }
    };

export const searchCountry = (search) =>
    async (dispatch) => {
        try {
            const response = await axios
                .get('/api/country?name=' + search);
            dispatch({
                type: SEARCH_COUNTRY,
                payload: response.data
            });
        } catch (error) {
            console.log(error);
        }
    };

/*
La función devuelve una función asincrónica 
que recibe un parámetro dispatch, 
que se utiliza para enviar una acción al store de Redux.
Dentro del try, se espera a que se resuelva la promesa de axios.get 
utilizando la palabra clave await. 
Si la promesa se resuelve correctamente, 
se envía una acción al store con el tipo SEARCH_COUNTRY y el objeto payload 
que contiene los datos de respuesta de la llamada a la API.
Si ocurre algún error durante la llamada a la API, 
se captura utilizando catch y se muestra en la consola mediante console.log.
*/

export const sort = (order) =>
({
    type: SORT,
    payload: order,
});

export const filterCountryByCountinent = (payload) =>
({
    type: FILTER_COUNTRY_BY_CONTINENT,
    payload,
});

export const getActivity = () => {
    return async (dispatch) => {
        try {
            const res = await axios
                .get('/api/activity');
            dispatch({ type: 'GET_ACTIVITY', payload: res.data });
        } catch (error) {
            console.error('Error getting activity:', error);
        };
    };
};

export const postActivity = (payload) =>
    async (dispatch) => {
        try {
            const res = await axios
                .post('/api/activity', payload);
            dispatch({ type: POST_ACTIVITY, payload: res.data });
        } catch (error) {
            console.error('Error postting activity:', error);
        }
    };

export const removeActivity = (name) =>
({
    type: REMOVE_ACTIVITY,
    payload: name,
});

export const filterCountryByActivity = (payload) =>
({
    type: FILTER_COUNTRY_BY_ACTIVITY,
    payload,
});

export const fetchActivity = () =>
    async (dispatch) => {
        try {
            const activity = await axios
                .get('/api/activity');
            dispatch({
                type: FETCH_ACTIVITY,
                payload: activity.data,
            });
        } catch (error) {
            console.log(error);
        };
    };

export const filterCountryByPopulation = (payload) =>
({
    type: FILTER_COUNTRY_BY_POPULATION,
    payload,
});