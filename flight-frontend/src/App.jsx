import './App.css'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import ListFlights from './components/list-flights'
import AddFlight from './components/add-flight'
import FindCode from './components/find-code'
import FindCarrier from './components/find-carrier'
import FindRoute from './components/find-route'
import FindPrice from './components/find-price'

export default function App() {

  return (

    <BrowserRouter>

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

        <div className="container-fluid">

          <Link to="/" className="navbar-brand">
            ✈ Book My Flight
          </Link>

          <ul className="navbar-nav">

            <li className="nav-item">
              <Link to="/add" className="nav-link">
                Add Flight
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/list" className="nav-link">
                List Flights
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/code" className="nav-link">
                Find Code
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/carrier" className="nav-link">
                Carrier
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/route" className="nav-link">
                Route
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/price" className="nav-link">
                Price
              </Link>
            </li>

          </ul>

        </div>

      </nav>

      <div className="container">

        <Routes>

          <Route path="/" element={<ListFlights />} />

          <Route path="/list" element={<ListFlights />} />

          <Route path="/add" element={<AddFlight />} />

          <Route path="/code" element={<FindCode />} />

          <Route path="/carrier" element={<FindCarrier />} />

          <Route path="/route" element={<FindRoute />} />

          <Route path="/price" element={<FindPrice />} />

        </Routes>

      </div>

    </BrowserRouter>
  )
}