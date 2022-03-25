package com.revature.shoppingapp.repository;

import com.revature.shoppingapp.entity.Order;
import com.revature.shoppingapp.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    List<Order> findByUserId(User user);
    @Query("select o from Order o where o.user_id = ?1")
    List<Order> findByUserInCart(int id);
  //  User findByUserusername(String username);
}
