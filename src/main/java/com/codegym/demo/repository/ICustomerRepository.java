package com.codegym.demo.repository;

import com.codegym.demo.model.Customer;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RestController;

@Repository
public interface ICustomerRepository extends PagingAndSortingRepository<Customer, Long> {
}
