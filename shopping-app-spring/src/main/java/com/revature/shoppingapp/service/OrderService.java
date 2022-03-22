package com.revature.shoppingapp.service;

import com.revature.shoppingapp.entity.Order;

import java.util.List;

public interface OrderService {

    public List<Order> getAllOrders();
    public List<Order> getOrdersByUser(int userId);
    public Order getOrderById(int orderId);
    public void orderComplete(int orderId);
    public Order addOrder(Order order);
    public void updateOrder(int orderId, Order order);
    public void deleteOrder(Order order);

}
