package com.revature.shoppingapp.controller;

import com.revature.shoppingapp.entity.Customer;
import com.revature.shoppingapp.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CustomerController {
    @Autowired
    private CustomerService customerService;

    @PostMapping("/employees")
    public Customer addEmployee(@RequestBody Customer customer){
        return customerService.addCustomer(customer);
    }
}
