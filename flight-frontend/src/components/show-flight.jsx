export default function ShowFlight(props) {

    const { flight, onDelete } = props

    return (
        <>
            <td>{flight.code}</td>
            <td>{flight.carrier}</td>
            <td>{flight.source}</td>
            <td>{flight.destination}</td>
            <td>{flight.cost}</td>

            <td>
                <button
                    className="btn btn-danger"
                    onClick={() => onDelete(flight.code)}>
                    Delete
                </button>
            </td>
        </>
    )
}