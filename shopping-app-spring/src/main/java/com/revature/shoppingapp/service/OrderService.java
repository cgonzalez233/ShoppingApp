package com.revature.shoppingapp.service;

import com.revature.shoppingapp.entity.Order;
import com.revature.shoppingapp.entity.User;

import java.util.List;

public interface OrderService {

    public List<Order> getAllOrders();
    public Order getOrderById(int orderId);
    public Order addOrder(Order order);
    public void updateOrder(int orderId, Order order);
    public void deleteOrder(Order order);

}
