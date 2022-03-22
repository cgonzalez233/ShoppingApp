package com.revature.shoppingapp.service;

import com.revature.shoppingapp.entity.User;
import com.revature.shoppingapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository repository;


    @Override
    public List<User> getAllUsers() {
        return repository.findAll();
    }

    @Override
    public User getUserById(int id) {
        return repository.findById(id).get();
    }

    @Override
    public User addUser(User user) {
        return repository.save(user);
    }

    @Override
    public void updateUser(int id, User user) {
        User userDb = repository.findById(id).get();
        userDb.setUsername(user.getUsername());
        userDb.setPassword(user.getPassword());
        userDb.setAddress(user.getAddress());
        userDb.setPhone(user.getPhone());
        userDb.setEmail(user.getEmail());
        repository.save(userDb);
    }

    @Override
    public void deleteUser(User user) {
        repository.delete(user);
    }
}
