import { useState } from 'react'
import FlightRestService from '../services/flight-rest-service'

export default function FindRoute() {

    const service = new FlightRestService()

    const [source, setSource] = useState('')
    const [destination, setDestination] = useState('')
    const [flight, setFlight] = useState(null)

    const search = () => {

        service.findByRoute(source, destination)
            .then(data => {
                setFlight(data)
            })
            .catch(error => {
                console.log(error)
                alert("Flight not found")
            })
    }

    return (
        <div className="container mt-4">

            <h2>Find By Route</h2>

            <input
                type="text"
                className="form-control mb-3"
                placeholder="Source"
                onChange={(e) => setSource(e.target.value)}
            />

            <input
                type="text"
                className="form-control mb-3"
                placeholder="Destination"
                onChange={(e) => setDestination(e.target.value)}
            />

            <button
                className="btn btn-primary"
                onClick={search}
            >
                Search
            </button>

            <br /><br />

            {
                flight &&
                <table className="table table-bordered">

                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Carrier</th>
                            <th>Source</th>
                            <th>Destination</th>
                            <th>Cost</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>{flight.code}</td>
                            <td>{flight.carrier}</td>
                            <td>{flight.source}</td>
                            <td>{flight.destination}</td>
                            <td>{flight.cost}</td>
                        </tr>
                    </tbody>

                </table>
            }

        </div>
    )
}