package com.agrocloud.harith.service;

import com.agrocloud.harith.dto.request.UserRequest;
import com.agrocloud.harith.dto.response.BasicResponse;
import com.agrocloud.harith.dto.response.UserResponse;

public interface UserService {
    BasicResponse<UserResponse> getAllUser();
    
    UserResponse createUser(UserRequest userRequest);
}