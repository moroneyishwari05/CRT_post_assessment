import { useState } from 'react'
import FlightRestService from '../services/flight-rest-service'

export default function FindPrice() {

    const service = new FlightRestService()

    const [min, setMin] = useState('')
    const [max, setMax] = useState('')
    const [flights, setFlights] = useState([])

    const search = () => {

        service.findByPrice(min, max)
            .then(data => {
                setFlights(data)
            })
            .catch(error => {
                console.log(error)
                alert("No Flights Found")
            })
    }

    return (
        <div className="container mt-4">

            <h2>Find Flights By Price</h2>

            <input
                type="number"
                className="form-control mb-3"
                placeholder="Minimum Price"
                onChange={(e) => setMin(e.target.value)}
            />

            <input
                type="number"
                className="form-control mb-3"
                placeholder="Maximum Price"
                onChange={(e) => setMax(e.target.value)}
            />

            <button
                className="btn btn-primary"
                onClick={search}
            >
                Search
            </button>

            <br /><br />

            {
                flights.length > 0 ?

                    <table className="table table-bordered table-striped">

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

                            {
                                flights.map((flight, index) => (

                                    <tr key={index}>
                                        <td>{flight.code}</td>
                                        <td>{flight.carrier}</td>
                                        <td>{flight.source}</td>
                                        <td>{flight.destination}</td>
                                        <td>{flight.cost}</td>
                                    </tr>

                                ))
                            }

                        </tbody>

                    </table>

                    :

                    <div className="alert alert-warning">
                        No Flights Available
                    </div>
            }

        </div>
    )
}