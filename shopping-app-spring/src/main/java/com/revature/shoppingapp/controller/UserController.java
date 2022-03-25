package com.revature.shoppingapp.controller;

import com.revature.shoppingapp.entity.Order;
import com.revature.shoppingapp.entity.User;
import com.revature.shoppingapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/users")
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @GetMapping("/user/{id}/orders")
    public List<Order> getUserOrders(@PathVariable("id") int id){
        return userService.getOrdersByUser(id);
    }

    @GetMapping("user/{id}/cart")
    public List<Order> getUserCart(@PathVariable("id") int id){return userService.getCartOrders(id);}

    @GetMapping("/users/{id}")
    public User getUserById(@PathVariable("id") int id){
        return userService.getUserById(id);
    }



    @PostMapping("/users")
    public User addUser(@RequestBody User user){
        return userService.addUser(user);
    }

    @PutMapping("/users/{id}")
    public String updateUser(@PathVariable("id") int id, @RequestBody User user){
        userService.updateUser(id, user);
        return "User Updated Successfully";
    }

    @DeleteMapping("/users/{id}")
    public String deleteUser(@PathVariable("id") int id){
        User user = userService.getUserById(id);
        userService.deleteUser(user);
        return "User Deleted Successfully";
    }


}
