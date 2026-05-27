import axios from 'axios'

const BASE_URL = 'http://localhost:8083/api/flights'

export default class FlightRestService {

    getAllFlights() {
        return axios.get(BASE_URL)
            .then(response => response.data)
    }

    addFlight(flight) {
        return axios.post(BASE_URL, flight)
    }

    findByCode(code) {
        return axios.get(BASE_URL + '/' + code)
            .then(response => response.data)
    }

    findByCarrier(carrier) {
        return axios.get(BASE_URL + '/carrier/' + carrier)
            .then(response => response.data)
    }

    findByRoute(source, destination) {
        return axios.get(BASE_URL + '/route?source=' + source + '&destination=' + destination)
            .then(response => response.data)
    }

    findByPrice(min, max) {
        return axios.get(BASE_URL + '/price?min=' + min + '&max=' + max)
            .then(response => response.data)
    }

    deleteFlight(code) {
        return axios.delete(BASE_URL + '/' + code)
    }
}