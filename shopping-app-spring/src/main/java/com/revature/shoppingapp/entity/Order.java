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
    @SequenceGenerator(
            name = "order_sequence",
            sequenceName = "order_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "order_sequence"
    )
    private int orderId;
    private String itemName;
    private double itemPrice;
    private String image;
    private String status;
    private int userId;

    public Order(String name, double price, String image ,int userId) {
        this.itemName = name;
        this.itemPrice = price;
        this.status = "in cart";
        this.image = image;
        this.userId = userId;
    }
}
