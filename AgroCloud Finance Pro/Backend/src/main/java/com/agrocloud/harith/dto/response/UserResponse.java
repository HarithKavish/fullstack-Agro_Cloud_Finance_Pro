package com.agrocloud.harith.dto.response;

import com.agrocloud.harith.enumerated.Role;

import lombok.Data;

@Data
public class UserResponse {
    private String id;
    private String name;
    private String email;
    private Role role;
    private String image;
    private Long phoneNumber;
    private String address;
}