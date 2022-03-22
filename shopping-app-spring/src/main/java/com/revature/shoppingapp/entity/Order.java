package com.revature.shoppingapp.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;


@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@Entity
@Table(name = "orders")
public class Order {

    @Id
    private int orderId;
    @ManyToOne
    @JoinColumn(name = "userOrders")
    private int userId;
    private String itemName;
    private double itemPrice;
    private String status;

}
