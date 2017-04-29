package com.ems.repository;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.ems.entity.Location;

public interface LocationRepository extends PagingAndSortingRepository<Location, String> {}
