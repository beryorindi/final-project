package com.ems.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ems.entity.Employee;
import com.ems.repository.EmployeeRepository;

@Controller
public class EmployeeController {
	
	@Autowired
	private EmployeeRepository employeeRepo;
	
	public EmployeeController() {}
	
	@GetMapping("/employees")
	@ResponseBody
	public Iterable<Employee> getAll() {
		return employeeRepo.findAll();
	}
	
	@PostMapping("/employees")
	@ResponseBody
	public Employee postEmployee( @RequestBody Employee employee ) {
		return employeeRepo.save(employee);
	}
	
	@PutMapping("/employees")
	@ResponseBody
	public Employee updateEmployee( @RequestBody Employee employee ) {
		return employeeRepo.save(employee);
	}
	
	@DeleteMapping("/employees/{id}")
	@ResponseBody
	public void deleteEmployee( @PathVariable("id") String id) {
		employeeRepo.delete(id);
	}
}
