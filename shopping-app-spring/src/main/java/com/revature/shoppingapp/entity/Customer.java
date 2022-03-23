package com.revature.shoppingapp.entity;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
@Entity
public class Customer {
    @Id
    private int id;
    private String username;
    private String password;
    private String email;
    private String address;
    private String phone;
}
