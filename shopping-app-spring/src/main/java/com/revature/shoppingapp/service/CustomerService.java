package com.revature.shoppingapp.service;

import com.revature.shoppingapp.entity.Customer;

public interface CustomerService {
    public Customer getCustomerByCredentials(String username, String password);
    public Customer getCustomerById(int id);
    public Customer addCustomer(Customer customer);
    public void updateCustomer(int id, Customer customer);
    public void deleteCustomer(int id);
}
