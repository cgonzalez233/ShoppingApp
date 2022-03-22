package com.revature.shoppingapp.service;

import com.revature.shoppingapp.entity.Order;
import com.revature.shoppingapp.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class OrderServiceImpl implements OrderService{

    @Autowired
    private OrderRepository repository;

    @Override
    public List<Order> getAllOrders() {
        return repository.findAll();
    }

    @Override
    public List<Order> getOrdersByUser(int userId) {
        return null;
    }

    @Override
    public Order getOrderById(int orderId) {
        return getOrderById(orderId);
    }

    @Override
    public void orderComplete(int orderId) {
        Order orderDb = repository.getById(orderId);
        orderDb.setStatus("Ordered");
        repository.save(orderDb);
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
        orderDb.setUserId(order.getUserId());
        orderDb.setStatus(order.getStatus());
        repository.save(orderDb);
    }

    @Override
    public void deleteOrder(Order order) {
        repository.delete(order);
    }
}
