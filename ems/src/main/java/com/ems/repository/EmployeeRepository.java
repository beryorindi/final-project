package com.ems.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RestResource;

import com.ems.entity.Employee;

@RestResource
public interface EmployeeRepository extends PagingAndSortingRepository<Employee, Long> {}