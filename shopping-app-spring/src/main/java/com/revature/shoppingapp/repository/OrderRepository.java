package com.revature.shoppingapp.repository;

import com.revature.shoppingapp.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {
    @Query("select o from Order as o where user_id = :userid")
    List<Order> findByUserId(@Param("userid") int id);

    @Query("select o from Order as o where user_id = :userid and status = 'in cart'")
    List<Order> findByUserInCart(@Param("userid") int id);
}
