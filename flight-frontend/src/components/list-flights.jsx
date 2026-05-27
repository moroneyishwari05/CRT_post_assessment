import React, { Component } from 'react'
import FlightRestService from '../services/flight-rest-service'
import ShowFlight from './show-flight'

export default class ListFlights extends Component {

    constructor(props) {
        super(props)

        this.service = new FlightRestService()

        this.state = {
            flights: []
        }
    }

    componentDidMount() {
        this.getFlights()
    }

    getFlights() {

        this.service.getAllFlights().then(data => {
            this.setState({ flights: data })
        })
    }

    doDelete = (code) => {

        this.service.deleteFlight(code).then(response => {
            this.getFlights()
        })
    }

    render() {

        return (
            <div>

                <br />

                <h2>List of Flights</h2>

                <table className="table table-bordered table-striped">

                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Carrier</th>
                            <th>Source</th>
                            <th>Destination</th>
                            <th>Cost</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            this.state.flights.map((flight, index) => (
                                <tr key={index}>
                                    <ShowFlight
                                        flight={flight}
                                        onDelete={this.doDelete}
                                    />
                                </tr>
                            ))
                        }

                    </tbody>

                </table>
            </div>
        )
    }
}