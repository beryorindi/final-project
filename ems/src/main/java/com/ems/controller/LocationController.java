package com.ems.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ems.entity.Location;
import com.ems.repository.LocationRepository;

@Controller
public class LocationController {
	
	@Autowired
	private LocationRepository locationRepo;
	
	public LocationController() {}
	
	@GetMapping("/locations")
	@ResponseBody
	public Iterable<Location> getAll() {
		return locationRepo.findAll();
	}

}