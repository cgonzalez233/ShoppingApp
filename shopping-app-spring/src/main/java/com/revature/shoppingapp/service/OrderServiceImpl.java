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
        return repository.getById(orderId);
    }

    @Override
    public List<Order> getOrdersByUserId(int userId) {
        return repository.findByUserId(userId);
    }

    @Override
    public List<Order> getOrdersInCart(int userId) {
        return repository.findByUserInCart(userId);
    }


    @Override
    public Order addOrder(String name, double price, String image, int userId) {
        Order order = new Order(name, price, image, userId);
        return repository.save(order);
    }

    @Override
    public void updateOrder(int orderId, Order order) {
        Order orderDb = repository.findById(orderId).get();
        orderDb.setItemName(order.getItemName());
        orderDb.setItemPrice(order.getItemPrice());
        orderDb.setStatus("purchased");
        orderDb.setUserId(order.getUserId());
        repository.save(orderDb);
    }

    @Override
    public void deleteOrder(Order order) {
        repository.delete(order);
    }
}
