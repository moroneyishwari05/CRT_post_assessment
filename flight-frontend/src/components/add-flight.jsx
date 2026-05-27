import { useState } from 'react'
import FlightRestService from '../services/flight-rest-service'

export default function AddFlight() {

    const service = new FlightRestService()

    const [flight, setFlight] = useState({
        code: '',
        carrier: '',
        source: '',
        destination: '',
        cost: ''
    })

    const handleChange = (e) => {

        setFlight({
            ...flight,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {

        e.preventDefault()

        service.addFlight(flight).then(response => {
            alert('Flight Added Successfully')
        })
    }

    return (

        <div className="container mt-4">

            <h2>Add Flight</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="number"
                    name="code"
                    placeholder="Flight Code"
                    className="form-control mb-3"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="carrier"
                    placeholder="Carrier"
                    className="form-control mb-3"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="source"
                    placeholder="Source"
                    className="form-control mb-3"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="destination"
                    placeholder="Destination"
                    className="form-control mb-3"
                    onChange={handleChange}
                />

                <input
                    type="number"
                    name="cost"
                    placeholder="Cost"
                    className="form-control mb-3"
                    onChange={handleChange}
                />

                <button className="btn btn-primary">
                    Save Flight
                </button>

            </form>
        </div>
    )
}