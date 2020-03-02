
export default class API {
    constructor() {
        this._apiURL = 'https://pokeapi.co/api/v2/';
    } 
    fetchAllCount() {
        return fetch(this._apiURL + 'pokemon/')
        .then(response => response.json())
        .then(response => {
            return response.count;
        },
        error => {
            throw error;
        });
    }

    fetchNames() {
        return this.fetchAllCount()
        .then(count => {
            return fetch(this._apiURL + `pokemon?limit=${count}`)
            .then(response => response.json())
            .then(response => {
                return response.results;
            },
            error => {
                throw error;
            });
        },
        error => {
            throw error;
        });
    }

    fetchOne(pokemon) {
        return fetch(this._apiURL + 'pokemon/' + pokemon)
            .then(response => response.json())
            .then(response => {
                return response;
            },
            error => {
                throw error;
            });
    }
}