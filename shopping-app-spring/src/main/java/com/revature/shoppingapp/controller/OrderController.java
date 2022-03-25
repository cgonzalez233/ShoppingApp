package com.revature.shoppingapp.controller;

import com.revature.shoppingapp.entity.Order;
import com.revature.shoppingapp.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class OrderController {

    @Autowired
    private OrderService orderService;

    @GetMapping("/orders")
    public List<Order> getAllOrders(){
        return orderService.getAllOrders();
    }

    @GetMapping("user/{id}/orders")
    public List<Order> getUserOrders(@PathVariable("id") int id){return orderService.getOrdersByUserId(id);}

    @GetMapping("user/{id}/cart")
    public List<Order> getUserCart(@PathVariable("id") int id){return orderService.getOrdersInCart(id);}

    @GetMapping("/orders/{id}")
    public Order getOrderById(@PathVariable("id") int id){
        return orderService.getOrderById(id);
    }

    @PostMapping("/orders")
    public Order addOrder(@RequestBody Order order){
        return orderService.addOrder(order);
    }

    @PutMapping("/orders/{id}")
    public String updateOrder(@PathVariable("id") int id, @RequestBody Order order){
        orderService.updateOrder(id, order);
        return "Order Updated Successfully";
    }

    @DeleteMapping("/orders/{id}")
    public String deleteOrder(@PathVariable("id") int id){
        Order order = orderService.getOrderById(id);
        orderService.deleteOrder(order);
        return "Order Deleted Successfully";
    }



}
