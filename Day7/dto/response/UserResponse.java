package com.agrocloud.harith.dto.response;

import com.agrocloud.harith.enumerated.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserResponse {
    private String message;
    private String id;
    private String name;    
    private String email;
    private String password;
    private Long mobileNumber;
    private Long aadharNumber;
    private String panCard;
    private Role role;
    // private String image;
    private String address;
}
