package com.ems.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="location")
public class Location {
    @Id
    @Column(name="id")
    @GeneratedValue(strategy=GenerationType.AUTO)
    private String id;
    @Column(name="city", nullable=false)
    private String city;
    
    public Location() {}
    
	public Location(String id, String city) {
		this.id = id;
		this.city = city;
	}

	public String getId() {
		return id;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}
    
    
}
