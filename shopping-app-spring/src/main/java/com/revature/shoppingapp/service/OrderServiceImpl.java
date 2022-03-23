package com.revature.shoppingapp.service;

import com.revature.shoppingapp.entity.Order;
import com.revature.shoppingapp.entity.User;
import com.revature.shoppingapp.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServiceImpl implements OrderService{

    @Autowired
    private OrderRepository repository;

    @Override
    public List<Order> getAllOrders() {
        return repository.findAll();
    }

    @Override
    public Order getOrderById(int orderId) {
        return getOrderById(orderId);
    }

    @Override
    public Order addOrder(Order order) {
        return repository.save(order);
    }

    @Override
    public void updateOrder(int orderId, Order order) {
        Order orderDb = repository.findById(orderId).get();
        orderDb.setItemName(order.getItemName());
        orderDb.setItemPrice(order.getItemPrice());
        orderDb.setStatus(order.getStatus());
        orderDb.setUser(order.getUser());
        repository.save(orderDb);
    }

    @Override
    public void deleteOrder(Order order) {
        repository.delete(order);
    }
}
