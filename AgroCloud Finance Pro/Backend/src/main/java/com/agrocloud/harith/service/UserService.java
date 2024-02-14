package com.agrocloud.harith.service;

import java.util.List;

import com.agrocloud.harith.dto.request.UserRequest;
import com.agrocloud.harith.dto.response.UserResponse;

public interface UserService {
    UserResponse createUser(UserRequest userRequest);
    UserResponse getUserById(String userId);
    UserResponse updateUser(String userId, UserRequest userRequest);
    void deleteUser(String userId);
    List<UserResponse> getAllUsers();
}