import { useState } from 'react'
import FlightRestService from '../services/flight-rest-service'

export default function FindCode() {

    const service = new FlightRestService()

    const [code, setCode] = useState('')
    const [flight, setFlight] = useState(null)

    const search = () => {

        service.findByCode(code)
            .then(data => {
                setFlight(data)
            })
    }

    return (
        <div className="container mt-4">

            <h2>Find By Code</h2>

            <input
                type="number"
                className="form-control mb-3"
                placeholder="Enter Flight Code"
                onChange={(e) => setCode(e.target.value)}
            />

            <button className="btn btn-primary" onClick={search}>
                Search
            </button>

            <br /><br />

            {
                flight &&
                <table className="table table-bordered">
                    <tbody>
                        <tr><th>Code</th><td>{flight.code}</td></tr>
                        <tr><th>Carrier</th><td>{flight.carrier}</td></tr>
                        <tr><th>Source</th><td>{flight.source}</td></tr>
                        <tr><th>Destination</th><td>{flight.destination}</td></tr>
                        <tr><th>Cost</th><td>{flight.cost}</td></tr>
                    </tbody>
                </table>
            }

        </div>
    )
}