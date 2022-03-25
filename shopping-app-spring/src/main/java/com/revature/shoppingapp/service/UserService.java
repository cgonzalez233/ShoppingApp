package com.revature.shoppingapp.service;

import com.revature.shoppingapp.entity.Order;
import com.revature.shoppingapp.entity.User;

import java.util.List;

public interface UserService {

    public List<User> getAllUsers();
    public User getUserById(int id);
    public User addUser(User user);
    public void updateUser(int id, User user);
    public void deleteUser(User user);

}
