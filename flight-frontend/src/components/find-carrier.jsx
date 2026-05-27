import { useState } from 'react'
import FlightRestService from '../services/flight-rest-service'

export default function FindCarrier() {

    const service = new FlightRestService()

    const [carrier, setCarrier] = useState('')
    const [flight, setFlight] = useState(null)

    const search = () => {

        service.findByCarrier(carrier).then(data => {
            setFlight(data)
        })
    }

    return (
        <div className="container mt-4">

            <h2>Find By Carrier</h2>

            <input
                type="text"
                className="form-control mb-3"
                placeholder="Enter Carrier"
                onChange={(e) => setCarrier(e.target.value)}
            />

            <button
                className="btn btn-success"
                onClick={search}>
                Search
            </button>

            {
                flight &&
                <div className="alert alert-info mt-4">
                    {flight.code} - {flight.carrier} -
                    {flight.source} - {flight.destination} -
                    {flight.cost}
                </div>
            }

        </div>
    )
}