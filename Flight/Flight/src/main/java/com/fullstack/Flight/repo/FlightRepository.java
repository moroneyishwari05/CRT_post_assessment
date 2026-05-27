package com.fullstack.Flight.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fullstack.Flight.entity.Flight;

public interface FlightRepository extends JpaRepository<Flight, Integer> {

    Flight findByCarrier(String carrier);

    Flight findBySourceAndDestination(String source, String destination);

    List<Flight> findByCostBetween(double min, double max);
}