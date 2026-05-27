package com.fullstack.Flight.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fullstack.Flight.entity.Flight;
import com.fullstack.Flight.repo.FlightRepository;

@Service
public class FlightServiceIMPL implements FlightService {

    @Autowired
    private FlightRepository repo;

    @Override
    public Flight save(Flight flight) {
        return repo.save(flight);
    }

    @Override
    public Flight findByCode(int code) {
        return repo.findById(code).orElse(null);
    }

    @Override
    public List<Flight> listAll() {
        return repo.findAll();
    }

    @Override
    public Flight findByCarrier(String carrier) {
        return repo.findByCarrier(carrier);
    }

    @Override
    public Flight findByRoute(String source, String destination) {
        return repo.findBySourceAndDestination(source, destination);
    }

    @Override
    public List<Flight> findByPriceBetween(double min, double max) {
        return repo.findByCostBetween(min, max);
    }

    @Override
    public Flight delete(int code) {

        Flight flight = repo.findById(code).orElse(null);

        if (flight != null) {
            repo.deleteById(code);
        }

        return flight;
    }
}