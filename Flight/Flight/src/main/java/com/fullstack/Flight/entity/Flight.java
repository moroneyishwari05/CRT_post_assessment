package com.fullstack.Flight.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Flight {

    @Id
    private int code;
    @Column(name="carrier", length=10)
    private String carrier;
    
    @Column(name="source", length = 20)
    private String source;
    
    @Column(name="destination", length = 20)
    private String destination;
    
    private double cost;

    public Flight() {
    }

    public Flight(int code, String carrier, String source, String destination, double cost) {
        this.code = code;
        this.carrier = carrier;
        this.source = source;
        this.destination = destination;
        this.cost = cost;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getCarrier() {
        return carrier;
    }

    public void setCarrier(String carrier) {
        this.carrier = carrier;
    }

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public double getCost() {
        return cost;
    }

    public void setCost(double cost) {
        this.cost = cost;
    }

    @Override
    public String toString() {
        return "Flight [code=" + code + ", carrier=" + carrier + ", source=" + source
                + ", destination=" + destination + ", cost=" + cost + "]";
    }
}